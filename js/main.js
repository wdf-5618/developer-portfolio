const navToggle = document.querySelector(".nav-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");
const currentYear = document.querySelector("#current-year");

function closeNavigation() {
  if (!navToggle || !primaryNavigation) {
    return;
  }

  navToggle.setAttribute("aria-expanded", "false");
  primaryNavigation.classList.remove("is-open");
}

if (navToggle && primaryNavigation) {
  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    primaryNavigation.classList.toggle("is-open", !isExpanded);
  });

  // Close the menu after a visitor chooses a section on a small screen.
  primaryNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  // Escape closes an open menu and returns keyboard focus to its button.
  document.addEventListener("keydown", (event) => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";

    if (event.key === "Escape" && isExpanded) {
      closeNavigation();
      navToggle.focus();
    }
  });
}

// Keep the displayed year current without manually editing the footer.
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
