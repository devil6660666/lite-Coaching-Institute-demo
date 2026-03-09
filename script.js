// script.js - Minimal JavaScript for the business website

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Optional: Add any additional interactivity here

// For example, smooth scroll is handled by CSS, but if needed, we can add JS fallback

// Placeholder for future enhancements