using Funq;
using CoffeeShop.ServiceInterface;
using ServiceStack.IO;

[assembly: HostingStartup(typeof(CoffeeShop.AppHost))]

namespace CoffeeShop;

public class AppHost : AppHostBase, IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices(services => {
            // Configure ASP.NET Core IOC Dependencies
        });

    public AppHost() : base("CoffeeShop", typeof(MyServices).Assembly) {}

    public override void Configure(Container container)
    {
        SetConfig(new HostConfig {
        });
        
        Plugins.Add(new CorsFeature(new[] {
            "http://localhost:5173", //vite dev
        }, allowCredentials:true));

        var wwwrootVfs = GetVirtualFileSource<FileSystemVirtualFiles>();
        Plugins.Add(new FilesUploadFeature(
            new UploadLocation("products", wwwrootVfs, allowExtensions:FileExt.WebImages,
                resolvePath: ctx => $"/products/{ctx.FileName}")));
    }
}
