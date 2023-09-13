using CoffeeShop.ServiceModel;
using ServiceStack;
using ServiceStack.OrmLite;

namespace CoffeeShop.ServiceInterface;

public class CoffeeShopServices : Service
{
    public IAutoQueryDb AutoQuery { get; set; }
    
    public async Task<object> Any(UpdateCategory request)
    {
        // Perform all RDBMS Updates within the same Transaction
        using var trans = Db.OpenTransaction();

        Category? response = null;
        var ignore = new[] { nameof(request.Id), nameof(request.AddOptionIds), nameof(request.RemoveOptionIds) };
        // Only call AutoQuery Update if there's something to update
        if (request.ToObjectDictionary().HasNonDefaultValues(ignoreKeys:ignore))
        {
            response = (Category) await AutoQuery.PartialUpdateAsync<Category>(request, Request, Db);
        }
        if (request.RemoveOptionIds?.Count > 0)
        {
            await Db.DeleteAsync<CategoryOption>(x => x.CategoryId == request.Id && request.RemoveOptionIds.Contains(x.OptionId));
        }
        if (request.AddOptionIds?.Count > 0)
        {
            await Db.InsertAllAsync(request.AddOptionIds.Map(id => new CategoryOption { CategoryId = request.Id, OptionId = id }));
        }
        trans.Commit();

        response ??= request.ConvertTo<Category>();
        return response;
    }
}