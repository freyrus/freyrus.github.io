Pace.on("done", function(){
    $('.pace-progress').fadeOut('fast', function() {
        $('.wrapper-plus').fadeOut(400); 
    });
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
                $('.back-to-top').fadeIn(400);
                $('.pages_hone-slogan_bg').removeClass('animated fadeInDown');
                $('.pages_hone-slogan_content').removeClass('animated fadeInDown');
                $('#wrapper-header-top').addClass('small-wapper fadeInUp animated');
                setTimeout(function() {
                    $('#wrapper-header-top').removeClass('animated fadeInDown fadeInUp');
                }, 1000);
            } else {
                $('.back-to-top').fadeOut('400');
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
    $('.back-to-top').click(function(){
       $.fn.fullpage.moveTo(1, 0);
        return false;
    });
});
