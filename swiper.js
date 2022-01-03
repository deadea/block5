(function() {

    'use strict';
  
    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia( '(min-width: 768px)' );
  
    // keep track of swiper instances to destroy later
    let brandsSwiper;
  
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
  
    const breakpointChecker = function() {
  
      // if larger viewport and multi-row layout needed
      if ( breakpoint.matches === true ) {
  
        // clean up old instances and inline styles when available
        if ( brandsSwiper !== undefined ) brandsSwiper.destroy( true, true );
  
        // or/and do nothing
        return;
  
        // else if a small viewport and single column layout needed
        } else if ( breakpoint.matches === false ) {
  
          // fire small viewport version of swiper
          return enableSwiper();
  
        }
  
    };
    
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
  
    const enableSwiper = function() {
  
        brandsSwiper = new Swiper('.brands__swiper', {
            hashNavigation: {
                replaceState: true,
              },
        
            
            slidesOffsetBefore: 16, 
            slidesOffsetAfter: 25,
        
            
            breakpoints: {
              // when window width is >= 320px
              320: {
                slidesPerView: 1.3,
                //spaceBetween: 16
              },
              // when window width is >= 480px
              420: {
                slidesPerView: 1.6,
                //spaceBetween: 16
              },
              // when window width is >= 640px
              520: {
                slidesPerView: 2,
                //spaceBetween: 16
              },
              620: {
                slidesPerView: 2.3,
               // spaceBetween: 16
              },
              720: {
                slidesPerView: 2.4,
               // spaceBetween: 16
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
  
    };
  
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
  
    // keep an eye on viewport size changes
    //breakpoint.addEventListener(breakpointChecker);

    window.addEventListener('load', function() {
        breakpointChecker();
        });
  
    // kickstart
   // breakpointChecker();
  
   window.addEventListener('resize', function() {
    breakpointChecker();
    });
  
  })(); 
  