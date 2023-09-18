using CoffeeShop.ServiceInterface;
using Google.Cloud.Storage.V1;
using ServiceStack.GoogleCloud;

[assembly: HostingStartup(typeof(CoffeeShop.ConfigureVfs))]

namespace CoffeeShop;

public class ConfigureVfs : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureAppHost(appHost =>
        {
            if (AppTasks.IsRunAsAppTask()) return;

            if (appHost.AppSettings.Get<string>("VfsProvider") == nameof(GoogleCloudVirtualFiles))
            {
                GoogleCloudConfig.AssertValidCredentials();
                appHost.VirtualFiles = new GoogleCloudVirtualFiles(
                    StorageClient.Create(), appHost.Resolve<AppConfig>().CoffeeShop.Bucket);
            }
        });
}