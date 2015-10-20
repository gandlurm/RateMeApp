'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('LeagueDisplayCtrl', function ($scope, Restangular) {
    var leags = Restangular.one('leagues/1/');

	leags.get().then(function(leagues) {
	  $scope.leag = leagues;
	  console.log(leagues);
	  });
  
  var tour = Restangular.all('eventsingles/');

  tour.getList().then(function(tournaments) {
    $scope.tour = tournaments;
    console.log(tournaments);
    });


  // $scope.clicked = leagueonclick;
  // console.log($scope.clicked);

  // $scope.submit = function(arg) {
  //   console.log(arg);
  //   var yo = Restangular.all('leagues/'+arg+'/');
  //   // var players = Restangular.all('players/');
  //    yo.getList().then(function(accounts) {
  //    $scope.league = accounts;
  //    leagueonclick.store('LeagueCreateCtrl', $scope);
  //  });
  // }
  

  // $scope.submit = function($scope) {
  //   leagueonclick($scope);
  //   console(leagueonclick.leaguedata(yo));
  // }

	// $scope.submit = function(yo) {
	// 	console.log(yo);
	// 	var yo = Restangular.all('leagues/'+yo+'/');
 //  //   	var players = Restangular.all('players/');
 //    	yo.getList().then(function(accounts) {
	// 	  $scope. = accounts;
	// 	});


  //   	var first_name = $scope.first_name;
  //   	var last_name = $scope.last_name;
  //   	var email_id = $scope.email_id;
  //   	var mobile_num = $scope.mobile_num;

		// var mob = parseInt(mobile_num)

  //   	var data = {first_name: first_name, last_name: last_name, email_id: email_id, mobile_num: mob};

  //   	var data1 = {name: "Crazzay"}

  //   	console.log(players);

  //   	players.post(data);

	 //    $scope.msg = 'clicked';
  // }
  });