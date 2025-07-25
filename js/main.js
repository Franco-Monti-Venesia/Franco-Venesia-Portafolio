const mobileMenu = document.getElementById("mobile-menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const modeToggle = document.getElementById("mode-toggle");
const mobileThemeToggle = document.getElementById("theme-toggle-mobile");
const mobileThemeIcon = document.getElementById("mobile-theme-icon");

// --- Ignorar configuración del sistema ---
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

// Evitar zoom en móviles
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

document.querySelectorAll(".mobile-links a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

document.querySelectorAll(".logo, .logo-menu").forEach(logo => {
  logo.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Modo claro/oscuro desktop
modeToggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Modo claro/oscuro mobile
mobileThemeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  mobileThemeIcon.src = isLight ? "assets/icons/sun.svg" : "assets/icons/moon.svg";
  localStorage.setItem("theme", isLight ? "light" : "dark");
  if (modeToggle) modeToggle.checked = isLight;
});

// Validación y control del formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = nameInput.nextElementSibling;
  const emailError = emailInput.nextElementSibling;
  const messageError = messageInput.nextElementSibling;

  const successMessage = document.getElementById("success-message");

  if (form) {
    form.addEventListener("submit", function (e) {
      let isValid = true;

      // Validar nombre
      if (nameInput.value.trim() === "") {
        nameError.style.display = "block";
        nameError.textContent = "El nombre es obligatorio";
        isValid = false;
      } else {
        nameError.style.display = "none";
      }

      // Validar email
      const emailValue = emailInput.value.trim();
      if (emailValue === "") {
        emailError.style.display = "block";
        emailError.textContent = "Se requiere correo electrónico";
        isValid = false;
      } else if (!emailValue.includes("@")) {
        emailError.style.display = "block";
        emailError.textContent = "El correo debe contener @";
        isValid = false;
      } else {
        emailError.style.display = "none";
      }

      // Validar mensaje
      if (messageInput.value.trim() === "") {
        messageError.style.display = "block";
        messageError.textContent = "El mensaje es obligatorio";
        isValid = false;
      } else {
        messageError.style.display = "none";
      }

      if (!isValid) {
        e.preventDefault(); // Evita que se envíe si no es válido
        return;
      }

      // Si es válido, dejar que se envíe y mostrar el mensaje de éxito
      setTimeout(() => {
        successMessage.style.display = "block";
        successMessage.style.opacity = 1;

        setTimeout(() => {
          successMessage.style.opacity = 0;
          successMessage.style.display = "none";
        }, 4000);
      }, 500);
    });
  }
});
