"use strict"

document.addEventListener("click", documentActions);

function documentActions(e) {
   const targetElement = e.target;

   if (targetElement.closest(".menu-icon")) {
      document.body.classList.toggle("menu-open");
   }

   if (targetElement.closest(".menu__link")) {
      if (document.body.classList.contains("menu-open")) {
         document.body.classList.remove("menu-open");
      }
   }
}

// Sliders
const heroSlider = document.querySelector(".hero-swiper");
if (heroSlider) {
   new Swiper(".hero-swiper", {
      direction: "vertical",
      loop: true,
      enabled: true,
      navigation: {
         nextEl: ".hero-swiper__arrow--next",
         prevEl: ".hero-swiper__arrow--prev",
      },
      scrollbar: {
         el: ".hero-swiper__scrollbar",
      },
   });
}

const blendsSlider = document.querySelector(".blends-swiper");
if (blendsSlider) {
   new Swiper(".blends-swiper", {
      spaceBetween: 24,
      slidesPerView: 3.7,
      navigation: {
         nextEl: ".blends-swiper__arrow--next",
         prevEl: ".blends-swiper__arrow--prev",
      },
   });
}