document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-audio');

    // Intentar reproducir el audio al cargar la página
    audio.play().catch(error => {
        console.log('La reproducción automática fue bloqueada, intentando permitir la reproducción al hacer clic en la página.');
    });

    // Añadir un evento de clic para alternar la reproducción y pausa del audio 
    document.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch(error => {
                console.log('Error al reproducir el audio:', error);
            });
        } else {
            audio.pause();
        }
    });
});