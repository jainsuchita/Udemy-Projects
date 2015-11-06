$(document).ready(function(){
	alert("something");
	var speed = 500;              // Fade Speed
	var autoswitch = true;		  //Auto slider option
	var autoswitch_speed = 4000;  //Auto slider speed

	// Show first slide
	$('.slide').first().addClass('.active');

	// Hide all other slides
	$('.slide').hide();

	// Show first slide using active class 
	$('.active').show();
});