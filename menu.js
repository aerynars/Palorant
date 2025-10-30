document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const navLinks = document.getElementById('navlinks');
    const navbar = document.querySelector('.navbar');

    menuButton.addEventListener('click', function(event) {
        event.stopPropagation();
        navLinks.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            menuButton.innerHTML = '✕';
        } else {
            menuButton.innerHTML = '☰';
        }
    });

    document.addEventListener('click', function(event) {
        const isClickInsideNav = navbar.contains(event.target);
        
        if (!isClickInsideNav && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuButton.innerHTML = '☰';
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            menuButton.innerHTML = '☰';
        }
    });
});