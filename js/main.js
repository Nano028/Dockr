/* ===============================
   DOCKR - SCRIPT.JS (MEJORADO)
=============================== */

/* Reveal on scroll */
const revealItems = document.querySelectorAll(
  ".pain-card, .benefit-card, .case-card, .price-card, .steps-grid article, .contact-form, .contact-copy",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});

/* Header border on scroll */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.style.borderBottom = "1px solid rgba(255,255,255,.08)";
  } else {
    header.style.borderBottom = "1px solid rgba(255,255,255,.04)";
  }
});

/* Formulario profesional temporal */
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const button = form.querySelector("button");
    const originalText = button.innerText;

    button.innerText = "Enviado ✓";
    button.disabled = true;

    setTimeout(() => {
      button.innerText = originalText;
      button.disabled = false;
      form.reset();
    }, 2200);
  });
}

/* =====================================
   HERO MOCKUP THEMES ROTATIVOS
===================================== */

const phoneMock = document.querySelector(".phone-front");

if (phoneMock) {
  const themes = ["theme-dark", "theme-light", "theme-blue"];
  let current = 0;

  phoneMock.classList.add(themes[current]);

  setInterval(() => {
    phoneMock.classList.remove(...themes);

    current++;
    if (current >= themes.length) current = 0;

    phoneMock.classList.add(themes[current]);
  }, 3200);
}
