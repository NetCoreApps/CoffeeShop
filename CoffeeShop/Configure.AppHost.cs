using Funq;
using CoffeeShop.ServiceInterface;
using ServiceStack.Configuration;
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
                appConfig.NodePath ??= (ProcessUtils.FindExePath("node")
                                        ?? throw new Exception("Could not resolve path to node"));
                appConfig.FfmpegPath ??= ProcessUtils.FindExePath("ffmpeg");
                appConfig.WhisperPath ??= ProcessUtils.FindExePath("whisper");
            }
        });

    public AppHost() : base("CoffeeShop", typeof(PortalServices).Assembly) {}

    public override void Configure(Container container)
    {
        SetConfig(new HostConfig {
        });
        
        Plugins.Add(new CorsFeature(new[] {
            "http://localhost:5173", //vite dev
        }, allowCredentials:true));
        
        Plugins.Add(new ProfilingFeature());

        if (!AppTasks.IsRunAsAppTask())
        {
            var wwwrootVfs = GetVirtualFileSource<FileSystemVirtualFiles>();
            Plugins.Add(new FilesUploadFeature(
                new UploadLocation("products", wwwrootVfs, allowExtensions:FileExt.WebImages,
                    resolvePath: ctx => $"/products/{ctx.FileName}"),
                new UploadLocation("recordings", VirtualFiles, allowExtensions:FileExt.WebAudios, writeAccessRole: RoleNames.AllowAnon,
                    maxFileBytes: 1024 * 1024,
                    transformFile: ctx => ConvertAudioToWebM(ctx.File),
                    resolvePath: ctx => $"/recordings/{ctx.DateSegment}/{DateTime.UtcNow.TimeOfDay.TotalMilliseconds}.{ctx.FileExtension}")
            ));
        }
    }

    /// <summary>
    /// Safari can only encode Web Audio Recordings in mp4/aac which Google speech-to-text doesn't support so we
    /// need to convert it to .webm before we send it to speech-to-text API to transcribe 
    /// </summary>
    public async Task<IHttpFile?> ConvertAudioToWebM(IHttpFile file)
    {
        if (!file.FileName.EndsWith("mp4")) 
            return file;
        
        var appConfig = Container.Resolve<AppConfig>();
        if (appConfig.FfmpegPath == null)
            throw new Exception("Could not resolve path to ffmpeg");
        
        var now = DateTime.UtcNow;
        var time = $"{now:yyyy-M-d_s.fff}";
        var tmpPath = Environment.CurrentDirectory.CombineWith("App_Data", "tmp").AssertDir();
        var tmpMp4 = tmpPath.CombineWith($"{time}.mp4");
        await using (File.Create(tmpMp4)) {}
        var tmpWebm = tmpPath.CombineWith($"{time}.webm");
        
        var msMp4 = await file.InputStream.CopyToNewMemoryStreamAsync();
        await using (var fsMp4 = File.OpenWrite(tmpMp4))
        {
            await msMp4.WriteToAsync(fsMp4);
        }
        await ProcessUtils.RunShellAsync($"{appConfig.FfmpegPath} -i {tmpMp4} {tmpWebm}");
        File.Delete(tmpMp4);
        
        HttpFile? to = null;
        await using (var fsWebm = File.OpenRead(tmpWebm))
        {
            to = new HttpFile(file) {
                FileName = file.FileName.WithoutExtension() + ".webm",
                InputStream = await fsWebm.CopyToNewMemoryStreamAsync()
            };
        }
        File.Delete(tmpWebm);
                
        ThreadPool.QueueUserWorkItem(_ => {
            try
            {
                var origPath = $"/recordings/{now:yyyy/MM/dd}/{now.TimeOfDay.TotalMilliseconds}.mp4";
                msMp4.Position = 0;
                VirtualFiles.WriteFile(origPath, msMp4);
            }
            catch (Exception ignore) {}
        });

        return to;
    }

    public static void AssertGoogleCloudCredentials()
    {
        var googleCredentials = Environment.GetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS");
        if (string.IsNullOrEmpty(googleCredentials))
            throw new Exception("GOOGLE_APPLICATION_CREDENTIALS Environment Variable not set");
        if (!File.Exists(googleCredentials))
            throw new Exception($"GOOGLE_APPLICATION_CREDENTIALS '{googleCredentials}' does not exist");
    }
    
    public static void RegisterKey() =>
        Licensing.RegisterLicense("OSS BSD-3-Clause 2023 https://github.com/NetCoreApps/CoffeeShop TzcMtIEiQGgiyp2liwLwkd73PbIstK+6cFR8fbFNOnX1GEwJXq2TQM8LFP1e3HosMS7KiMNh6i7bktZxEznGq59Fhe1bFvUZkNwu74Y3U5kq5rbxPhVdJ+z//0opOl6rZl4pakkH99gx5LeLADVziEhLoIL7VoZlRcsE1UnpdRQ=");
}
