
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
			$("#menu").slideDown();
		}
		else {
			$("#menu").slideUp();
		
		}

		initialScrollPosition = currentScrollPosition;
	});

	$("img").on("click",function(){

		$("img.expanded").not(this).removeClass("expanded").addClass("min");
		$(this).toggleClass("expanded").toggleClass("min");

		
	});

	$(".addr").on("click", function(){
		$("#g-map").toggle();
	})

	$("#bring-guest").click(function(){
		document.getElementById("ckb-guest").checked == true ? checkedIsYes() : checkedIsNo();

		function checkedIsYes(){
			$("#guest-confirm").empty().append("yes");
			$(".plus1").show();
		};

		function checkedIsNo(){
			
			$("#guest-confirm").empty().append("no");
			$(".plus1").hide();
		};
	
	});

});

