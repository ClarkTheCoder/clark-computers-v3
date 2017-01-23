$( document ).ready(function() {

	$('.button').click(function() { // targets the button and adds event handler
    var target = $("#two");         // variable containing the target (in this case the contact form)
    var duration = 1000;			// variable containing the speed in which the animation occurs

    $('html, body').animate({       // scroll from the offset of the html document 
    	scrollTop: target.offset().top 
    }, duration);

});

	$('#contact').click(function() { // targets the button and adds event handler
    var target = $("#two");         // variable containing the target (in this case the contact form)
    var duration = 1000;			// variable containing the speed in which the animation occurs

    $('html, body').animate({       // scroll from the offset of the html document 
    	scrollTop: target.offset().top 
    }, duration);

});

	$('#learn-more').click(function() { // targets the button and adds event handler
    var target = $("#four");         // variable containing the target (in this case the contact form)
    var duration = 1000;			// variable containing the speed in which the animation occurs

    $('html, body').animate({       // scroll from the offset of the html document 
    	scrollTop: target.offset().top 
    }, duration);

});


});