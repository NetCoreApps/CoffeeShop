using ServiceStack;
using ServiceStack.DataAnnotations;

namespace CoffeeShop.ServiceModel;

[Icon(Svg = Icons.Recording)]
public class Recording
{
    [AutoIncrement]
    public int Id { get; set; }
    public string Feature { get; set; }
    public string Provider { get; set; }
    public string Path { get; set; }
    public string? Transcript { get; set; }
    public float? TranscriptConfidence { get; set; }
    public string? TranscriptResponse { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? TranscribeStart { get; set; }
    public DateTime? TranscribeEnd { get; set; }
    public int? TranscribeDurationMs { get; set; }
    public int? DurationMs { get; set; }
    public string? IpAddress { get; set; }
    public string? Error { get; set; }
}

[Icon(Svg = Icons.Chat)]
public class Chat
{
    [AutoIncrement]
    public int Id { get; set; }
    public string Feature { get; set; }
    public string Provider { get; set; }
    public string Request { get; set; }
    public string Prompt { get; set; }
    public string Schema { get; set; }
    public string? ChatResponse { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? ChatStart { get; set; }
    public DateTime? ChatEnd { get; set; }
    public int? ChatDurationMs { get; set; }
    public string? IpAddress { get; set; }
    public string? Error { get; set; }
}

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

[Tag(Tags.Gpt)]
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

[Tag(Tags.Gpt)]
[AutoPopulate(nameof(Recording.CreatedDate),  Eval = "utcNow")]
[AutoPopulate(nameof(Recording.IpAddress),  Eval = "Request.RemoteIp")]
public class CreateChat : ICreateDb<Chat>, IReturn<Chat>
{
    [ValidateNotEmpty]
    public string Feature { get; set; }
    public string UserMessage { get; set; }
}
