const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');
humberger.addEventListener('click', function () {
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('hidden');
});

window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const scroll = window.scrollY;
    if (scroll > fixedNav) {
        header.classList.add('navbar-fixed');
        header.classList.remove('navbar-absolute');
    } else {
        header.classList.remove('navbar-fixed');
        header.classList.add('navbar-absolute');
    };
};