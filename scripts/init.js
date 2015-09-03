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
		
		$("button[name='createUser']").on("click", function(){
			var newUser = {};
	        newUser.username = $("#createNew input[name='email']").val();
	        newUser.password = $("#createNew input[name='password']").val();
	        newUser.passwordAgain = $("#createNew input[name='passwordAgain']").val();
			
		    if ( Xaleo.User.isValid(newUser.password, newUser.passwordAgain) ){
	            Xaleo.User.createUser(newUser);
	        } else{
	            console.log("Passwords need to match.")
	        }
    	});
    };
    Xaleo.User.signingIn = function(){

    	var existingUser = {};
    	existingUser.username = $("#signIn input[name='email']").val();
	    existingUser.password = $("#signIn input[name='password']").val();
    };
    Xaleo.User.signIn = function( existingUser ){
    	var user = new Parse.User(existingUser);
	    Parse.User.logIn( existingUser.username, existingUser.password,{
	    	success: function(user){
	    		$("#startup").hide();
	    	},
	    	error: function(user, error){
	    		console.log(error);
	    	}
	    });
    };

    $("#startup button").on("click", function(event){
    	
    	var element = event.currentTarget;

    	if ( $(element).is(".signIn") ){
    		$("form[name='signIn']").show();
    	} else if ( $(element).is(".createNew") ){
    		$("form[name='createNew']").show();
    	} else if ( $(element).is(".back") ){
    		$("#startup form").hide();
    	} else { return }
    });

    $("button[name='createNew']").on("click", function(){
    	Xaleo.User.creatingUser();
    });    

    $("button[name='signInNow']").on("click", function(){
    	var existingUser = {};
    	existingUser.username = $("#signIn input[name='email']").val();
	    existingUser.password = $("#signIn input[name='password']").val();
    	Xaleo.User.signIn(existingUser);
    });

    $("img").width("296").css("vertical-align","top").lazyload({});
    $("button[name='menu'], nav li#close, .mask").on("click", function(){
        $("nav").toggleClass("slideInleft");
        $(".mask").toggle();
    });
    $("footer ul li").on("click", function(){
    	$(".active").removeClass("active");
    	$(this).addClass("active");
    	var name = "#" + $(this).attr("name");
    	$("article" + name).addClass("active");
    });

});