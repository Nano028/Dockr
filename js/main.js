/* ===============================
   DOCKR - SCRIPT.JS
=============================== */

/* Reveal on scroll */
const revealItems = document.querySelectorAll(
  ".pain-card, .benefit-card, .case-card, .price-card, .steps-grid article, .contact-form, .contact-copy"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 80);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});

/* Header shadow on scroll */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.style.borderBottom = "1px solid rgba(255,255,255,.08)";
  } else {
    header.style.borderBottom = "1px solid rgba(255,255,255,.04)";
  }
});

/* Fake submit */
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Gracias. Tu solicitud fue enviada.");
    form.reset();
  });
}