function toggleMenu() {
let nav = document.querySelector("nav ul");

if (nav.style.display === "flex") {
nav.style.display = "none";
} else {
nav.style.display = "flex";
}
}

function scrollToSection(id) {
document.getElementById(id).scrollIntoView({
behavior: "smooth"
});
}
