
angular.module("meApp", [])

.controller("ContentController", ["$scope",function($scope){

  $scope.allAboutMe = [

    {"nameId":"hi-im-Anh", "imgSrc": "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/000/20f/0d6/1eba86d.jpg","content":"Hi, I'm Anh"},

    {"nameId":"i-am-vietnamese", "imgSrc":"https://www.google.com/maps/vt/data=U4aSnIyhBFNIJ3A8fCzUmaVIwyWq6RtIfB4QKiGq_w,tjDmVR8DxV2rfDmvA5f3h2AMo5_TxQMojS_3yWc16VowmSkl6FBPaGXiVLlH9Kjw3BbP9i0nUFUv9uoFnj-MHUCayabIhPHHlt6FSQgyawLr7ovkVqcd_peIp6_LoLDDOY-j_L9MVwUnWgqeX22AX7Tt3E0_Zk3Cv0HwVIlL0A8viZ-FQ-ZvAqcRt3T9NBelojhxDp1SWvg5kOfhY4Q7TKuxKzwYepoTK9yoBZ9zFBmTIVdN8F9sP4Te7bGdlv-c3bDcBSOOSVdv9BpnggAyD7gR", "content":"I flew from Vietnam to the USA nine years ago."},

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
