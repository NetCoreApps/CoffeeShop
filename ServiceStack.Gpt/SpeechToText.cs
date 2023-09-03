namespace ServiceStack.Gpt;

public interface ISpeechToText
{
    /// <summary>
    /// Once only task that needs to be run out-of-band before using the SpeechToText provider
    /// </summary>
    Task InitAsync(List<string> phrases, CancellationToken token = default);
    Task<TranscriptResult> TranscribeAsync(string request, CancellationToken token = default);
}

public class TranscriptResult
{
    public string Transcript { get; set; }
    public float Confidence { get; set; }
    public string ApiResponse { get; set; }
    public ResponseStatus ResponseStatus { get; set; }
}

public class GoogleCloudSpeechConfig
{
    public string Project { get; set; } 
    public string Location { get; set; }
    public string Bucket { get; set; }
    public string PhraseSetId { get; set; }
    public string RecognizerId { get; set; }
}
