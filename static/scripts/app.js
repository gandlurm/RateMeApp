'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
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
  .config(function(RestangularProvider) {
        RestangularProvider.setBaseUrl('http://127.0.0.1:8000/api/');
        RestangularProvider.setResponseExtractor(function(response) {
          var newResponse = response;
          if (angular.isArray(response)) {
            angular.forEach(newResponse, function(value, key) {
              newResponse[key].originalElement = angular.copy(value);
            });
          } else {
            newResponse.originalElement = angular.copy(response);
          }

          return newResponse;
        });
    })
  .config(function (RestangularProvider) {
    RestangularProvider.setRequestSuffix('.json');
})
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'static/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/welcome', {
        templateUrl: 'static/views/welcome.html',
        controller: 'WelcomeCtrl'
      })
      .when('/leaguecreate', {
        templateUrl: 'static/views/league_create.html',
        controller: 'LeagueCreateCtrl'
      })
      .when('/leaguedisplay', {
        templateUrl: 'static/views/league_display.html',
        controller: 'LeagueDisplayCtrl'
      })
      .when('/tournamentlist', {
        templateUrl: 'static/views/tournament_list.html',
        controller: 'TournamentListCtrl'
      })
      .when('/eventdashboard/:userId', {
        templateUrl: 'static/views/event_dashboard.html',
        controller: 'EventDashCtrl'
      })
      .when('/registration', {
        templateUrl: 'static/views/registration.html',
        controller: 'RegistrationCtrl'
      })
      .when('/matches/:matchId', {
        templateUrl: 'static/views/matches.html',
        controller: 'MatchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
