using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CoffeeShop.Pages;

public class BlogModel : PageModel
{
    [FromQuery]
    public string? Author { get; set; }
    [FromQuery]
    public string? Tag { get; set; }
}