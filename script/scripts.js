(function($) { "use strict";

    //Navigation

    var app = function () {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function () {
                return toggleClass(body, 'nav-active');
            });
        };
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
        };
        init();
    }();

})(jQuery);

$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 7000,
    autoplaySpeed: 1000,
    stagePadding:0,
    loop: true,
    nav: true,
    navText: false,
    dots: true,
    dotsEach:true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:2
        },
        1100:{
            items:4
        }
    }
})

$(document).on('click','.onoff',function(){
    $(this).toggleClass('onoff-on');
    $(this).toggleClass('onoff-off');
});