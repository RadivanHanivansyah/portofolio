const humberger = document.querySelector('#humberger');
humberger.addEventListener('click', function () {
    humberger.classList.toggle('humberger-active');
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