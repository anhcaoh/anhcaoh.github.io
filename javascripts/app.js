
$(function(){

	$(window).on("scroll",function(){
		
		if ( $(this).scrollTop() >= 120 ) {
			$(".hero").fadeOut("fast");
		}
		else { 
			$(".hero").fadeIn("fast"); 
		}

		// if ( $(this).scrollTop() >= 355 ){
		// 	$("#invited").addClass("faded");
		// }
		// else {
		// 	$("#invited").removeClass("faded");
		// }
	});

});