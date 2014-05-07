
window.fbAsyncInit = function() {
  
  FB.init({
    appId      : '1457446647806062',
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });

  FB.Event.subscribe('auth.authResponseChange', function(response){

  	if (response.status === 'connected'){
  		testAPI();
  	} else if (response.status === 'not authorized'){
  		
  		FB.login();
  	
  	} else {

  		FB.login();
  	}
  });
};


(function(d){
	var js, id ='facebook-jssdk', ref = d.getElementsByTagName('script') [0];
	if (d.getElementById(id)) {return;}
	js = d.createElement('script'); js.id = id; js.async = true;
	js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=1457446647806062";
	ref.parentNode.insertBefore(js, ref);
}(document));


function testAPI(){

	// console.log("Hello there! fetching your information...");
	
  FB.api('https://graph.facebook.com/3076640354955/photos?&access_token=1457446647806062|af8ae78bd9c50922386e8f56c8a04fbb',
    function(response){

  	 if (response && !response.error)
        {
          data = response;
          console.log(response);

          // for (i = 0; i < response.data.length; i++){
          
          // thumbs = response.data[i].picture;
          // source = response.data[i].source;

          // $("ul#FB-Photos").append("<a href="+source+"><li><img src="+thumbs+"></li></a>");
      

          // };

      }
  });
}



