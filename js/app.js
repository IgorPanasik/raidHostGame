//Drop Login Links 
let loginBtn = document.querySelector('.navbar__login-btn');
let dropLogin = document.querySelector('.drop__login');

loginBtn.onclick = () => {
  dropLogin.classList.toggle('drop__login-open');
}

//Menu Open Close 
let menu = document.querySelector('.nav__menu-icon');
let navBar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle ('move');
  navBar.classList.toggle('open-menu');
}

//On scroll remove menu 
window.onscroll = () => {
  menu.classList.remove ('move');
  navBar.classList.remove('open-menu');
  dropLogin.classList.remove('drop__login-open');
}

//Header background change
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

//Script for swiper

var swiper = new Swiper(".home", {
  speed: 2600,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//Accordion 

const accordionItems = document.querySelectorAll ('.accordion__item');

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.accordion__header');

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion__open');

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  })
})

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.accordion__content');

  if(item.classList.contains('accordion__open')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion__open')
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion__open');
  }

}

//Control swiper

var swiper = new Swiper(".control__images", {
  speed: 2600,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});