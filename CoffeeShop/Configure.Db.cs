using ServiceStack.Data;
using ServiceStack.OrmLite;

[assembly: HostingStartup(typeof(CoffeeShop.ConfigureDb))]

namespace CoffeeShop;

// Database can be created with "dotnet run --AppTasks=migrate"   
public class ConfigureDb : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices((context,services) => services.AddSingleton<IDbConnectionFactory>(new OrmLiteConnectionFactory(
            context.Configuration.GetConnectionString("DefaultConnection") ?? "App_Data/db.sqlite",
            SqliteDialect.Provider)))
        .ConfigureAppHost(appHost =>
        {
            appHost.Plugins.Add(new AdminDatabaseFeature());
        });
}
