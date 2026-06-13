const MIS_PRODUCTOS = {
    "modal-catalogo": [
        { nombre: "Medias Capibara", descripcion: "Varios diseños.", precio: 50, imagen: "medias1.jpg" },
        { nombre: "Medias Amanecer", descripcion: "Modelos exclusivos.", precio: 60, imagen: "medias2.jpg" }
    ]
};

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const grid = modal.querySelector('.products-grid');
    
    if (grid && MIS_PRODUCTOS[modalId]) {
        grid.innerHTML = ""; 
        MIS_PRODUCTOS[modalId].forEach(producto => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p><strong>$${producto.precio}</strong></p>
                <a href="https://wa.me/59898808548?text=Hola!%20Me%20interesa%20${encodeURIComponent(producto.nombre)}" 
                   target="_blank" class="buy-btn">Consultar por WhatsApp</a>
            `;
            grid.appendChild(productCard);
        });
    }
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; 
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto"; 
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
