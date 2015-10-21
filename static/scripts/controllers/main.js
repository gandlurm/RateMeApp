'use strict';

angular.module('frontendApp')
  .controller('MainCtrl', function ($scope, $location) {

  /**$scope.myFBFunction = function() {
		
		console.log();
    };**/
	
	var current = $location.path();
	console.log(current);
  });