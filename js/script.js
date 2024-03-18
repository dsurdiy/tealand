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