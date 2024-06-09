const navOpen = document.getElementById("menu-icon-open");
const navClose = document.getElementById("menu-icon-close");
const navLinks = document.getElementById("nav-links");
const navContainer = document.getElementById("nav-container");

navOpen.addEventListener("click", () => {
    navLinks.style.left = '0%';
    navOpen.style.visibility = 'hidden';
    navClose.style.visibility = 'visible';
    navContainer.style.visibility = 'visible';
})

navClose.addEventListener("click", () => {
    navLinks.style.left = '100%';
    navClose.style.visibility = 'hidden';
    navOpen.style.visibility = 'visible';
    navContainer.style.visibility = 'hidden';
})