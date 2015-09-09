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
	    	$("#startup").show();
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

});