const images = document.querySelectorAll(".hero-img");
let index = 0;

setInterval(() => {
  // sacar visible actual
  images[index].classList.remove("active");

  // siguiente índice
  index = (index + 1) % images.length;

  // activar siguiente
  images[index].classList.add("active");
}, 3000);
