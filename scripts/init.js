
angular.module("meApp", [])

.controller("ContentController", ["$scope",function($scope){

  $scope.allAboutMe = [

    {"nameId":"hi-im-Anh", "name":"brand", "imgSrc": "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/000/20f/0d6/1eba86d.jpg","content":"Hi, I'm Anh"},

    {"nameId":"i-am-vietnamese", "name":"globe", "imgSrc":"http://upload.wikimedia.org/wikipedia/en/4/40/USA_Vietnam_Locator.svg", "content":""},

    {"nameId":"my-wife", "content":"This is my smart, beautiful wife."},

    {"nameId":"xalieo", "content":"Meet Xali & Leo"},

    {"nameId":"i-speak", "content":"{I speak: [JavaScript, </HTML>, CSS]}", "fontFamily":"monospace"},

    {"nameId":"i-breathe", "content":"I breathe User Experience."},

    {"nameId":"i-make", "content":"I make data talks."},

    {"nameId":"i-dance", "content":"I design things, and I break-dance."}

  ];

  $scope.contactMe = {

    "email":"AnhCaoH@gmail.com",
    "phone":"(678) 602-1591"
  }

  $(function(){

    //Added color to #i-am-vietnamese
    $("#i-am-vietnamese div p").html("I flew from <span style='color:#e3801c'>Vietnam</span> to the <span style='color:#008000;'>USA</span> in 2005.");


    $(window).bind("scroll", function(){

    var windowScrollPosition = $(window).scrollTop();

    if (windowScrollPosition == 0){

      $("section#hi-im-Anh").css("opacity","1");

    };

    $("section#hi-im-Anh").css({"opacity": (300 - windowScrollPosition) / 300 });


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


    });


  });

}]);

function compress(){

  if ( $("button i").is(".fa-expand") ) {

    $("button i").removeClass("fa-expand").addClass("fa-compress")

  } else if ( $("button i").is(".fa-compress") ){

    $("button i").removeClass("fa-compress").addClass("fa-expand")

  };

  $("section").toggleClass("compressed");
  $("*").toggleClass("smaller");
}
