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

$(function() {
    $('.go-to-bottom').click (function() {
        $('html, body').animate({scrollTop: $('header').offset().top }, 'slow');
        return false;
    });
});

function showMore() {
    $('.img-hidden').show();
    $('#show-more').hide();
}
