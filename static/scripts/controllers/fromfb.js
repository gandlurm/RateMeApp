'use strict';

angular.module('frontendApp')
  .controller('FromFBCtrl', function ($scope, Restangular) {
	var tours = Restangular.one('');

	tours.getList().then(function(response) {
	  $scope.tours = response;
	  });
  });