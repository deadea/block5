
  /* Swiper
**************************************************************/
var swiper= Swiper;
var init = false;



/* Which media query
**************************************************************/
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 320px) and (max-width: 767px)');
    let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
    let desktop = window.matchMedia('(min-width: 1024px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;


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


}

// Disable (for desktop)
else if(desktop.matches) {
  // swiper.destroy();
    init = false;
    
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
  