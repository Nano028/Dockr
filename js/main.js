/* ===============================
   DOCKR - SCRIPT.JS
=============================== */

/* Reveal on scroll */
const revealItems = document.querySelectorAll(
  ".pain-card, .benefit-card, .case-card, .price-card, .payment-card, .steps-grid article, .contact-form, .contact-copy",
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
  { threshold: 0.15 },
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});

/* Header border on scroll */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.style.borderBottom =
    window.scrollY > 10
      ? "1px solid rgba(255,255,255,.08)"
      : "1px solid rgba(255,255,255,.04)";
});

/* Form submit UX */
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const button = form.querySelector("button");
    const original = button.innerText;

    button.innerText = "Enviado ✓";
    button.disabled = true;

    setTimeout(() => {
      button.innerText = original;
      button.disabled = false;
      form.reset();
    }, 2200);
  });
}

/* Mockup rotating themes */
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

/* ===============================
   FAQ ACCORDION
=============================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");

  button.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach((faq) => faq.classList.remove("active"));

    if (!isActive) {
      item.classList.add("active");
    }
  });
});
