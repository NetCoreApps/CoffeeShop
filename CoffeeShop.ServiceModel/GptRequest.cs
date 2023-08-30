using ServiceStack;

namespace CoffeeShop.ServiceModel;

public class GptRequestBase<T> : IGptRequest<T>
{
    public string UserRequest { get; set; }
    public Dictionary<string,object>? PromptContext { get; set; }
}

public interface IGptRequest<T> : IReturn<T>
{
    string UserRequest { get; set; }
    Dictionary<string,object>? PromptContext { get; set; }
}