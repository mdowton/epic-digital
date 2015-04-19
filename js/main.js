// A $( document ).ready() block.
$( document ).ready(function() {
    	var divHeight = jQuery('#works').height();
        console.log(divHeight);
        jQuery('.page-cover').css('height', divHeight);
});