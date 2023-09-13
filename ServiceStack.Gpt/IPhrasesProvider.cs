namespace ServiceStack.Gpt;

public interface IPhrasesProvider
{
    /// <summary>
    /// Get Phrases for 
    /// </summary>
    Task<IEnumerable<string>> GetPhrases(CancellationToken token = default);
}