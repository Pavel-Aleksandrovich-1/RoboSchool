import Swiper, { Navigation, Autoplay } from 'swiper';
Swiper.use([Navigation, Autoplay]);
const swiper = new Swiper(".products__content", {
  slidesPerView: 'auto',
  spaceBetween: 40,
  navigation: {
    nextEl: '.products__slider-btn--next',
    prevEl: '.products__slider-btn--prev',
    infinite: false,
  },
});
