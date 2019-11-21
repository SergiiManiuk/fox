$(document).ready(function($) {
    $('.stellarnav').stellarNav({
        breakpoint: 1280
    });
  //   $("#owl-demo").owlCarousel({
  //     autoPlay: false, 
  //     items : 3,
  //     margin:0,
  //     responsiveClass:true,
 
  // });
 
      $('#indexBanner').owlCarousel({
        margin: 0,
        nav: true,
        responsiveClass:true,
        loop: false,
        items : 1,
        nav: false,
        dots: true
      })


});

  // });
