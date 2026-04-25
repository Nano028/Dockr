console.log("JS funcionando");

/* ================= HERO ================= */
const images = document.querySelectorAll(".hero-img");
let indexHero = 0;

setInterval(() => {
  images[indexHero].classList.remove("active");

  indexHero = (indexHero + 1) % images.length;

  images[indexHero].classList.add("active");
}, 3000);

/* ================= GALLERY ================= */
const items = document.querySelectorAll(".carousel-item");
const carousel = document.querySelector(".carousel");

let current = 0;
let intervalCarousel = null;

// ---------- UPDATE ----------
function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove("active", "prev", "next", "hidden");

    if (index === current) {
      item.classList.add("active");
    } else if (index === (current - 1 + items.length) % items.length) {
      item.classList.add("prev");
    } else if (index === (current + 1) % items.length) {
      item.classList.add("next");
    } else {
      item.classList.add("hidden");
    }
  });
}

// ---------- CLICK ----------
carousel.addEventListener("click", (e) => {
  const clicked = e.target.closest(".carousel-item");

  if (!clicked) return;

  if (clicked.classList.contains("next")) {
    current = (current + 1) % items.length;
  } else if (clicked.classList.contains("prev")) {
    current = (current - 1 + items.length) % items.length;
  } else {
    return; // si clickea el activo, no hace nada
  }

  updateCarousel();
});

// ---------- AUTOPLAY ----------
function startCarousel() {
  if (intervalCarousel) return; // evita duplicados

  intervalCarousel = setInterval(() => {
    current = (current + 1) % items.length;
    updateCarousel();
  }, 3000);
}

function stopCarousel() {
  clearInterval(intervalCarousel);
  intervalCarousel = null;
}

// ---------- HOVER PAUSE ----------
carousel.addEventListener("mouseenter", stopCarousel);
carousel.addEventListener("mouseleave", startCarousel);

// ---------- INIT ----------
updateCarousel();
startCarousel();
