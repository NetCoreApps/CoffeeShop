using Azure.AI.OpenAI;
using CoffeeShop.ServiceModel;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.AI.ChatCompletion;
using Microsoft.SemanticKernel.Connectors.AI.OpenAI.AzureSdk;
using Microsoft.SemanticKernel.Orchestration;
using ServiceStack;
using ServiceStack.OrmLite;
using ServiceStack.Script;

namespace CoffeeShop.ServiceInterface;

public class GptMethods : ScriptMethods
{
    public IRawString tsUnionStrings(IEnumerable<string> strings)
    {
        return new RawString(string.Join(" | ", strings.Map(x => $"'{x}'")));
    }

    public IRawString tsUnionTypes(IEnumerable<string> strings)
    {
        return new RawString(string.Join(" | ", strings));
    }
}

public class CoffeeShopServices : Service
{
    public IKernel Kernel { get; set; }
    
    [AddHeader(HttpHeaders.ContentType, MimeTypes.PlainText)]
    public async Task<object> Any(CoffeeShopSchema request)
    {
        var file = VirtualFiles.GetFile("gpt/coffeeshop/schema.ss");
        if (file == null)
            throw HttpError.NotFound("coffeeshop/schema.ss not found");

        var categories = await Db.LoadSelectAsync(Db.From<Category>());
        var options = await Db.SelectAsync<Option>();
        var optionsMap = options.ToDictionary(x => x.Id);
        var optionQuantities = await Db.SelectAsync<OptionQuantity>();

        var tpl = file.ReadAllText();
        var context = new ScriptContext {
            ScriptMethods = {
                new GptMethods(),
            }
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
        }.RenderScriptAsync();
        return output;
    }

    [AddHeader(HttpHeaders.ContentType, MimeTypes.PlainText)]
    public async Task<object> Any(CoffeeShopPrompt request)
    {
        var file = VirtualFiles.GetFile("gpt/coffeeshop/prompt.ss");
        if (file == null)
            throw HttpError.NotFound("coffeeshop/prompt.ss not found");

       var schema = (string) await Any(new CoffeeShopSchema());
       var tpl = file.ReadAllText();
       var context = new ScriptContext
       {
           ScriptMethods =
           {
               new GptMethods(),
           }
       }.Init();

       var prompt = await new PageResult(context.OneTimePage(tpl))
       {
           Args =
           {
               [nameof(schema)] = schema,
               [nameof(request)] = request.Request,
           }
       }.RenderScriptAsync();

       if (request.Execute)
       {
           //var skContext = new SKContext();
           //var agent = new OpenAiChatGptAgent(agentData);
           var chatHistory = new ChatHistory();
           chatHistory.AddUserMessage(prompt);
           var chatCompletionService = Kernel.GetService<IChatCompletion>();
           var result = await chatCompletionService.GenerateMessageAsync(chatHistory, new ChatRequestSettings
           {
               Temperature = 0.0,
           });
           return $"{prompt}\n\n==========================\n\n{result}";
       }

       return prompt;
    }

    public void Any(SaveCart request)
    {
        SessionBag.Set(nameof(Cart), request.Cart);
    }

    public object Any(GetCart request)
    {
        return SessionBag.Get<Cart>(nameof(Cart));
    }
}