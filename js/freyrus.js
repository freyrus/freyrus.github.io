var weCanHelpPage = (function () {
    'use strict';
    var initModule, initHoverProduct,
        config = {
            relationships: {
                'e-commerce': [0, 1, 2],
                'mobile-web': [3, 4, 5],
                'hire-a-team': [6, 7]
            }
        },
        stateMap = {
            $container: null
        };
    initModule = function (container) {
        stateMap.$container = $(container);
        initHoverProduct();
    };
    initHoverProduct = function () {
        stateMap.$container.find('.main-help').hover(function () {
            var className = $(this).attr('class').split(' '),
                relation;
            if (className) {
                className = className[1];
                relation = config.relationships[className]; /* return array */
                if (relation) {
                    stateMap.$container.find('.product-list span').each(function (index) {
                        if (jQuery.inArray(index, relation) !== -1) {
                            $(this).addClass('active');
                        } else {
                            $(this).removeClass('active');
                        }
                    });
                }
            }
        });
    };
    return {
        initModule: initModule
    };
}());
$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: true,
        resize: true,
        sectionsColor: ['#ccc', '#fff'],
        anchors: ['home', 'we-can-help', 'what-we-do', 'who-we-are', 'get-in-touch'],
        scrollingSpeed: 700,
        easing: 'easeInQuart',
        menu: false,
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['home', 'we-can-help', 'what-we-do', 'who-we-are', 'get-in-touch'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        autoScrolling: true,
        scrollOverflow: false,
        css3: true,
        paddingTop: '0px',
        paddingBottom: '0px',
        normalScrollElements: '#element1, .element2',
        normalScrollElementTouchThreshold: 5,
        keyboardScrolling: true,
        touchSensitivity: 15,
        continuousVertical: false,
        animateAnchor: true,
        sectionSelector: '.section',
        slideSelector: '.slide',
        keyboardScrolling: true,
        scrollOverflow: true,

        //events
        onLeave: function(index, nextIndex, direction) {
            if (nextIndex > 1) {
                $('.pages_hone-slogan_bg').removeClass('animated fadeInDown');
                $('.pages_hone-slogan_content').removeClass('animated fadeInDown');
                $('#wrapper-header-top').addClass('small-wapper fadeInUp animated');
                setTimeout(function() {
                    $('#wrapper-header-top').removeClass('animated fadeInDown fadeInUp');
                }, 1000);
            } else {
                $('#wrapper-header-top').removeClass('small-wapper fadeInUp animated').addClass('fadeInDown animated');
                $('.pages_hone-slogan_bg').addClass('animated fadeInDown hinge');
                $('.pages_hone-slogan_content').addClass('animated fadeInDown hinge');
                setTimeout(function() {
                    $('#wrapper-header-top').removeClass('animated fadeInDown');
                    $('.pages_hone-slogan_bg').removeClass('animated fadeInDown');
                    $('.pages_hone-slogan_content').removeClass('animated fadeInDown');
                }, 1000);
            }
        },
        afterLoad: function(anchorLink, index) {

        },
        afterRender: function() {
            setTimeout(function() {
                $('.pages_hone-slogan_bg').removeClass('animated fadeInDown');
                $('.pages_hone-slogan_content').removeClass('animated fadeInDown');
            }, 2000);
        },
        afterResize: function() {},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {

        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction) {

        }
    });
    weCanHelpPage.initModule('section.pages__we_can_help');
});
