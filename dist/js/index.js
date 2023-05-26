//navbar scroll
window.onscroll = function() {
    const header = document.querySelector('header');
    const navbar = header.offsetTop;

    if (window.pageYOffset > navbar) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// titik tigas
const titik = document.querySelector('#titik');


titik.addEventListener('click',function() {
    titik.classList.toggle('titik-active');
    navMenu.classList.toggle('hidden')
});
