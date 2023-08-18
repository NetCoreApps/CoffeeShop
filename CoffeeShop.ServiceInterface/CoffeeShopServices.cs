using System.Diagnostics;
using CoffeeShop.ServiceModel;
using Google.Cloud.Speech.V2;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.AI.ChatCompletion;
using ServiceStack;
using ServiceStack.OrmLite;
using ServiceStack.Script;
using ServiceStack.Text;

namespace CoffeeShop.ServiceInterface;

public class GptMethods : ScriptMethods
{
    public IRawString tsUnionStrings(IEnumerable<string> strings)
    {
        return new RawString(string.Join(" | ", strings.Map(x => $"'{x}'")));
    }

    public IRawString tsUnionTypes(IEnumerable<string> strings)
    {
        return new RawString(string.Join(" | ", strings));
    }
}

public class CoffeeShopServices : Service
{
    public IKernel Kernel { get; set; }
    public SpeechClient SpeechClient { get; set; }
    public AppConfig Config { get; set; }

    [AddHeader(HttpHeaders.ContentType, MimeTypes.PlainText)]
    public async Task<string> Any(CoffeeShopSchema request)
    {
        var file = VirtualFiles.GetFile("gpt/coffeeshop/schema.ss");
        if (file == null)
            throw HttpError.NotFound("coffeeshop/schema.ss not found");

        var categories = await Db.LoadSelectAsync(Db.From<Category>());
        var options = await Db.SelectAsync<Option>();
        var optionsMap = options.ToDictionary(x => x.Id);
        var optionQuantities = await Db.SelectAsync<OptionQuantity>();

        var tpl = file.ReadAllText();
        var context = new ScriptContext
        {
            ScriptMethods =
            {
                new GptMethods(),
            }
        }.Init();

        var output = await new PageResult(context.OneTimePage(tpl))
        {
            Args =
            {
                [nameof(categories)] = categories,
                [nameof(options)] = options,
                [nameof(optionsMap)] = optionsMap,
                [nameof(optionQuantities)] = optionQuantities,
            },
        }.RenderScriptAsync();
        return output;
    }

    [AddHeader(HttpHeaders.ContentType, MimeTypes.PlainText)]
    public async Task<string> Any(CoffeeShopPrompt request)
    {
        var file = VirtualFiles.GetFile("gpt/coffeeshop/prompt.ss");
        if (file == null)
            throw HttpError.NotFound("coffeeshop/prompt.ss not found");

        var schema = await Any(new CoffeeShopSchema());
        var tpl = file.ReadAllText();
        var context = new ScriptContext
        {
            ScriptMethods =
            {
                new GptMethods(),
            }
        }.Init();

        var prompt = await new PageResult(context.OneTimePage(tpl))
        {
            Args =
            {
                [nameof(schema)] = schema,
                [nameof(request)] = request.Request,
            }
        }.RenderScriptAsync();

        return prompt;
    }

    public async Task<StringsResponse> Any(CoffeeShopPhrases request)
    {
        var words = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
        var categories = await Db.SelectAsync<Category>();
        var products = await Db.SelectAsync<Product>();
        var options = await Db.SelectAsync<Option>();
        var optionQuantities = await Db.SelectAsync<OptionQuantity>();

        foreach (var category in categories)
        {
            words.Add(category.Name.SplitCamelCase());
            foreach (var size in category.Sizes.Safe())
            {
                words.Add(size);
            }

            foreach (var temperature in category.Temperatures.Safe())
            {
                words.Add(temperature);
            }
        }

        foreach (var product in products)
        {
            words.Add(product.Name);
        }

        foreach (var option in options)
        {
            words.Add(option.Type.SplitCamelCase());
            foreach (var name in option.Names.Safe())
            {
                words.Add(name);
            }
        }

        foreach (var opt in optionQuantities)
        {
            words.Add(opt.Name);
        }

        return new StringsResponse { Results = words.ToList() };
    }

    public async Task Any(CreateCoffeeShopPhrases request)
    {
        var words = (await Any(new CoffeeShopPhrases())).Results;
        try
        {
            await SpeechClient.DeletePhraseSetAsync(new DeletePhraseSetRequest
            {
                PhraseSetName = new PhraseSetName(Config.Project, Config.Location, Config.CoffeeShop.PhraseSetId)
            });
        }
        catch (Exception ignoreNonExistingPhraseSet)
        {
        }

        await SpeechClient.CreatePhraseSetAsync(new CreatePhraseSetRequest
        {
            Parent = $"projects/{Config.Project}/locations/{Config.Location}",
            PhraseSetId = Config.CoffeeShop.PhraseSetId,
            PhraseSet = new PhraseSet
            {
                Phrases =
                {
                    words.Map(x => new PhraseSet.Types.Phrase { Value = x, Boost = 10 })
                }
            }
        });
    }

    public async Task Any(CreateCoffeeShopRecognizer request)
    {
        try
        {
            await SpeechClient.DeleteRecognizerAsync(new DeleteRecognizerRequest
            {
                RecognizerName = new RecognizerName(Config.Project, Config.Location, Config.CoffeeShop.RecognizerId)
            });
        }
        catch (Exception ignoreNonExistingRecognizer)
        {
        }

        await Any(new CreateCoffeeShopPhrases());

        await SpeechClient.CreateRecognizerAsync(new CreateRecognizerRequest
        {
            Parent = $"projects/{Config.Project}/locations/{Config.Location}",
            RecognizerId = Config.CoffeeShop.RecognizerId,
            Recognizer = new Recognizer
            {
                DefaultRecognitionConfig = new RecognitionConfig
                {
                    AutoDecodingConfig = new AutoDetectDecodingConfig(),
                    LanguageCodes = { "en-US", "en-AU" },
                    Model = "latest_short",
                    Adaptation = new SpeechAdaptation
                    {
                        PhraseSets =
                        {
                            new SpeechAdaptation.Types.AdaptationPhraseSet
                            {
                                PhraseSet = $"projects/{Config.Project}/locations/{Config.Location}/phraseSets/{Config.CoffeeShop.PhraseSetId}"
                            }
                        }
                    }
                },
            },
        });
    }

    public IAutoQueryDb AutoQuery { get; set; }

    public async Task<object> Any(CreateCoffeeShopRecording request)
    {
        var recording = (Recording)await AutoQuery.CreateAsync(request, Request);

        var transcribeStart = DateTime.UtcNow;
        await Db.UpdateOnlyAsync(() => new Recording { TranscribeStart = transcribeStart },
            where: x => x.Id == recording.Id);

        try
        {
            var response = await SpeechClient.RecognizeAsync(new RecognizeRequest
            {
                Recognizer =
                    $"projects/{Config.Project}/locations/{Config.Location}/recognizers/{Config.CoffeeShop.RecognizerId}",
                Uri = $"gs://{Config.CoffeeShop.Bucket}".CombineWith(recording.Path)
            });

            var result = response.Results[0].Alternatives[0];

            var transcribeEnd = DateTime.UtcNow;
            await Db.UpdateOnlyAsync(() => new Recording
            {
                Transcript = result.Transcript,
                TranscriptConfidence = result.Confidence,
                TranscriptResponse = response.Results[0].ToJson(),
                TranscribeEnd = transcribeEnd,
                TranscribeDurationMs = (int)(transcribeEnd - transcribeStart).TotalMilliseconds,
            }, where: x => x.Id == recording.Id);
        }
        catch (Exception e)
        {
            await Db.UpdateOnlyAsync(() => new Recording { Error = e.Message },
                where: x => x.Id == recording.Id);
        }

        recording = await Db.SingleByIdAsync<Recording>(recording.Id);

        return recording;
    }

    public static ProcessStartInfo ConvertToCmdExec(ProcessStartInfo startInfo)
    {
        var to = new ProcessStartInfo
        {
            FileName = Env.IsWindows
                ? "cmd.exe"
                : "/bin/bash",
            WorkingDirectory = startInfo.WorkingDirectory,
            Arguments = Env.IsWindows
                ? $"/c \"\"{startInfo.FileName}\" {startInfo.Arguments}\""
                : $"-c \"{startInfo.FileName} {startInfo.Arguments}\"",
        };
        return to;
    }

    public async Task<object> Any(CreateCoffeeShopChat request)
    {
        var chat = (Chat)await AutoQuery.CreateAsync(request, Request);

        var chatStart = DateTime.UtcNow;
        await Db.UpdateOnlyAsync(() => new Chat { ChatStart = chatStart },
            where: x => x.Id == chat.Id);

        try
        {
            string? result = null;

            if (Config.UseNodeTypeChat)
            {
                var schemaPath = "gpt/coffeeshop/schema.ts";
                var schema = await Any(new CoffeeShopSchema());
                VirtualFiles.WriteFile(schemaPath, schema);

                var shellRequest = request.Request.Replace('"', '\'');
                var processInfo = new ProcessStartInfo
                {
                    WorkingDirectory = VirtualFiles.RootDirectory.RealPath,
                    FileName = Config.NodePath,
                    Arguments = $"typechat.mjs ./{schemaPath} \"{shellRequest}\"",
                };
                if (Env.IsWindows)
                    processInfo = ConvertToCmdExec(processInfo);

                var sb = StringBuilderCache.Allocate();
                var sbError = StringBuilderCacheAlt.Allocate();
                await ProcessUtils.RunAsync(processInfo, Config.NodeProcessTimeoutMs,
                    onOut: data => sb.AppendLine(data),
                    onError: data => sbError.AppendLine(data));

                if (sbError.Length > 0)
                    throw new Exception($"Error running node {StringBuilderCacheAlt.ReturnAndFree(sbError)}");

                result = StringBuilderCache.ReturnAndFree(sb);
            }
            else
            {
                var prompt = await Any(new CoffeeShopPrompt { Request = request.Request });
                var chatHistory = new ChatHistory();
                chatHistory.AddUserMessage(prompt);
                var chatCompletionService = Kernel.GetService<IChatCompletion>();
                result = await chatCompletionService.GenerateMessageAsync(chatHistory, new ChatRequestSettings
                {
                    Temperature = 0.0,
                });
            }

            var chatEnd = DateTime.UtcNow;
            await Db.UpdateOnlyAsync(() => new Chat
            {
                Request = request.Request,
                ChatResponse = result,
                ChatEnd = chatEnd,
                ChatDurationMs = (int)(chatEnd - chatStart).TotalMilliseconds,
            }, where: x => x.Id == chat.Id);
        }
        catch (Exception e)
        {
            await Db.UpdateOnlyAsync(() => new Chat { Error = e.Message },
                where: x => x.Id == chat.Id);
        }

        chat = await Db.SingleByIdAsync<Chat>(chat.Id);

        return chat;
    }
}