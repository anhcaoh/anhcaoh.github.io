
angular.module("meApp", [])

.controller("ContentController", ["$scope",function($scope){

  $scope.allAboutMe = [

    {"nameId":"hi-im-Anh", "imgSrc": "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/000/20f/0d6/1eba86d.jpg","content":"Hi, I'm Anh"},

    {"nameId":"i-am-vietnamese","content":"I flew from Vietnam to USA nine years ago."},

    {"nameId":"i-speak", "content":"I speak JavaScript, HTML, and CSS."},

    {"nameId":"i-breathe", "content":"I breathe User Experience."},

    {"nameId":"i-dance", "content":"When I'm not designing, am playing soccer and (break)dancing."}

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
