document.addEventListener("DOMContentLoaded", function() {

    // Show splash screen for 3 seconds
    setTimeout(function() {
        document.getElementById('splash-screen').style.display = 'none'; // Hide splash screen
        document.querySelector('main').style.display = 'block'; // Show main content
    }, 3000); // 3000ms = 3 seconds

});


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

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Scroll animation for hero section
    document.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const heroTop = hero.getBoundingClientRect().top;

        if (heroTop < window.innerHeight) {
            hero.classList.add('in-view');
        } else {
            hero.classList.remove('in-view');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Show chat button after 10 seconds
    setTimeout(function() {
        document.querySelector('.chat-button').style.display = 'flex';
    }, 10000); // 10000ms = 10 seconds

    // Make the chat button draggable
    dragElement(document.querySelector('.chat-button'));

    function dragElement(el) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (el) {
            // If present, the header is where you move the DIV from:
            el.onmousedown = dragMouseDown;
        } else {
            // Otherwise, move the DIV from anywhere inside the DIV:
            el.ontouchstart = dragTouchStart;
        }



