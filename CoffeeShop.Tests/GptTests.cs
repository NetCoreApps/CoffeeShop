using CoffeeShop.ServiceInterface;
using CoffeeShop.ServiceModel;
using Microsoft.SemanticKernel;
using NUnit.Framework;
using ServiceStack;
using ServiceStack.Data;
using ServiceStack.Gpt;
using ServiceStack.IO;
using ServiceStack.OrmLite;
using ServiceStack.Testing;
using ServiceStack.Text;

namespace CoffeeShop.Tests;

[TestFixture, Explicit("Integration")]
public class GptTests
{
    IDbConnectionFactory ResolveDbFactory() => new ConfigureDb().ConfigureAndResolve<IDbConnectionFactory>();

    private ServiceStackHost CreateAppHost()
    {
        var appHost = new BasicAppHost(typeof(CoffeeShopServices).Assembly)
            {
                ConfigureAppHost = host =>
                {
                    var hostDir = "../../../../CoffeeShop";
                    host.VirtualFiles = new FileSystemVirtualFiles(hostDir);
                    var dbFactory = ResolveDbFactory();
                    host.Register(dbFactory);
                    var appConfig = new AppConfig
                    {
                        Project = "servicestackdemo",
                        Location = "global",
                        CoffeeShop = new()
                        {
                            GptPath = Path.GetFullPath(Path.Combine(hostDir, "gpt/coffeeshop")),
                            Bucket = "servicestack-coffeeshop",
                            RecognizerId = "coffeeshop-recognizer",
                            PhraseSetId = "coffeeshop-phrases",
                        }
                    };
                    host.Register(appConfig);
                    
                    var kernel = Kernel.Builder
                        .WithOpenAIChatCompletionService(
                            Environment.GetEnvironmentVariable("OPENAI_MODEL")!,
                            Environment.GetEnvironmentVariable("OPENAI_API_KEY")!)
                        .Build();

                    host.Register(kernel);
                    host.Container.AddSingleton<ITypeChatProvider>(c => new KernelTypeChatProvider(c.Resolve<IKernel>()));
                    host.Container.AddSingleton<IPromptProvider>(c => new CoffeeShopPromptProvider(dbFactory, appConfig)); 
                }
            }
            .Init();
        return appHost;
    }

    [Test]
    public void Dump_Categories()
    {
        var dbFactory = ResolveDbFactory();
        using var db = dbFactory.Open();
    
        db.LoadSelect(db.From<Category>()).PrintDump();
    }

    [Test]
    public async Task Dump_all_phrases()
    {
        using var appHost = CreateAppHost();
        var service = appHost.Resolve<CoffeeShopServices>();
        var response = await service.Any(new CoffeeShopPhrases());
        
        response.Results.PrintDump();
    }

    [Test]
    public async Task Execute_Raw_Prompt()
    {
        var request = "i wanna latte macchiato with vanilla";
        //var json = await File.ReadAllTextAsync("../../../request01.json");
        //json.Print();

        using var appHost = CreateAppHost();
        var service = appHost.Resolve<CoffeeShopServices>();
        var prompt = (string) await service.Any(new CoffeeShopPrompt
        {
            UserMessage = request +
@"
JSON validation failed: 'vanilla' is not a valid name for the type: Syrups
``` 
export interface Syrups {
    type: 'Syrups';
    name: 'almond syrup' | 'buttered rum syrup' | 'caramel syrup' | 'cinnamon syrup' | 'hazelnut syrup' | 
        'orange syrup' | 'peppermint syrup' | 'raspberry syrup' | 'toffee syrup' | 'vanilla syrup';
    optionQuantity?: OptionQuantity;
}
```
",
        });
        
        
        var dto = new Dictionary<string, object>
        {
            ["model"] = "gpt-3.5-turbo",
            ["messages"] = new List<object> {
                new Dictionary<string,object>
                {
                    ["role"] = "user",
                    ["content"] = prompt,
                }
            },
            ["temperature"] = 0,
            ["n"] = 1
        };
        var json = JSON.stringify(dto);
        //json.Print();
        
        var response = await "https://api.openai.com/v1/chat/completions"
            .PostJsonToUrlAsync(json, requestFilter: req =>
            {
                req.With(x =>
                {
                    x.SetAuthBearer(Environment.GetEnvironmentVariable("OPENAI_API_KEY")!);
                    x.ContentType = MimeTypes.Json;
                    x.Accept = MimeTypes.Json;
                });
            });
        
        response.Print();
    }
    
    [Test]
    public async Task Execute_Prompt()
    {
        var request = "i'd like a latte that's it";
        using var appHost = CreateAppHost();

        var service = appHost.Resolve<CoffeeShopServices>();
        // var schema = (string) await service.Any(new CoffeeShopSchema());
        // schema.Print();
        var prompt = (string) await service.Any(new CreateCoffeeShopChat
        {
            UserMessage = request,
        });
        prompt.Print();
    }
}