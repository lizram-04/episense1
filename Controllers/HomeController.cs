using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using episense.Models;

namespace episense.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public async Task<IActionResult> Ingresar()
    {
        return View();
    }
    
    public async Task<IActionResult> Registrar()
    {
        return View();
    }
    public async Task<IActionResult> Kit()
    {
        return View();
    }   

    public async Task<IActionResult> RegistroDescarga()
    {
        return View();
    }
    public async Task<IActionResult> Result(QuizModel model)
    {

        // Claves correctas en el mismo orden que las preguntas
        var respuestasCorrectas = new List<string>
        {
            "Una crisis convulsiva generalizada",
            "Alejar objetos peligrosos y proteger la cabeza del estudiante",
            "Menos de 5 minutos.",
            "Si dura más de 5 minutos, se repite o no recupera la conciencia",
            "Intentar abrirle la boca o detener sus movimientos.",
            "Colocar al estudiante de lado y dejarlo descansar",
            "Pedir ayuda médica aunque la crisis haya terminado",
            "Quede confundido o muy cansado por un rato",
            "Una crisis de ausencia",
            "El alumno no responde aunque se le hable",
            "Se desconecta por pocos segundos sin moverse ni caer",
            "Anotar los momentos y avisar al apoderado o especialista",
            "Si los episodios son muy seguidos, duran más de lo normal o van acompañados de caídas",
            "Tratar de “despertar” al alumno con toques o palabras",
            "Mantener la calma, proteger al estudiante y evitar que se lastime"
        };

        int correctas = 0;
        for (int i = 0; i < respuestasCorrectas.Count; i++)
        {
            if (i < model.Respuestas.Count &&
                string.Equals(model.Respuestas[i], respuestasCorrectas[i], StringComparison.OrdinalIgnoreCase))
            {
                correctas++;
            }
        }
        Console.WriteLine(respuestasCorrectas.Count);
        Console.WriteLine(correctas);
        ViewBag.TotalCorrectas = correctas;
        ViewBag.TotalPreguntas = respuestasCorrectas.Count;

        return View();
    }   
    public async Task<IActionResult> Quiz()
    {
        return View();
    }   

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
