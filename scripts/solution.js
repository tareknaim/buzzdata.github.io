jQuery(window).ready(function($) {
	$(document).ready(function() {

		var owl = $(".owl-carousel");

    for (var i = 0; i <= owl.length; i++) {
      $(owl[i]).owlCarousel({
        itemsCustom : [[0, 1]],
        stopOnHover : true,
  			pagination : false,
        navigation : true,
        navigationText : ["<i class='fa fa-angle-left'></i><span class='hidden'>Prev</span>","<i class='fa fa-angle-right'></i><span class='hidden'>Next</span>"],
  			scrollPerPage : true,
        slideSpeed : 100,
        rewindSpeed : 200,
  			paginationSpeed : 200,
  			transitionStyle : "fade"
  		});
    }
	});
});
