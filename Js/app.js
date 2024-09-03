var app = angular.module('myApp', []);

app.controller('myController', function ($scope, $http) {
    $http({
      method : "GET",
      url : "https://api.themoviedb.org/3/discover/movie?api_key=2ec5160b9184f29057b1dba00692f3c2"
      }).then(function(response) {
        $scope.src = response.data;
        $scope.imgurl = 'https://image.tmdb.org/t/p/w500/'
      }, function(response) {
      $scope.content = "Something went wrong";
      });
    $scope.current = function(){
      $http({
        method : "GET",
        url : "https://api.themoviedb.org/3/discover/movie?api_key=2ec5160b9184f29057b1dba00692f3c2"
        }).then(function(response) {
          $scope.src = response.data;
          $scope.imgurl = 'https://image.tmdb.org/t/p/w500/'
        }, function(response) {
        $scope.content = "Something went wrong";
        });
    }
      $scope.trending = function(){
        $http({
          method : "GET",
          url : "https://api.themoviedb.org/3/trending/all/week?api_key=2ec5160b9184f29057b1dba00692f3c2"
          }).then(function(response) {
            $scope.src = response.data;
            $scope.imgurl = 'https://image.tmdb.org/t/p/w500/'
          }, function(response) {
          $scope.content = "Something went wrong";
          });
      }
});