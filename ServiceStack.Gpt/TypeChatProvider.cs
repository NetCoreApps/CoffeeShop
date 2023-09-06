namespace ServiceStack.Gpt;

/// <summary>
/// The App Provider to use to generate TypeChat Schema and Prompts 
/// </summary>
public interface IPromptProvider
{
    /// <summary>
    /// Create a TypeChat TypeScript Schema from a TypeChatRequest
    /// </summary>
    Task<string> CreateSchemaAsync(CancellationToken token = default);

    /// <summary>
    /// Create a TypeChat TypeScript Prompt from a User request
    /// </summary>
    Task<string> CreatePromptAsync(string userMessage, CancellationToken token = default);
}

/// <summary>
/// Request to process a TypeChat Request
/// </summary>
public class TypeChatRequest
{
    public TypeChatRequest(string schema, string prompt, string userMessage)
    {
        Schema = schema;
        Prompt = prompt;
        UserMessage = userMessage;
    }

    /// <summary>
    /// TypeScript Schema
    /// </summary>
    public string Schema { get; set; }
    
    /// <summary>
    /// TypeChat Prompt
    /// </summary>
    public string Prompt { get; set; }
    
    /// <summary>
    /// Chat Request
    /// </summary>
    public string UserMessage { get; }
    
    /// <summary>
    /// Path to node.exe, optional: defaults to node in $PATH
    /// </summary>
    public string? NodePath { get; set; }

    /// <summary>
    /// Timeout to wait for node script to complete (default 120s)
    /// </summary>
    public int NodeProcessTimeoutMs { get; set; } = 120 * 1000;

    /// <summary>
    /// Path to node TypeChat script (default typechat.mjs)
    /// </summary>
    public string? ScriptPath { get; set; }
    
    /// <summary>
    /// TypeChat Behavior we want to use
    /// </summary>
    public TypeChatTranslator TypeChatTranslator { get; set; }

    /// <summary>
    /// Path to write TypeScript Schema to (default Temp File)
    /// </summary>
    public string? SchemaPath { get; set; }
    
    /// <summary>
    /// Which directory to execute the ScriptPath (default Environment.CurrentDirectory) 
    /// </summary>
    public string? WorkingDirectory { get; set; }
}

public class TypeChatResponse
{
    /// <summary>
    /// JSON Response from a TypeChat Provider
    /// </summary>
    public string Result { get; set; }
    public ResponseStatus ResponseStatus { get; set; }
}

public interface ITypeChatProvider
{
    Task<TypeChatResponse> TranslateMessageAsync(TypeChatRequest request, CancellationToken token = default);
}

public enum TypeChatTranslator
{
    Json,
    Program,
}
