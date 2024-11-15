let indexCarrusel = 0;

function moverCarrusel(n) {
    indexCarrusel += n;
    mostrarCarrusel();
}

function irACarrusel(n) {
    indexCarrusel = n;
    mostrarCarrusel();
}

function mostrarCarrusel() {
    const carruselContainer = document.getElementById('carruselContainer');
    const items = document.querySelectorAll('.carrusel-item');
    const indicators = document.querySelectorAll('.carrusel-indicator');

    if (indexCarrusel >= items.length) indexCarrusel = 0;
    if (indexCarrusel < 0) indexCarrusel = items.length - 1;

    carruselContainer.style.transform = `translateX(-${indexCarrusel * 100}%)`;

    indicators.forEach(ind => ind.classList.remove('active'));
    indicators[indexCarrusel].classList.add('active');
}

// Navegación automática del carrusel
setInterval(() => moverCarrusel(1), 3000); // Cambia cada 3 segundos
