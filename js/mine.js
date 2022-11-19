(function($) {
    'use strict'

    //plugins js
    $('.productc-carousel').owlCarousel({
        loop: false,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    $('.testmonials-carousel').owlCarousel({
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
})(jQuery);