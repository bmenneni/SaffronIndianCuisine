const hamburger = document.getElementById("hamburger-btn");
const nav = document.querySelector(".main-nav");
const main = document.querySelector("main");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    main.classList.toggle("menu-open");
});