var app = angular.module('imageApp');

app.controller('imageCtrl', function($scope, $routeParams, $location, imageStorage) {
  imageStorage.get().success(function(data) {
    $scope.image = data.filter(function(image) {
      return image._id == $routeParams.id;
    })[0];
  });

  $scope.update = function(isValid) {
    if (!isValid)
      return;

    imageStorage.update($scope.image._id, $scope.formData).success(function(data) {
      $scope.image = data.filter(function(image) {
        return image._id == $routeParams.id;
      })[0];
    });

    $scope.formData = {};
  };

  $scope.remove = function() {
    console.log('Remove button clicked');
    imageStorage.remove($scope.image._id).success(function(data) {
      $location.path('/');
    });
  };
});
