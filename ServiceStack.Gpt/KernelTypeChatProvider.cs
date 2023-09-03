using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.AI.ChatCompletion;

namespace ServiceStack.Gpt;

public class KernelTypeChatProvider : ITypeChatProvider
{
    public IKernel Kernel { get; }
    public KernelTypeChatProvider(IKernel kernel) => Kernel = kernel;

    public async Task<TypeChatResponse> TranslateMessageAsync(TypeChatRequest request, CancellationToken token = default)
    {
        var prompt = await request.PromptProvider.CreatePromptAsync(request, token);
        var chatHistory = new ChatHistory();
        chatHistory.AddUserMessage(prompt);
        var chatCompletionService = Kernel.GetService<IChatCompletion>();
        var result = await chatCompletionService.GenerateMessageAsync(chatHistory, new ChatRequestSettings {
            Temperature = 0.0,
        }, cancellationToken: token);
        return new TypeChatResponse { Result = result };
    }
}
