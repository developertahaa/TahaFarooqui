
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'brand-blue': '#0fa9e6',
                'brand-light': '#3fbaeb',
                'brand-dark': '#0c87b8'
            }
        },
        fontFamily: {
            sans: ['Montserrat', 'sans-serif']
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        // Toggle the visibility of navigation links
        navLinks.classList.toggle("show-nav-links");
    });
});
