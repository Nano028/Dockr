const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

elements.forEach((el) => observer.observe(el));

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

let showingFirst = true;

/* PARALLAX */
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  img1.style.transform = `translate(-50%, calc(-50% + ${scroll * 0.3}px))`;
  img2.style.transform = `translate(-50%, calc(-50% + ${scroll * 0.3}px))`;
});

/* TRANSICIÓN AUTOMÁTICA */
setInterval(() => {
  if (showingFirst) {
    img1.style.opacity = "0";
    img2.style.opacity = "1";
  } else {
    img1.style.opacity = "1";
    img2.style.opacity = "0";
  }

  showingFirst = !showingFirst;
}, 3000); // cambia cada 2.5 segundos

/* CARDS */
function flip(card) {
  card.classList.toggle("active");
}

const items = document.querySelectorAll(".carousel-item");

let activeIndex = 0;

// distancia visual entre elementos
const offset = 280;

function updateCarousel() {
  items.forEach((item, i) => {
    const position = i - activeIndex;

    // RESET
    item.style.zIndex = 1;
    item.style.opacity = 0.4;
    item.style.transform = "scale(0.85)";

    // CENTRO (ACTIVO)
    if (position === 0) {
      item.style.transform = "translateX(0px) scale(1.15)";
      item.style.zIndex = 5;
      item.style.opacity = 1;
    }

    // IZQUIERDA
    else if (position === -1) {
      item.style.transform = `translateX(${-offset}px) scale(0.9)`;
      item.style.opacity = 0.6;
      item.style.zIndex = 3;
    }

    // DERECHA
    else if (position === 1) {
      item.style.transform = `translateX(${offset}px) scale(0.9)`;
      item.style.opacity = 0.6;
      item.style.zIndex = 3;
    }

    // MÁS LEJOS IZQ
    else if (position < -1) {
      item.style.transform = `translateX(${-offset * 1.6}px) scale(0.75)`;
      item.style.opacity = 0.2;
      item.style.zIndex = 1;
    }

    // MÁS LEJOS DER
    else if (position > 1) {
      item.style.transform = `translateX(${offset * 1.6}px) scale(0.75)`;
      item.style.opacity = 0.2;
      item.style.zIndex = 1;
    }
  });
}
setInterval(() => {
  activeIndex = (activeIndex + 1) % items.length;
  updateCarousel();
}, 3000);
