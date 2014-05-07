

$(document).ready(function(){

	$("select.bringGuest option").on("change",
		
		function(){ $(this).children().addClass("selected");
	});

	$(function(){
	  // Bind the swipeHandler callback function to the swipe event on div.box
		$( "article" ).on( "swiperight", swipeRightHandler );
	 	$( "article" ).on( "swipeleft", swipeLeftHandler );
	 	$( "header" ).on( "swipedown" , swipeDownforMenu );
	  // Callback function references the event target and adds the 'swipe' class to it
		
		function swipeRightHandler( event ){
	    $( event.target ).addClass( "swiped" );

		    swipeRight();
		    isItLastOrFirstSlide();
	  	}

		function swipeLeftHandler( event ){
	    $( event.target ).addClass( "swiped" );

	  	 	swipeLeft();
	   	 	isItLastOrFirstSlide();
	  	}
	  	function swipeDownforMenu( event ) {
	  		console.log("swiped down");
	  		showMenu();
	  	}
	
	});

	function isItLastOrFirstSlide(){

		var last = $(".three").is(".active");
		var first = $(".one").is(".active");

		if ( last == true ){

			$("span.next").fadeOut();

		} else{

			$("span.next").fadeIn();
		};

		if ( first == true) {
			
			$("span.pre").fadeOut();
		}else{

			$("span.pre").fadeIn();
		};
	

	};

	function swipeLeft(){
		
			
			$(".slides .active").removeClass("active").addClass("pre");
			
			$(".slides .pre").next().addClass("active");
			$(".slides .pre").removeClass("pre").hide();

			$(".slides .active").fadeIn();

			isItLastOrFirstSlide();
		};

	function swipeRight(){
			$(".slides .active").removeClass("active").addClass("pre");
			
			$(".slides .pre").prev().addClass("active");
			$(".slides .pre").removeClass("pre").hide();

			$(".slides .active").slideDown();
		
			isItLastOrFirstSlide();

	};

	isItLastOrFirstSlide();

	function showMenu(){
		console.log("hello");
		$("nav").slideDown().css("position","fixed");
	
	};

	function bringGuest(){
		
		// var guest = '<input type="text" name="FirstName" placeholder="guest first name" id="fName" required>
		// 			<input type="text" name="LastName" placeholder="guest last name" id="lName" required>';

		if ($(".bringGuest option").val() > 0){
			$("form").append(guest);
		}
	}

})