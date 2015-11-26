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

	var sideNav = {
		elements: {
			menu: $('#sideNav'),
			contents: $('#page, header'),
			menuBtn: $('#sidenav-trigger')
		},

		init: function(options) {
			if (options && typeof(options) == 'object') {
				$.extend(sideNav.elements, options);
			}

			$menu = sideNav.elements.menu;
			$page = sideNav.elements.contents;
			$btn = sideNav.elements.menuBtn;

			$btn.click(function(e){

				e.preventDefault();
				e.stopPropagation();

				if ($page.data('state') === "open") {
					sideNav.hideMenu();

					if (Modernizr.mq('only screen and (max-width: 990px)')) {
						sideNav.elements.contents.unbind('touchmove');
						sideNav.elements.contents.removeClass('no-scroll');
					}
				} else {
					sideNav.revealMenu();

					if (Modernizr.mq('only screen and (max-width: 990px)')) {
						sideNav.elements.contents.bind('touchmove', function(e) { e.preventDefault(); });
						sideNav.elements.contents.addClass('no-scroll');
					}
				}
			});

			$close = sideNav.elements.contents.click(function(){

				if ($page.data('state') === "open") {
					sideNav.hideMenu();

					if (Modernizr.mq('only screen and (max-width: 990px)')) {
						sideNav.elements.contents.unbind('touchmove');
						sideNav.elements.contents.removeClass('no-scroll');
					}
				}
			});

			/* close the drawer if any links inside the menu are clicked,
			* needed for in-page anchors and close button */
			$links = $menu.find('a , .icon-close').click(function(){
				sideNav.elements.contents.unbind('touchmove');
				sideNav.elements.contents.removeClass('no-scroll');
			});
		},
		revealMenu: function(){
			$page.data('state', 'open');
			$page.addClass('drawer-open');
      $btn.addClass('opened');
		},
		hideMenu: function(){
			$page.data('state', 'closed');
			$page.removeClass('drawer-open');
      $btn.removeClass('opened');
		}
	};

	sideNav.init();
});
