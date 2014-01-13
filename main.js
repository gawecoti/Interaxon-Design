$(document).ready(function(){	
	$("#top-header").delay(100).fadeIn("slow");

	$("#mobile-icon button").on('click', function() {
		$("#mobile-menu").slideToggle("fast");
	});

	$("#toggle-bar").on('click', function() {
		$("#sidebar-content").slideToggle("fast");

		var icon = $("#plus").css("display");

		if (icon == "none") {
			$("#minus").css("display", "none");
			$("#plus").css("display", "inline-block");
		}
		else {
			$("#plus").css("display", "none");
			$("#minus").css("display", "inline-block");
		}
	});

	// If window size is below 850px and nav bar is down, move it up 
	$(window).resize(function() {
		var width = $(window).width();
		var mobileMenu = $('#mobile-menu').css('display');

		if (width > 850 && (mobileMenu != 'none')) {
			$("#mobile-menu").slideUp("fast");
		}
	});

});


