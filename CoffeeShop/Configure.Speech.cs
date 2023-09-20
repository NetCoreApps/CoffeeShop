using Amazon;
using Amazon.TranscribeService;
using ServiceStack.AI;
using ServiceStack.IO;
using ServiceStack.GoogleCloud;
using Google.Cloud.Speech.V2;
using Microsoft.CognitiveServices.Speech;
using CoffeeShop.ServiceInterface;

[assembly: HostingStartup(typeof(CoffeeShop.ConfigureSpeech))]

namespace CoffeeShop;

public class ConfigureSpeech : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context, services) =>
        {
            if (AppTasks.IsRunAsAppTask()) return;

            var speechProvider = context.Configuration.GetValue<string>("SpeechProvider");
            if (speechProvider == nameof(GoogleCloudSpeechToText))
            {
                GoogleCloudConfig.AssertValidCredentials();
                services.AddSingleton<ISpeechToText>(c => {
                    var config = c.Resolve<AppConfig>();
                    var google = config.AssertGcpConfig();
                    return new GoogleCloudSpeechToText(SpeechClient.Create(),
                        new GoogleCloudSpeechConfig {
                            Project = google.Project,
                            Location = google.Location,
                            Bucket = google.Bucket,
                            RecognizerId = config.CoffeeShop.RecognizerId,
                            PhraseSetId = config.CoffeeShop.PhraseSetId,
                        }
                    );
                });
            }
            else if (speechProvider == nameof(AwsSpeechToText))
            {
                services.AddSingleton<ISpeechToText>(c => {
                    var config = c.Resolve<AppConfig>();
                    var a = config.AssertAwsConfig();
                    return new AwsSpeechToText(new AmazonTranscribeServiceClient(
                            a.AccessKey, a.SecretKey, RegionEndpoint.GetBySystemName(a.Region)),
                        new AwsSpeechToTextConfig {
                            Bucket = a.Bucket,
                            VocabularyName = config.CoffeeShop.VocabularyName,
                        });
                });
            }
            else if (speechProvider == nameof(AzureSpeechToText))
            {
                services.AddSingleton<ISpeechToText>(c => {
                    var az = c.Resolve<AppConfig>().AssertAzureConfig();
                    var config = SpeechConfig.FromSubscription(az.SpeechKey, az.SpeechRegion);
                    config.SpeechRecognitionLanguage = "en-US";
                    return new AzureSpeechToText(config);
                });
            }
            else if (speechProvider == nameof(WhisperApiSpeechToText))
            {
                services.AddSingleton<ISpeechToText, WhisperApiSpeechToText>();
            }
            else if (speechProvider == nameof(WhisperLocalSpeechToText))
            {
                services.AddSingleton<ISpeechToText>(c => new WhisperLocalSpeechToText {
                    WhisperPath = c.Resolve<AppConfig>().WhisperPath ?? ProcessUtils.FindExePath("whisper"),
                    TimeoutMs = c.Resolve<AppConfig>().NodeProcessTimeoutMs,
                });
            }
            else throw new NotSupportedException($"Unknown SpeechProvider '{speechProvider}'");
        })
        .ConfigureAppHost(afterConfigure:appHost => {
            if (AppTasks.IsRunAsAppTask()) return;

            if (appHost.Resolve<ISpeechToText>() is IRequireVirtualFiles requireVirtualFiles)
            {
                requireVirtualFiles.VirtualFiles = appHost.VirtualFiles;
            }
        });
}