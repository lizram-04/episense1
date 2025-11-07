var builder = WebApplication.CreateBuilder(args);

// Configuración específica para MonsterASP
builder.WebHost.UseWebRoot("wwwroot");
builder.WebHost.UseContentRoot(Directory.GetCurrentDirectory());

// Tus servicios
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configuración del pipeline
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();

// IMPORTANTE: Esto sirve archivos desde wwwroot
app.UseStaticFiles();

app.UseRouting();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();