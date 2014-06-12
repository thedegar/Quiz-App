

//reset function will be used to clear all variables and start the quiz again.
var reset = function() {
	$(".diamondDraw").hide();
	$("#five").show();
};

$(document).ready(function() {
	reset();

	//
	$("#start").on("click", function() {
		console.log("start clicked");
	});


});
