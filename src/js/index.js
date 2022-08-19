import '../../src/scss/style.scss';
import Swiper, { Navigation, Pagination } from 'swiper';


const swiper = new Swiper('.swiper', { 
    modules: [Navigation, Pagination],
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
       breakpoints: {
        768: {
            enabled: false,
            onAny() {
                swiper.destroy(true, true);
            }
        }
    },
    observer: true,
})

let showMoreBr = document.querySelector('.slider__items-brands--hidden');
let buttonMoreBr = document.querySelector('.section-brands-button-show-more');
let closeButtonBr = document.querySelector('.section-brands-button-hide');
let brandsList = document.querySelector('.swiper-wrapper-brands');

buttonMoreBr.addEventListener('click', function () {
    showMoreBr.classList.remove('slider__items-brands--hidden');
    buttonMoreBr.classList.add('section-brands-button-show-more--hidden');
    closeButtonBr.classList.remove('button-hide--hidden');
    brandsList.classList.add('swiper-wrapper-brands--height');
  
  });
  closeButtonBr.addEventListener('click', function () {
    showMoreBr.classList.add('slider__items-brands-hidden');
    closeButtonBr.classList.add('button-hide--hidden');
    buttonMoreBr.classList.remove('section-brands-button-show-more--hidden');
    brandsList.classList.remove('swiper-wrapper-brands--height');
  
  })
  

let showMoreTec = document.querySelector('.slider__items-technique--hidden');
let buttonMoreTec = document.querySelector('.section-technique-button-show-more');
let closeButtonTec = document.querySelector('.section-technique-button-hide');
let tecList = document.querySelector('.swiper-wrapper-technique');


buttonMoreTec.addEventListener('click', function () {
    showMoreTec.classList.remove('slider__items-technique--hidden');
    buttonMoreTec.classList.add('section-technique-button-show-more--hidden');
    closeButtonTec.classList.remove('button-hide--hidden');
    tecList.classList.add('swiper-wrapper-technique--height');
  
  });
  closeButtonTec.addEventListener('click', function () {
    showMoreTec.classList.add('slider__items-technique--hidden');
    closeButtonTec.classList.add('button-hide--hidden');
    buttonMoreTec.classList.remove('section-technique-button-show-more--hidden');
    tecList.classList.remove('swiper-wrapper-technique--height');
  
  })

  let mainCont = document.querySelector('.main-container');
  let openMenuBtn = document.querySelector('.button-list');
  let closeMenuBtn = document.querySelector('.button-close');
  let menu = document.querySelector('.navigation');
  let header = document.querySelector('.header');

  openMenuBtn.addEventListener('click', function (){
    menu.classList.add('navigation--modal');
    menu.classList.remove('navigation');
    mainCont.classList.add('main-container--filter');
    header.classList.add('header--filter');
  })
  
  closeMenuBtn.addEventListener('click', function(){
    menu.classList.remove('navigation--modal');
    menu.classList.add('navigation');
    mainCont.classList.remove('main-container--filter');
    header.classList.remove('header--filter');
  })

  let feedBack = document.querySelector('.modal-feedback');
  let openFdbck = document.querySelector('.button-chat');
  let closeFdbck = document.querySelector('.button-close-feedback');

  openFdbck.addEventListener('click', function(){
    feedBack.classList.remove('modal-feedback--hidden');
    mainCont.classList.add('main-container--filter');
    header.classList.add('header--filter');
    menu.classList.add('navigation--filter');
  })

  closeFdbck.addEventListener('click', function (){
    feedBack.classList.add('modal-feedback--hidden');
    mainCont.classList.remove('main-container--filter');
    header.classList.remove('header--filter');
    menu.classList.remove('navigation--filter');
  })

 let call = document.querySelector('.button-call');
 let callOrder = document.querySelector('.modal-call');
 let closeCall = document.querySelector('.button-close-call')

 call.addEventListener('click', function (){
    callOrder.classList.remove('modal-call--hidden');
    mainCont.classList.add('main-container--filter');
    header.classList.add('header--filter');
    menu.classList.add('navigation--filter');
 })

 closeCall.addEventListener('click', function (){
  callOrder.classList.add('modal-call--hidden');
  mainCont.classList.remove('main-container--filter');
  header.classList.remove('header--filter');
  menu.classList.remove('navigation--filter');
})
