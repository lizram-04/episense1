$("#btn-quiz").on('click', function(){
    $.redirect('/Home/Quiz');
});

$("#btn-kit").on('click', function(){
    $.redirect('/Home/Kit');
});

document.querySelectorAll('.carousel-wrapper').forEach((wrapper, index) => {
    const inputHidden = document.getElementById(`respuesta${index + 1}`);

    // Mover con el mouse
    let isDown = false;
    let startX, scrollLeft;
    wrapper.addEventListener('mousedown', e => {
        isDown = true;
        startX = e.pageX - wrapper.offsetLeft;
        scrollLeft = wrapper.scrollLeft;
        wrapper.classList.add('active');
    });
    wrapper.addEventListener('mouseleave', () => isDown = false);
    wrapper.addEventListener('mouseup', () => isDown = false);
    wrapper.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - wrapper.offsetLeft;
        const walk = (x - startX) * 2;
        wrapper.scrollLeft = scrollLeft - walk;
    });

    // Permitir seleccionar
    wrapper.querySelectorAll('.carousel-option').forEach(option => {
        option.addEventListener('click', () => {
            wrapper.querySelectorAll('.carousel-option').forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
            if (inputHidden) {
                inputHidden.value = option.textContent.trim(); // guarda la respuesta seleccionada
            }
        });
    });
});