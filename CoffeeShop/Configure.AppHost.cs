using Funq;
using CoffeeShop.ServiceInterface;
using Google.Cloud.Speech.V2;
using Google.Cloud.Storage.V1;
using ServiceStack.Configuration;
using ServiceStack.GoogleCloud;
using ServiceStack.Host;
using ServiceStack.IO;
using ServiceStack.Web;

[assembly: HostingStartup(typeof(CoffeeShop.AppHost))]

namespace CoffeeShop;

public class AppHost : AppHostBase, IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context,services) => {
            // Configure ASP.NET Core IOC Dependencies
            var appConfig = new AppConfig();
            context.Configuration.Bind(nameof(AppConfig), appConfig);
            services.AddSingleton(appConfig);

            if (!AppTasks.IsRunAsAppTask())
            {
                appConfig.NodePath = ScriptContext.ProtectedMethods.exePath("node")
                                     ?? throw new Exception("Could not resolve path to node");
                appConfig.FfmpegPath = ScriptContext.ProtectedMethods.exePath("ffmpeg");

                var googleCredentials = Environment.GetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS");
                if (string.IsNullOrEmpty(googleCredentials))
                    throw new Exception("GOOGLE_APPLICATION_CREDENTIALS Environment Variable not set");
                if (!File.Exists(googleCredentials))
                    throw new Exception($"GOOGLE_APPLICATION_CREDENTIALS '{googleCredentials}' does not exist");

                services.AddSingleton(SpeechClient.Create());
                services.AddSingleton(StorageClient.Create());
            }
        });

    public AppHost() : base("CoffeeShop", typeof(MyServices).Assembly) {}

    public override void Configure(Container container)
    {
        SetConfig(new HostConfig {
        });
        
        Plugins.Add(new CorsFeature(new[] {
            "http://localhost:5173", //vite dev
        }, allowCredentials:true));

        if (!AppTasks.IsRunAsAppTask())
        {
            var audioFormats = new List<string>(FileExt.WebAudios) { "mp4" }.ToArray();
            
            var appConfig = container.Resolve<AppConfig>();
            var wwwrootVfs = GetVirtualFileSource<FileSystemVirtualFiles>();
            var googleCloudVfs = new GoogleCloudVirtualFiles(container.Resolve<StorageClient>(), appConfig.CoffeeShop.Bucket);
            Plugins.Add(new FilesUploadFeature(
                new UploadLocation("products", wwwrootVfs, allowExtensions:FileExt.WebImages,
                    resolvePath: ctx => $"/products/{ctx.FileName}"),
                new UploadLocation("recordings", googleCloudVfs, allowExtensions:audioFormats, writeAccessRole: RoleNames.AllowAnon,
                    maxFileBytes: 1024 * 1024,
                    transformFile: ctx => ConvertAudioToWebM(ctx.File),
                    resolvePath: ctx => $"/recordings/{ctx.DateSegment}/{DateTime.UtcNow.TimeOfDay.TotalMilliseconds}.{ctx.FileExtension}")
            ));
        }
    }

    public async Task<IHttpFile?> ConvertAudioToWebM(IHttpFile file)
    {
        if (!file.FileName.EndsWith("mp4")) 
            return file;
        
        var appConfig = Container.Resolve<AppConfig>();
        if (appConfig.FfmpegPath == null)
            throw new Exception("Could not resolve path to ffmpeg");
        
        var now = DateTime.UtcNow;
        var time = $"{now:yyyy-M-d_s.fff}";
        var tmpMp4 = Path.GetTempPath().CombineWith($"{time}.mp4");
        await using (File.Create(tmpMp4)) {}
        var tmpWebm = Path.GetTempPath().CombineWith($"{time}.webm");
        await using var fsM4a = File.OpenWrite(tmpMp4);
        await file.WriteToAsync(fsM4a);
        await ProcessUtils.RunShellAsync($"{appConfig.FfmpegPath} -i {tmpMp4} {tmpWebm}");
        File.Delete(tmpMp4);
        HttpFile? to = null;
        await using (var fsWav = File.OpenRead(tmpWebm))
        {
            to = new HttpFile(file) {
                FileName = file.FileName.WithoutExtension() + ".webm",
                InputStream = await fsWav.CopyToNewMemoryStreamAsync()
            };
        }
        File.Delete(tmpWebm);
        return to;
    }
    
    public static void RegisterKey() =>
        Licensing.RegisterLicense("OSS BSD-3-Clause 2023 https://github.com/NetCoreApps/CoffeeShop TzcMtIEiQGgiyp2liwLwkd73PbIstK+6cFR8fbFNOnX1GEwJXq2TQM8LFP1e3HosMS7KiMNh6i7bktZxEznGq59Fhe1bFvUZkNwu74Y3U5kq5rbxPhVdJ+z//0opOl6rZl4pakkH99gx5LeLADVziEhLoIL7VoZlRcsE1UnpdRQ=");
}
