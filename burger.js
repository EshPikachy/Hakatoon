const burger = document.querySelector(".mobile-btn");
const nav = document.querySelector(".nav");
const backdrop = document.querySelector(".backdrop");
const items = document.querySelectorAll(".nav__item");
const header = document.querySelector("header");

burger.addEventListener("click", () => {
  burger.classList.toggle("show-mobile-btn");
  nav.classList.toggle("show-nav");
  backdrop.classList.toggle("show-backdrop");
});

nav.addEventListener("click", () => {
  burger.classList.remove("show-mobile-btn");
  nav.classList.remove("show-nav");
  backdrop.classList.remove("show-backdrop");
});
