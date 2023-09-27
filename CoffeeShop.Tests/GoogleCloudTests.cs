using Google.Cloud.Speech.V2;
using Google.Cloud.Storage.V1;
using Google.Protobuf;
using NUnit.Framework;
using ServiceStack;
using ServiceStack.GoogleCloud;
using ServiceStack.IO;
using ServiceStack.Text;

namespace CoffeeShop.Tests;

[TestFixture, Explicit, Category("Integration")]
public class GoogleCloudTests
{
    const string ServiceUrl = "https://australia-southeast1-speech.googleapis.com/v2";
    private const string ProjectId = "servicestackdemo";
    private const string Location = "global";

    string ProjectUrl => ServiceUrl.CombineWith("projects/servicestackdemo");
    private string AuthToken => Environment.GetEnvironmentVariable("GOOGLE_APPLICATION_TOKEN")!;
    private string SimpleRecognizer = "simple-recognizer";
    private string SimpleRecognizerAU = "simple-recognizer-au";
    private string SimpleRecognizerUS = "simple-recognizer-us";
    private string SimplePhraseSet = "simple-phrase-set";

    private async Task CreateSimplePhraseSet(SpeechClient client)
    {
        try
        {
            await client.DeletePhraseSetAsync(new DeletePhraseSetRequest
            {
                PhraseSetName = new PhraseSetName(ProjectId, Location, SimplePhraseSet)
            });
        }
        catch (Exception ex)
        {
            Console.WriteLine($"DeletePhraseSetRequest: {ex.Message}");
        }

        Console.WriteLine($"Creating PhraseSet {SimplePhraseSet}...");
        await client.CreatePhraseSetAsync(new CreatePhraseSetRequest
        {
            Parent = "projects/servicestackdemo/locations/global",
            PhraseSetId = SimplePhraseSet,
            PhraseSet = new PhraseSet
            {
                Phrases =
                {
                    TestConfig.SimplePhrases.Map(x => new PhraseSet.Types.Phrase { Value = x, Boost = 20 })
                }
            }
        });
    }

    private static async Task<RecognizeResponse> RecognizeWithRecognizer(string recognizerId, string recording)
    {
        var speech = await SpeechClient.CreateAsync();
        await using var fileStream = File.OpenRead(TestConfig.RecordingsPath + recording);
        var response = await speech.RecognizeAsync(new RecognizeRequest
        {
            Recognizer = $"projects/servicestackdemo/locations/global/recognizers/{recognizerId}",
            Content = await ByteString.FromStreamAsync(fileStream),
        });
        return response;
    }

    [Test]
    public async Task Create_SimpleRecognizer()
    {
        var client = await SpeechClient.CreateAsync();

        try
        {
            await client.DeleteRecognizerAsync(new DeleteRecognizerRequest
            {
                RecognizerName = new RecognizerName(ProjectId, Location, SimpleRecognizer)
            });
        }
        catch (Exception ex)
        {
            Console.WriteLine($"DeleteRecognizerRequest: {ex.Message}");
        }

        await CreateSimplePhraseSet(client);

        Console.WriteLine($"Creating Recognizer {SimpleRecognizer}...");
        await client.CreateRecognizerAsync(new CreateRecognizerRequest
        {
            Parent = "projects/servicestackdemo/locations/global",
            RecognizerId = SimpleRecognizer,
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
                                PhraseSet = $"projects/servicestackdemo/locations/global/phraseSets/{SimplePhraseSet}"
                            }
                        }
                    }
                },
            },
        });
    }

    [Test]
    public async Task Create_SimpleRecognizerAU()
    {
        var client = await SpeechClient.CreateAsync();

        try
        {
            await client.DeleteRecognizerAsync(new DeleteRecognizerRequest
            {
                RecognizerName = new RecognizerName(ProjectId, Location, SimpleRecognizerAU)
            });
        }
        catch (Exception ex)
        {
            Console.WriteLine($"DeleteRecognizerRequest: {ex.Message}");
        }

        await CreateSimplePhraseSet(client);

        Console.WriteLine($"Creating Recognizer {SimpleRecognizerAU}...");
        await client.CreateRecognizerAsync(new CreateRecognizerRequest
        {
            Parent = "projects/servicestackdemo/locations/global",
            RecognizerId = SimpleRecognizerAU,
            Recognizer = new Recognizer
            {
                DefaultRecognitionConfig = new RecognitionConfig
                {
                    AutoDecodingConfig = new AutoDetectDecodingConfig(),
                    LanguageCodes = { "en-AU" },
                    Model = "latest_short",
                    Adaptation = new SpeechAdaptation
                    {
                        PhraseSets =
                        {
                            new SpeechAdaptation.Types.AdaptationPhraseSet
                            {
                                PhraseSet = $"projects/servicestackdemo/locations/global/phraseSets/{SimplePhraseSet}"
                            }
                        }
                    }
                },
            },
        });
    }

    [Test]
    public async Task Create_SimpleRecognizerUS()
    {
        var client = await SpeechClient.CreateAsync();

        try
        {
            await client.DeleteRecognizerAsync(new DeleteRecognizerRequest
            {
                RecognizerName = new RecognizerName(ProjectId, Location, SimpleRecognizerUS)
            });
        }
        catch (Exception ex)
        {
            Console.WriteLine($"DeleteRecognizerRequest: {ex.Message}");
        }

        await CreateSimplePhraseSet(client);

        Console.WriteLine($"Creating Recognizer {SimpleRecognizerUS}...");
        await client.CreateRecognizerAsync(new CreateRecognizerRequest
        {
            Parent = "projects/servicestackdemo/locations/global",
            RecognizerId = SimpleRecognizerUS,
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
                                PhraseSet = $"projects/servicestackdemo/locations/global/phraseSets/{SimplePhraseSet}"
                            }
                        }
                    }
                },
            },
        });
    }

    [Test]
    public async Task Transcribe_with_Google_Cloud_with_SimpleRecognizerAU()
    {
        var response = await RecognizeWithRecognizer(SimpleRecognizerAU, TestConfig.Recordings[0]);
        response.Results.PrintDump();
    }

    [Test]
    public async Task Transcribe_with_Google_Cloud_with_SimpleRecognizerUS()
    {
        var response = await RecognizeWithRecognizer(SimpleRecognizerUS, TestConfig.Recordings[0]);
        response.Results.PrintDump();
        
        response = await RecognizeWithRecognizer(SimpleRecognizerUS, TestConfig.Recordings[1]);
        response.Results.PrintDump();
        
        response = await RecognizeWithRecognizer(SimpleRecognizerUS, TestConfig.Recordings[2]);
        response.Results.PrintDump();
    }

    [Test]
    public async Task Transcribe_with_Google_Cloud()
    {
        var client = await SpeechClient.CreateAsync();
        await using var fileStream = File.OpenRead(TestConfig.RecordingsPath + TestConfig.Recordings[0]);

        var response = await client.RecognizeAsync(new RecognizeRequest
        {
            Config = new RecognitionConfig
            {
                AutoDecodingConfig = new AutoDetectDecodingConfig(),
                LanguageCodes = { "en-AU" },
                Model = "telephony",
            },
            Recognizer = "projects/servicestackdemo/locations/global/recognizers/_",
            Content = await ByteString.FromStreamAsync(fileStream),
        });

        response.Results.PrintDump();
    }

    [Test]
    public async Task Upload_recordings_to_GoogleStorage()
    {
        var storage = await StorageClient.CreateAsync();
        await using var fs = File.OpenRead(TestConfig.RecordingsPath + TestConfig.Recordings[0]);
        await storage.UploadObjectAsync("servicestack-coffeeshop", $"2023/08/16/{TestConfig.Recordings[0]}", null, fs);
    }

    [Test]
    public async Task Transcribe_GoogleCloud_recording()
    {
        var recording = TestConfig.Recordings[2];
        var relativePath = $"2023/08/16/{recording}";
        var bucket = "servicestack-coffeeshop";

        var storage = await StorageClient.CreateAsync();
        await using var fs = File.OpenRead(TestConfig.RecordingsPath + recording);
        await storage.UploadObjectAsync(bucket, relativePath, null, fs);
        
        var speech = await SpeechClient.CreateAsync();
        await using var fileStream = File.OpenRead(TestConfig.RecordingsPath + recording);
        var response = await speech.RecognizeAsync(new RecognizeRequest
        {
            Recognizer = $"projects/servicestackdemo/locations/global/recognizers/{SimpleRecognizerUS}",
            Uri = $"gs://{bucket}/{relativePath}"
        });
        response.Results.PrintDump();
    }

    [Test]
    public async Task Upload_Transcoding()
    {
        var config = new GoogleCloudConfig {
            Project = "servicestackdemo",
            Location = "global",
            Bucket = "servicestack-typechat",
        };
        var virtualFiles = new FileSystemVirtualFiles(TestConfig.HostDir);
        var speechClient = await SpeechClient.CreateAsync();
        
        var request = new RecognizeRequest {
            Recognizer = $"projects/{config.Project}/locations/{config.Location}/recognizers/{config.RecognizerId ?? "_"}",
            Config = config.ToRecognitionConfig(),
        };

        var recordingPath = "/recordings/2023/09/17/62142005.9172.webm";
        var file = virtualFiles.GetFile(recordingPath);
        if (file == null)
            throw new FileNotFoundException($"File not found {recordingPath}");
        await using var fileStream = file.OpenRead();
        request.Content = await ByteString.FromStreamAsync(fileStream);

        var response = await speechClient.RecognizeAsync(request);
        response.ToJson().Print();
    }
}
