'use strict';

angular.module('frontendApp')
  .controller('MainCtrl', function ($scope, $location) {

  /**$scope.myFBFunction = function() {
		
		console.log();
    };**/
	
	var current = $location.path();
	console.log(current);
	console.log($location.search());
	
	code
	var tours = Restangular.one('');

	tours.getList().then(function(response) {
	  $scope.tours = response;
	  });
  });