'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('RegistrationCtrl', function ($scope, Restangular) {
	$scope.today = function() {
	    $scope.dt = new Date();
	};
  	$scope.today();

    $scope.clear = function () {
	    $scope.dt = null;
    };


    $scope.toggleMin = function() {
	    $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
	    $event.preventDefault();
	    $event.stopPropagation();
	    $scope.opened = true;
    };

    $scope.dateOptions = {
	    formatYear: 'yy',
	    startingDay: 1
    };


    $scope.submit = function() {
    	var players = Restangular.all('players/');
    	players.getList().then(function(accounts) {
		  $scope.alls = accounts;
		});


    	var firstName = $scope.first_name;
    	var lastName = $scope.last_name;
    	var emailId = $scope.email_id;
    	var mobileNum = $scope.mobile_num;

		var mob = parseInt(mobileNum);

    	var data = {first_name: firstName, last_name: lastName, email_id: emailId, mobile_num: mob};

    	console.log(players);

    	players.post(data);
    };
    
	});

