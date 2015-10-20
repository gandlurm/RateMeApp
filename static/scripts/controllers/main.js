'use strict';

angular.module('frontendApp')
  .controller('MainCtrl', function ($scope) {
	$scope.place = null;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });