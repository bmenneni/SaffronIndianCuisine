const scrollContainer = document.getElementById("category-scroll");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const cat_hamburger = document.getElementById("category-hamburger");
const dropdown = document.getElementById("category-dropdown");

// Show/hide arrows based on scroll
function updateArrows() {
  const scrollLeft = scrollContainer.scrollLeft;
  const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

  leftArrow.style.display = scrollLeft > 0 ? "block" : "none";
  rightArrow.style.display = scrollLeft < maxScroll - 5 ? "block" : "none";
}

scrollContainer.addEventListener("scroll", updateArrows);
window.addEventListener("resize", updateArrows);
document.addEventListener("DOMContentLoaded", updateArrows);

// Scroll controls
leftArrow.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -150, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: 150, behavior: "smooth" });
});

//Button to Navigate to Top
let topButton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}