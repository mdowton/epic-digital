jQuery(function($) {
    //Typekit
    try{Typekit.load();}catch(e){}

	$('math').parent().remove();
	
    //Menu
    $('#menu #nav li').each(function() {
        var spanText = $(this).children('a').text();
        $(this).find('a').attr('data-text', spanText);
    });

    $('#menu #nav li a').each(function() {
        if (this.href == window.location.href) {
            $(this).children('span').addClass("active-tab");
        }
    });
    
    //Mobile menu
    $('.show-menu').on('click', function() {
        if ( $('#menu').hasClass('opened') ) {
            $('#menu').removeClass('opened');
            $('#timeout').show();
            $('.slider-mobile-description').css('z-index', '999');
        } else {
            $('#menu').addClass('opened');
            $('#timeout').hide();
            $('.slider-mobile-description').css('z-index', '-1');
        }
    });
    
    //Nicescroll
    //setNicescroll($);
    
    //Prallax
    if ( $('body').hasClass('single-realizacje') ) {
        $(window).bind('scroll', function() {
            var scrolledY = $(window).scrollTop();
            $('#intro-background').css('top', Math.floor((scrolledY*0.5)) * -1);
            $('#work-intro-desc').css('bottom', Math.floor((scrolledY*0.8)));
            
            $('#work-intro-logo').css({
                'top' : Math.floor((scrolledY*0.4)) * -1,
                'opacity' : 1 - ((scrolledY/100) * 0.2)
            });
        });
    }
                        
    //Resize functions
    sliderNaviWidth($);
    workContentTop($);
    descriptionBottom();
    landscape($); 
    
    $(window).resize(function() {
        sliderNaviWidth($);
        workContentTop($);
        descriptionBottom();
        landscape($);
    });
    
    //Slider navigation
    $('#slider-navi').hover(function() {
        if ( $('#slider-navi .navi:animated') ) {
            $('#timeout').stop(true, false).animate({
                'margin-right': $('#timeout').attr('data-right')
            }, 300);

            var sliderNaviWidth = $('#slider-navi').width();

            $('#slider-navi .navi').stop(true, false).animate({
                'width' : sliderNaviWidth
            }, 300);
        }
    }, function() {
        if ( $('#slider-navi .navi:animated') ) {
            $('#timeout').stop(true, false).animate({
                'margin-right': 0
            }, 300);

            $('#slider-navi .navi').stop(true, false).animate({
                'width' : 0
            }, 300);
        }
    });    
    
    //Work images width 
    $('#work-content .images-section').each(function() {
        var imgLength = $(this).find('img').length;
       
        if ( imgLength > 1 ) {
            if ( $(this).hasClass('full-width') ) {
                $(this).find('img').css({
                    'width' : 100/imgLength + '%'
                });
            } else {
                $(this).find('img').css({
                    'max-width' : 100/imgLength + '%'
                });
            }
        }
    });
    
    //Team active
    $('#team a').on('click', function() {
        $('#team .active').removeClass('active');
        $(this).parent().addClass('active');
    });
    
    $('#team .fa').on('click', function() {
        $('#team .active').removeClass('active');
        $('.active-member-photo').removeClass('active-member-photo');
        $('.page-cover .cover').removeClass('inactive-cover');
            
        $('.active-member').removeClass('active-member').fadeOut(500, function() {
            $('.description').fadeIn();
            descriptionBottom();
            $('.nicescroll').getNiceScroll().resize();
        });
    });
    
    //Mailchimp
    var webLang = $('.mc4wp-form input[type=hidden]').val();
    var alertText = $('.mc4wp-alert').first().text();
    
    if ( webLang == 'en' ) {
        $('.mc4wp-form').find('input[type=submit]').val('Sign up');
        $('.mc4wp-form').find('input[type=email]').attr('placeholder', 'Your e-mail address');
        
        if ( alertText == 'Podany adres e-mail jest juÅ¼ zarejestrowany.') {
            $('.mc4wp-alert').first().text('Specific e-mail address is already registered.');
        }
        
        if ( alertText == 'Ups. CoÅ› poszÅ‚o nie tak. Prosimy sprÃ³bowaÄ‡ ponownie.' ) {
            $('.mc4wp-alert').first().text('Oops. Something went wrong. Please try again later.');
        }
        
        if ( alertText == 'DziÄ™kujemy, pomyÅ›lnie zapisano do newslettera! SprawdÅº swojÄ… skrzynkÄ™ e-mail.' ) {
            $('.mc4wp-alert').first().text('You are successfuly subscribed! Check your e-mail inbox.');
        }
    } 
});

jQuery(window).load(function() {
    jQuery('.preloader').delay(250).fadeOut(500, function() {
        jQuery('#menu .brand img').fadeIn(0); 
        jQuery('#work-navigation h1 img').fadeIn(0); 
        jQuery('body').addClass('loaded');
    }); 
});

var sliderNaviWidth = function($) {
    var paddings = parseInt($('#slider-navi').css('top')) * 2;
    var sliderNaviItem = ($(window).height() - paddings) / 5;
    
    $('#slider-navi').css('width', Math.ceil(sliderNaviItem + (paddings/2)));
    $('#timeout').attr('data-right', Math.ceil(sliderNaviItem));
};

var workContentTop = function($) {
    $('#work-content').css('margin-top', $(window).height());
    
    var introLogoHeight = $(window).height() - $('#work-intro-desc').height() - 50;
    $('#work-intro-logo').css({
        'line-height' : introLogoHeight + 'px',
        'height' : introLogoHeight
    });
};

// var setNicescroll = function($) {
//     $('.nicescroll').niceScroll({
//         zindex: 999,
//         autohidemode: false,
//         cursorcolor: 'rgba(128,128,128,0.6)',
//         cursorborder: 0,
//         cursorborderradius: 0,
//         cursorwidth: 7
//     });
    
//     $('.single-realizacje').niceScroll({
//         zindex: 999,
//         autohidemode: false,
//         cursorcolor: 'rgba(128,128,128,0.6)',
//         cursorborder: 0,
//         cursorborderradius: 0,
//         cursorwidth: 7
//     });
    
//     $('.nicescroll-rails').append('<div class="rails-background"></div>');
// };

var show_member = function(member) {
    var $ = jQuery.noConflict();
    
    if ( $('.active-member').length ) {
        $('.active-member-photo').removeClass('active-member-photo');
        $('#photo-' + member).addClass('active-member-photo');
            
        $('.active-member').removeClass('active-member').fadeOut(500, function() {
            $('#' + member).fadeIn().addClass('active-member');
            $('.nicescroll').getNiceScroll().resize();
            descriptionBottom();
        });
    } else {
        $('.page-cover .cover').addClass('inactive-cover');
        $('#photo-' + member).addClass('active-member-photo');
            
        $('.description').fadeOut(500, function() {
            $('#' + member).fadeIn().addClass('active-member');
            $('.nicescroll').getNiceScroll().resize();
            descriptionBottom();
        });
    }
};

var descriptionBottom = function() {
    var $ = jQuery.noConflict();
    
    var windowHeight = $(window).height();
    var topContentHeight = $('#top-content').height();
    var bottomContentHeight = $('#bottom-content').height();
    var padding = windowHeight - topContentHeight - bottomContentHeight - 100;
    
    if ( padding < 90 ) {
        $('#bottom-content').css({
            'padding-top' : '90px',
            'position' : 'static'
        });
    } else {
        if ( $(window).width() > 1366 ) {
            $('#bottom-content').css({
                'position' : 'absolute',
                'bottom' : '50px',
                'left' : '50px',
                'right' : '50px'
            });
        } else {
            $('#bottom-content').css({
                'position' : 'absolute',
                'bottom' : '35px',
                'left' : '35px',
                'right' : '35px'
            });
        }
    }
};

var landscape = function($) {
    var landscapeContentHeight = $('#landscape div').height();
    $('#landscape div').css('margin-top', (landscapeContentHeight / 2) * -1);
};