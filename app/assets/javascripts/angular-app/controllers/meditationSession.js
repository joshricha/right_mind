app.controller('MedSessionCtrl', ['$scope', function($scope){


  console.log("works");

  $scope.playing = false;
  $scope.audio = document.createElement('audio');
  $scope.audio.src = 'http://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg';
  $scope.play = function() {
    $scope.audio.play();
    $scope.playing = true;
  };
  $scope.stop = function() {
    console.log("works");
    console.log("works");
    $scope.audio.pause();
    $scope.playing = false;
  };
  $scope.audio.addEventListener('ended', function() {
    $scope.$apply(function() {
      $scope.stop()
    });
  });
}]);
