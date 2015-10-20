'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('PlayerDashCtrl', function ($scope, Restangular) {

	var tours = Restangular.one('tournaments/id/');

	tours.getList().then(function(tournaments) {
	  $scope.tours = tournaments;
	  });
	});

