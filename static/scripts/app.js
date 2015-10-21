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
    $routeProvider
      .when('/', {
        templateUrl: 'RateMyApp/static/views/main.html',
        controller: 'MainCtrl'
      })
	  .when('/fromfb', {
        templateUrl: 'RateMyApp/views/fromfb.html',
        controller: 'FromFBCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
