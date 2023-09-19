namespace CoffeeShop.Tests;

public static class TestConfig
{
    public static string[] Recordings { get; set; } =
    {
        "hot-cappuccino-with-two-sugars-male.webm",
        "hot-cappuccino-with-two-sugars-boy.webm",
        "cold-chai-latte-and-bagel-female.webm",
    };
    public static string[] SimplePhrases =
    {
        "hot", "cappuccino", "sugar", "cold", "chai", "latte", "bagel"
    };

    public const string HostDir = "../../../../TypeChatExamples/";
    public const string RecordingsPath = "../../../recordings/";
}