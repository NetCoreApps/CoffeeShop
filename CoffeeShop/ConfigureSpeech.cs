using CoffeeShop.ServiceInterface;
using Google.Cloud.Speech.V2;
using ServiceStack.Gpt;
using ServiceStack.IO;

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
                AppHost.AssertGoogleCloudCredentials();
                services.AddSingleton(SpeechClient.Create());
                services.AddSingleton<ISpeechToText>(c =>
                    new GoogleCloudSpeechToText(c.Resolve<AppConfig>().CoffeeShopGoogleCloudSpeechConfig(), c.Resolve<SpeechClient>()));
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
        .ConfigureAppHost(appHost => {
            if (AppTasks.IsRunAsAppTask()) return;

            if (appHost.Resolve<ISpeechToText>() is IRequireVirtualFiles requireVirtualFiles)
            {
                requireVirtualFiles.VirtualFiles = appHost.VirtualFiles;
            }
        });
}