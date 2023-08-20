namespace CoffeeShop.ServiceInterface;

public class AppConfig
{
    public string Project { get; set; }
    public string Location { get; set; }
    public SiteConfig CoffeeShop { get; set; }
    public string NodePath { get; set; }
    public string? FfmpegPath { get; set; }
    public bool UseNodeTypeChat { get; set; } = true;
    public int NodeProcessTimeoutMs { get; set; } = 120 * 1000;
}

public class SiteConfig
{
    public string Bucket { get; set; }
    public string RecognizerId { get; set; }
    public string PhraseSetId { get; set; }
}