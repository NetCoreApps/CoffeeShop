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
                var awsConfig = appHost.Resolve<AppConfig>().AssertAwsConfig();
                appHost.VirtualFiles = new S3VirtualFiles(new AmazonS3Client(
                    awsConfig.AccessKey,
                    awsConfig.SecretKey,
                    RegionEndpoint.GetBySystemName(awsConfig.Region)), awsConfig.Bucket);
            }
            else if (vfsProvider == nameof(R2VirtualFiles))
            {
                var r2Config = appHost.Resolve<AppConfig>().AssertR2Config();
                appHost.VirtualFiles = new R2VirtualFiles(new AmazonS3Client(
                    r2Config.AccessKey,
                    r2Config.SecretKey,
                    new AmazonS3Config {
                        ServiceURL = $"https://{r2Config.AccountId}.r2.cloudflarestorage.com",
                    }), r2Config.Bucket);
            }
            else if (vfsProvider == nameof(AzureBlobVirtualFiles))
            {
                var azureConfig = appHost.Resolve<AppConfig>().AssertAzureConfig();
                appHost.VirtualFiles = new AzureBlobVirtualFiles(azureConfig.ConnectionString, azureConfig.ContainerName);
            }
            //else uses default FileSystemVirtualFiles
        });
}