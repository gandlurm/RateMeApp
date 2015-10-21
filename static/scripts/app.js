'use strict';


angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
    ])
  .config(function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
    $routeProvider
      .when('/', {
        templateUrl: 'static/views/main.html',
        controller: 'MainCtrl'
      })
	  .when('/fromfb', {
        templateUrl: 'static/views/fromfb.html',
        controller: 'FromFBCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
