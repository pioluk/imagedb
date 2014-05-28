var app = angular.module('imageApp');

app.controller('imagesCtrl', function($scope, imageStorage) {
  imageStorage.get().success(function(data) {
    $scope.images = data;
  });

  $scope.add = function(isValid) {
    imageStorage.add($scope.formData).success(function(data) {
      $scope.images = data;
      $scope.formData = {};
    });
  };

  $scope.remove = function(id) {
    imageStorage.remove(id).success(function(data) {
      $scope.images = data;
    });
  };
});
