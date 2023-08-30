using CoffeeShop.ServiceInterface;
using CoffeeShop.ServiceModel;
using Microsoft.SemanticKernel;

[assembly: HostingStartup(typeof(CoffeeShop.ConfigureGpt))]

namespace CoffeeShop;

public class ConfigureGpt : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context, services) =>
        {
            // Call Open AI Chat API directly without going through node TypeChat
            var gptProvider = context.Configuration.GetValue<string>("GptChatProvider");
            if (gptProvider == nameof(KernelChatProvider<Cart>))
            {
                var kernel = Kernel.Builder
                    .WithOpenAIChatCompletionService(
                        Environment.GetEnvironmentVariable("OPENAI_MODEL")!, 
                        Environment.GetEnvironmentVariable("OPENAI_API_KEY")!)
                    .Build();
                services.AddSingleton(kernel);
                services.AddSingleton<ITypeChatProvider<Cart>>(c => 
                    new KernelChatProvider<Cart>(c.Resolve<AppConfig>(), c.Resolve<IKernel>()));
            }
            else if (gptProvider == nameof(NodeTypeChatProvider<Cart>))
            {
                // Call Open AI Chat API through node TypeChat
                services.AddSingleton<ITypeChatProvider<Cart>>(c =>
                    new NodeTypeChatProvider<Cart>(c.Resolve<AppConfig>()));
            }
            else throw new NotSupportedException($"Unknown GptChatProvider: {gptProvider}");
        });
}