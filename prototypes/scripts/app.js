	
	var currentY = window.scrollY;

	var toggles = [{ 

		mobileFocused : function toggleMobileFocused(){

		currentY = window.scrollY;
		$('.mask').show("fast", "linear");
		$('#mobile-focused').fadeIn('fast');
		$('#close').css('display','table');
		$("window, html, body").addClass("fixed");

	}, goalOriented: function toggleGoalOriented(){
		
		currentY = window.scrollY;
		$('.mask').show("fast");
		$('#goal-oriented').fadeIn('fast');
		$('#close').css('display','table');
		$("window, html, body").addClass("fixed");

	},	simplyAesthetic: function toggleSimplyAesthetic(){

		currentY = window.scrollY;
		$('.mask').show("fast");
		$('#simply-aesthetic').fadeIn('fast');
		$('#close').css('display','table');
		$("window, html, body").addClass("fixed");
			
	},	clientWorks: function toggleClientWorks(event){

		currentY = window.scrollY;

		var targetedClient = $( event.target ).parent();

		$(targetedClient).addClass("expanded");
		$("window, html, body").addClass("fixed");	
		$(".mask").show();
		$("#close").css("display","table");
	}
	
	}];

$(document).ready( function(){
	

	$("#services div h3").on("click", function(){

		$(this).next("ul").slideToggle("fast");

		$(this).find(".arrow-down").toggleClass("getInline");
	});

	$("#menu").on( "click", toggleMenu );

	$("figure img").on("click", function(event){

		toggles[0].clientWorks(event);
		console.log(currentY);

	});

	function toggleMenu( event ){

		window.scrollTo(0,0);

		$(".mask").show();

		$("nav").slideToggle("fast");
		$("#close").css("display","table");
		$("window, html, body").toggleClass("fixed");

		currentY = window.scrollY;
	}

	$("nav a, .mask, #close").on("click", function(){
		
		$("nav, .mask, #close, .absolutelyCenter").hide();
		$("window, html, body").removeAttr("class");
		$(".expanded").removeAttr("class");

		window.scrollTo(0, currentY);


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


	// $("button").on("click", function(event){
		
	// 	event.preventDefault();

	// 	alert("We received your message. We will contact you within 24 hours.");
	
	// 	submit();
	
	// });

});

