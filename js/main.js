const mobileMenu = document.getElementById("mobile-menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const modeToggle = document.getElementById("mode-toggle");
const mobileThemeToggle = document.getElementById("theme-toggle-mobile");
const mobileThemeIcon = document.getElementById("mobile-theme-icon");

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

  mobileThemeIcon.src = isLight ? "assets/icons/sun.svg" : "assets/icons/moon.svg";
  localStorage.setItem("theme", isLight ? "light" : "dark");

  // 🟣 SINCRONIZAR TOGGLE DESKTOP
  const modeToggle = document.getElementById("mode-toggle");
  if (modeToggle) {
    modeToggle.checked = isLight;
  }
});

// Set icono correcto al cargar
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    mobileThemeIcon.src = "assets/icons/sun.svg";
  } else {
    mobileThemeIcon.src = "assets/icons/moon.svg";
  }
});

  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  let index = 0;

  function updateCarousel() {
    const itemWidth = items[0].offsetWidth + 32; // 32px por el gap (2rem)
    track.style.transform = `translateX(-${index * itemWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (index < items.length - 1) {
      index++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel);

