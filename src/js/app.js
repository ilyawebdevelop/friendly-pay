import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: true,
});

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);


// Инициализация слайдера cardsSlider
const cardsSlider = document.querySelector('.cardsSlider');
var mySwiperCards = new Swiper(cardsSlider, {
  slidesPerView: 'auto',
  spaceBetween: 29,
  loop: false,
  speed: 600,
  allowTouchMove: true,
  centeredSlides: true,
  pagination: {
    el: document.querySelector('.cardsSlider .swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
  breakpoints: {
    0: {
      spaceBetween: 6,
    },
    376: {
      spaceBetween: 20,
    },
  },
});

/* Scroll UP */
$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (scroll < 300) {
    $('.header--sum .headerSum').hide();
    $('.header--sum').removeClass('active');
   
    
  } else {
    $('.header--sum .headerSum').show();
    $('.header--sum').addClass('active');
  }
});