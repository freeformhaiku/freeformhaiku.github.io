// Mobile Navigation Toggle
// This handles opening and closing the mobile menu

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const navMobile = document.querySelector('.nav-mobile');
    const navLinks = document.querySelectorAll('.nav-link-mobile');

    // Open mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMobile.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        });
    }

    // Close mobile menu
    if (menuClose) {
        menuClose.addEventListener('click', function() {
            navMobile.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        });
    }

    // Close menu when clicking a link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navMobile.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMobile.classList.contains('active')) {
            navMobile.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
