// Definición de tus datos
const MIS_PRODUCTOS = {
    "modal-medias": [
        { nombre: "Medias Gruesas", descripcion: "Varios colores.", precio: 60, imagen: "url_de_tu_imagen_aqui" },
        { nombre: "Zoquetes Capibara", descripcion: "Varios diseños.", precio: 50, imagen: "url_de_tu_imagen_aqui" }
    ]
};

// Aquí pegas tus funciones openModal, closeModal y window.onclick que me pasaste
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const grid = modal.querySelector('.products-grid');
    if (grid && MIS_PRODUCTOS[modalId]) {
        grid.innerHTML = ""; 
        MIS_PRODUCTOS[modalId].forEach(producto => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-img-box"><img src="${producto.imagen}" alt="${producto.nombre}"></div>
                <div class="product-info">
                    <h3>${producto.nombre}</h3>
                    <p class="product-desc">${producto.descripcion}</p>
                    <div class="product-meta">
                        <span class="product-price">$${producto.precio}</span>
                        <a href="https://wa.me/59898808548?text=Hola!%20Me%20interesa%20${encodeURIComponent(producto.nombre)}" 
                           target="_blank" class="buy-btn">Consultar</a>
                    </div>
                </div>
            `;
            grid.appendChild(productCard);
        });
    }
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; 
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; 
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
