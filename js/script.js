$('.navbar_button').click(function (e) {
  e.preventDefault();
  $('ul.navbar-nav').toggleClass('show');
});

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 3,
  preventInteractionOnTransition: true,
  touchEventsTarget: "wrapper",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 350,
    modifier: 1,
    slideShadows: true
  },
  autoplay: {
    delay: 3000,
  }
});

/*ABOUT PAGE*/
$('.testimonial-carousel').owlCarousel({
  loop:true,
  margin:20,
  autoplay: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
});

/*All pages*/

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}