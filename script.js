document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navlinks = document.querySelector(".navlinks");
  const navmenu = document.querySelector(".navmenu");

  hamburger.addEventListener("click", () => {
    navmenu.classList.toggle("active");
  });
});
