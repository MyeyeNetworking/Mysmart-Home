document.addEventListener('DOMContentLoaded', function() {
    // Splash Screen
    const splashScreen = document.getElementById('splash-screen');
    setTimeout(() => {
        splashScreen.style.display = 'none';
    }, 3000); // Hide splash screen after 3 seconds

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Slideshow Functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const showSlides = () => {
        slides.forEach((slide, index) => {
            slide.style.display = (index === slideIndex) ? 'block' : 'none';
        });
        slideIndex = (slideIndex + 1) % slides.length;
    };

    document.querySelector('.next').addEventListener('click', () => {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlides();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlides();
    });

    showSlides(); // Initial call to show slides

    // Floating Chat Button
    const chatButton = document.getElementById('chat-button');
    chatButton.addEventListener('mousedown', function(event) {
        let offsetX = event.clientX - chatButton.getBoundingClientRect().left;
        let offsetY = event.clientY - chatButton.getBoundingClientRect().top;

        const moveAt = (pageX, pageY) => {
            chatButton.style.left = `${pageX - offsetX}px`;
            chatButton.style.top = `${pageY - offsetY}px`;
        };

        moveAt(event.pageX, event.pageY);

        const onMouseMove = (event) => {
            moveAt(event.pageX, event.pageY);
        };

        document.addEventListener('mousemove', onMouseMove);

        chatButton.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', onMouseMove);
            chatButton.onmouseup = null;
        });
    });
});
