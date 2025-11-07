const circle = document.getElementById('circle2');
const button = document.getElementById('button');
const reset = document.getElementById('reset')
const length = circle.getTotalLength();
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

circle.style.strokeDasharray = length;
circle.style.strokeDashoffset = length;

let totalSeconds = 0;
let timer;
let isPlaying = false;

button.addEventListener('click', function() {
  isPlaying = !isPlaying;
  if(isPlaying){
    startTimer();
  }else{
    stopTimer();
  }
});

$("#btn-quiz").on('click', function(){
    $.redirect('/Home/Quiz');
});

$("#btn-kit").on('click', function(){
    $.redirect('/Home/Kit');
});

$("#btn-descargar").on('click', function(){
    $.redirect('/Home/RegistroDescarga');
});

reset.addEventListener('click', resetTimer);

function startTimer(){
  button.innerHTML = "PAUSAR<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' fill='currentColor' viewBox='0 0 16 16'><path d='M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5'/></svg>";
  timer = setInterval(function(){
    if(totalSeconds < 86400) { // 24 horas en segundos (24 * 60 * 60)
      totalSeconds++;
      
      // Calcular horas, minutos y segundos
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      
      // Actualizar la pantalla
      hour.textContent = (hours < 10 ? '0' : '') + hours;
      minute.textContent = (minutes < 10 ? '0' : '') + minutes;
      second.textContent = (seconds < 10 ? '0' : '') + seconds;
      
      // Actualizar el círculo de progreso para 24 horas
      circle.style.strokeDashoffset = length - (totalSeconds / 86400) * length;
    } else {
      // Se alcanzaron las 24 horas
      stopTimer();
      alert("¡Tiempo completado! Han pasado 24 horas.");
    }
  },1000)
}
  
function stopTimer(){
    clearInterval(timer);
    button.innerHTML = `INICIAR<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' fill='currentColor' viewBox='0 0 16 16'><path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393'/></svg>`;
  }

function resetTimer(){
  stopTimer();
  totalSeconds = 0;
  hour.textContent = '00';
  minute.textContent = '00';
  second.textContent = '00';
  circle.style.strokeDashoffset = length;
  isPlaying = false;
}