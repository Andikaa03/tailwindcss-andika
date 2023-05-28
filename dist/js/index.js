//navbar scroll
window.onscroll = function() {
    const header = document.querySelector('header');
    const navbar = header.offsetTop;
    const top = document.querySelector('#top');

    if (window.pageYOffset > navbar) {
        header.classList.add('navbar-fixed');
        top.classList.remove('hidden');
        top.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        top.classList.remove('flex');
        top.classList.add('hidden');
    }
}

// titik tigas
const titik = document.querySelector('#titik');
const navMenu = document.querySelector('#nav-menu');

titik.addEventListener('click', function() {
    titik.classList.toggle('titik-active');
    navMenu.classList.toggle('hidden');
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}