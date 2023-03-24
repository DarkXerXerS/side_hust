let menu = document.getElementById("nav-menu");
const hamburgerIcon = document.getElementById("nav_bar");
const closeIcon = document.getElementById("close");

// Open menu when hamburger icon is clicked
hamburgerIcon.addEventListener("click", () => {
  menu.classList.add("display");
  header.style.overflow = "revert";
});

// Close menu when close icon is clicked
closeIcon.addEventListener("click", () => menu.classList.remove("display"));

document.addEventListener("click", (event) => {
  // Check if the clicked element is not inside the menu
  if (!menu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
    menu.classList.remove("display");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  header.style.overflow = "hidden";
});
