using ServiceStack.AI;
using ServiceStack.IO;
using ServiceStack.GoogleCloud;
using ServiceStack.Aws;
using ServiceStack.Azure;
using Amazon.TranscribeService;
using Google.Cloud.Speech.V2;
using CoffeeShop.ServiceInterface;

[assembly: HostingStartup(typeof(CoffeeShop.ConfigureSpeech))]

namespace CoffeeShop;

public class ConfigureSpeech : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context, services) => {
            if (AppTasks.IsRunAsAppTask()) return;

            var speechProvider = context.Configuration.GetValue<string>("SpeechProvider");
            if (speechProvider == nameof(GoogleCloudSpeechToText))
            {
                services.AddSingleton<ISpeechToText>(c => {
                    var config = c.Resolve<AppConfig>();
                    var gcp = c.Resolve<GoogleCloudConfig>();
                    return new GoogleCloudSpeechToText(SpeechClient.Create(),
                        gcp.ToSpeechToTextConfig(x => {
                            x.PhraseSetId = config.CoffeeShop.PhraseSetId;
                            x.RecognizerId = config.CoffeeShop.RecognizerId;
                        })
                    );
                });
            }
            else if (speechProvider == nameof(AwsSpeechToText))
            {
                services.AddSingleton<ISpeechToText>(c => {
                    var config = c.Resolve<AppConfig>();
                    var aws = c.Resolve<AwsConfig>();
                    return new AwsSpeechToText(new AmazonTranscribeServiceClient(
                            aws.AccessKey, aws.SecretKey, aws.ToRegionEndpoint()),
                        aws.ToSpeechToTextConfig(x => x.VocabularyName = config.CoffeeShop.VocabularyName));
                });
            }
            else if (speechProvider == nameof(AzureSpeechToText))
            {
                services.AddSingleton<ISpeechToText>(c => {
                    var azure = c.Resolve<AzureConfig>();
                    return new AzureSpeechToText(azure.ToSpeechConfig());
                });
            }
            else if (speechProvider == nameof(WhisperApiSpeechToText))
            {
                services.AddSingleton<ISpeechToText, WhisperApiSpeechToText>();
            }
            else if (speechProvider == nameof(WhisperLocalSpeechToText))
            {
                services.AddSingleton<ISpeechToText>(c => new WhisperLocalSpeechToText {
                    WhisperPath = c.Resolve<AppConfig>().WhisperPath,
                    TimeoutMs = c.Resolve<AppConfig>().NodeProcessTimeoutMs,
                });
            }
            else throw new NotSupportedException($"Unknown SpeechProvider '{speechProvider}'");
        })
        .ConfigureAppHost(afterConfigure:appHost => {
            if (AppTasks.IsRunAsAppTask()) return;

            if (appHost.TryResolve<ISpeechToText>() is IRequireVirtualFiles requireVirtualFiles)
            {
                requireVirtualFiles.VirtualFiles = appHost.VirtualFiles;
            }
        });
}
