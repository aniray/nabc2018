(function () {
    'use strict';
    angular.module('starter.home')
        .directive('ionSlides', [function () {
            return {
                templateUrl: 'app/home.html',
                controller: 'HomeController', 
                scope: {},
                replace: true,
                restrict: 'E'
            };
        }])
})();