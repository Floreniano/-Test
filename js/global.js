const header = document.getElementById('header');
const headerBottom = document.getElementById('headerBottom');
const wrapper = document.getElementById('wrapper');
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.pageYOffset != 0) {
    header.classList.add('header-scroll');
  } else {
    header.classList.remove('header-scroll');
  }
});

const adaptiveMobile = () => {
  wrapper.style.setProperty('--height-header', header.offsetHeight + 'px');
  nav.style.setProperty('--nav-height', nav.offsetHeight + 'px');
  if (window.innerWidth < 769)
    nav.style.setProperty('--nav-position', headerBottom.offsetHeight + 'px');
};

window.addEventListener('load', () => {
  adaptiveMobile();
});
window.addEventListener('resize', () => {
  adaptiveMobile();
});

$('.header_menu ').click(() => {
  $('.header_menu').toggleClass('active');
  $('.nav').toggleClass('active');
});
