$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() < 10) {
			$('.desktop-nav').css('box-shadow', 'none');
		} else {
			$('.desktop-nav').css('box-shadow', '0 2px 1px rgba(0, 0, 0, 0.12)');
		}
	});
	$('.mobile-nav .menu-btn').click(function () {
		$('.mobile-menu').show();
		$('body').css('overflow', 'hidden');
	});

	$('.close').click(function () {
		$('.mobile-menu').hide();
		$('body').css('overflow-y', 'scroll');
	});
	$(".cat-button").click(function () {
		$(".cat").toggle();
		$("header").toggleClass("cat-toggle");
		$(".content").toggleClass("cat-toggle");
		$("footer").toggleClass("cat-toggle");
	});
	$(".user-pic").click(function () {
		$(".user").toggle();
		$("header").toggleClass("user-toggle");
		$(".content").toggleClass("user-toggle");
		$("footer").toggleClass("user-toggle");
	});
	$('.banner-display').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
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

	$('#goto-top').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	});
});


$(function () {
	var len = 15; // 超過50個字以"..."取代
	$("#grid .card .text").each(function (i) {
		if ($(this).text().length > len) {
			$(this).attr("title", $(this).text());
			var text = $(this).text().substring(0, len - 1) + "...";
			$(this).text(text);
		}
	});
});
