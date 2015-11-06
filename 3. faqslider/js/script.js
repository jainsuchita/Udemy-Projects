// Accordian

var action = "click";  // click or hover or double click
var speed = "500";

$(document).ready(function(){
	// Question handler
	$('li.q').on(action, function(){
		// Get next element and slide up all other elements
		$(this).next().slideToggle(speed).siblings('li.a').slideUp(speed);

		// Get image for active question
		var img = $(this).children('img');

		// Remove the 'rotate' class from all images except the active
		$('img').not(img).removeClass('rotate');

		// Toggle rotate class
		img.toggleClass('rotate');
			})
});