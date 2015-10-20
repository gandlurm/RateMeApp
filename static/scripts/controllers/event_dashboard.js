'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('EventDashCtrl', function ($scope, Restangular, $routeParams, $http) {

  	var userId = $routeParams.userId;

  	var tours = Restangular.one('eventsingles/'+ userId +'/');

	tours.get().then(function(leagues) {
	  $scope.tour = leagues;
	  console.log(leagues);
	  });

	var players = Restangular.all('players/');

    players.getList().then(function(player) {
    $scope.play = player;
    console.log(player);
    });

    var venues = Restangular.all('venues/');

    venues.getList().then(function(venues) {
    $scope.ven = venues;
    console.log(venues);
    });

    $scope.submit = function() {
      // var schedule = Restangular.one('eventsingles/'+userId+'/');
      var match = $http.get('http://127.0.0.1:8000/api/eventsingles/'+userId+'/schedule/');
      console.log('done');
    };
  


	// var tours = Restangular.one('tournaments/1/');

	// tours.getList().then(function(tournaments) {
	//   $scope.tours = tournaments;
	//   });
	});

