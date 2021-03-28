// Edit the date here

$(document).ready(function() {

	$("#countdown").countdown({
				date: "9 September 2016 00:00:01",
				format: "on"
			},

			function() {
				// callback function
			});

});
