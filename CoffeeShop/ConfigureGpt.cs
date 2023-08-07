using Microsoft.SemanticKernel;

[assembly: HostingStartup(typeof(CoffeeShop.ConfigureGpt))]

namespace CoffeeShop;

public class ConfigureGpt : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureAppHost(appHost => {

            var kernel = Kernel.Builder
                .WithOpenAIChatCompletionService(
                    Environment.GetEnvironmentVariable("OPENAI_MODEL")!, 
                    Environment.GetEnvironmentVariable("OPENAI_API_KEY")!)
                .Build();

            appHost.Register(kernel);
        });
}