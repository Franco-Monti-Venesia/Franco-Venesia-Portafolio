
const mobileMenu = document.getElementById("mobile-menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const modeToggle = document.getElementById("mode-toggle");
const mobileThemeToggle = document.getElementById("theme-toggle-mobile");
const mobileThemeIcon = document.getElementById("mobile-theme-icon");

// --- Ignorar configuración del sistema: NO usar prefers-color-scheme ni zoom automático ---

// Al cargar: forzar modo guardado en localStorage (o usar dark por defecto)
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  if (savedTheme === "light") {
    document.body.classList.add("light");
    if (mobileThemeIcon) mobileThemeIcon.src = "assets/icons/sun.svg";
    if (modeToggle) modeToggle.checked = true;
  } else {
    document.body.classList.remove("light");
    if (mobileThemeIcon) mobileThemeIcon.src = "assets/icons/moon.svg";
    if (modeToggle) modeToggle.checked = false;
  }
});

// Evitar zoom del sistema en móviles (Android/Samsung, etc)
const metaTag = document.querySelector("meta[name=viewport]");
if (metaTag) {
  metaTag.setAttribute(
    "content",
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
  );
}

// Abrir/cerrar menú hamburguesa
openMenu.onclick = () => mobileMenu.classList.add("active");
closeMenu.onclick = () => mobileMenu.classList.remove("active");

// Cerrar menú mobile al hacer clic en cualquier link del menú
document.querySelectorAll(".mobile-links a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Cerrar menú mobile al hacer clic en el logo (versión mobile)
document.querySelectorAll(".logo, .logo-menu").forEach(logo => {
  logo.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Modo claro/oscuro en desktop
modeToggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Modo claro/oscuro en mobile
mobileThemeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");

  mobileThemeIcon.src = isLight ? "assets/icons/sun.svg" : "assets/icons/moon.svg";
  localStorage.setItem("theme", isLight ? "light" : "dark");

  // 🟣 Sincronizar toggle desktop
  if (modeToggle) {
    modeToggle.checked = isLight;
  }
});

document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const nameInput = form.querySelector("#name");
  const emailInput = form.querySelector("#email");
  const messageInput = form.querySelector("#message");

  const nameError = form.querySelector('label[for="name"] + input + .error-message');
  const emailError = form.querySelector('label[for="email"] + input + .error-message');
  const messageError = form.querySelector('label[for="message"] + textarea + .error-message');

  let isValid = true;

  // Ocultar mensajes de error
  nameError.style.display = "none";
  emailError.style.display = "none";
  messageError.style.display = "none";

  // Validaciones
  if (nameInput.value.trim() === "") {
    nameError.style.display = "block";
    isValid = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.style.display = "block";
    isValid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.style.display = "block";
    isValid = false;
  }

  // Si todo está bien, enviar
  if (isValid) {
    alert("¡Mensaje enviado con éxito!");
    form.reset();
  }
});


document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = nameInput.nextElementSibling;
  const emailError = emailInput.nextElementSibling;
  const messageError = messageInput.nextElementSibling;

  let isValid = true;

  // Limpiar errores anteriores
  nameError.style.display = "none";
  emailError.style.display = "none";
  messageError.style.display = "none";

  // Validar Nombre
  if (nameInput.value.trim() === "") {
    nameError.style.display = "block";
    isValid = false;
  }

  // Validar Email
  if (emailInput.value.trim() === "") {
    emailError.style.display = "block";
    isValid = false;
  }

  // Validar Mensaje
  if (messageInput.value.trim() === "") {
    messageError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    alert("¡Mensaje enviado con éxito!");
    this.reset();
  }
});
