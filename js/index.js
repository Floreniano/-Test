const swiper = new Swiper('.main_swiper', {
  speed: 700,
  slidesPerView: 1,
  loop: true,
  direction: 'horizontal',
  navigation: {
    nextEl: '.main_swiper-next',
    prevEl: '.main_swiper-prev',
  },
  pagination: {
    clickable: true,
    el: '.main_swiper-pagination',
  },
});
const swiperAbout = new Swiper('.about-swiper', {
  speed: 400,
  slidesPerView: 1,
  updateOnWindowResize: false,
  loop: true,
  direction: 'horizontal',
  navigation: {
    nextEl: '.about-button-next',
    prevEl: '.about-button-prev',
  },
});
