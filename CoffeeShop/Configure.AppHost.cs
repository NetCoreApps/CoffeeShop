using Funq;
using CoffeeShop.ServiceInterface;
using Google.Cloud.Speech.V2;
using Google.Cloud.Storage.V1;
using ServiceStack.Configuration;
using ServiceStack.GoogleCloud;
using ServiceStack.IO;

[assembly: HostingStartup(typeof(CoffeeShop.AppHost))]

namespace CoffeeShop;

public class AppHost : AppHostBase, IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context,services) => {
            // Configure ASP.NET Core IOC Dependencies
            var appConfig = new AppConfig {
                NodePath = ScriptContext.ProtectedMethods.exePath("node")
                    ?? throw new Exception("Could not resolve path to node")
            };
            context.Configuration.Bind(nameof(AppConfig), appConfig);
            services.AddSingleton(appConfig);

            if (!AppTasks.IsRunAsAppTask())
            {
                var googleCredentials = Environment.GetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS");
                if (string.IsNullOrEmpty(googleCredentials))
                    throw new Exception("GOOGLE_APPLICATION_CREDENTIALS Environment Variable not set");
                if (!File.Exists(googleCredentials))
                    throw new Exception($"GOOGLE_APPLICATION_CREDENTIALS '{googleCredentials}' does not exist");
            }

            services.AddSingleton(SpeechClient.Create());
            services.AddSingleton(StorageClient.Create());
        });

    public AppHost() : base("CoffeeShop", typeof(MyServices).Assembly) {}

    public override void Configure(Container container)
    {
        SetConfig(new HostConfig {
        });
        
        Plugins.Add(new CorsFeature(new[] {
            "http://localhost:5173", //vite dev
        }, allowCredentials:true));

        var appConfig = container.Resolve<AppConfig>();
        var wwwrootVfs = GetVirtualFileSource<FileSystemVirtualFiles>();
        var googleCloudVfs = new GoogleCloudVirtualFiles(container.Resolve<StorageClient>(), appConfig.CoffeeShop.Bucket);
        Plugins.Add(new FilesUploadFeature(
            new UploadLocation("products", wwwrootVfs, allowExtensions:FileExt.WebImages,
                resolvePath: ctx => $"/products/{ctx.FileName}"),
            new UploadLocation("recordings", googleCloudVfs, allowExtensions:FileExt.WebAudios, writeAccessRole: RoleNames.AllowAnon,
                maxFileBytes: 1024 * 1024,
                resolvePath: ctx => $"/recordings/{ctx.DateSegment}/{DateTime.UtcNow.TimeOfDay.TotalMilliseconds}.{ctx.FileExtension}")
            ));
    }
}
