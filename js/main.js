const mobileMenu = document.getElementById("mobile-menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const modeToggle = document.getElementById("mode-toggle");
const mobileThemeToggle = document.getElementById("theme-toggle-mobile");
const mobileThemeIcon = document.getElementById("mobile-theme-icon");

// Abrir/cerrar menú hamburguesa
openMenu.onclick = () => mobileMenu.classList.add("active");
closeMenu.onclick = () => mobileMenu.classList.remove("active");

// Modo claro/oscuro en desktop
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  modeToggle.checked = true;
}

modeToggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
});

// Modo claro/oscuro en mobile
mobileThemeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  mobileThemeIcon.src = isLight ? "assets/sun.svg" : "assets/moon.svg";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Set icono correcto al cargar
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    mobileThemeIcon.src = "assets/sun.svg";
  } else {
    mobileThemeIcon.src = "assets/moon.svg";
  }
});

document.body.classList.toggle("menu-open", menuAbierto);
