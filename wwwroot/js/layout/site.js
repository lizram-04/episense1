const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
const htmlInicioIcon = document.getElementById('inicio_cerebro');
const htmlInicioTitulo = document.getElementById('inicio_titulo');

setTheme(initialTheme);
if(htmlInicioIcon != null)
    setThemeIconIndex(initialTheme);

themeToggle.addEventListener('click', () => {
    const newTheme = html.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if(htmlInicioIcon != null)
        setThemeIconIndex(newTheme);
});

function setTheme(theme) {
    html.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
}

function setThemeIconIndex(theme) {
    const icon = theme === 'light' ? '../images/cerebro-morado.png' : '../images/cerebro-blanco.png';
    const title = theme === 'light' ? '#93599f' : 'white';
    htmlInicioIcon.setAttribute('src', icon);
    htmlInicioTitulo.style.color = title;
}   

$('.logo-inicio').on('click',function(){

    $.redirect('/Home/Index');
})