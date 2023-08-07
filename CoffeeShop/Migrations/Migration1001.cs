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
    
    public override void Up()
    {
        Db.CreateTable<Category>();
        Db.CreateTable<Option>();
        Db.CreateTable<OptionQuantity>();
        Db.CreateTable<CategoryOption>();
        Db.CreateTable<Sku>();
        
        var categories = new List<Category>();
        var categoryOptions = new List<CategoryOption>();
        var options = new List<Option>();
        var skus = new List<Sku>();
        var optionQuantities = new[]{ "no", "light", "regular", "extra", "1", "2", "3", "4", "5" }
            .Map(x => new OptionQuantity {
                Name = x
            });
        Db.SaveAll(optionQuantities);
        
        void AddOptions(string type, string[] names, bool? allowQuantity = false)
        {
            var item = new Option
            {
                Type = type,
                Names = new(names),
                AllowQuantity = allowQuantity,
            };
            Db.Save(item);
            options.Add(item);
        }
        
        void AddCategorySkus(string category, 
            (string name, decimal cost)[] skuInfos, 
            string[]? optionTypes = null,
            string[]? temperatures = null,
            string[]? sizes = null,
            string? defaultSize = null)
        {
            var cat = new Category
            {
                Name = category,
                Description = category.SplitCamelCase(),
                Temperature = temperatures != null ? new(temperatures) : null,
                Size = sizes != null ? new(sizes) : null,
                DefaultSize = defaultSize,
            };
            Db.Save(cat);
            categories.Add(cat);

            foreach (var optionType in optionTypes.Safe())
            {
                var option = options.First(x => x.Type == optionType);
                var categoryOption = new CategoryOption
                {
                    CategoryId = cat.Id,
                    OptionId = option.Id,
                };
                Db.Save(categoryOption);
                categoryOptions.Add(categoryOption);
            }
            
            foreach (var skuInfo in skuInfos)
            {
                var sku = new Sku
                {
                    CategoryId = cat.Id,
                    Name = skuInfo.name,
                    Cost = skuInfo.cost,
                };
                Db.Save(sku);
                skus.Add(sku);
            }
        }

        AddOptions("BakeryOptions", new[] {
            "Butter", 
            "Strawberry Jam", 
            "Cream Cheese",
        });
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
            "Espresso Shot", 
        }, allowQuantity:true);
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
        }, allowQuantity:true);
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
        });
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
        
        AddCategorySkus("BakeryProducts", new[] {
            ("Apple Bran Muffin", 4m),
            ("Blueberry Muffin", 4),
            ("Lemon Poppy seed Muffin", 4),
            ("Bagel", 4),
        }, new[]{ "BakeryOptions", "BakeryPreparations" });
        
        AddCategorySkus("LatteDrinks", new[] {
            ("Cappuccino", 5.5m),
            ("Flat White", 5),
            ("Latte", 5),
            ("Latte Macchiato", 5),
            ("Mocha", 4.5m),
            ("Chai Latte", 4),
        }, new[] { "Milks", "Sweeteners", "Syrups", "Toppings", "Caffeines", "LattePreparations" },
           new[] { "Hot", "Extra Hot", "Warm", "Iced" },
           new[] { "Short", "Tall", "Grande", "Venti" }, defaultSize:"Grande");

        AddCategorySkus("EspressoDrinks", new[] {
            ("Espresso", 4.5m),
            ("Lungo", 5),
            ("Ristretto", 5),
            ("Macchiato", 5),
        }, new[] { "Creamers", "Sweeteners", "Syrups", "Toppings", "Caffeines", "LattePreparations" },
           new[] { "Hot", "Extra Hot", "Warm", "Iced" },
           new[] { "Solo", "Doppio", "Triple", "Quad" }, defaultSize:"Doppio");
        
        AddCategorySkus("CoffeeDrinks", new[] {
                ("Americano", 4.5m),
                ("Coffee", 5),
            }, new[] { "Creamers", "Sweeteners", "Syrups", "Toppings", "Caffeines", "LattePreparations" },
            new[] { "Hot", "Extra Hot", "Warm", "Iced" },
            new[] { "Short", "Tall", "Grande", "Venti" }, defaultSize:"Grande");
    }

    public override void Down()
    {
        Db.DeleteAll<Sku>();
        Db.DeleteAll<CategoryOption>();
        Db.DeleteAll<OptionQuantity>();
        Db.DeleteAll<Option>();
        Db.DeleteAll<Category>();

        Db.DropTable<Sku>();
        Db.DropTable<CategoryOption>();
        Db.DropTable<OptionQuantity>();
        Db.DropTable<Option>();
        Db.DropTable<Category>();
    }
}
