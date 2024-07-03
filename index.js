document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");
  const hamburgerMenu = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");

  // When clicking on the hamburger menu.
  hamburgerMenu.addEventListener("click", () => {
    if (hamburgerMenu.src.includes("icon-hamburger.svg")) {
      hamburgerMenu.src = "./images/icon-close.svg";
    } else {
      hamburgerMenu.src = "./images/icon-hamburger.svg";
    }
    navbar.classList.toggle("show");
  });

  // Changing icon arrow for mobile
  const updateIconSrc = () => {
    const iconArrows = document.querySelectorAll(".icon-arrow");
    iconArrows.forEach((icon) => {
      if (window.innerWidth <= 1024) {
        icon.src = "./images/icon-arrow-dark.svg";
      } else {
        icon.src = "./images/icon-arrow-light.svg";
      }
    });
  };

  // Make sure all other arrows are down
  const downArrow = () => {
    document.querySelectorAll(".icon-arrow").forEach((icon) => {
      icon.classList.remove("icon-arrow-rotate");
    });
  };

  // Initial check
  updateIconSrc();

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
        if (menu.style.display === "none" || menu.style.display === "") {
          menu.style.display = "block";
        } else {
          menu.style.display = "none";
        }
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
  window.addEventListener("resize", updateIconSrc);
});
