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


// Draggable chat button functionality
document.addEventListener('DOMContentLoaded', () => {
    const chatButton = document.getElementById('chat-button');
    
    chatButton.addEventListener('mousedown', (e) => {
        let shiftX = e.clientX - chatButton.getBoundingClientRect().left;
        let shiftY = e.clientY - chatButton.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            chatButton.style.left = pageX - shiftX + 'px';
            chatButton.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        chatButton.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', onMouseMove);
            chatButton.onmouseup = null;
        });
    });

    chatButton.ondragstart = () => false;
});
