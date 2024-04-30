/**
 * Created by Sushant Gauchan
 */

var winWidth = $(window).width();

$(document).ready(function () {
  sliderInit();
});

/*------------------------------- Functions Starts -------------------------------*/
function sliderInit() {
  $(".testimonial-slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 500,
    // fade: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
}


//Sticky Header
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $("header").removeClass("active");
    }
  });
});





/*-------------------------------- Functions Ends --------------------------------*/
