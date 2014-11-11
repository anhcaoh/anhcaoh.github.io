
angular.module("meApp", [])

.controller("ContentController", ["$scope",function($scope){

  $scope.headlines = [

    {"nameId":"Hi-im-Anh", "imgSrc": "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/000/20f/0d6/1eba86d.jpg","content":"Hi, I'm Anh"},

    {"nameId":"i-am-vietnamese","content":"I am Vietnamese."},

    {"nameId":"i-am-a", "content":"I am a designer, creator, and dancer."},

    {"nameId":"i-speak", "content":"I speak JavaScript, HTML, and CSS."}

  ];

}]);
