using NUnit.Framework;
using ServiceStack;
using ServiceStack.Testing;
using CoffeeShop.ServiceInterface;
using CoffeeShop.ServiceModel;

namespace CoffeeShop.Tests;

public class UnitTest
{
    private readonly ServiceStackHost appHost;

    public UnitTest()
    {
        appHost = new BasicAppHost().Init();
        appHost.Container.AddTransient<PortalServices>();
    }

    [OneTimeTearDown]
    public void OneTimeTearDown() => appHost.Dispose();

    [Test]
    public void Can_serialized_a_cart_with_iced_coffee()
    {
        var json =
            "{\n  \"items\": [\n    {\n      \"type\": \"lineitem\",\n      \"product\": {\n        \"type\": \"LatteDrinks\",\n        \"name\": \"latte\",\n        \"temperature\": \"iced\",\n        \"size\": \"venti\"\n      },\n      \"quantity\": 1\n    }\n  ]\n}";
        var cart = json.FromJson<Cart>();
        Assert.That(cart.Items.Count, Is.EqualTo(1));
        Assert.That(cart.Items[0].Product.Type, Is.EqualTo("LatteDrinks"));
        Assert.That(cart.Items[0].Product.Name, Is.EqualTo("latte"));
        Assert.That(cart.Items[0].Product.Temperature, Is.EqualTo("iced"));
        
    }
}