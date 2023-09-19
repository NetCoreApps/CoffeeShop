namespace CoffeeShop.ServiceInterface;

public class AppConfig
{
    public GcpConfig? GcpConfig { get; set; }
    public S3Config? AwsConfig { get; set; }
    public S3Config? R2Config { get; set; }
    public AzureConfig? AzureConfig { get; set; }
    public SiteConfig CoffeeShop { get; set; }
    public SiteConfig Sentiment { get; set; }
    public SiteConfig Calendar { get; set; }
    public SiteConfig Restaurant { get; set; }
    public SiteConfig Math { get; set; }
    public SiteConfig Music { get; set; }
    public string? NodePath { get; set; }
    public string? FfmpegPath { get; set; }
    public string? WhisperPath { get; set; }
    public int NodeProcessTimeoutMs { get; set; } = 120 * 1000;

    public GcpConfig AssertGcpConfig() => GcpConfig ?? throw new Exception($"{nameof(GcpConfig)} is not configured");
    public S3Config AssertAwsConfig() => AwsConfig ?? throw new Exception($"{nameof(AwsConfig)} is not configured");
    public S3Config AssertR2Config() => R2Config ?? throw new Exception($"{nameof(R2Config)} is not configured");
    public AzureConfig AssertAzureConfig() => AzureConfig ?? throw new Exception($"{nameof(AzureConfig)} is not configured");
    
    public SiteConfig GetSiteConfig(string name)
    {
        return name.ToLower() switch
        {
            "coffeeshop" => CoffeeShop,
            "sentiment" => Sentiment,
            "calendar" => Calendar,
            "restaurant" => Restaurant,
            "math" => Math,
            "music" => Music,
            _ => throw new NotSupportedException($"No SiteConfig exists for '{name}'")
        };
    }
}

public class SiteConfig
{
    public string GptPath { get; set; }
    public string? RecognizerId { get; set; }
    public string? PhraseSetId { get; set; }
    public string? VocabularyName { get; set; }
}


public class GcpConfig
{
    public string Project { get; set; }
    public string Location { get; set; }
    public string Bucket { get; set; }
}

public class S3Config
{
    public string? AccountId { get; set; }
    public string? AccessKey { get; set; }
    public string? SecretKey { get; set; }
    public string? Region { get; set; }
    public string Bucket { get; set; }
}

public class AzureConfig
{
    public string? SpeechKey { get; set; }
    public string? SpeechRegion { get; set; }
    public string? ConnectionString { get; set; }
    public string ContainerName { get; set; }
}