// Importación de las funciones y datos necesarios
import { productos } from './data.js';
import { showCarrito, calcularTotal, agregarAlCarrito, vaciarCarrito, toggleSeccionCarrito } from './cart.js';

// Evento que se ejecuta cuando el contenido del DOM se ha cargado
document.addEventListener("DOMContentLoaded", function() {

  // Elementos del DOM
  const listaProductos = document.getElementById("lista-productos");
  const botonCarrito = document.getElementById("boton-carrito");
  const contadorCarrito = document.getElementById("cart-counter");

  // Mostrar productos
  renderizarProductos();

  // Evento para agregar un producto al carrito
  listaProductos.addEventListener("click", function(event) {
    if (event.target.classList.contains("add-to-cart-btn")) {
      const productId = event.target.dataset.productId;
      agregarAlCarrito(productId);
    }
  });

  // Evento para cambiar la visibilidad del carrito de compras
  botonCarrito.addEventListener("click", function() {
    toggleSeccionCarrito();
  });

  // Evento para vaciar el carrito
  document.getElementById("boton-vaciar-carrito").addEventListener("click", function() {
    vaciarCarrito();
  });

  // Mostrar el carrito de compras y calcular el precio total
  showCarrito();
  calcularTotal();
  
  // Función para mostrar la lista de productos
  function renderizarProductos() {
    listaProductos.innerHTML = "";
    productos.forEach(producto => {
      const tarjetaProducto = `
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${producto.img}" alt="Imagen del producto" class="img-fluid">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text"><strong>Precio:</strong> $${producto.precio.toFixed(0)}</p>
                <button class="btn btn-primary add-to-cart-btn" data-product-id="${producto.id}">Añadir al carrito</button>
              </div>
            </div>
          </div>
        </div>
      `;
      listaProductos.innerHTML += tarjetaProducto;
    });
  }

  // Contador de productos en el carrito
  updateContador();

  // Función para actualizar el contador de productos en el carrito
  function updateContador() {
    const itemsCarrito = JSON.parse(localStorage.getItem("cartItems")) || [];
    contadorCarrito.textContent = itemsCarrito.length;
  }
});