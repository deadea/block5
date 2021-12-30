const swiper = new Swiper('.swiper', {
    hashNavigation: {
        replaceState: true,
      },

    //spaceBetween: 16,
    slidesOffsetBefore: 16, 
    slidesOffsetAfter: 25,
    slidesPerView: 'auto',
    

    //centeredSlides: true,

    //autoheight: true,
    //createElements: true,
    
    
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    
    
  });