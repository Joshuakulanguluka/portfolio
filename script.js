// script.js

document.addEventListener('DOMContentLoaded', () => {

    // -----------------------------
    // Navbar scroll effect
    // -----------------------------
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // -----------------------------
    // Reveal animations for sections
    // -----------------------------
    const sections = document.querySelectorAll('.page-section, .project-card, .contact-text, .contact-card');

    function revealOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if(sectionTop < triggerBottom){
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // trigger on page load

    // -----------------------------
    // Smooth scrolling for nav links
    // -----------------------------
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);

            if(targetEl){
                window.scrollTo({
                    top: targetEl.offsetTop - navbar.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

});
