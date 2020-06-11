$('.menu_slider').slick({
    dots: true,
    customPaging: function(menu_slider, i) { 
        return '<button class="button">' + $(menu_slider.$slides[i]).attr('title') + '</button>';
    },
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: false,
    nextArrow: false
});

function myFunction(x) {
    if (x.matches) { // If media query matches
        $('.main_slider').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="slick-prev"><img class="prev_arrow" src="img/left.png"></div>',
            nextArrow: '<div class="slick-next"><img class="next_arrow"src="img/right.png"></div>'
            
        });
    } else {
        $('.main_slider').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<div class="slick-prev"><img class="prev_arrow" src="img/left.png"></div>',
            nextArrow: '<div class="slick-next"><img class="next_arrow"src="img/right.png"></div>'
            
        });
    }
}
  
var x = window.matchMedia("(max-width: 860px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)