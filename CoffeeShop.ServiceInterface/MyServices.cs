using ServiceStack;
using CoffeeShop.ServiceModel;
using Microsoft.Extensions.Options;
using ServiceStack.OrmLite;

namespace CoffeeShop.ServiceInterface;

public class MyServices : Service
{
    public async Task<object> Any(AdminData request)
    {
        var tables = new (string Label, Type Type)[] 
        {
            ("Skus",              typeof(Product)),
            ("Categories",        typeof(Category)),
            ("Options",           typeof(Options)),
            ("Option Quantities", typeof(OptionQuantity)),
        };
        var dialect = Db.GetDialectProvider();
        var totalSql = tables.Map(x => $"SELECT '{x.Label}', COUNT(*) FROM {dialect.GetQuotedTableName(x.Type.GetModelMetadata())}")
            .Join(" UNION ");
        var results = await Db.DictionaryAsync<string,int>(totalSql);
        
        return new AdminDataResponse {
            PageStats = tables.Map(x => new PageStats {
                Label = x.Label, 
                Total = results[x.Label],
            })
        };
    }
}
