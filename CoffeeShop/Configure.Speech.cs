using Amazon;
using Amazon.TranscribeService;
using ServiceStack.AI;
using ServiceStack.IO;
using ServiceStack.GoogleCloud;
using Google.Cloud.Speech.V2;
using CoffeeShop.ServiceInterface;
using CoffeeShop.ServiceModel;
using Microsoft.CognitiveServices.Speech;

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
                    var siteConfig = config.CoffeeShop;
                    var gcpConfig = config.AssertGcpConfig();
                    return new GoogleCloudSpeechToText(
                        SpeechClient.Create(),
                        new GoogleCloudSpeechConfig {
                            Project = gcpConfig.Project,
                            Location = gcpConfig.Location,
                            Bucket = gcpConfig.Bucket,
                            RecognizerId = siteConfig.RecognizerId,
                            PhraseSetId = siteConfig.PhraseSetId,
                        }
                    );
                });
            }
            else if (speechProvider == nameof(AwsSpeechToText))
            {
                services.AddSingleton(c => X.Map(c.Resolve<AppConfig>().AssertAwsConfig(), x => 
                    new AmazonTranscribeServiceClient(x.AccessKey, x.SecretKey, RegionEndpoint.GetBySystemName(x.Region)))!);
                
                services.AddSingleton<ISpeechToText>(c => new AwsSpeechToText(
                    c.Resolve<AmazonTranscribeServiceClient>(),
                    new AwsSpeechToTextConfig {
                        Bucket = c.Resolve<AppConfig>().AssertAwsConfig().Bucket,
                        VocabularyName = c.Resolve<AppConfig>().CoffeeShop.VocabularyName,
                    }));
            }
            else if (speechProvider == nameof(AzureSpeechToText))
            {
                services.AddSingleton<ISpeechToText>(c => {
                    var config = c.Resolve<AppConfig>();
                    var azureConfig = config.AssertAzureConfig();
                    var speechConfig = SpeechConfig.FromSubscription(azureConfig.SpeechKey, azureConfig.SpeechRegion);
                    speechConfig.SpeechRecognitionLanguage = "en-US";
                    return new AzureSpeechToText(speechConfig);
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