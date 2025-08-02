// === scripts.js ===

// Scroll suave para navegadores antiguos
if ('scrollBehavior' in document.documentElement.style === false) {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
      }
    });
  });
}

// Validación del formulario
const formulario = document.querySelector("form");
if (formulario) {
  formulario.addEventListener("submit", (e) => {
    const nombre = formulario.querySelector("#nombre");
    const email = formulario.querySelector("#email");
    const mensaje = formulario.querySelector("#mensaje");

    if (!nombre.value.trim() || !email.value.trim() || !mensaje.value.trim()) {
      e.preventDefault();
      alert("Por favor, rellena todos los campos obligatorios.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      e.preventDefault();
      alert("Introduce un correo electrónico válido.");
    }
  });
}

// Modo accesibilidad (ejemplo de contraste alto)
const activarAccesibilidad = () => {
  document.body.classList.toggle("alto-contraste");
};

// Puedes vincular este toggle con algún botón si lo deseas
// document.querySelector("#btn-accesibilidad").addEventListener("click", activarAccesibilidad);

// Mensaje de consola para depuración
console.log("Sitio cargado correctamente. Todos los scripts funcionando.");
