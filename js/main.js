const buttons = document.querySelectorAll(".dockr-btn");
const iframe = document.getElementById("dockr-frame");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const url = button.dataset.url;

    iframe.src = url;
  });
});
