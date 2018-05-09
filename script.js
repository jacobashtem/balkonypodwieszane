function validate() {
  var email = document.getElementById('email');
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var alphaExp = /^[a-zA-Z]+$/;


  if (document.myForm.email.value == "") {
    alert("Wprowadź adres email.");
    document.myForm.focus();
    return false;
  }

  if (!filter.test(email.value)) {
    alert('Wprowadzono niepoprawny adres email.');
    document.myForm.email.focus;
    return false;
  }
  alert('Formularz został wysłany.')
  return (true);

}
$(document).ready(function () {
  $('.carousel').carousel({
    interval: 8000
  })
  var menu = document.querySelector('.navbar');
  scrollSpy(menu);
  $(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });


});

(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function () {
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



  

})(jQuery); // End of use strict