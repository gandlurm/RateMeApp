// http://angulartutorial.blogspot.com/2014/03/rating-stars-in-angular-js-using.html


  'use strict';
var starApp = angular.module('frontendApp');

starApp.controller('StarCtrl', function ($scope) {
    $scope.rating = 0;
	
    $scope.ratings = [{
        current: 5,
        max: 10
    }, {
        current: 3,
        max: 5
    }];

    $scope.getSelectedRating = function (rating) {
        console.log(rating);
    }
    
    $scope.setMinrate= function(){
       $scope.ratings = [{
        current: 1,
        max: 10
    }];
    }
    
    $scope.setMaxrate= function(){
       $scope.ratings = [{
        current: 10,
        max: 10
    }];
  }
  
  $scope.sendRate = function(){
    alert("Thanks for your rates!\n\nFirst Rate: " + $scope.ratings[0].current+"/"+$scope.ratings[0].max
    +"\n"+"Second rate: "+ $scope.ratings[1].current+"/"+$scope.ratings[0].max)
  }
});

starApp.directive('starRating', function () {
    return {
        restrict: 'A',
        template: '<ul class="rating">' +
            '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
            '\u2605' +
            '</li>' +
            '</ul>',
        scope: {
            ratingValue: '=',
            max: '=',
            onRatingSelected: '&'
        },
        link: function (scope, elem, attrs) {

            var updateStars = function () {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            };

            scope.toggle = function (index) {
                scope.ratingValue = index + 1;
                scope.onRatingSelected({
                    rating: index + 1
                });
            };

            scope.$watch('ratingValue', function (oldVal, newVal) {
                if (newVal) {
                    updateStars();
                }
            });
        }
    }
});