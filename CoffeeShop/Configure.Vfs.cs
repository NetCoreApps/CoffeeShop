using Amazon;
using Amazon.S3;
using CoffeeShop.ServiceInterface;
using Google.Cloud.Storage.V1;
using ServiceStack.Azure.Storage;
using ServiceStack.GoogleCloud;
using ServiceStack.IO;

[assembly: HostingStartup(typeof(CoffeeShop.ConfigureVfs))]

namespace CoffeeShop;

public class ConfigureVfs : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureAppHost(appHost =>
        {
            if (AppTasks.IsRunAsAppTask()) return;

            var vfsProvider = appHost.AppSettings.Get<string>("VfsProvider");
            if (vfsProvider == nameof(GoogleCloudVirtualFiles))
            {
                GoogleCloudConfig.AssertValidCredentials();
                appHost.VirtualFiles = new GoogleCloudVirtualFiles(
                    StorageClient.Create(), appHost.Resolve<AppConfig>().AssertGcpConfig().Bucket);
            }
            else if (vfsProvider == nameof(S3VirtualFiles))
            {
                var aws = appHost.Resolve<AppConfig>().AssertAwsConfig();
                appHost.VirtualFiles = new S3VirtualFiles(new AmazonS3Client(aws.AccessKey, aws.SecretKey,
                    RegionEndpoint.GetBySystemName(aws.Region)), aws.Bucket);
            }
            else if (vfsProvider == nameof(AzureBlobVirtualFiles))
            {
                var az = appHost.Resolve<AppConfig>().AssertAzureConfig();
                appHost.VirtualFiles = new AzureBlobVirtualFiles(az.ConnectionString, az.ContainerName);
            }
            else if (vfsProvider == nameof(R2VirtualFiles))
            {
                var r2 = appHost.Resolve<AppConfig>().AssertR2Config();
                appHost.VirtualFiles = new R2VirtualFiles(new AmazonS3Client(r2.AccessKey, r2.SecretKey,
                    new AmazonS3Config {
                        ServiceURL = $"https://{r2.AccountId}.r2.cloudflarestorage.com",
                    }), r2.Bucket);
            }
            //else uses default FileSystemVirtualFiles
        });
}