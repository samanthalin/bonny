$(document).ready(function(){
	$('.banner-display').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  autoplay: true,
  	  autoplaySpeed: 2000,
  	  dots: true,
	});
	$('.mobile-banner-display').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  autoplay: true,
  	  autoplaySpeed: 2000,
	  asNavFor: '.mobile-banner-nav',
	});
	$('.mobile-banner-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.mobile-banner-display',
	  focusOnSelect: true,
	  arrows: false,
	});
});
