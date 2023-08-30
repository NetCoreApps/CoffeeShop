using System.Diagnostics;
using Google.Cloud.Speech.V2;
using ServiceStack;
using ServiceStack.IO;
using ServiceStack.Text;

namespace CoffeeShop.ServiceInterface;

public class TranscriptResult
{
    public string Transcript { get; set; }
    public float Confidence { get; set; }
    public string ApiResponse { get; set; }
}

public interface ISpeechToText
{
    /// <summary>
    /// Once only task that needs to be run out-of-band before using the SpeechToText provider
    /// </summary>
    Task InitAsync(List<string> phrases, CancellationToken token = default);
    Task<TranscriptResult> TranscribeAsync(string request, CancellationToken token = default);
}

public class GoogleCloudSpeechToText : ISpeechToText
{
    AppConfig Config { get; }
    SpeechClient SpeechClient { get; }

    public GoogleCloudSpeechToText(AppConfig config, SpeechClient speechClient)
    {
        Config = config;
        SpeechClient = speechClient;
    }

    public async Task InitAsync(List<string> phrases, CancellationToken token = default)
    {
        try
        {
            await SpeechClient.DeletePhraseSetAsync(new DeletePhraseSetRequest
            {
                PhraseSetName = new PhraseSetName(Config.Project, Config.Location, Config.SiteConfig.PhraseSetId)
            });
        }
        catch (Exception ignoreNonExistingPhraseSet) {}

        await SpeechClient.CreatePhraseSetAsync(new CreatePhraseSetRequest
        {
            Parent = $"projects/{Config.Project}/locations/{Config.Location}",
            PhraseSetId = Config.SiteConfig.PhraseSetId,
            PhraseSet = new PhraseSet
            {
                Phrases =
                {
                    phrases.Map(x => new PhraseSet.Types.Phrase { Value = x, Boost = 10 })
                }
            }
        });        
        
        try
        {
            await SpeechClient.DeleteRecognizerAsync(new DeleteRecognizerRequest
            {
                RecognizerName = new RecognizerName(Config.Project, Config.Location, Config.SiteConfig.RecognizerId)
            });
        }
        catch (Exception ignoreNonExistingRecognizer) {}

        await SpeechClient.CreateRecognizerAsync(new CreateRecognizerRequest
        {
            Parent = $"projects/{Config.Project}/locations/{Config.Location}",
            RecognizerId = Config.SiteConfig.RecognizerId,
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
                                PhraseSet = $"projects/{Config.Project}/locations/{Config.Location}/phraseSets/{Config.SiteConfig.PhraseSetId}"
                            }
                        }
                    }
                },
            },
        });
    }

    public async Task<TranscriptResult> TranscribeAsync(string recordingPath, CancellationToken token = default)
    {
        var response = await SpeechClient.RecognizeAsync(new RecognizeRequest
        {
            Recognizer = $"projects/{Config.Project}/locations/{Config.Location}/recognizers/{Config.SiteConfig.RecognizerId}",
            Uri = $"gs://{Config.SiteConfig.Bucket}".CombineWith(recordingPath)
        });

        var alt = response.Results[0].Alternatives[0];
        var result = new TranscriptResult
        {
            Transcript = alt.Transcript,
            Confidence = alt.Confidence,
            ApiResponse = response.Results[0].ToJson()
        };
        return result;
    }
}

public class WhisperLocalSpeechToText : ISpeechToText
{
    private const string WhisperArgs = "--model small --fp16 False --output_format json --language English";

    AppConfig Config { get; }
    public WhisperLocalSpeechToText(AppConfig config)
    {
        Config = config;
    }

    public Task InitAsync(List<string> phrases, CancellationToken token = default) => Task.CompletedTask;

    public async Task<TranscriptResult> TranscribeAsync(string recordingPath, CancellationToken token = default)
    {
        var relativePath = recordingPath.TrimStart('/');
        var fileName = recordingPath.LastRightPart('/');
        var processInfo = new ProcessStartInfo
        {
            WorkingDirectory = Environment.CurrentDirectory.CombineWith(relativePath.LastLeftPart('/')),
            FileName = Config.WhisperPath,
            Arguments = $"{WhisperArgs} {fileName}",
        };
        if (Env.IsWindows)
            processInfo = processInfo.ConvertToCmdExec();

        var sb = StringBuilderCache.Allocate();
        var sbError = StringBuilderCacheAlt.Allocate();
        await ProcessUtils.RunAsync(processInfo, Config.NodeProcessTimeoutMs,
            onOut: data => sb.AppendLine(data),
            onError: data => sbError.AppendLine(data));
        
        var stdout = StringBuilderCache.ReturnAndFree(sb);
        var stderr = StringBuilderCacheAlt.ReturnAndFree(sbError);
        string? text = null;
        string? json = null;

        var jsonFile = processInfo.WorkingDirectory.CombineWith(fileName.LastLeftPart('.') + ".json");
        if (File.Exists(jsonFile))
        {
            json = await File.ReadAllTextAsync(jsonFile, token);
            var obj = (Dictionary<string,object>) JSON.parse(json);
            text = obj.TryGetValue("text", out var oText)
                ? oText as string
                : null;
        }

        if (text == null)
        {
            throw new Exception($"Failed to whisper transcribe {recordingPath}: {stderr}\n{stdout}");
        }

        var result = new TranscriptResult
        {
            Transcript = text,
            ApiResponse = json!,
        };
        return result;
    }
}

public class WhisperApiSpeechToText : ISpeechToText
{
    AppConfig Config { get; }

    public WhisperApiSpeechToText(AppConfig config)
    {
        Config = config;
    }

    public Task InitAsync(List<string> phrases, CancellationToken token = default) => Task.CompletedTask;

    public async Task<TranscriptResult> TranscribeAsync(string recordingPath, CancellationToken token = default)
    {
        var file = HostContext.VirtualFiles.GetFile(recordingPath);
        
        var client = new HttpClient();
        client.DefaultRequestHeaders.Authorization = new("Bearer", Environment.GetEnvironmentVariable("OPENAI_API_KEY")!);
        using var body = new MultipartFormDataContent()
            .AddParam("model", "whisper-1")
            .AddParam("language", "en")
            .AddParam("response_format", "json")
            .AddFile("file", file);
        // body.Headers.Add("OpenAI-Organization", "");

        var response = await client.PostAsync(new Uri("https://api.openai.com/v1/audio/transcriptions"), body, token);
        var resBody = await response.ReadToEndAsync();
        string? text = null;
        if (response.IsSuccessStatusCode)
        {
            var obj = (Dictionary<string,object>) JSON.parse(resBody);
            text = obj.TryGetValue("text", out var oText)
                ? oText as string
                : null;
        }
        if (text == null)
            throw new Exception($"Could not transcribe {recordingPath}: {resBody}");

        return new TranscriptResult
        {
            Transcript = text,
            ApiResponse = resBody,
        };
    }
}

