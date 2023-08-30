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

public interface ITypeChatProvider<T>
{
    Task<string> GetSchemaAsync(IGptRequest<T> request, CancellationToken token = default);
    Task<string> CreatePromptAsync(IGptRequest<T> request, CancellationToken token=default);
    
    Task<T> ProcessAsync(IGptRequest<T> request, CancellationToken token=default);
}

public class NodeTypeChatProvider<T> : ChatProviderBase<T>
{
    public NodeTypeChatProvider(AppConfig config) : base(config) {}

    public override async Task<T> ProcessAsync(IGptRequest<T> request, CancellationToken token = default)
    {
        var schemaPath = Config.SiteConfig.GptPath.CombineWith("schema.ts");
        var schema = await GetSchemaAsync(request, token);
        await File.WriteAllTextAsync(schemaPath, schema, token);

        var shellRequest = request.UserRequest.Replace('"', '\'');
        var processInfo = new ProcessStartInfo
        {
            WorkingDirectory = Environment.CurrentDirectory,
            FileName = Config.NodePath,
            Arguments = $"typechat.mjs ./{schemaPath} \"{shellRequest}\" {typeof(T).Name}",
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
        return result.FromJson<T>();
    }
}

public class KernelChatProvider<T> : ChatProviderBase<T>
{
    public IKernel Kernel { get; set; }
    
    public KernelChatProvider(AppConfig config, IKernel kernel) : base(config)
    {
        Kernel = kernel;
    }

    public override async Task<T> ProcessAsync(IGptRequest<T> request, CancellationToken token = default)
    {
        var prompt = await CreatePromptAsync(request, token);
        var chatHistory = new ChatHistory();
        chatHistory.AddUserMessage(prompt);
        var chatCompletionService = Kernel.GetService<IChatCompletion>();
        var result = await chatCompletionService.GenerateMessageAsync(chatHistory, new ChatRequestSettings {
            Temperature = 0.0,
        }, cancellationToken: token);
        return result.FromJson<T>();
    }
}

public abstract class ChatProviderBase<T> : ITypeChatProvider<T>
{
    protected AppConfig Config { get; }

    protected ChatProviderBase(AppConfig config)
    {
        Config = config;
    }

    public virtual async Task<string> GetSchemaAsync(IGptRequest<T> request, CancellationToken token = default)
    {
        var file = new FileInfo(Config.SiteConfig.GptPath.CombineWith("schema.ss"));
        if (file == null)
            throw HttpError.NotFound($"{Config.SiteConfig.GptPath}/schema.ss not found");

        var tpl = await file.ReadAllTextAsync(token: token);
        var context = new ScriptContext {
            Plugins = { new TypeScriptPlugin() }
        }.Init();

        var output = await new PageResult(context.OneTimePage(tpl))
        {
            Args = request.PromptContext ?? new Dictionary<string, object>()
        }.RenderScriptAsync(token: token);
        return output;
    }

    public virtual async Task<string> CreatePromptAsync(IGptRequest<T> request, CancellationToken token = default)
    {
        var file = new FileInfo(Config.SiteConfig.GptPath.CombineWith("prompt.ss"));
        if (file == null)
            throw HttpError.NotFound($"{Config.SiteConfig.GptPath}/prompt.ss not found");
        
        var schema = await GetSchemaAsync(request, token: token);
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

    public abstract Task<T> ProcessAsync(IGptRequest<T> request, CancellationToken token = default);
}