jQuery(document).ready(function ($) {
  "use strict";
  // animation on scroll
  AOS.init({
    duration: 1000,
    easing: "ease",
    once: true,
  });

  // followers

  $("#followers").prop("number", 20).animateNumber(
    {
      number: 2000,
    },
    20000
  );

  // clients

  $("#clients").prop("number", 20).animateNumber(
    {
      number: 3423,
    },
    20000
  );

  // students

  $("#students").prop("number", 20).animateNumber(
    {
      number: 4398,
    },
    20000
  );

  // staffs

  $("#staffs").prop("number", 10).animateNumber(
    {
      number: 50,
    },
    10000
  );
  // siteSliderRange();

  var siteCarousel = function () {
    if ($(".nonloop-block-13").length > 0) {
      $(".nonloop-block-13").owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 20,
        smartSpeed: 1000,
        autoplay: true,
        nav: true,
        dots: true,
        responsive: {
          600: {
            margin: 20,
            nav: true,
            items: 1,
          },
          1000: {
            margin: 20,
            stagePadding: 0,
            nav: true,
            items: 1,
          },
        },
      });
      $(".custom-next").click(function (e) {
        e.preventDefault();
        $(".nonloop-block-13").trigger("next.owl.carousel");
      });
      $(".custom-prev").click(function (e) {
        e.preventDefault();
        $(".nonloop-block-13").trigger("prev.owl.carousel");
      });
    }

    $(".slide-one-item").owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      smartSpeed: 1500,
      autoplay: true,
      pauseOnHover: false,
      dots: true,
      nav: true,
      navText: [
        '<span class="icon-keyboard_arrow_left">',
        '<span class="icon-keyboard_arrow_right">',
      ],
    });

    if ($(".owl-all").length > 0) {
      $(".owl-all").owlCarousel({
        center: false,
        items: 1,
        loop: false,
        stagePadding: 0,
        margin: 0,
        autoplay: false,
        nav: false,
        dots: true,
        touchDrag: true,
        mouseDrag: true,
        smartSpeed: 1000,
        navText: [
          '<span class="icon-arrow_back">',
          '<span class="icon-arrow_forward">',
        ],
        responsive: {
          768: {
            margin: 30,
            nav: false,
            responsiveRefreshRate: 10,
            items: 1,
          },
          992: {
            margin: 30,
            stagePadding: 0,
            nav: false,
            responsiveRefreshRate: 10,
            touchDrag: false,
            mouseDrag: false,
            items: 3,
          },
          1200: {
            margin: 30,
            stagePadding: 0,
            nav: false,
            responsiveRefreshRate: 10,
            touchDrag: false,
            mouseDrag: false,
            items: 3,
          },
        },
      });
    }
  };
  siteCarousel();
});
