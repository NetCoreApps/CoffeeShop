using CoffeeShop.ServiceInterface;
using Google.Cloud.Storage.V1;
using ServiceStack.GoogleCloud;

[assembly: HostingStartup(typeof(CoffeeShop.ConfigureVfs))]

namespace CoffeeShop;

public class ConfigureVfs : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context, services) =>
        {
            if (AppTasks.IsRunAsAppTask()) return;
            
            if (context.Configuration.GetValue<string>("VfsProvider") == nameof(GoogleCloudVirtualFiles))
            {
                AppHost.AssertGoogleCloudCredentials();
                services.AddSingleton(StorageClient.Create());
            }
        })
        .ConfigureAppHost(appHost =>
        {
            if (AppTasks.IsRunAsAppTask()) return;

            if (appHost.Container.Exists<StorageClient>())
            {
                appHost.VirtualFiles = new GoogleCloudVirtualFiles(
                    appHost.Resolve<StorageClient>(), appHost.Resolve<AppConfig>().CoffeeShop.Bucket);
            }
        });
}