using CoffeeShop.ServiceInterface;
using CoffeeShop.ServiceModel;
using Microsoft.SemanticKernel;
using NUnit.Framework;
using ServiceStack;
using ServiceStack.Data;
using ServiceStack.IO;
using ServiceStack.OrmLite;
using ServiceStack.Testing;
using ServiceStack.Text;

namespace CoffeeShop.Tests;

public class GptTests
{
    IDbConnectionFactory ResolveDbFactory() => new ConfigureDb().ConfigureAndResolve<IDbConnectionFactory>();

    private ServiceStackHost CreateAppHost()
    {
        var appHost = new BasicAppHost(typeof(CoffeeShopServices).Assembly)
            {
                ConfigureAppHost = host =>
                {
                    host.VirtualFiles = new FileSystemVirtualFiles("../../../../CoffeeShop");
                    var dbFactory = ResolveDbFactory();
                    host.Register(dbFactory);
                    var kernel = Kernel.Builder
                        .WithOpenAIChatCompletionService(
                            Environment.GetEnvironmentVariable("OPENAI_MODEL")!,
                            Environment.GetEnvironmentVariable("OPENAI_API_KEY")!)
                        .Build();

                    host.Register(kernel);
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
    
        //db.LoadSelect(db.From<Category>()).PrintDump();
        var options = db.Select(db.From<Option>());
        options.PrintDump();
    }

    [Test]
    public async Task Execute_Raw_Prompt()
    {
        var request = "i'd like a latte that's it";
        //var json = await File.ReadAllTextAsync("../../../request01.json");
        //json.Print();

        var appHost = CreateAppHost();
        var service = appHost.Resolve<CoffeeShopServices>();
        var prompt = (string) await service.Any(new CoffeeShopPrompt
        {
            Request = request,
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
        var appHost = CreateAppHost();

        var service = appHost.Resolve<CoffeeShopServices>();
        // var schema = (string) await service.Any(new CoffeeShopSchema());
        // schema.Print();
        var prompt = (string) await service.Any(new CoffeeShopPrompt
        {
            Request = request,
            Execute = true,
        });
        prompt.Print();
    }
}