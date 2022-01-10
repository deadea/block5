// переменные для показа скрытия по кнопке 
let buttonOpen = document.querySelector('.button-open');
let buttonClose = document.querySelector('.button-close');

let hiddenOnTablet = document.querySelectorAll('.brands__swiper .swiper-slide--hidden--tablet');
let hiddenOnDesktop = document.querySelectorAll('.brands__swiper .swiper-slide--hidden--desktop');

 

 //событие по нажатию на кнопку показать 
 buttonOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    buttonOpen.classList.toggle('button--hidden');
 for (let i = 0; i < hiddenOnTablet.length; i++) {
 hiddenOnTablet[i].classList.toggle('swiper-slide--hidden--tablet');
 }
 for (let i = 0; i < hiddenOnDesktop.length; i++) {
   hiddenOnDesktop[i].classList.toggle('swiper-slide--hidden--desktop');
}
 buttonClose.classList.toggle('button--hidden');
 });
 
//событие по нажатию на кнопку скрыть 
buttonClose.addEventListener('click', function(evt) {
   evt.preventDefault();
   buttonClose.classList.toggle('button--hidden');
   for (let i = 0; i < hiddenOnTablet.length; i++) {
      hiddenOnTablet[i].classList.toggle('swiper-slide--hidden--tablet');
      }
      for (let i = 0; i < hiddenOnDesktop.length; i++) {
        hiddenOnDesktop[i].classList.toggle('swiper-slide--hidden--desktop');
     }
buttonOpen.classList.toggle('button--hidden');
});


