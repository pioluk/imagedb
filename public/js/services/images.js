var app = angular.module('imageApp');

app.factory('imageStorage', function($http) {
  return {
    get: function() {
      return $http.get('/api/images');
    },

    add: function(formData) {
      return $http.post('/api/images', formData);
    },

    update: function(id, formData) {
      return $http.put('/api/images/' + id, formData);
    },

    remove: function(id) {
      return $http.delete('/api/images/' + id);
    }
  };
});
