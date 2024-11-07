// Efecto de desplazamiento suave entre secciones
document.querySelectorAll('.nav-list a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Modal de bienvenida al cargar la página
window.addEventListener('load', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>Bienvenido a Spa Belleza Natural</h2>
            <p>¡Disfruta de un 10% de descuento en tu primera visita!</p>
            <button class="close-modal">Cerrar</button>
        </div>`;
    document.body.appendChild(modal);

    const closeBtn = document.querySelector('.close-btn');
    const closeModal = document.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    closeModal.addEventListener('click', () => modal.style.display = 'none');

    modal.style.display = 'flex';
});

