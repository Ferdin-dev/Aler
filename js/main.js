/********************************
Hero Slider
 *******************************/

$(document).ready(function () {
  $(".hero-slide").owlCarousel({
    items: 1,
    autoplay: true,
    margin: 20,
    nav: true,
    navText: [
      '<i class="icon-chevron-left"></i>',
      '<i class="icon-chevron-right"></i>',
    ],
    dots: false,
    loop: true,
    autoplaySpeed: 1000,
    smartSpeed: 1500,
  });

  /********************************
Hero btn
 *******************************/

  $(".btns-block div").on("click", function () {
    $(".btns-block div").removeClass("active");
    $(this).addClass("active");
  });

  // Accordion

  $(".card .accordion-text").on("click", function () {
    $(".card .accordion-container").slideToggle("slow");
  });
});

/********************************
Property
 *******************************/
$(".property-controls li").on("click", function () {
  $(".property-controls li").removeClass("active");
  $(this).addClass("active");
});
if ($(".property-filter").length > 0) {
  var containerEl = document.querySelector(".property-filter");
  var mixer = mixitup(containerEl);
}

/*****************************
Feature Property
 ****************************/
$(".feature-slide").owlCarousel({
  loop: true,
  margin: 0,
  items: 1,
  dots: false,
  nav: true,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  navText: [
    '<i class="icon-chevron-left"></i>',
    '<i class="icon-chevron-right"></i>',
  ],
  smartSpeed: 1200,
  autoHeight: false,
  autoplay: true,
});

/******************************
 * Testimonial
 *****************************/
$(".testimonial-container").owlCarousel({
  items: 1,
  autoplay: true,
  margin: 20,
  nav: false,
  navText: [
    '<i class="icon-chevron-left"></i>',
    '<i class="icon-chevron-right"></i>',
  ],
  dots: false,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
  },
  autoplaySpeed: 1000,
  smartSpeed: 1500,
});

/******************************
 * Logo Carousel
 *****************************/
$(".logo-container").owlCarousel({
  items: 1,
  autoplay: true,
  margin: 20,
  nav: false,
  navText: [
    '<i class="icon-chevron-left"></i>',
    '<i class="icon-chevron-right"></i>',
  ],
  dots: false,
  loop: true,
  responsive: {
    0: {
      items: 3,
    },
    576: {
      items: 3,
    },

    768: {
      items: 4,
    },
    992: {
      items: 5,
    },
    1200: {
      items: 6,
    },
  },
  autoplaySpeed: 1000,
  smartSpeed: 1500,
});

// Mobile

$(".dropdown-btn").on("click", function () {
  $(".sub-mobile-link").slideToggle("slow");
});

$(".ham-burger").on("click", function () {
  $(".mobile-navigation").animate({
    left: "0"
  }, "slow");
});

$(".close-btn").on("click", function () {
  $(".mobile-navigation").animate({
    left: "-30rem"
  }, "slow");
});

//About page

$('.agent-container').owlCarousel({
  items: 3,
  autoplay: true,
  autoplaySpeed: 1000,
  smartSpeed: 1500,
  nav: true,
  dots: false,
  margin: 20,
  navText: [
    '<i class="icon-chevron-left"></i>',
    '<i class="icon-chevron-right"></i>',
  ],
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },

    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
})