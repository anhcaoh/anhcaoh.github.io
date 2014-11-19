
angular.module("meApp", [])

.controller("ContentController", ["$scope",function($scope){

  $scope.aboutMe = [

    {"nameId":"","name":"brand", "imgSrc": "./images/Anh-Cao.jpg","content":"Hi, I'm Anh"},

    {"nameId":"what", "imgSrc":"","content":"{I speak: [JavaScript, </HTML>, CSS]}", "fontFamily":"monospace"},

    {"nameId":"why","name":"globe", "imgSrc":"", "content":"I breathe User Experience."},

    {"nameId":"where-and-when","name":"globe", "imgSrc":"./images/Vietnam-to-USA.jpg", "content":""},

    {"nameId":"who", "name":"BaoChau", "imgSrc":"", "imgSrc":"","content":"This is my smart, beautiful wife."},

    {"nameId":"xalieo" ,"name":"Xalieo","imgSrc":"","content":"Meet Xali & Leo"},

    {"nameId":"other", "imgSrc":"","content":"I design things, and I break-dance."}

  ];


  $scope.whatIDo = [

    {"nameId":"i-breathe", "content":"I breathe User Experience."},

    {"nameId":"i-make", "content":"I make data talks."},

    {"nameId":"i-dance", "content":"I design things, and I break-dance."}

  ]

  $scope.contactMe = {

    "email":"AnhCaoH@gmail.com",
    "phone":"(678) 602-1591"
  }

  $scope.slideLeft = function(){

        var more = -33.3;

        $("section#window").css('transform','translate(-' + more + '%,0)');


  };


  $scope.slideRight = function(){

      var more = +33.3;

      $("section#window").css('transform','translate(-' + more + '%,0)');

  };

  $(function(){

    $("#where-and-when p").html("I flew from <span style='color:#e3801c'>Vietnam</span> to the <span style='color:#008000;'>USA</span> in 2005.");
    $("#xalieo").prepend("<img src='./images/Xali.jpg'>");
    $("#xalieo").append("<img src='./images/Leo.jpg'>");
    $("#other p").html("I design things, and <a href='http://youtu.be/EhWxvWB0e5g?t=6m23s' target='_blank'>I break-dance. <i class='fa fa-angle-right'></i> </a>");
    setTimeout(function(){

      $("#hiImAnh").addClass("fadingIn");

    },1000);



    //
    // $(window).bind("scroll", function(){
    //
    // var windowScrollPosition = $(window).scrollTop();
    //
    // if (windowScrollPosition == 0){
    //
    //   $("section#hi-im-Anh").css("opacity","1");
    //
    // };
    //
    // $("section#hi-im-Anh").css({"opacity": (300 - windowScrollPosition) / 300 });
    //

        // $("section").each(function(){
        //
        //   var currentSection = $(this);
        //   var currentSectionPosition = currentSection.position().top - $(window).scrollTop();
        //
        //   console.log(currentSectionPosition);
        //
        //   if (currentSectionPosition <= 0){
        //
        //       $(currentSection).addClass("hero");
        //
        // } else{
        //
        //       $(currentSection).removeClass("hero");
        //   }
        //
        // });


    // });


  });

}])

.filter("orderObjectBy", function(){

    return function ( input, attribute ){

      if (!angular.isObject(input)) return input;

      var array = [];

      for (var objectKey in input){

         array.push(input[objectKey]);
      }

      array.sort(function(a, b){

          a = parseInt(a[attribute]);
          b = parseInt(b[attribute]);
          return a - b;

      });

      return array;

    }

});


//
// function compress(){
//
//   if ( $("button i").is(".fa-expand") ) {
//
//     $("button i").removeClass("fa-expand").addClass("fa-compress")
//
//   } else if ( $("button i").is(".fa-compress") ){
//
//     $("button i").removeClass("fa-compress").addClass("fa-expand")
//
//   };
//
//   $("section").toggleClass("compressed");
//   $("*").toggleClass("smaller");
// }
