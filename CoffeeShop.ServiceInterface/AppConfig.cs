namespace CoffeeShop.ServiceInterface;

public class AppConfig
{
    public string Project { get; set; }
    public string Location { get; set; }
    public SiteConfig CoffeeShop { get; set; }
    public string NodePath { get; set; }
    public string? FfmpegPath { get; set; }
    public string? WhisperPath { get; set; }
    public int NodeProcessTimeoutMs { get; set; } = 120 * 1000;

    public SiteConfig GetSiteConfig(string name)
    {
        return name.ToLower() switch
        {
            "coffeeshop" => CoffeeShop,
            _ => throw new NotSupportedException($"No SiteConfig exists for '{name}'")
        };
    }
}

public class SiteConfig
{
    public string GptPath { get; set; }
    public string Bucket { get; set; }
    public string RecognizerId { get; set; }
    public string PhraseSetId { get; set; }
}