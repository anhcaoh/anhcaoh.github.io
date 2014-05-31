

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

		if( $("img").is(".expanded") ) {
			$(".smiley").hide();
		} else{
			$(".smiley").show();
		}
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

$(document).ready(function(){
	
	var autoStart = true;

	var start = function(){
		
		if( autoStart == true && $("#ss").not(".stop") ){
			$("img.expanded").toggleClass("expanded min", 225).next("img").toggleClass("expanded min").delay(550).fadeIn(550);
		};
	};

	setInterval(function(){
		start();
	},8000);

	$("div#ss").on("click", function(){
		
		if( $(this).is(".start")){
			autoStart = false;
			$(this).html("&#9658;");
		}else{
			autoStart = true;
			$(this).html("&#9616;&#9616;");
		}

		$(this).toggleClass("start stop");

	});
});