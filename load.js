window.addEventListener("load", () => {
  const elements = document.querySelectorAll(".hidden");
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 100);
  });
});

window.addEventListener("load", () => {
  const elements = document.querySelectorAll(".hiddenhero");
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("showhero");
    }, index * 100);
  });
});