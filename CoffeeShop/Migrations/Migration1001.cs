using ServiceStack.DataAnnotations;
using ServiceStack.OrmLite;

namespace CoffeeShop.Migrations;

public class Migration1001 : MigrationBase
{
    public class Category
    {
        [AutoIncrement]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<string>? Temperatures { get; set; }
        public string? DefaultTemperature { get; set; }
        public List<string>? Sizes { get; set; }
        public string? DefaultSize { get; set; }
        public string? ImageUrl { get; set; }
    
        [Reference]
        public List<Product> Products { get; set; }

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
        public string? QuantityLabel { get; set; }
    }

    public class OptionQuantity
    {
        [AutoIncrement]
        public int Id { get; set; }
        public string Name { get; set; }
        
        public decimal Value { get; set; }
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

    public class Product
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
        
        public bool? AllowShots { get; set; }
    }

    public override void Up()
    {
        Db.CreateTable<Category>();
        Db.CreateTable<Option>();
        Db.CreateTable<OptionQuantity>();
        Db.CreateTable<CategoryOption>();
        Db.CreateTable<Product>();
        
        var options = new List<Option>();
        Db.SaveAll(new OptionQuantity[]
        {
            new() { Name = "no", Value = 0 },
            new() { Name = "light", Value = 0.5m },
            new() { Name = "regular", Value = 1 },
            new() { Name = "extra", Value = 2 },
        });
        
        void AddOptions(string type, string[] names, bool? allowQuantity = false, string? quantityLabel = null)
        {
            var item = new Option
            {
                Type = type,
                Names = new(names),
                AllowQuantity = allowQuantity,
                QuantityLabel = quantityLabel,
            };
            Db.Save(item);
            options.Add(item);
        }
        
        void AddCategoryProducts(string category, 
            (string name, decimal cost)[] productInfos, 
            string[]? optionTypes = null,
            string[]? temperatures = null,
            string? defaultTemperature = null,
            string[]? sizes = null,
            string? defaultSize = null)
        {
            var cat = new Category
            {
                Name = category,
                Description = category.SplitCamelCase(),
                Temperatures = temperatures != null ? new(temperatures) : null,
                DefaultTemperature = defaultTemperature,
                Sizes = sizes != null ? new(sizes) : null,
                DefaultSize = defaultSize,
                ImageUrl = $"/products/{category.SplitCamelCase().GenerateSlug()}.jpg",
            };
            Db.Save(cat);

            foreach (var optionType in optionTypes.Safe())
            {
                var option = options.First(x => x.Type == optionType);
                var categoryOption = new CategoryOption
                {
                    CategoryId = cat.Id,
                    OptionId = option.Id,
                };
                Db.Save(categoryOption);
            }
            
            foreach (var productInfo in productInfos)
            {
                var product = new Product
                {
                    CategoryId = cat.Id,
                    Name = productInfo.name,
                    Cost = productInfo.cost,
                    ImageUrl = $"/products/{productInfo.name.GenerateSlug()}.jpg",
                };
                Db.Save(product);
            }
        }

        AddOptions("BakeryOptions", new[] {
            "Butter", 
            "Strawberry Jam", 
            "Cream Cheese",
        }, allowQuantity:true);
        AddOptions("BakeryPreparations", new[] {
            "Warmed", 
            "Cut in Half", 
        });
        
        AddOptions("Milks", new[] {
            "Whole Milk", 
            "Two Percent Milk", 
            "NonFat Milk", 
            "Coconut Milk", 
            "Soy Milk", 
            "Almond Milk", 
            "Oat Milk",
        });
        AddOptions("Sweeteners", new[] {
            "Equal",
            "Honey",
            "Splenda",
            "Sugar",
            "Sugar in the Raw",
            "Sweet n Low",
        }, allowQuantity:true, quantityLabel:"packets");
        AddOptions("Syrups", new[] {
            "Almond Syrup",
            "Buttered rum Syrup",
            "Caramel Syrup",
            "Cinnamon Syrup",
            "Hazelnut Syrup",
            "Orange Syrup",
            "Peppermint Syrup",
            "Raspberry Syrup",
            "Toffee Syrup",
            "Vanilla Syrup",
        }, allowQuantity:true, quantityLabel:"pumps");
        AddOptions("Toppings", new[] {
            "Cinnamon",
            "Foam",
            "Ice",
            "Nutmeg",
            "Whipped Cream",
            "Water", 
        }, allowQuantity:true);
        AddOptions("Caffeines", new[] {
            "Regular",
            "Two Thirds Caf",
            "Half Caf",
            "One Third Caf",
            "Decaf", 
        }, allowQuantity:true, quantityLabel:"shots");
        AddOptions("LattePreparations", new[] {
            "For Here Cup",
            "Lid",
            "With Room",
            "To Go",
            "Dry",
            "Wet", 
        });
        
        AddOptions("Creamers", new[] {
            "Whole Milk Creamer",
            "Two percent Milk Creamer",
            "One percent Milk Creamer",
            "NonFat Milk Creamer",
            "Coconut Milk Creamer",
            "Soy Milk Creamer",
            "Almond Milk Creamer",
            "Oat Milk Creamer",
            "Half and Half",
            "Heavy Cream",
        });
        
        AddCategoryProducts("BakeryProducts", new[] {
            ("Apple Bran Muffin", 4m),
            ("Blueberry Muffin", 4),
            ("Lemon Poppy seed Muffin", 4),
            ("Bagel", 4),
        }, new[]{ "BakeryOptions", "BakeryPreparations" });
        
        AddCategoryProducts("LatteDrinks", new[] {
            ("Cappuccino", 5.5m),
            ("Flat White", 5),
            ("Latte", 5),
            ("Latte Macchiato", 5),
            ("Mocha", 4.5m),
            ("Chai Latte", 4),
        }, new[] { "Milks", "Sweeteners", "Syrups", "Toppings", "Caffeines", "LattePreparations" },
           new[] { "Iced", "Warm", "Hot", "Extra Hot" }, defaultTemperature:"Hot",
           new[] { "Short", "Tall", "Grande", "Venti" }, defaultSize:"Grande");

        AddCategoryProducts("EspressoDrinks", new[] {
            ("Espresso", 4.5m),
            ("Lungo", 5),
            ("Ristretto", 5),
            ("Macchiato", 5),
        }, new[] { "Creamers", "Sweeteners", "Syrups", "Toppings", "Caffeines", "LattePreparations" },
           new[] { "Iced", "Warm", "Hot", "Extra Hot" }, defaultTemperature:"Hot",
           new[] { "Solo", "Doppio", "Triple", "Quad" }, defaultSize:"Doppio");
        
        AddCategoryProducts("CoffeeDrinks", new[] {
                ("Americano", 4.5m),
                ("Coffee", 5),
            }, new[] { "Creamers", "Sweeteners", "Syrups", "Toppings", "Caffeines", "LattePreparations" },
            new[] { "Iced", "Warm", "Hot", "Extra Hot" }, defaultTemperature:"Hot",
            new[] { "Short", "Tall", "Grande", "Venti" }, defaultSize:"Grande");
    }

    public override void Down()
    {
        Db.DeleteAll<Product>();
        Db.DeleteAll<CategoryOption>();
        Db.DeleteAll<OptionQuantity>();
        Db.DeleteAll<Option>();
        Db.DeleteAll<Category>();

        Db.DropTable<Product>();
        Db.DropTable<CategoryOption>();
        Db.DropTable<OptionQuantity>();
        Db.DropTable<Option>();
        Db.DropTable<Category>();
    }
}
