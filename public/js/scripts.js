function toggleMobileNav() {
    let navMenu = document.getElementById("mobileNav");

    mobileNav.classList.toggle("-translate-x-full");
}

// Events
document.getElementById("nav_btn").addEventListener("click", toggleMobileNav)