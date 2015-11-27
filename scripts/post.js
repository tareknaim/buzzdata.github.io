jQuery(window).ready(function($) {
	$(document).ready(function() {

		var owl = $(".latest-posts .owl-carousel");

		owl.owlCarousel({
      itemsCustom : [[0, 2]],
      stopOnHover : true,
			autoHeight : true,
			pagination : false,
			scrollPerPage : true,
			rewindNav : false
		});

		$(".custom-owlnav.next").click(function(){
			owl.trigger('owl.next');
		});
		$(".custom-owlnav.prev").click(function(){
			owl.trigger('owl.prev');
		});

	});
});
