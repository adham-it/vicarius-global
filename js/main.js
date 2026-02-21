/**
 * Vicarius Global - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Navbar and Top Bar Scroll Effect
    const navbar = document.getElementById('navbar');
    const topBar = document.getElementById('topBar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            if (topBar) topBar.classList.add('fade-out');
            navbar.classList.add('scrolled');
        } else {
            if (topBar) topBar.classList.remove('fade-out');
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const animateOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const fadeElements = document.querySelectorAll('.fade-up, .fade-up-delay-1, .fade-up-delay-2, .fade-up-delay-3');
    fadeElements.forEach(el => {
        animateOnScroll.observe(el);
    });

    // Form Submission (Mock)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;

            // Visual feedback
            btn.textContent = "Sending...";
            btn.disabled = true;

            // Mock API call delay
            setTimeout(() => {
                btn.textContent = "Inquiry Sent Successfully!";
                btn.style.backgroundColor = "#4ade80"; // Green color
                btn.style.borderColor = "#4ade80";
                btn.style.color = "#000";

                contactForm.reset();

                // Reset button after 3 seconds
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style = "";
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});
