using CoffeeShop.ServiceInterface;
using Google.Cloud.Speech.V2;
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
                    new GoogleCloudSpeechToText(c.Resolve<AppConfig>(), c.Resolve<SpeechClient>()));
            }
            else if (speechProvider == nameof(WhisperApiSpeechToText))
            {
                services.AddSingleton<ISpeechToText>(c => new WhisperApiSpeechToText(c.Resolve<AppConfig>()));
            }
            else if (speechProvider == nameof(WhisperLocalSpeechToText))
            {
                if (ProcessUtils.FindExePath("whisper") == null)
                    throw new NotSupportedException("whisper is not in $PATH");

                services.AddSingleton<ISpeechToText>(c =>
                    new WhisperLocalSpeechToText(c.Resolve<AppConfig>()));
            }
            else throw new NotSupportedException($"Unknown SpeechProvider '{speechProvider}'");
        });
}