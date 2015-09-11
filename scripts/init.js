"use strict"

$(function() {

    
	Parse.initialize("kmruS7yf8yy5zTkjsBFq3O9Ixmj2inJIvySPeEjr", "hbKSasn2habkodoFNQBUK4mJ8mtXR4DZluvDrRK0");

	var Xaleo = {
		User : { 

		  ParseUser : {}
		}
	};
	
	Xaleo.ParseIntegerate = function(){
		var ParseUser = Parse.Object.extend("User");
		Xaleo.User.ParseUser = new ParseUser();
	};

	Xaleo.ParseIntegerate();

    Xaleo.User.bind = function(){

        Xaleo.User.New =  {
            username : $("#create-user input[name='email']").val() + "@" + 
                        $("#create-user select[name='email-provider']").val() + ".com",
            password : $("#create-user input[name='password']").val(),
            passwordAgain : $("#create-user input[name='passwordAgain']").val()
        };
    };

	Xaleo.User.isValid = function( value1, value2 ){

        switch( value1 === value2 ){
            case true:
            return true;
            break;

            case false:
            return false;
            break;
        }
    };

    Xaleo.User.checkPasswordMatching = function(){
        
        Xaleo.User.bind();

        var password = $("input[name='[password']").val();

        if ( password !== 'undefined' ){ 
            
            switch( Xaleo.User.isValid( Xaleo.User.New.password, Xaleo.User.New.passwordAgain ) ){
                case false:
                $("#password-no-match").addClass("shown");
                $("button[name='createUser']").attr("disabled", "disabled");
                break;

                case true:
                $("#password-no-match").removeClass("shown");
                $("button[name='createUser']").removeAttr("disabled");
                break;
            };

        } else { return; }
    };

	Xaleo.User.createUser = function( newUser ){

	    Xaleo.User.ParseUser.save({
	        
	        username : newUser.username,
	        password : newUser.password,
	        email : newUser.username,

	    }).then(function(response){
	    	$("form[name='signIn']").show();
	    });
	};
    
    Xaleo.User.creatingUser = function(){
		
        $("#create-user input[name='email']").focus();

		$("button[name='createUser']").on("click", function(){
	
            Xaleo.User.bind();
			
		    if ( Xaleo.User.isValid( Xaleo.User.New.password,  Xaleo.User.New.passwordAgain) ){
	            Xaleo.User.createUser( Xaleo.User.New );
	        } else{
	            $("#password-no-match").show();
	        }
    	});
    };
    Xaleo.User.signingIn = function(){

        $("#sign-in input[name='email']").focus();
        $("button[name='signInNow']").on("click", function(){
            Xaleo.User.signIn();
        });
    };
    Xaleo.User.signIn = function( existingUser ){
        
        var existingUser = {};
        existingUser.username = $("#sign-in input[name='email']").val();
        existingUser.password = $("#sign-in input[name='password']").val();

            Xaleo.User.Existing =  {
                username : $("#sign-in input[name='email']").val() + "@" + 
                            $("#sign-in select[name='email-provider']").val() + ".com",
                password : $("#sign-in input[name='password']").val()
            };

	    Parse.User.logIn( Xaleo.User.Existing.username, Xaleo.User.Existing.password,{
	    	success: function(user){
	    		$("#startup").hide();
	    		$("#main").show();
	    	},
	    	error: function(user, error){
	    		console.log(error);
	    	}
	    });
    };
    Xaleo.User.signOut = function(){
	    Parse.User.logOut().then(function(){
	    	$("#main").hide();
	    	$("#startup, .branding, .frontdoor").show();
            $(".onCanvas").toggleClass("onCanvas");
	    });
    };

    $("#startup button").on("click", function(event){
    	
    	var element = event.currentTarget;

    	if ( $(element).is(".signIn") ){
    		$("form[name='signIn']").addClass("onCanvas");
            $(".frontdoor").hide();
    	} else if ( $(element).is(".createNew") ){
    		$("form[name='createNew']").addClass("onCanvas");
            $(".frontdoor").hide();
    	} else if ( $(element).is(".back") ){
    		$("#startup form").removeClass("onCanvas");
            $(".frontdoor").show();
    	} else { return }
    });

    $("button[name='createNew']").on("click", function(){
    	Xaleo.User.creatingUser();
    });
    $("button[name='signIn']").on("click", function(){
    	Xaleo.User.signingIn();
    });
    $("nav ul li #sign-out").on("click", function(){
    	Xaleo.User.signOut();
    });

    $("button[name='camera']").on("click", function(){
        
        var success = function(stream){

            console.log(stream);
            var video = document.querySelector("video");
            var url = window.URL || window.webkitURL;

            video.src = window.URL.createObjectURL(stream);
            // video.play();
        },
        error = function( error ){
            console.log(error);
        };

        navigator.getUserMedia = ( navigator.getUserMedia || 
        navigator.webkitGetUserMedia || 
        navigator.mozGetUserMedia);

        navigator.getUserMedia({video:true}, success, error);

    });

    $("img").width("296").css("vertical-align","top").lazyload({});

    $("button[name='menu'], nav li #close, .mask").on("click", function(){
        $("nav").toggleClass("onCanvas");
    });

    $("footer ul li button").on("click", function(){
    	$(".active").removeClass("active");
    	$(this).addClass("active");
    	var name = "#" + $(this).attr("name");
    	$("article" + name).addClass("active");
    });

    $("#create-new input[name='password'], #create-new input[name='passwordAgain']").on("keyup", function(event){
        
        var requirements = {

            "email" : $("input[name='email']").val(),
            "password" : $("input[name='password']").val()
        };

        Xaleo.User.checkPasswordMatching();
    });

    $("#sign-in input[name='password']").on("keyup", function(){
        $("button[name='signInNow").removeAttr("disabled");
    });

    $("input").on("focus", function(event) {
        event.preventDefault();
        event.stopPropagation();
    });

    var globalCoords =  {

        startX : 0,
        startY : 0,
    };

    var slider = { 
        
        el: {
            slider: $("body"),
            holder: $("#main"),
            imgSlide: $("article")
        },
        slideWidth: $("#main").width(),
        touchstartx: undefined,
        touchmovex: undefined,
        movex: undefined,
        index: 0,
        longTouch: undefined,
        start: function(event){
            this.touchstartx = event.originalEvent.touches[0].pageX;
            $('.animate').removeClass('animate');

        },
        move: function(event){

            this.touchmovex =  event.originalEvent.touches[0].pageX;
              // Calculate distance to translate holder.
            this.movex = this.index*this.slideWidth + (this.touchstartx - this.touchmovex);
              // Defines the speed the images should move at.
            var panx = 100-this.movex/6;
            if (this.movex < 600) { // Makes the holder stop moving when there is no more content.
            this.el.holder.css({
                // 'transform':'translate3d(-' + this.movex + 'px,0,0)',
                '-webkit-transform':'translate(-' + this.movex + 'px,0,0)'
                });
            }
            // if (panx < 100) { // Corrects an edge-case problem where the background image moves without the container moving.
            // this.el.imgSlide.css('transform','translate3d(-' + panx + 'px,0,0)');
            // }
        },
        end: function(event){
            
            var absMove = Math.abs(this.index*this.slideWidth - this.movex);
            // Calculate the index. All other calculations are based on the index.
            if (absMove > this.slideWidth/2 || this.longTouch === false) {
            if (this.movex > this.index*this.slideWidth && this.index < 2) {
                this.index++;
            } else if (this.movex < this.index*this.slideWidth && this.index > 0) {
                this.index--;
                }
            }   
            // Move and animate the elements.
            this.el.holder.addClass('animate').css({
                // 'transform': 'translate3d(-' + this.index*this.slideWidth + 'px,0,0)',
                '-webkit-transform': 'translate(-' + this.index*this.slideWidth + 'px,0,0)'
                });
            // this.el.imgSlide.addClass('animate').css('transform', 'translate3d(-' + 100-this.index*50 + 'px,0,0)');
        }
    }
    $("#main").on("touchstart", function(event){
        slider.start(event);
    });
    $("#main").on("touchmove", function(event){
        slider.move(event);
    });
    $("#main").on("touchend", function(event){
        slider.end(event);    
    });

});