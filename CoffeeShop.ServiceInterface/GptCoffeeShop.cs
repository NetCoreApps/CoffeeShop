using System.Data;
using System.Diagnostics;
using CoffeeShop.ServiceModel;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.AI.ChatCompletion;
using ServiceStack;
using ServiceStack.OrmLite;
using ServiceStack.Script;
using ServiceStack.Text;

namespace CoffeeShop.ServiceInterface;

public interface IGptCoffeeShop
{
    Task<string> GetSchemaAsync(IDbConnection db, CancellationToken token=default);
    Task<string> CreatePromptAsync(IDbConnection db, string request, CancellationToken token=default);
    Task<string> OrderAsync(IDbConnection db, string request, CancellationToken token=default);
}

public abstract class GptCoffeeShopBase : IGptCoffeeShop
{
    protected AppConfig Config { get; }

    protected GptCoffeeShopBase(AppConfig config)
    {
        Config = config;
    }

    public virtual async Task<string> GetSchemaAsync(IDbConnection db, CancellationToken token = default)
    {
        var file = new FileInfo(Config.CoffeeShop.GptPath.CombineWith("schema.ss"));
        if (file == null)
            throw HttpError.NotFound($"{Config.CoffeeShop.GptPath}/schema.ss not found");

        var categories = await db.LoadSelectAsync(db.From<Category>(), token:token);
        var options = await db.SelectAsync<Option>(token: token);
        var optionsMap = options.ToDictionary(x => x.Id);
        var optionQuantities = await db.SelectAsync<OptionQuantity>(token: token);

        var tpl = await file.ReadAllTextAsync(token: token);
        var context = new ScriptContext {
            Plugins = { new TypeScriptPlugin() }
        }.Init();

        var output = await new PageResult(context.OneTimePage(tpl))
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

    public virtual async Task<string> CreatePromptAsync(IDbConnection db, string request, CancellationToken token = default)
    {
        var file = new FileInfo(Config.CoffeeShop.GptPath.CombineWith("prompt.ss"));
        if (file == null)
            throw HttpError.NotFound($"{Config.CoffeeShop.GptPath}/prompt.ss not found");
        
        var schema = await GetSchemaAsync(db, token: token);
        var tpl = await file.ReadAllTextAsync(token: token);
        var context = new ScriptContext {
            Plugins = { new TypeScriptPlugin() }
        }.Init();

        var prompt = await new PageResult(context.OneTimePage(tpl))
        {
            Args =
            {
                [nameof(schema)] = schema,
                [nameof(request)] = request,
            }
        }.RenderScriptAsync(token: token);

        return prompt;
    }

    public abstract Task<string> OrderAsync(IDbConnection db, string request, CancellationToken token = default);
}

public class NodeTypeChatGptCoffeeShop : GptCoffeeShopBase
{
    public NodeTypeChatGptCoffeeShop(AppConfig config) : base(config) {}

    public override async Task<string> OrderAsync(IDbConnection db, string request, CancellationToken token = default)
    {
        var schemaPath = Config.CoffeeShop.GptPath.CombineWith("schema.ts");
        var schema = await GetSchemaAsync(db, token);
        await File.WriteAllTextAsync(schemaPath, schema, token);

        var shellRequest = request.Replace('"', '\'');
        var processInfo = new ProcessStartInfo
        {
            WorkingDirectory = Environment.CurrentDirectory,
            FileName = Config.NodePath,
            Arguments = $"typechat.mjs ./{schemaPath} \"{shellRequest}\"",
        };
        if (Env.IsWindows)
            processInfo = processInfo.ConvertToCmdExec();

        var sb = StringBuilderCache.Allocate();
        var sbError = StringBuilderCacheAlt.Allocate();
        await ProcessUtils.RunAsync(processInfo, Config.NodeProcessTimeoutMs,
            onOut: data => sb.AppendLine(data),
            onError: data => sbError.AppendLine(data));

        if (sbError.Length > 0)
            throw new Exception($"Error running node {StringBuilderCacheAlt.ReturnAndFree(sbError)}");

        var result = StringBuilderCache.ReturnAndFree(sb);
        return result;
    }
}

public class KernelGptCoffeeShop : GptCoffeeShopBase
{
    public IKernel Kernel { get; set; }
    
    public KernelGptCoffeeShop(AppConfig config, IKernel kernel) : base(config)
    {
        Kernel = kernel;
    }

    public override async Task<string> OrderAsync(IDbConnection db, string request, CancellationToken token = default)
    {
        var prompt = await CreatePromptAsync(db, request, token);
        var chatHistory = new ChatHistory();
        chatHistory.AddUserMessage(prompt);
        var chatCompletionService = Kernel.GetService<IChatCompletion>();
        var result = await chatCompletionService.GenerateMessageAsync(chatHistory, new ChatRequestSettings {
            Temperature = 0.0,
        }, cancellationToken: token);
        return result;
    }
}