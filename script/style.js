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
    $('.slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  responsive: [
	    {
	      breakpoint: 993,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 891,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
	$('.banner-display').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  autoplay: true,
  	  autoplaySpeed: 2000,
	  asNavFor: '.banner-nav',
	});
	$('.banner-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.banner-display',
	  focusOnSelect: true,
	  arrows: false,
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
	$('.slider2').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 1276,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 961,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 661,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
	$('.slider3').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  responsive: [
	    {
	      breakpoint: 993,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 891,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
});


$(function(){
    var len = 55; // 超過50個字以"..."取代
    $(".slider2-intro").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});
