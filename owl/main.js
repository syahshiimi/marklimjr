$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  autoWidth:true,
  autoHeight:true,
  center:true,
  responsive:{
      200:{
          items:2,
          nav:false
      },
      400:{
          items:1,
          nav:false
      },
      1200:{
          items:1,
          loop:true,
          margin: 10,
      }
  }
})

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementByClass("header-page").style.top = "0";
  } else {
    document.getElementByClass("header-page").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}



