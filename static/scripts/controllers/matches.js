'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MatchCtrl', function ($scope, Restangular, $routeParams) {

  	var matchId = $routeParams.matchId;

  	var tours = Restangular.all('matchsingles/');

	tours.getList().then(function(leagues) {
	  $scope.tours = leagues;
	  console.log('leagues');
	  });

	// tours.get("opponent1").then(function(oppo){
	// 	$scope.oppo = oppo;
	// 	console.log(oppo);
	// })


	// var tours = Restangular.one('tournaments/1/');

	// tours.getList().then(function(tournaments) {
	//   $scope.tours = tournaments;
	//   });
	});

