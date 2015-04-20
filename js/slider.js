var PageTransitions = (function() {
    var $ = jQuery.noConflict();
    var $main = $( '#slider' ),
	$pages = $main.children( '.slide' ),
        $iterate = $('#slider-navi .navi'),
	pagesCount = $pages.length,
	current = 0,
        clicked = 0,
	isAnimating = false,
	endCurrPage = false,
	endNextPage = false,
        sliderInterval = false,
        progressInterval = false,
	animEndEventNames = {
            'WebkitAnimation' : 'webkitAnimationEnd',
            'OAnimation' : 'oAnimationEnd',
            'msAnimation' : 'MSAnimationEnd',
            'animation' : 'animationend'
	};
	// animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
 //        support = Modernizr.cssanimations;
	
	function init() {
                $pages.each( function() {
                    var $page = $( this );
                    $page.data( 'originalClassList', $page.attr( 'class' ) );
                } );

                $pages.eq( current ).addClass( 'pt-page-current' );
                $('.slider-description h2').eq(current).addClass('active');
                $('.slider-mobile-description h2').eq(current).addClass('active');
                $('#slider-navi .navi').eq(current).children('a').addClass('active');

                progress();

                progressInterval = setInterval(progress, 7000);
                sliderInterval = setInterval(nextPage, 7000);

                $iterate.on('click', function() {
                    if ( !$(this).children('a').hasClass('active') ) {
                        clearInterval(sliderInterval);
                        clearInterval(progressInterval);

                        $('#progress').stop().css('height', '0px');

                        progress();

                        progressInterval = setInterval(progress, 7000);
                        sliderInterval = setInterval(nextPage, 7000);

                        if (isAnimating) {
                            return false;
                        }

                        clicked = $(this).index();

                        clickedPage();
                    }
                });
	}

	function nextPage() {
            if ( isAnimating ) {
                return false;
            }
            
            isAnimating = true;
            
            var $currPage = $pages.eq( current );
            
            if( current < pagesCount - 1 ) {
                ++current;
            } else {
                current = 0;
            }
            
            $('.slider-description .active').removeClass('active');
            $('.slider-mobile-description .active').removeClass('active');
            $('#slider-navi .active').removeClass('active');
            
            $('.slider-description h2').eq(current).addClass('active');
            $('.slider-mobile-description h2').eq(current).addClass('active');
            $('#slider-navi .navi').eq(current).children('a').addClass('active');
            
            var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' ),
		outClass = 'pt-page-fade', inClass = 'pt-page-moveFromTop pt-page-ontop';

            $currPage.addClass( outClass ).on( animEndEventName, function() {
                $currPage.off( animEndEventName );
		          endCurrPage = true;
                    if( endNextPage ) {
                        onEndAnimation( $currPage, $nextPage );
		              }
                });

            $nextPage.addClass( inClass ).on( animEndEventName, function() {
                $nextPage.off( animEndEventName );
		endNextPage = true;
		if( endCurrPage ) {
                    onEndAnimation( $currPage, $nextPage );
		}
            } );

            if( !support ) {
                onEndAnimation( $currPage, $nextPage );
            }
	}
        
        function clickedPage() {
            if ( isAnimating ) {
                return false;
            }
            
            isAnimating = true;

            var $currPage = $pages.eq( current );
            current = clicked;
            
            $('.slider-description .active').removeClass('active');
            $('.slider-mobile-description .active').removeClass('active');
            $('#slider-navi .active').removeClass('active');
            
            $('.slider-description h2').eq(current).addClass('active');
            $('.slider-mobile-description h2').eq(current).addClass('active');
            $('#slider-navi .navi').eq(current).children('a').addClass('active');
            
            var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' ),
		outClass = 'pt-page-fade', inClass = 'pt-page-moveFromTop pt-page-ontop';

            $currPage.addClass( outClass ).on( animEndEventName, function() {
                $currPage.off( animEndEventName );
		endCurrPage = true;
                if( endNextPage ) {
                    onEndAnimation( $currPage, $nextPage );
		}
            } );

            $nextPage.addClass( inClass ).on( animEndEventName, function() {
                $nextPage.off( animEndEventName );
		endNextPage = true;
		if( endCurrPage ) {
                    onEndAnimation( $currPage, $nextPage );
		}
            } );

            if( !support ) {
                onEndAnimation( $currPage, $nextPage );
            }
	}
        
	function onEndAnimation( $outpage, $inpage ) {
            endCurrPage = false;
            endNextPage = false;
            resetPage( $outpage, $inpage );
            isAnimating = false;
	}

	function resetPage( $outpage, $inpage ) {
            $outpage.attr( 'class', $outpage.data( 'originalClassList' ) );
            $inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' pt-page-current' );
	}
        
        function progress() {
            var timeoutHeight = $('#timeout').height();
            
            $('#progress').animate({
                'height' : timeoutHeight
            }, 7000, 'linear', function() {
                $('#progress').css('height', '0px');
            });
        }

        $(window).load(function() {
            init();
        });
	

	return { 
            init : init,
            nextPage : nextPage
	};
})();