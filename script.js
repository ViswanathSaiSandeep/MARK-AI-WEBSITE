// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileCloseBtn = document.querySelector('.mobile-close-btn');
    const mobileTabLinks = document.querySelectorAll('.mobile-tab-link');

    // Open mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenuOverlay.classList.add('active');
        mobileMenuBtn.style.display = 'none'; // Hide hamburger button
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Close mobile menu
    mobileCloseBtn.addEventListener('click', function() {
        mobileMenuOverlay.classList.remove('active');
        mobileMenuBtn.style.display = 'block'; // Show hamburger button
        document.body.style.overflow = 'auto'; // Enable scrolling
    });

    // Close menu when clicking on overlay
    mobileMenuOverlay.addEventListener('click', function(e) {
        if (e.target === mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove('active');
            mobileMenuBtn.style.display = 'block'; // Show hamburger button
            document.body.style.overflow = 'auto';
        }
    });

    // Close menu when clicking on links
    mobileTabLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuOverlay.classList.remove('active');
            mobileMenuBtn.style.display = 'block'; // Show hamburger button
            document.body.style.overflow = 'auto';
        });
    });

    // Close menu when clicking on "Coming Soon" button
    const mobileComingSoon = document.querySelector('.mobile-coming-soon');
    if (mobileComingSoon) {
        mobileComingSoon.addEventListener('click', function() {
            mobileMenuOverlay.classList.remove('active');
            mobileMenuBtn.style.display = 'block'; // Show hamburger button
            document.body.style.overflow = 'auto';
        });
    }
});