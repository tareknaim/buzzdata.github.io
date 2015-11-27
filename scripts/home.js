jQuery(window).ready(function($) {
	$(document).ready(function() {

		var homelogos = $(".logo-carousel-wrapper .owl-carousel");

		homelogos.owlCarousel({
			itemsCustom : [[0, 1]],
			autoPlay : true,
			pagination : false,
			slideSpeed : 200,
			rewindSpeed : 400,
			paginationSpeed : 400,
			transitionStyle : "fade"
		});
	});
});
