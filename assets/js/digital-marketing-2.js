/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var SaaSio_Digital_Marketing_2 = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.BackgroundImage();
				this.Animation();
				this.StickyHeader();
				this.MobileMenu();
				this.scrollTop();
				this.HoverParallax();
				this.counterUp();
				this.searchPopUp();
				this.CarouselSliderJS();
				
				
			},
			preloader: function (){
				jQuery(window).on('load', function(){
					jQuery('#preloader').fadeOut('slow',function(){jQuery(this).remove();});
				})
				$('.xis-dm-main-navigation ul li a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
						if (target.length) {
							$('html, body').animate({
								scrollTop: target.offset().top -50
							}, 1000);
							return false;
						}
					}
				});
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				}
				jQuery('.video_box').magnificPopup({
					disableOn: 200,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false,
				});
			},
			StickyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.xis-dm-header-section').addClass('sticky-on')
					} else {
						jQuery('.xis-dm-header-section').removeClass('sticky-on')
					}
				})
			},
			searchPopUp: function (){
				if($('.search-box-outer').length) {
					$('.search-box-outer').on('click', function() {
						$('body').addClass('search-active');
					});
					$('.close-search').on('click', function() {
						$('body').removeClass('search-active');
					});
				}
			},
			MobileMenu: function (){
				$('.open_mobile_menu').on("click", function() {
					$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.mobile_menu li.dropdown ul').length){
					$('.mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>');
					$('.mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$(".dropdown-btn").on("click", function () {
					$(this).toggleClass("toggle-open");
				});
			},
			scrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.scrollup').fadeIn();
					} else {
						$('.scrollup').fadeOut();
					}
				});

				$('.scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},
			HoverParallax: function(){
				if ($('.scene').length > 0 ) {
					$('.scene').parallax({
						scalarX: 10.0,
						scalarY: 10.0,
					}); 
				}
			},
			counterUp: function (){
				if ($(".odometer").length) {
					$('.odometer').appear();
					$(document.body).on('appear', '.odometer', function(e) {
						var odo = $(".odometer");
						odo.each(function() {
							var countNumber = $(this).attr("data-count");
							$(this).html(countNumber);
						});
						window.odometerOptions = {
							format: 'd',
						};
					});
				}
			},
			CarouselSliderJS: function (){
				$('.xis-dm-slider-area-for').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					speed: 500,
					fade: true,
					// autoplay: true,
					asNavFor: '.xis-dm-slider-nav'
				});
				$('.xis-dm-slider-nav').slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
					vertical:true,
					centerMode: true,
					asNavFor: '.xis-dm-slider-area-for',
					dots: false,
					focusOnSelect: true,
				});
				$('.xis-sponsor-item-wrapper').slick({
					dots: false,
					infinite: false,
					speed: 300,
					slidesToShow: 5,
					autoplay: true,
					responsive: true,
					slidesToScroll: 1,
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 5,
							infinite: true,
						}
					},
					{
						breakpoint: 900,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 5,
							infinite: true,
						}
					},
					{
						breakpoint: 700,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					}

					]
				});
			},


		}
	}
	jQuery(document).ready(function (){
		SaaSio_Digital_Marketing_2.init();
	});

})();