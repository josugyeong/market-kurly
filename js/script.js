'use strict';

$(document).ready(function(){
    $('.main__banner').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // custom slider
    $('.custom__slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
    });
});
