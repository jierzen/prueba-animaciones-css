document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger');
    var menuContent = document.querySelector('.menu-content');

    hamburger.addEventListener('click', function() {
        menuContent.classList.toggle('active');
    });
});
