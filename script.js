$(document).ready(function() {

  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 340
  });  
  
  // Gets the video src from the data-src on each button
    var $imageSrc;  
    $('.gallery img').click(function() {
        $imageSrc = $(this).data('bigimage');
    });
    console.log($imageSrc);
      
      
      
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    
    $("#image").attr('src', $imageSrc  ); 
    })
      
      
    // reset the modal image
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#image").attr('src',''); 
    }) 
        
        
    
    
      
      
    // document ready  
    });
    
    (function($) {
        "use strict"; // Start of use strict
      
        // Smooth scrolling using jQuery easing
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: (target.offset().top - 57)
              }, 1000, "easeInOutExpo");
              return false;
            }
          }
        });
      
        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').click(function() {
          $('.navbar-collapse').collapse('hide');
        });
      
        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
          target: '#mainNav',
          offset: 57
        });
      
        // Collapse Navbar
        var navbarCollapse = function() {
          if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
          } else {
            $("#mainNav").removeClass("navbar-shrink");
          }
        };
        // Collapse now if page is not at top
        navbarCollapse();
        // Collapse the navbar when page is scrolled
        $(window).scroll(navbarCollapse);
      
        // Scroll reveal calls
        window.sr = ScrollReveal();
        sr.reveal('.sr-icons', {
          duration: 600,
          scale: 0.3,
          distance: '0px'
        }, 200);
        sr.reveal('.sr-button', {
          duration: 1000,
          delay: 200
        });
        sr.reveal('.sr-contact', {
          duration: 600,
          scale: 0.3,
          distance: '0px'
        }, 300);
      
        // Magnific popup calls
        $('.popup-gallery').magnificPopup({
          delegate: 'a',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
          }
        });
      
      })(jQuery); // End of use strict
      
    
    