import { productos } from './data.js';
// funcion para mostrar los elementos en el carrito de compras
function showCarrito() {
  const contenedorCarrito = document.getElementById("items-carrito");
  const itemsCarrito = JSON.parse(localStorage.getItem("cartItems")) || [];

  contenedorCarrito.innerHTML = "";

  if (itemsCarrito.length === 0) {
    contenedorCarrito.innerHTML = "<p>El carrito está vacío.</p>";
    return;
  }

  itemsCarrito.forEach(item => {
    const itemCarrito = document.createElement("div");
    itemCarrito.classList.add("cart-item");
    itemCarrito.innerHTML = `
      <p><strong>Producto:</strong> ${item.nombre}</p>
      <p><strong>Precio:</strong> $${item.precio}</p>
      <hr>
    `;
    contenedorCarrito.appendChild(itemCarrito);
  });
}

// funcion para calcular y mostrar el precio total de los elementos en el carrito de compras
function calcularTotal() {
  const contenedorPrecioTotal = document.getElementById("precio-total");
  const itemsCarrito = JSON.parse(localStorage.getItem("cartItems")) || [];
  const total = itemsCarrito.reduce((acc, item) => acc + item.precio, 0);
  contenedorPrecioTotal.textContent = `$${total.toFixed(2)}`;
}

// funcion para agregar un producto al carrito de compras
function agregarAlCarrito(productId) {
  const itemsCarrito = JSON.parse(localStorage.getItem("cartItems")) || [];
  const productoParaAgregar = productos.find(producto => producto.id === parseInt(productId));
  
  if (productoParaAgregar) {
    itemsCarrito.push(productoParaAgregar);
    localStorage.setItem("cartItems", JSON.stringify(itemsCarrito));
    showCarrito(); 
    calcularTotal(); 
    updateContador(); 
    alert("Producto añadido al carrito con éxito!");
  }
}

// funcion para vaciar el carrito de compras
function vaciarCarrito() {
  localStorage.removeItem("cartItems");
  showCarrito();
  calcularTotal();
  updateContador();
}

// funcion para alternar la visibilidad de la sección del carrito de compras
function toggleSeccionCarrito() {
  const seccionCarrito = document.getElementById("seccion-carrito");
  if (seccionCarrito.style.display === "none") {
    seccionCarrito.style.display = "block";
    seccionCarrito.scrollIntoView({ behavior: 'smooth' });
  } else {
    seccionCarrito.style.display = "none";
  }
}

// funcion para actualizar el contador del carrito
function updateContador() {
  const contadorCarrito = document.getElementById("cart-counter");
  if (contadorCarrito) {
    const itemsCarrito = JSON.parse(localStorage.getItem("cartItems")) || [];
    contadorCarrito.textContent = itemsCarrito.length;
  }
}

export { showCarrito, calcularTotal, agregarAlCarrito, vaciarCarrito, toggleSeccionCarrito };