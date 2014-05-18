
$(function(){
	
	var initialScrollPosition = 0;
		
	$(window).on("scroll",function(){
		
		// if ( $(window).scrollTop() + $(window).height() == $(document).height() ) {
		// 	$(".top").addClass("showTop");
		// 	console.log('bottom');
		// }
		// else { 
		// 	$(".top").removeClass("showTop"); 
		// };
		var currentScrollPosition = $(this).scrollTop();

		if ( currentScrollPosition < initialScrollPosition ){
			$("#menu li").show();
		}
		else {
			$("#menu li").hide();
		
		}

		initialScrollPosition = currentScrollPosition;
	});

});