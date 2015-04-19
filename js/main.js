// A $( document ).ready() block.
$( document ).ready(function() {
		$ = jQuery;
    	var divHeight = jQuery('#works').height();
        console.log(divHeight);
        jQuery('.page-cover').css('height', divHeight);
        jQuery('.panel-left').css('height', divHeight);

        jQuery('.member-image').on('click', function() {
        	var href = jQuery(this).attr('href');
        	jQuery('.member-image').each(function(){
        		jQuery(this).removeClass('active-member-photo');
        		if(href == '#markBio'){
        			jQuery('#photo-mark').addClass("active-member-photo");
        		} else if (href == '#emmaBio'){
        			jQuery('#photo-emma-cortson').addClass("active-member-photo");
        		} else if (href == '#trudyBio') {
        			jQuery('#photo-trudy').addClass("active-member-photo");
        		} else if (href == '#hanBio') {
        			jQuery('#photo-hanwen').addClass("active-member-photo");
        		} else if (href == '#jonoBio') {
        			jQuery('#photo-jono').addClass("active-member-photo");
        		}
        	});	
        	
        });
});