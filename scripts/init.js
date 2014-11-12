
angular.module("meApp", [])

.controller("ContentController", ["$scope",function($scope){

  $scope.allAboutMe = [

    {"nameId":"hi-im-Anh", "name":"brand", "imgSrc": "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/000/20f/0d6/1eba86d.jpg","content":"Hi, I'm Anh"},

    {"nameId":"i-am-vietnamese", "name":"globe", "imgSrc":"http://upload.wikimedia.org/wikipedia/en/4/40/USA_Vietnam_Locator.svg", "content":"I flew from Vietnam to the USA nine years ago."},

    {"nameId":"i-speak", "content":"{I speak: [JavaScript, </HTML>, CSS]}", "fontFamily":"monospace"},

    {"nameId":"i-breathe", "content":"I breathe User Experience."},

    {"nameId":"i-dance", "content":"When not designing, I'm playing soccer and (break)-dancing."}

  ];

  $scope.contactMe = {

    "email":"AnhCaoH@gmail.com",
    "phone":"(678) 602-1591"
  }

  $(function(){

    $(window).on("scroll", function(){

    var windowScrollPosition = $(window).scrollTop();

    if (windowScrollPosition == 0){

      $("section").css("opacity","1");
    };

    $("section:first").css({"opacity": (300 - windowScrollPosition) / 300 });

    });

  });

}]);
