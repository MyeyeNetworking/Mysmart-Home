document.addEventListener('DOMContentLoaded', () => {
    // Slideshow functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Function to hide the splash screen and show the hero section
    function initPage() {
        const splashScreen = document.getElementById('splash-screen');
        const heroSection = document.querySelector('.hero');

        // Fade out the splash screen and then show the hero section
        setTimeout(() => {
            splashScreen.style.opacity = 0;
            splashScreen.style.visibility = 'hidden'; // Hide it completely

            // Fade in the hero section after splash screen is hidden
            setTimeout(() => {
                heroSection.style.opacity = 1;
            }, 300); // Adjust the delay if needed
        }, 3000); // Splash screen duration
    }

    // Initialize the page
    window.addEventListener('load', initPage);

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const navLinksItems = document.querySelectorAll('#nav-links a');
    const sections = document.querySelectorAll('.page-section');

    // Function to hide all sections and show the selected one
    function showPage(pageId) {
        sections.forEach(section => {
            if (section.id === pageId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    // Event listeners for navigation links
    navLinksItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Show the home page by default
    showPage('home');
});
