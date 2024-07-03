document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");

  // Make sure all other arrows are down
  const downArrow = () => {
    document.querySelectorAll(".icon-arrow").forEach((icon) => {
      icon.classList.remove("icon-arrow-rotate");
    });
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default action

      downArrow();
      // Rotate arrow down
      const img = this.querySelector("img");
      if (img) {
        img.classList.toggle("icon-arrow-rotate");
      }

      // Close all other menus
      document.querySelectorAll(".menu").forEach((menu) => {
        menu.style.display = "none";
      });

      // Display the appropriate menu
      const menu = this.nextElementSibling;
      if (menu) {
        menu.style.display =
          menu.style.display === "none" || menu.style.display === ""
            ? "block"
            : "none";
      }
    });
  });

  // Close menus when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".nav-links")) {
      document.querySelectorAll(".menu").forEach((menu) => {
        menu.style.display = "none";
      });
      downArrow();
    }
  });
});
