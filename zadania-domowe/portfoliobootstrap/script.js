'use strict';
//$(document).ready(function() {
//    
//    smoothScroll();
//});
//function smoothScroll() {
//    $('#main a[href*="#"]:not([href="#"])').click(function(){
//		$('body').animate( { scrollTop: $(this.hash).offset().top - 50 }, 5000 );
//	});
//}

//document.querySelector('#main').scrollIntoView({ 
//  behavior: 'smooth' 
//});
//
//window.scroll({
//  top: 2500, 
//  left: 0, 
//  behavior: 'smooth' 
//
//
//});
//
//// Scroll certain amounts from current position 
//window.scrollBy({ 
//  top: 100, // could be negative value
//  left: 0, 
//  behavior: 'smooth' 
//});

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#"]')
  .not('[href="#"]')
  .not('[href="#"]')
  .not('[href="#"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
