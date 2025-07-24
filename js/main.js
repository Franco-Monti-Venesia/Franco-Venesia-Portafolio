
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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const successMessage = document.getElementById("success-message");

  if (form) {
    form.addEventListener("submit", function () {
      setTimeout(() => {
        successMessage.style.display = "block";
        successMessage.style.opacity = 1;

        setTimeout(() => {
          successMessage.style.opacity = 0;
          successMessage.style.display = "none";
        }, 4000); // Ocultar luego de 4 segundos
      }, 500); // Mostrar levemente después de enviar
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const success = params.get("success");
  const successMessage = document.getElementById("success-message");

  if (success === "true" && successMessage) {
    successMessage.style.display = "block";
    successMessage.style.opacity = 1;

    setTimeout(() => {
      successMessage.style.opacity = 0;
      successMessage.style.display = "none";
    }, 4000);
  }
});
