window.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".header__hamburger");
  const menu = document.querySelector('.header__fix-menu');
  const body = document.querySelector('body');






  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("header__hamburger--active");
    menu.classList.toggle('active');
    body.classList.toggle('hidden');
  });

});