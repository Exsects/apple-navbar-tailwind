const body = document.getElementsByTagName('body')[0];
const hamburger = document.getElementById('hamburger');
const bag = document.getElementById('bag');
const nav = document.getElementById('nav');
const navContainer = document.getElementById('nav-container');
const navLinks = document.getElementById('nav-links');
const searchBar = document.getElementById('search-bar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    bag.classList.toggle('invisible');
    nav.classList.toggle('bg-apple-gray');
    body.classList.toggle('bg-black');
    navLinks.classList.toggle('hidden');
    searchBar.classList.toggle('hidden');
});

