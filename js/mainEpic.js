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
        
        jQuery('.page-cover').css('height', divHeight);
        jQuery('.panel-left').css('height', divHeight);

        jQuery('body').on('click', '.member-image', function() {
        	var href = jQuery(this).attr('href');
        	
        	//setTimeout(myEl, 500);

		         

        	
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
        		} else if (href == '#cathieBio') {
        			jQuery('#photo-cathie').addClass("active-member-photo");
        		}
        	});	
        	
        });
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