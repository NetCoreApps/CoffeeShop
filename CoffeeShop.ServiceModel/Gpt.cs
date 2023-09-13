using ServiceStack;

namespace CoffeeShop.ServiceModel;

[Tag(Tags.Gpt)]
[Route("/{Feature}/schema")]
public class GetSchema : IReturn<string>
{
    [ValidateNotEmpty]
    public string Feature { get; set; }
}

[Tag(Tags.Gpt)]
[Route("/{Feature}/prompt")]
public class GetPrompt : IReturn<string>
{
    [ValidateNotEmpty]
    public string Feature { get; set; }
    public string UserMessage { get; set; }
}

[Tag(Tags.Gpt)]
[Route("/{Feature}/phrases")]
public class GetPhrases : IReturn<StringsResponse>
{
    [ValidateNotEmpty]
    public string Feature { get; set; }
}

[ValidateIsAdmin]
[Tag(Tags.Gpt)]
[Route("/{Feature}/speech/init")]
public class InitSpeech : IReturnVoid
{
    [ValidateNotEmpty]
    public string Feature { get; set; }
}

[Tag(Tags.Gpt)]
public class QueryRecordings : QueryDb<Recording> {}

[Tag(Tags.CoffeeShop)]
[AutoPopulate(nameof(Recording.CreatedDate),  Eval = "utcNow")]
[AutoPopulate(nameof(Recording.IpAddress),  Eval = "Request.RemoteIp")]
public class CreateRecording : ICreateDb<Recording>, IReturn<Recording>
{
    [ValidateNotEmpty]
    public string Feature { get; set; }
    [Input(Type="file"), UploadTo("recordings")]
    public string Path { get; set; }
}

[Tag(Tags.Gpt)]
public class QueryChats : QueryDb<Chat>
{
}

[Tag(Tags.CoffeeShop)]
[AutoPopulate(nameof(Recording.CreatedDate),  Eval = "utcNow")]
[AutoPopulate(nameof(Recording.IpAddress),  Eval = "Request.RemoteIp")]
public class CreateChat : ICreateDb<Chat>, IReturn<Chat>
{
    [ValidateNotEmpty]
    public string Feature { get; set; }
    public string UserMessage { get; set; }
}
