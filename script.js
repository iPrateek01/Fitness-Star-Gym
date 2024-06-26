document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navlinks = document.querySelector(".navlinks");
  const navmenu = document.querySelector(".navmenu");

  hamburger.addEventListener("click", () => {
    navmenu.classList.toggle("active");
  });

  const joinus = document.querySelector(".joinus");
  const form = document.querySelector(".form");
  joinus.addEventListener("click", () => {
    form.style.display = "flex";
  })

  const close = document.querySelector(".close");
  close.addEventListener("click", () => {
    form.style.display = "none";
  })
});
