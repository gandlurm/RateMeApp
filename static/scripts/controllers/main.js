'use strict';

angular.module('frontendApp')
  .controller('MainCtrl', function ($scope, $location, $windowProvider, window, location) {

  /**$scope.myFBFunction = function() {
		
		console.log();
    };**/
	
	var current = $location.path();
	console.log(current);
	console.log(window.location.search);
	
	code
	var tours = Restangular.one('');

	tours.getList().then(function(response) {
	  $scope.tours = response;
	  });
  });