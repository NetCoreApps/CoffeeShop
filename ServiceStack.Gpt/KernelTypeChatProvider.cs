using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.AI.ChatCompletion;

namespace ServiceStack.Gpt;

public class KernelTypeChatProvider : ITypeChatProvider
{
    public IKernel Kernel { get; }
    public KernelTypeChatProvider(IKernel kernel) => Kernel = kernel;

    public async Task<TypeChatResponse> TranslateMessageAsync(TypeChatRequest request, CancellationToken token = default)
    {
        var chatHistory = new ChatHistory();
        chatHistory.AddUserMessage(request.Prompt);
        var chatCompletionService = Kernel.GetService<IChatCompletion>();
        var result = await chatCompletionService.GenerateMessageAsync(chatHistory, new ChatRequestSettings {
            Temperature = 0.0,
        }, cancellationToken: token);
        return new TypeChatResponse { Result = result };
    }
}
