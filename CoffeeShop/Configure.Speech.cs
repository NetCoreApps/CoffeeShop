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
        .ConfigureServices((context, services) =>
        {
            if (AppTasks.IsRunAsAppTask()) return;

            var speechProvider = context.Configuration.GetValue<string>("SpeechProvider");
            if (speechProvider == nameof(GoogleCloudSpeechToText))
            {
                GoogleCloudConfig.AssertValidCredentials();
                services.AddSingleton<ISpeechToTextFactory>(c => new SpeechToTextFactory
                {
                    Resolve = feature =>
                    {
                        var config = c.Resolve<AppConfig>();
                        var gcp = c.Resolve<GoogleCloudConfig>();
                        var siteConfig = config.GetSiteConfig(feature);

                        return new GoogleCloudSpeechToText(
                            SpeechClient.Create(),
                            gcp.ToSpeechToTextConfig(x => {
                                x.RecognizerId = siteConfig.RecognizerId;
                                x.PhraseSetId = siteConfig.PhraseSetId;
                            }))
                        {
                            VirtualFiles = HostContext.VirtualFiles
                        };
                    }
                });
            }
            else if (speechProvider == nameof(AwsSpeechToText))
            {
                services.AddSingleton<ISpeechToTextFactory>(c => new SpeechToTextFactory
                {
                    Resolve = feature =>
                    {
                        var config = c.Resolve<AppConfig>();
                        var aws = c.Resolve<AwsConfig>();
                        var siteConfig = config.GetSiteConfig(feature);
                        
                        return new AwsSpeechToText(
                            new AmazonTranscribeServiceClient(aws.AccessKey, aws.SecretKey, aws.ToRegionEndpoint()),
                            aws.ToSpeechToTextConfig(x => x.VocabularyName = siteConfig.VocabularyName))
                        {
                            VirtualFiles = HostContext.VirtualFiles
                        };
                    }
                });
            }
            else if (speechProvider == nameof(AzureSpeechToText))
            {
                services.AddSingleton<ISpeechToText>(c => 
                    new AzureSpeechToText(c.Resolve<AzureConfig>().ToSpeechConfig()));
            }
            else if (speechProvider == nameof(WhisperApiSpeechToText))
            {
                services.AddSingleton<ISpeechToText, WhisperApiSpeechToText>();
            }
            else if (speechProvider == nameof(WhisperLocalSpeechToText))
            {
                services.AddSingleton<ISpeechToText>(c => {
                    var config = c.Resolve<AppConfig>();
                    return new WhisperLocalSpeechToText {
                        WhisperPath = config.WhisperPath ?? ProcessUtils.FindExePath("whisper"),
                        TimeoutMs = config.NodeProcessTimeoutMs,
                    };
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
