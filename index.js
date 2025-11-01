// Variables for DOM elements
const navToggle = document.querySelector(".mobile-nav-toggle");
const navMenu = document.getElementById("primary-navigation");

// Mobile Menu Functionality
navToggle.addEventListener("click", () => {
  const isVisible = navMenu.getAttribute("data-visible");

  if (isVisible === "false") {
    navMenu.setAttribute("data-visible", "true");
  } else {
    navMenu.setAttribute("data-visible", "false");
  }
});
