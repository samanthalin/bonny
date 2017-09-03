$(document).ready(function(){
	$(window).scroll(function () {
		if ($(window).scrollTop() < 10) {
			$('.desktop-nav').css('box-shadow', 'none');
		} else {
			$('.desktop-nav').css('box-shadow', '0 2px 1px rgba(0, 0, 0, 0.12)');
		}
	});
	$('.mobile-nav .menu-btn').click(function(){
		$('.mobile-menu').show();
		$('body').css('overflow', 'hidden');
	});

	$('.close').click(function(){
		$('.mobile-menu').hide();
		$('body').css('overflow-y', 'scroll');
	});
    $(".cat-button").click(function(){
        $(".cat").toggle();
        $("header").toggleClass("cat-toggle");
        $(".content").toggleClass("cat-toggle");
        $("footer").toggleClass("cat-toggle");
    });
    $(".user-pic").click(function(){
        $(".user").toggle();
        $("header").toggleClass("user-toggle");
        $(".content").toggleClass("user-toggle");
        $("footer").toggleClass("user-toggle");
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 500) {
            $('.scroll-to-top').fadeIn();
        } else {
          $('.scroll-to-top').fadeOut();
        }
    });

    $('.scroll-to-top').on('click', function(e) {
      e.preventDefault();
        $('html, body').animate({scrollTop : 0}, 800);
    });
});