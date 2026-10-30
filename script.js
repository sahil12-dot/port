
// ========================================
// SAHIL - PERSONAL PORTFOLIO JAVASCRIPT
// ========================================


// 1. TYPING ANIMATION

const typingText = document.querySelector(".tag");

const messages = [
    "Welcome to my portfolio",
    "Aspiring Web Developer",
    "Student & Programmer",
    "Python Enthusiast"
];

let messageIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentMessage = messages[messageIndex];

    typingText.textContent = deleting
        ? currentMessage.substring(0, charIndex--)
        : currentMessage.substring(0, charIndex++);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex > currentMessage.length) {
        deleting = true;
        speed = 1200;
    }

    if (deleting && charIndex < 0) {
        deleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
        charIndex = 0;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// 2. SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".card, .section-title, .about"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// 3. MOBILE NAVIGATION

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuButton.setAttribute("aria-expanded", isOpen);

        menuButton.textContent = isOpen ? "✕" : "☰";

    });

    document.querySelectorAll("nav ul a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuButton.textContent = "☰";

            menuButton.setAttribute("aria-expanded", "false");

        });

    });

}


// 4. SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// 5. DYNAMIC COPYRIGHT YEAR

const footerYear = document.querySelector("#year");

if (footerYear) {

    footerYear.textContent = new Date().getFullYear();

}


// 6. NAVBAR SCROLL EFFECT

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (header) {

        header.style.boxShadow =
            window.scrollY > 50
                ? "0 4px 20px rgba(0,0,0,0.3)"
                : "none";

    }

});


// 7. WELCOME MESSAGE

console.log(
    "%c Welcome to Sahil's Portfolio! 🚀",
    "color: #38bdf8; font-size: 20px; font-weight: bold;"
);

console.log("Keep Learning | Keep Coding | Keep Growing 💙");
