﻿using CoffeeShop.ServiceModel;
using Google.Cloud.Speech.V2;
using ServiceStack;
using ServiceStack.OrmLite;

namespace CoffeeShop.ServiceInterface;

public class CoffeeShopServices : Service
{
    public SpeechClient SpeechClient { get; set; }
    public AppConfig Config { get; set; }

    public IAutoQueryDb AutoQuery { get; set; }
    
    public ITypeChatProvider<Cart> GptCoffeeShop { get; set; }
    public ISpeechToText SpeechToText { get; set; }

    [AddHeader(HttpHeaders.ContentType, MimeTypes.PlainText)]
    public async Task<string> Any(CoffeeShopSchema request)
    {
        var categories = await Db.LoadSelectAsync(Db.From<Category>());
        var options = await Db.SelectAsync<Option>();
        var optionsMap = options.ToDictionary(x => x.Id);
        var optionQuantities = await Db.SelectAsync<OptionQuantity>();

        
        var processCartRequest = new ProcessCartRequest {
            UserRequest = "",
            PromptContext = 
            {
                [nameof(categories)] = categories,
                [nameof(options)] = options,
                [nameof(optionsMap)] = optionsMap,
                [nameof(optionQuantities)] = optionQuantities,
            },
        };
        
        var schema = await GptCoffeeShop.GetSchemaAsync(processCartRequest);
        return schema;
    }

    [AddHeader(HttpHeaders.ContentType, MimeTypes.PlainText)]
    public async Task<string> Any(CoffeeShopPrompt request)
    {
        var categories = await Db.LoadSelectAsync(Db.From<Category>());
        var options = await Db.SelectAsync<Option>();
        var optionsMap = options.ToDictionary(x => x.Id);
        var optionQuantities = await Db.SelectAsync<OptionQuantity>();

        
        var processCartRequest = new ProcessCartRequest {
            UserRequest = request.Request,
            PromptContext = 
            {
                [nameof(categories)] = categories,
                [nameof(options)] = options,
                [nameof(optionsMap)] = optionsMap,
                [nameof(optionQuantities)] = optionQuantities,
            },
        };
        
        var prompt = await GptCoffeeShop.CreatePromptAsync(processCartRequest);
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

    public async Task Any(CoffeeShopInitSpeech request)
    {
        var response = await Any(new CoffeeShopPhrases());
        await SpeechToText.InitAsync(response.Results);
    }
    
    public async Task<object> Any(UpdateCategory request)
    {
        // Perform all RDBMS Updates within the same Transaction
        using var trans = Db.OpenTransaction();

        Category? response = null;
        var ignore = new[] { nameof(request.Id), nameof(request.AddOptionIds), nameof(request.RemoveOptionIds) };
        // Only call AutoQuery Update if there's something to update
        if (request.ToObjectDictionary().HasNonDefaultValues(ignoreKeys:ignore))
        {
            response = (Category) await AutoQuery.PartialUpdateAsync<Category>(request, Request, Db);
        }
        if (request.RemoveOptionIds?.Count > 0)
        {
            await Db.DeleteAsync<CategoryOption>(x => x.CategoryId == request.Id && request.RemoveOptionIds.Contains(x.OptionId));
        }
        if (request.AddOptionIds?.Count > 0)
        {
            await Db.InsertAllAsync(request.AddOptionIds.Map(id => new CategoryOption { CategoryId = request.Id, OptionId = id }));
        }
        trans.Commit();

        response ??= request.ConvertTo<Category>();
        return response;
    }

    public async Task<object> Any(CreateCoffeeShopRecording request)
    {
        var recording = (Recording)await AutoQuery.CreateAsync(request, Request);

        var transcribeStart = DateTime.UtcNow;
        await Db.UpdateOnlyAsync(() => new Recording { TranscribeStart = transcribeStart },
            where: x => x.Id == recording.Id);

        try
        {
            var result = await SpeechToText.TranscribeAsync(request.Path);
            var transcribeEnd = DateTime.UtcNow;
            await Db.UpdateOnlyAsync(() => new Recording
            {
                Transcript = result.Transcript,
                TranscriptConfidence = result.Confidence,
                TranscriptResponse = result.ApiResponse,
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

        WriteJsonFile($"/speech-to-text/{recording.CreatedDate:yyyy/MM/dd}/{recording.CreatedDate.TimeOfDay.TotalMilliseconds}.json", 
            recording.ToJson());

        return recording;
    }

    public async Task<object> Any(CreateCoffeeShopChat request)
    {
        var chat = (Chat)await AutoQuery.CreateAsync(request, Request);

        var chatStart = DateTime.UtcNow;
        await Db.UpdateOnlyAsync(() => new Chat { ChatStart = chatStart },
            where: x => x.Id == chat.Id);

        try
        {
            
            var categories = await Db.LoadSelectAsync(Db.From<Category>());
            var options = await Db.SelectAsync<Option>();
            var optionsMap = options.ToDictionary(x => x.Id);
            var optionQuantities = await Db.SelectAsync<OptionQuantity>();
            
            var gptRequest = new ProcessCartRequest()
            {
                UserRequest = request.Request,
                PromptContext = new Dictionary<string, object>
                {
                    [nameof(categories)] = categories,
                    [nameof(options)] = options,
                    [nameof(optionsMap)] = optionsMap,
                    [nameof(optionQuantities)] = optionQuantities,
                },
            };
            var result = await GptCoffeeShop.ProcessAsync(gptRequest);
            var chatEnd = DateTime.UtcNow;
            await Db.UpdateOnlyAsync(() => new Chat
            {
                Request = request.Request,
                ChatResponse = result.ToJson(),
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
        
        WriteJsonFile($"/chat/{chat.CreatedDate:yyyy/MM/dd}/{chat.CreatedDate.TimeOfDay.TotalMilliseconds}.json", chat.ToJson());

        return chat;
    }
    
    void WriteJsonFile(string path, string json)
    {
        ThreadPool.QueueUserWorkItem(_ => {
            try
            {
                VirtualFiles.WriteFile(path, json);
            }
            catch (Exception ignore) {}
        });
    }
}