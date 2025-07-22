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