
// =============================
// MOBILE NAVIGATION
// =============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

    });

});

// =============================
// AUTOMATIC COPYRIGHT YEAR
// =============================

document.getElementById("year").textContent =
    new Date().getFullYear();
