using ServiceStack;
using ServiceStack.DataAnnotations;

namespace CoffeeShop.ServiceModel;

public class Category
{
    [AutoIncrement]
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public List<string>? Temperature { get; set; }
    public List<string>? Size { get; set; }
    public string? DefaultSize { get; set; }
    public string? ImageUrl { get; set; }
    
    [Reference]
    public List<Sku> Skus { get; set; }
    
    [Reference]
    public List<CategoryOption> CategoryOptions { get; set; }
}

public class Option
{
    [AutoIncrement]
    public int Id { get; set; }
    public string Type { get; set; }
    public List<string> Names { get; set; }
    public bool? AllowQuantity { get; set; }
}

public class OptionQuantity
{
    [AutoIncrement]
    public int Id { get; set; }
    public string Name { get; set; }
}

public class CategoryOption
{
    [AutoIncrement]
    public int Id { get; set; } 
    
    [References(typeof(Category))]
    public int CategoryId { get; set; }
    
    [References(typeof(Option))]
    public int OptionId { get; set; }
}

public class Sku
{
    [AutoIncrement]
    public int Id { get; set; }
    
    [References(typeof(Category))]
    public int CategoryId { get; set; }

    public string Name { get; set; }

    [Reference]
    public Category Category { get; set; }

    public decimal Cost { get; set; }

    public string? ImageUrl { get; set; }
}

[Route("/categories")]
public class QueryCategories : QueryDb<Category> {}

[Route("/skus")]
public class QuerySkus : QueryDb<Sku> {}
public class CreateSku : ICreateDb<Sku>
{
    public int CategoryId { get; set; }

    public string Name { get; set; }

    public decimal Cost { get; set; }

    public string? ImageUrl { get; set; }
}
public class UpdateSku : ICreateDb<Sku>
{
    public int Id { get; set; }

    public int CategoryId { get; set; }

    public string Name { get; set; }

    public decimal Cost { get; set; }

    public string? ImageUrl { get; set; }
}
public class DeleteSku : IDeleteDb<Sku>
{
    public int Id { get; set; }
}

[Route("/options")]
public class QueryOptions : QueryDb<Option> {}

[Route("/option-quantities")]
public class QueryOptionQuantities : QueryDb<OptionQuantity> {}

[Route("/coffeeshop/schema")]
public class CoffeeShopSchema : IReturn<string> {}

[Route("/coffeeshop/prompt")]
public class CoffeeShopPrompt : IReturn<string>
{
    public string Request { get; set; }
    public bool Execute { get; set; }
}


public class Cart
{
    public List<LineItem> Items { get; set; }
}
public class LineItem
{
    public string Type { get; set; }
    public Product Product { get; set; }
    public string Text { get; set; }
    public int Quantity { get; set; }
}
public class Product
{
    public string Type { get; set; }
    public string Name { get; set; }
    public List<ProductOption> Options { get; set; }
}
public class ProductOption
{
    public string Type { get; set; }
    public string Name { get; set; }
    public string Temperature { get; set; }
    public string Size { get; set; }
    public string OptionQuantity { get; set; }
}
