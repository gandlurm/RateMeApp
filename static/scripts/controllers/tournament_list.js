'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('TournamentListCtrl', function ($scope, Restangular) {

	var tours = Restangular.all('eventsingles/');

	tours.getList().then(function(tournaments) {
	  $scope.tours = tournaments;
	  });

	// $scope.init = function (tourId) {
	// 	console.log(tourId); 
	// 	var events = Restangular.all('eventsingles/').;

	// 	events.getList().then(function(tournaments) {
	// 	  $scope.events = tournaments;
	// 	  console.log(tournaments);
	// 	  var yo;
	// 	  $scope.openIt = true;
	// 	  });
    // check if there is query in url
    // and fire search in case its value is not empty
	// };
	});

