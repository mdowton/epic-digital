// A $( document ).ready() block.
function myEl () {
	var myEl = jQuery('.collapse.in');
	// console.log(jQuery('.collapse.in'));

	jQuery('html, body').animate({
        scrollTop: jQuery(myEl).offset().top
    }, 50);   

	return myEl;
}
$( document ).ready(function() {
    	var divHeight = jQuery('#works').height();
        
        jQuery('.page-cover').css({'height' :divHeight, 'overflow' : 'scroll'});
        jQuery('.panel-left').css('height', divHeight);

        jQuery('body').on('click', '.member-image', function() {
        	var href = jQuery(this).attr('href');
        	
        	if(typeof href === 'undefined') return false;

		         

        	
        	jQuery('.member-image').each(function(){
        		jQuery(this).removeClass('active-member-photo');
        		if(href == '#markBio'){
        			jQuery('#photo-mark').addClass("active-member-photo")
                    jQuery('.page-cover').css({'overflow' : 'hidden'});
        		} else if (href == '#emmaBio'){
        			jQuery('#photo-emma-cortson').addClass("active-member-photo");
                    jQuery('.page-cover').css({'overflow' : 'hidden'});
        		} else if (href == '#trudyBio') {
        			jQuery('#photo-trudy').addClass("active-member-photo");
                    jQuery('.page-cover').css({'overflow' : 'hidden'});
        		} else if (href == '#hanBio') {
        			jQuery('#photo-hanwen').addClass("active-member-photo");
                    jQuery('.page-cover').css({'overflow' : 'hidden'});
        		} else if (href == '#jonoBio') {
        			jQuery('#photo-jono').addClass("active-member-photo");
                    jQuery('.page-cover').css({'overflow' : 'hidden'});
        		} else if (href == '#cathieBio') {
        			jQuery('#photo-cathie').addClass("active-member-photo");
                    jQuery('.page-cover').css({'overflow' : 'hidden'});
        		}
        	});	
        	
        });

        jQuery(".products-link").on({
            mouseenter: function () {
                jQuery(".sub-menu").addClass('height');
            },
            mouseleave: function () {
               // jQuery(".sub-menu").toggleClass('height', 1000);
            }
        });


        // jQuery('.products-link').on('hover', function(){
        //     console.log('comes on hover');
        //     jQuery(".sub-menu").addClass('height');
        // });
    
});


$(window).bind({
     load:function(){
     	var elementWidth = jQuery('.main-call').width();
     	jQuery('.main-call').css('margin-left',-elementWidth/2);
     },
     resize:function(){
     	var elementWidth = jQuery('.main-call').width();
     	jQuery('.main-call').css('margin-left',-elementWidth/2);
     },
     scroll:function(){

    }
});