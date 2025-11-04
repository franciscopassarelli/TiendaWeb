const productos = [
  // --- CAMPERAS ---
  { nombre: "Campera Magnet", precio: 40000, categoria: "camperas", img: "../images/campera-magnet-negra.jpg" },
  { nombre: "Campera Ying Yang", precio: 55000, categoria: "camperas", img: "../images/campera-blancoynegro.jpg" },

  // --- BUZOS ---
  { nombre: "Canguro Caótico", precio: 25000, categoria: "buzos", img: "../images/buzo-caotico.jpg" },
  { nombre: "Canguro Wash", precio: 28000, categoria: "buzos", img: "../images/buzo-lavado.jpg" },

  // --- REMERAS ---
  { nombre: "Remeron Givenchy", precio: 40000, categoria: "remeras", img: "../images/givenchy.jpg" },
  { nombre: "Osito Muscle", precio: 55000, categoria: "remeras", img: "../images/osito-muscle.jpg" },
  { nombre: "Remeron Angel", precio: 25000, categoria: "remeras", img: "../images/remeron-angel.jpg" },
  { nombre: "Remeron Fuel", precio: 28000, categoria: "remeras", img: "../images/remeron-fuel.jpg" },
  { nombre: "Remeron Smile", precio: 3500, categoria: "remeras", img: "../images/smile.jpg" },
  { nombre: "Sonrrisa Oscura", precio: 7200, categoria: "remeras", img: "../images/sonrrisa-oscura.jpg" },
  { nombre: "Remeron cuello angel", precio: 12000, categoria: "remeras", img: "../images/remeron-bordado-cuello.jpg" },
  { nombre: "Remeron Overzice", precio: 3200, categoria: "remeras", img: "../images/remera-overzise.webp" },

  // --- PANTALONES ---
  { nombre: "Baggy Classic", precio: 40000, categoria: "pantalones", img: "../images/jean-baggy-classic.jfif" },
];

// Mostrar productos dinámicamente
function mostrarCategoria(categoria) {
  const contenedor = document.getElementById("productosContainer");
  contenedor.innerHTML = "";

  const filtrados =
    categoria === "todos" ? productos : productos.filter(p => p.categoria === categoria);

  filtrados.forEach(prod => {
    const articulo = document.createElement("article");
    articulo.classList.add("product");
    articulo.innerHTML = `
      <img src="${prod.img}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p>$${prod.precio.toLocaleString()}</p>
      <button onclick="agregarAlCarrito('${prod.nombre}')">Agregar al carrito</button>
    `;
    contenedor.appendChild(articulo);
  });
}

// Modo claro/oscuro
const modoBtn = document.getElementById("modoBtn");
modoBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
  modoBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Alerta carrito
function agregarAlCarrito(producto) {
  alert(`"${producto}" fue agregado al carrito.`);
}

// Mostrar todos por defecto al cargar
window.addEventListener("DOMContentLoaded", () => mostrarCategoria("todos"));
