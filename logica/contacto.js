function enviarFormulario(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const alerta = document.getElementById("alerta");

  alerta.innerHTML = ""; // limpiar alertas previas

  // Validación básica
  if (!nombre || !email || !mensaje) {
    mostrarAlerta("Por favor, completá todos los campos.", "error");
    return;
  }

  // Simulación de envío exitoso
  mostrarAlerta("¡Mensaje enviado con éxito! Te responderemos pronto. 💬", "exito");
  document.querySelector("form").reset();
}

function mostrarAlerta(texto, tipo) {
  const alerta = document.getElementById("alerta");
  const div = document.createElement("div");
  div.className = `alerta ${tipo}`;
  div.textContent = texto;

  alerta.appendChild(div);

  // Mostrar animación suave
  setTimeout(() => {
    div.style.opacity = "1";
    div.style.transform = "translateY(0)";
  }, 100);

  // Desaparece después de 3 segundos
  setTimeout(() => {
    div.style.opacity = "0";
    div.style.transform = "translateY(-10px)";
    setTimeout(() => div.remove(), 500);
  }, 3000);
}
