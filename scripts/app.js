	
	var toggles = [{ mobileFocused : function toggleMobileFocused(){

		$('.mask').show("fast", "linear");
		$('#mobile-focused').fadeIn('fast');
		$('#close').css('display','table');

	}, goalOriented: function toggleGoalOriented(){

		$('.mask').show("fast");
		$('#goal-oriented').fadeIn('fast');
		$('#close').css('display','table');

	},	simplyAesthetic: function toggleSimplyAesthetic(){

		$('.mask').show("fast");
		$('#simply-aesthetic').fadeIn('fast');
		$('#close').css('display','table');

	}

	}];

	var closeFigure = function closeFigure(){

		$("#close-figure").on("click", function(){

			$(this).hide();
			$(".disable").toggleClass("disable");
			$("figure.active").removeClass("active");
			$(".bottom").toggleClass("bottom hidden");

		});

	}

$(document).ready( function(){
	

	$("#services div h3").on("click", function(){

		$(this).next("ul").slideToggle("fast");
		$(this).find(".arrow-down").toggleClass("getInline");
	});

	$("#menu").on( "click", toggleMenu );

	function toggleMenu( event ){

		window.scrollTo(0,0);

		console.log($("this"));

		$(".mask").show();

		$("nav").slideToggle("fast");
		$("#close").css("display","table");
	}

	$("nav a, .mask, #close").on("click", function(){
		
		$("nav, .mask, #close, .absolutelyCenter").hide();

	});


  	var initialScrollPosition = 0;
	

	$(window).on("scroll",function(){

		var currentScrollPosition = $(this).scrollTop();

		if ( currentScrollPosition < initialScrollPosition ){
		
			// $("#menu").css({"background-color":"rgba(225, 225, 225, 0.7) !important", "display":"table"});
			$("#menu").fadeIn();

		}

		else if ( window.scrollY === 0 ){

			$("#menu").fadeIn();

		}

		else {
			
			$("#menu").hide();

		}

		initialScrollPosition = currentScrollPosition;

	});


	var isLast = "";
	var isFirst = "";

	var goNext = function(){

		// $("#previous").fadeIn();

		$(".active").removeClass("active").next("div, li").addClass("active");
		
		// isLast = $(".active").is(":last-child");
		
		// if ( isLast === true) {
			
		// 	$("#next").fadeOut();
		// }
	}



	var goBack = function(){

		// $("#next").fadeIn();

		$(".active").removeClass("active").prev("div, li").addClass("active");

		// isFirst = $(".active").is(":first-child");

		// if ( isFirst === true ){
			
		// 	$("#previous").fadeOut();

		// }
	}


	// $("#next").on("click", goNext );

	// $("#previous").on("click", goBack );

		// Bind the swipeleftHandler callback function to the swipe event on div.box
 	$( "figure" ).on( "swipeleft", swipeleftHandler );
 	$( "figure" ).on( "swiperight", swipeRightHandler );
	 
  	// Callback function references the event target and adds the 'swipeleft' class to it
  	function swipeleftHandler( event ){
		
		// if ( isLast === true ){
			
		// 	return false;
		// 	isLast = "";
		// }

		goNext();

  	}

  	function swipeRightHandler ( event ){

  		// if ( isFirst === true ){
  			
  		// 	return false;
  		// 	isFirst = "";
  		// }

  		goBack();
  	}

 //  	$("#client-works figure").on("click", function(){
	
	// 	var match = $(this).context.id;

	// 	$("#client-works figure figcaption").css("font-weight","regular");
	// 	$(this).find("figcaption").css({"color":"#000"});

	// 	$("#slider div").removeClass("active");
	// 	$("#slider div#" + match + ", li#"+match).addClass("active");
	
	// });



	$("#client-works figure").on("click", function(){

		$("#client-works figure").removeClass("active").toggleClass("disable");
		$(this).toggleClass("active");
		$(this).find("figcaption p").toggleClass("hidden bottom");
		$(this).find("figcaption span.headCaption").toggle();
		$("#close-figure").show();

		closeFigure();


	});



	$("input[type='submit']").on("click", function(event){
		
		event.preventDefault();

		alert("We received your message. We will contact you within 24 hours.");
	
		return false;
	
	});



});

