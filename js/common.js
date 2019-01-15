
$(function() {

	$('.hamburger').click(function(){

		$(this).toggleClass('is-active');
		$('.menu').slideToggle();
	});
	$(".owl-carousel").owlCarousel({
		items: 1,
		dots: true,
		loop:true
	});
		
	

	});