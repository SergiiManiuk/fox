(function($) {
  $(function() {
    $("ul.report-tabs__caption").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.report-tabs")
        .find("div.report-tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);

$(document).ready(function($) {
    $('.stellarnav').stellarNav({
        breakpoint: 1280
    }); 
    $('#indexBanner').owlCarousel({
      margin: 0,
      nav: true,
      responsiveClass:true,
      loop: false,
      items : 1,
      nav: false,
      dots: false
    })

    $('.slider-brand').owlCarousel({
      margin: 0,
      nav: true,
      responsiveClass:true,
      loop: false,
      items : 5,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        560: {
          items: 2
        },
        769: {
          items: 3
        },
        1100: {
          items: 4
        },
        1300: {
          items: 5
        }
      }
    })

    var slideDef = $('.slider-default'); 
     slideDef.owlCarousel({
      margin: 0,
      autoHeight:true,
      nav: true,
      responsiveClass:true,
      loop: true,
      items : 3,
      margin: 23,
      stagePadding: 4,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        740: {
          items: 2
        },
        769: {
          items: 2
        },
        900: {
          items: 3
        },
        1500: {
          items: 3
        }
      }
    })
});

