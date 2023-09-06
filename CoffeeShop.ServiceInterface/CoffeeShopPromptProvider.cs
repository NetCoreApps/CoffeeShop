using CoffeeShop.ServiceModel;
using ServiceStack;
using ServiceStack.Data;
using ServiceStack.Gpt;
using ServiceStack.OrmLite;
using ServiceStack.Script;

namespace CoffeeShop.ServiceInterface;

public class CoffeeShopPromptProvider : IPromptProvider
{
    public IDbConnectionFactory DbFactory { get; set; }
    public AppConfig Config { get; set; }

    public CoffeeShopPromptProvider(IDbConnectionFactory dbFactory, AppConfig config)
    {
        DbFactory = dbFactory;
        Config = config;
    }

    public async Task<string> CreateSchemaAsync(CancellationToken token = default)
    {
        var file = new FileInfo(Config.CoffeeShop.GptPath.CombineWith("schema.ss"));
        if (file == null)
            throw HttpError.NotFound($"{Config.CoffeeShop.GptPath}/schema.ss not found");

        using var db = await DbFactory.OpenDbConnectionAsync(token: token);
        var categories = await db.LoadSelectAsync(db.From<Category>(), token:token);
        var options = await db.SelectAsync<Option>(token: token);
        var optionsMap = options.ToDictionary(x => x.Id);
        var optionQuantities = await db.SelectAsync<OptionQuantity>(token: token);

        var template = await file.ReadAllTextAsync(token: token);
        var context = new ScriptContext {
            Plugins = { new TypeScriptPlugin() }
        }.Init();

        var output = await new PageResult(context.OneTimePage(template))
        {
            Args =
            {
                [nameof(categories)] = categories,
                [nameof(options)] = options,
                [nameof(optionsMap)] = optionsMap,
                [nameof(optionQuantities)] = optionQuantities,
            },
        }.RenderScriptAsync(token: token);
        return output;
    }

    public async Task<string> CreatePromptAsync(string userMessage, CancellationToken token = default)
    {
        var file = new FileInfo(Config.CoffeeShop.GptPath.CombineWith("prompt.ss"));
        if (file == null)
            throw HttpError.NotFound($"{Config.CoffeeShop.GptPath}/prompt.ss not found");
        
        var schema = await CreateSchemaAsync(token: token);
        var template = await file.ReadAllTextAsync(token: token);
        var context = new ScriptContext {
            Plugins = { new TypeScriptPlugin() }
        }.Init();

        var prompt = await new PageResult(context.OneTimePage(template))
        {
            Args =
            {
                [nameof(schema)] = schema,
                [nameof(userMessage)] = userMessage,
            }
        }.RenderScriptAsync(token: token);

        return prompt;
    }
}