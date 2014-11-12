
angular.module("meApp", [])

.controller("ContentController", ["$scope",function($scope){

  $scope.allAboutMe = [

    {"nameId":"hi-im-Anh", "name":"brand", "imgSrc": "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/000/20f/0d6/1eba86d.jpg","content":"Hi, I'm Anh"},

    {"nameId":"i-am-vietnamese", "name":"globe", "imgSrc":"http://upload.wikimedia.org/wikipedia/en/4/40/USA_Vietnam_Locator.svg", "content":""},

    {"nameId":"i-speak", "content":"{I speak: [JavaScript, </HTML>, CSS]}", "fontFamily":"monospace"},

    {"nameId":"i-breathe", "content":"I breathe User Experience."},

    {"nameId":"i-dance", "content":"I design things, and I break-dance."}

  ];

  $scope.contactMe = {

    "email":"AnhCaoH@gmail.com",
    "phone":"(678) 602-1591"
  }

  $(function(){

    //Added color to #i-am-vietnamese
    $("#i-am-vietnamese div p").html("I flew from <span style='color:#e3801c'>Vietnam</span> to the <span style='color:#008000;'>USA</span> nine years ago.");


    $(window).on("scroll", function(){

    var windowScrollPosition = $(window).scrollTop();

    if (windowScrollPosition == 0){

      $("section").css("opacity","1");
    };

    $("section:first").css({"opacity": (300 - windowScrollPosition) / 300 });

    });

  });

}]);
