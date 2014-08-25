var weCanHelpPage = (function() {
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
    initModule = function(container) {
        stateMap.$container = $(container);
        initHoverProduct();
    };
    initHoverProduct = function() {
        stateMap.$container.find('.main-help').hover(function() {
            var className = $(this).attr('class').split(' '),
                relation;
            if (className) {
                className = className[1];
                relation = config.relationships[className]; /* return array */
                if (relation) {
                    stateMap.$container.find('.product-list span').each(function(index) {
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
Pace.on("start", function(){
    console.log('run');
});

Pace.on("done", function(){
    $('.wrapper').fadeIn(400);
});
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
            $(".header__menu-item" ).removeClass('active');
            $(".header__menu-item:eq("+(nextIndex-1)+")" ).addClass('active');
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
    //what we do
    var project_item = $('.list-project-min a figure');
    project_item.hover(function() {
        $(this).addClass('figure_down');
        var parent = $(this).parent();
        parent.find('.project_name').stop().addClass('project_name_up');
        parent.find('.readMore').stop().slideDown('fast');
    }, function() {
        $(this).removeClass('figure_down');
        var parent = $(this).parent();
        parent.find('.project_name').stop().removeClass('project_name_up');
        parent.find('.readMore').stop().slideUp('fast');
    });
});
