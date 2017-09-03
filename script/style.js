$(document).ready(function(){

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
