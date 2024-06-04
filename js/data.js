// categoias juegos de mesa
const categoriaJuegosMesa = {
  id: 1,
  nombre: "Juegos de Mesa"
};

// categoria juegos de carta
const categoriaJuegosCartas = {
  id: 2,
  nombre: "Juegos de Cartas"
};

// productos mas categoria
const productos = [
  { 
    id: 1,
    nombre: "Monopoly",
    descripcion: "El clásico juego de compra y venta de propiedades.",
    precio: 18000,
    stock: 20,
    categoria: categoriaJuegosMesa,
    img: 'img/game-1.png'
  },
  { 
    id: 2,
    nombre: "Uno",
    descripcion: "Un emocionante juego de cartas donde debes deshacerte de todas tus cartas.",
    precio: 9000,
    stock: 25,
    categoria: categoriaJuegosCartas,
    img: 'img/game-2.png'
  },
  { 
    id: 3,
    nombre: "Mesa de Ajedrez",
    descripcion: "Una mesa de ajedrez de madera con tablero y piezas.",
    precio: 15000,
    stock: 10,
    categoria: categoriaJuegosMesa,
    img: 'img/game-3.png'
  }
];
// exportando productos
export { productos}; 