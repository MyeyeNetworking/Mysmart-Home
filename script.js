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
    let previousSection = null;

    // Function to hide all sections and show the selected one
    function showPage(pageId) {
        sections.forEach(section => {
            if (section.id === pageId) {
                section.classList.add('active');
                previousSection = section; // Track the last active section
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
            history.pushState({pageId: pageId}, "", `#${pageId}`); // Update history state
        });
    });

    // Handle the back button to navigate to the previous section
    window.addEventListener('popstate', (e) => {
        const pageId = e.state ? e.state.pageId : 'home';
        showPage(pageId);

        // Close the live chat box if it's open
        const liveChatBox = document.getElementById('live-chat-box');
        if (liveChatBox && liveChatBox.classList.contains('open')) {
            liveChatBox.classList.remove('open');
        }
    });

    // Show the home page by default
    showPage('home');

    // Display maintenance image for missing images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', () => {
            img.src = 'IMG/error.jpg'; // Replace with the actual path to your maintenance image
        });
    });
});


    // Event listeners for navigation links
    const navLinks = document.querySelectorAll('#nav-links a');
    const sections = document.querySelectorAll('.page-section');
    const navLinksContainer = document.getElementById('nav-links');

    function showPage(pageId) {
        sections.forEach(section => {
            section.classList.toggle('active', section.id === pageId);
        });
        // Hide the dropdown menu after clicking a link
        navLinksContainer.classList.remove('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
        });
    });

document.querySelectorAll('a[data-page]').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const page = this.getAttribute('data-page');
        document.querySelectorAll('.page-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(page).classList.add('active');
        // Close the dropdown if open
        const navLinks = document.getElementById('nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});



document.querySelectorAll('.back-button').forEach(button => {
    button.addEventListener('click', () => {
        // Hide all page sections
        document.querySelectorAll('.page-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show the services page section
        document.getElementById('features').classList.add('active');
    });
});
