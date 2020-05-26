$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });

    $( function() {
        $( "#accordion" ).accordion();
    } );
});

$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.go-to-bottom').fadeIn();
        } else {
            $('.go-to-bottom').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('.go-to-bottom').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

function showMore() {
    $('.img-hidden').show();
    $('#show-more').hide();
}
