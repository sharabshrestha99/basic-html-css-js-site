// script.js
// Purpose: basic client-side behavior without overengineering

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for internal navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Example sanity check log
    console.log("Website loaded successfully.");
});
