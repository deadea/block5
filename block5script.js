
  /* Swiper
**************************************************************/
var swiper= Swiper;
var init = false;

var brandsMain = document.querySelector('.brands--tablet.brands--desctop');
var swiperContainer = document.querySelector('.brands__swiper')


// для показа скрытия по кнопке 
let show = document.querySelector('.button-show');
let collapse = document.querySelector('.button-collapse');
let hiddenTablet = document.querySelectorAll('.brand-items--hidden');


/* Which media query
**************************************************************/
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 320px) and (max-width: 767.9px)');
    let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1119.9px)');
    let desktop = window.matchMedia('(min-width: 1120px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            brandsMain.classList.add('brands__main--hidden');


 swiper = new Swiper('.swiper', {
    hashNavigation: {
        replaceState: true,
      },

    
    slidesOffsetBefore: 16, 
    slidesOffsetAfter: 25,

    
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.3,
        spaceBetween: 16
      },
      // when window width is >= 480px
      400: {
        slidesPerView: 1.4,
        spaceBetween: 17
      },
      // when window width is >= 640px
      500: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 25
      },
      700: {
        slidesPerView: 2.3,
        spaceBetween: 25
      }
    },

      
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    
    
  });


}

}

// Disable (for tablet)
else if(tablet.matches) {
   // swiper.destroy();
    init = false;
    swiperContainer.classList.add('brands__swiper--hidden');


    //показ скрытие по кнопке 

    show.addEventListener('click', function(evt) {
      evt.preventDefault();
         
      show.classList.add('button-show--hidden');
   for (let i = 0; i < hiddenTablet.length; i++) {
    hiddenTablet[i].classList.remove('brand-items--hidden');
   }
   collapse.classList.remove('button-collapse--hidden');
   });
   
   
   collapse.addEventListener('click', function(evt) {
     evt.preventDefault();
   
     collapse.classList.add('button-collapse--hidden');
   
     for (let i = 0; i < hiddenTablet.length; i++) {
      hiddenTablet[i].classList.add('brand-items--hidden');
     }
     show.classList.remove('button-show--hidden');
   });
   




}

// Disable (for desktop)
else if(desktop.matches) {
  // swiper.destroy();
    init = false;
    swiperContainer.classList.add('brands__swiper--hidden');





}
}

/* On Load
**************************************************************/
window.addEventListener('load', function() {
swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
swiperMode();
});
  







//var updateCards = function (products) {
 // var elements = document.querySelectorAll('.product'); 
  //for ( var i = 0; i < elements.length; i++) { перебирает список elements
 //   var element = elements[i]; - текущий DOM-элемент списка elements[i].
 //   console.log(element)
 //   element.classList.add('product--available');  добавляет element класс product--available
 //   }
 
//};
