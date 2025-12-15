
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // adjust scroll distance
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
