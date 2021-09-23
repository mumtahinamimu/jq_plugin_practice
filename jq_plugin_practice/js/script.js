




/*================================================= 
JQuery code
===================================================*/

$(document).ready(function(){

//counter up
$('.counter').counterUp({
  delay: 20,
  time: 2000
});

//WOW js
wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();

//aos plugin
      AOS.init({
        duration: 1500,
      });

//mixitup plugin
var mixer = mixitup('.mix_item');

//owl carousel
$('.owl-carousel').owlCarousel({
        center: true,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        nav:true,

        responsive:{
          0:{
              items:1,
              nav:false,
          },
          600:{
              items:2
          },
          1000:{
              items:3
          },
          1400:{
            items:4
        }   

      }        
});


});