const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

// Sokafana sy akatona ny menu
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Akatona ny menu rehefa misafidy pejy
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});