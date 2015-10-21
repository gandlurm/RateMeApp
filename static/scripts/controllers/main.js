'use strict';

angular.module('frontendApp')
  .controller('MainCtrl', function ($scope) {

  /**$scope.myFBFunction = function() {
		
		console.log();
    };**/
	
	var current = $location.path();
	console.log(current);
  });