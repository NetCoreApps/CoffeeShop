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
}