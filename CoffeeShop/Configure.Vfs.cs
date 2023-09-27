using ServiceStack.IO;
using ServiceStack.Aws;
using ServiceStack.Azure;
using ServiceStack.Azure.Storage;
using ServiceStack.GoogleCloud;
using Amazon.S3;
using Google.Cloud.Storage.V1;

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
                    StorageClient.Create(), appHost.Resolve<GoogleCloudConfig>().Bucket!);
            }
            else if (vfsProvider == nameof(S3VirtualFiles))
            {
                var aws = appHost.Resolve<AwsConfig>();
                appHost.VirtualFiles = new S3VirtualFiles(new AmazonS3Client(
                    aws.AccessKey,
                    aws.SecretKey,
                    aws.ToRegionEndpoint()), aws.Bucket);
            }
            else if (vfsProvider == nameof(R2VirtualFiles))
            {
                var r2 = appHost.Resolve<R2Config>();
                appHost.VirtualFiles = new R2VirtualFiles(new AmazonS3Client(
                    r2.AccessKey,
                    r2.SecretKey,
                    new AmazonS3Config {
                        ServiceURL = r2.ToServiceUrl(),
                    }), r2.Bucket);
            }
            else if (vfsProvider == nameof(AzureBlobVirtualFiles))
            {
                var azure = appHost.Resolve<AzureConfig>();
                appHost.VirtualFiles = new AzureBlobVirtualFiles(azure.ConnectionString, azure.ContainerName);
            }
            //else uses default FileSystemVirtualFiles
        });
}
