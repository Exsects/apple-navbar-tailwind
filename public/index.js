const hamburger = document.getElementById('hamburger');
const bag = document.getElementById('bag');
const nav = document.getElementById('nav');
const menuExpanded = document.getElementById('menu-expanded');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    bag.classList.toggle('invisible');
    menuExpanded.classList.toggle('hidden');
    nav.classList.toggle('bg-apple-gray');
    nav.classList.toggle('bg-black');
});

