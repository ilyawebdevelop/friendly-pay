import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import './components.js';


flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: true,
});

var clipboard = new ClipboardJS('.copyBtn', {

});

clipboard.on('success', function (e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
  let parent = e.trigger.closest('.inputW');
  let copyText = parent.querySelector('.copyText');
  console.log(copyText);
  copyText.classList.add('active');
  setTimeout(function () {
    copyText.classList.remove('active');
  }, 2000);
  e.clearSelection();
});

clipboard.on('error', function (e) {
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
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

function overlayActive() {
  let overlay = document.querySelector('.overlay');
  overlay.classList.add('active');
}
function overlayHide() {
  let overlay = document.querySelector('.overlay');
  overlay.classList.remove('active');
}

let cardsNavMore = document.querySelector('#cardsNavMore');
let cardIce = document.querySelector('.cardIce');
let bodyEl = document.querySelector('body');
cardsNavMore?.addEventListener('click', () => {
  cardIce.classList.add('active');
  cardsNavMore.classList.add('active');
  overlayActive();
  bodyEl.classList.add('hidden');
});

document.addEventListener('click', e => {
  let overlay = document.querySelector('.overlay');
  let target = e.target;
  let its_cardsNavMore = target == cardsNavMore || cardsNavMore.contains(target);
  let its_cardIce = target == cardIce || cardIce.contains(target);
  let overlay_is_active = overlay.classList.contains('active');

  if (!its_cardsNavMore && !its_cardIce && overlay_is_active) {
    overlayHide();
    cardsNavMore.classList.remove('active');
    cardIce.classList.remove('active');
    bodyEl.classList.remove('hidden');
  }
});


// let copyElEach = document.querySelectorAll('.copyBtn');
// copyElEach?.forEach(el => {
//   el.addEventListener('click', () => {
//     let input = el.closest('.inputW').querySelector('input');
//     let textForShow = el.closest('.inputW').querySelector('.textForShow');
//     textForShow.classList.add('active');
//     setTimeout(function () {
// 			$(popup).addClass('_show');
// 		}, 5);
//     console.log(input);
//   });
// });