'use strict';
$(document).ready(function() {
    
    smoothScroll();
});
function smoothScroll() {
    $('#main a[href*="#"]:not([href="#"])').click(function(){
		$('body').animate( { scrollTop: $(this.hash).offset().top - 50 }, 1000 );
	});
}