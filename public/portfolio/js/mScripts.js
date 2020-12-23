//alert("Hola");


$(document).ready( function() {
	//$('.portfolio-img').animate({ 'zoom': 1.2 }, 1);

	$('.portfolio-item').hover(
	    function() {
	        $(this).find('.portfolio-img').animate({'zoom': 1.01}, 250);
	        $(this).css('background-color', '#f0f0f0');
	        //$(this).css('transform', 'scale(0.99)');
	    },
	    function() {
	        $(this).find('.portfolio-img').animate({'zoom': 1.0}, 250);
	        $(this).css('background-color', '#f8f9fa');
	        //$(this).css('transform', 'scale(1.0)');
	    });
});
