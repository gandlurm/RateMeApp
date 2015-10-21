'use strict';

angular.module('frontendApp')
  .controller('MainCtrl', function ($scope, $location, Restangular) {

  /**$scope.myFBFunction = function() {
		
		console.log();
    };**/
	var current = $location.path();
	console.log(current);
	console.log($location.search());
	console.log($location.absUrl());
	var codeStart = $location.absUrl().indexOf('code=')+4;
	var codeEnd = $location.absUrl().indexOf('#/')+1;
	var code = $location.absUrl().substring(codeStart, codeEnd);
	
	console.log(code);
	var access_code = Restangular.one('https://graph.facebook.com/v2.5/oauth/access_token?client_id=1659954354288861&redirect_uri=http://gandlurm.github.io/RateMyApp&client_secret=8d3df7692518bea961df79ea1f9939bd&code='+code);

	console.log(access_code);
	tours.getList().then(function(response) {
	  $scope.tours = response;
	  });
	if()
  });