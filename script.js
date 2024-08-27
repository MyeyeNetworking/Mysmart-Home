
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
                slide.classList.remove('previous');
            } else if (i === (index - 1 + slides.length) % slides.length) {
                slide.classList.add('previous');
                slide.classList.remove('active');
            } else {
                slide.classList.remove('active', 'previous');
            }
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
});


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
});


document.addEventListener('DOMContentLoaded', () => {
    // Hide splash screen after 3 seconds
    setTimeout(() => {
        const splashScreen = document.getElementById('splash-screen');
        splashScreen.style.opacity = '0';
        splashScreen.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 500);
    }, 3000);
    
    // Existing JS code...
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#nav-links a');
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
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Show the home page by default
        showPage('home');
});
 



