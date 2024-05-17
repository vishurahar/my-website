// scripts.js
window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    var navToggle = document.getElementById('navToggle');
    if (window.pageYOffset > 100) { // Adjust this value as needed
        navbar.classList.add('hidden');
        navToggle.classList.remove('hidden');
    } else {
        navbar.classList.remove('hidden');
        navToggle.classList.add('hidden');
    }
};

function toggleNav() {
    var navbar = document.getElementById('navbar');
    if (navbar.classList.contains('hidden')) {
        navbar.classList.remove('hidden');
    } else {
        navbar.classList.add('hidden');
    }
}

