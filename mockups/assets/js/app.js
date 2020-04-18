$(function(){
    $(".all-dana").owlCarousel({
        margin: 50,
        autoplay: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            1200:{
                items:3,
            }
        }
    });
    
    $(".all-mitra").owlCarousel({
        margin: 50,
        autoplay: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:3,
            },
            1200:{
                items:6,
            }
        }
    });
});