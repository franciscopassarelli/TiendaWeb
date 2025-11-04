const toggleBtn = document.getElementById('toggle-mode');
const body = document.body;

// Cargar preferencia del usuario
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️';
} else {
  toggleBtn.textContent = '🌙';
}

// Alternar modo oscuro
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


function agregarAlCarrito(producto) {
  mostrarAlerta(`🛒 "${producto}" fue agregado al carrito`, "exito");
}

function mostrarAlerta(mensaje, tipo) {
  const contenedor = document.getElementById("alert-container");

  const alerta = document.createElement("div");
  alerta.classList.add("alerta", tipo);
  alerta.textContent = mensaje;

  contenedor.appendChild(alerta);

  // Mostrar con animación
  setTimeout(() => (alerta.style.opacity = "1"), 50);

  // Desaparecer después de 3 segundos
  setTimeout(() => {
    alerta.style.opacity = "0";
    alerta.style.transform = "translateY(-10px)";
    setTimeout(() => alerta.remove(), 500);
  }, 3000);
}