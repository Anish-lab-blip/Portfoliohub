document.addEventListener('DOMContentLoaded', () => {

    // Mobile Nav Toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Active Link Logic
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const h = link.getAttribute('href').replace('./', '');
        if (h === currentPath) {
            link.classList.add('active');
        }
    });

    // Staggered Scroll Reveal
    // Staggered Scroll Reveal
    const observerOptions = {
        threshold: 0.01, // Trigger almost immediately when a pixel is visible
        rootMargin: '50px' // Start triggering before it enters viewport
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Ensure index is valid number
                const i = typeof index === 'number' ? index : 0;
                const delay = Math.min(i * 100, 500);

                setTimeout(() => {
                    entry.target.classList.add('active');
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => {
        observer.observe(el);
        // Failsafe: If element is already visible or near top, show it immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('active');
        }
    });

    // Global Failsafe: Ensure everything is visible after 3 seconds max
    setTimeout(() => {
        revealElements.forEach(el => el.classList.add('active'));
    }, 3000);

    // Parallax Effect for Hero
    // Parallax Effect for Hero
    const heroImg = document.querySelector('header img.ken-burns');
    const heroText = document.querySelector('header .relative.z-20');

    if (heroImg || heroText) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;

                    if (heroImg) {
                        // Subtle parallax for the background image
                        heroImg.style.transform = `scale(1.1) translateY(${scrolled * 0.15}px)`;
                    }

                    if (heroText) {
                        // Faster parallax for text to create depth
                        heroText.style.transform = `translateY(${scrolled * 0.3}px)`;
                        heroText.style.opacity = 1 - (scrolled / 600);
                    }

                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
