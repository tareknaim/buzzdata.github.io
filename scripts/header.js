jQuery(document).ready(function($) {

  var scrolled;
	var navH = $('header').outerHeight();

	$(window).scroll(function(event) {
    scrolled = true;

  	if ($(window).scrollTop() >= navH) {
  		$('header').addClass('fixed');
      $('header').removeClass('at-top');
  	}

  	if ($(window).scrollTop() < navH) {
  		$('header').removeClass('fixed');
      $('header').addClass('at-top');
  	}
	});
});
