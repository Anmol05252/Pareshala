
// Start Window Load Function
$(window).on('load', function() {

    'use strict';

    $('.hero-slider').ready(function(){
        $(this).find('.slick-arrow').append('<span></span>')
    });

    // Check android devices OS system if they are older than 4.4
    var ua = navigator.userAgent;
    if( ua.indexOf("Android") >= 0 ) {
        var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)),
            wHeight = $(window).height();
        if (androidversion < 4.9) {
            $(".home").css({"height": wHeight + "px"});
        }
    }

// End Function
});
