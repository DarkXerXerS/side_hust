nav_bar.addEventListener("click", () => {
  nav_menu.classList.add("display");
});

closeIcon.addEventListener("click", () => {
  nav_menu.classList.remove("display");
});

document.addEventListener("click", (event) => {
  // Check if the clicked element is not inside the menu
  if (!nav_menu.contains(event.target) && !nav_bar.contains(event.target)) {
    nav_menu.classList.remove("display");
  }
});
