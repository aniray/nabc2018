/*angular.module('starter.home', [])

.controller('HomeController', function($scope, $ionicModal, $timeout) {
})
*/
(function () {
    'use strict';
    angular.module('starter.home', [])
        .controller('HomeController', ['$scope', function ($scope) {
            //$scope.options = {
            //    loop: false,
            //    effect: 'fade',
            //    speed: 500,
            //}

            //$scope.$on("$ionicSlides.sliderInitialized", function (event, data) {
            //    // data.slider is the instance of Swiper
            //    $scope.slider = data.slider;
            //});

            //$scope.$on("$ionicSlides.slideChangeStart", function (event, data) {
            //    console.log('Slide change is beginning');
            //});

            //$scope.$on("$ionicSlides.slideChangeEnd", function (event, data) {
            //    // note: the indexes are 0-based
            //    $scope.activeIndex = data.slider.activeIndex;
            //    $scope.previousIndex = data.slider.previousIndex; 
            //});
    //        var homeSlides = this;
    //        homeSlides.slides = [
    //{
    //    title: "Welcome to the Docs!",
    //    description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
    //    image: "assets/img/ica-slidebox-img-1.png",
    //},
    //{
    //    title: "What is Ionic?",
    //    description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
    //    image: "assets/img/ica-slidebox-img-2.png",
    //},
    //{
    //    title: "What is Ionic Cloud?",
    //    description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
    //    image: "assets/img/ica-slidebox-img-3.png",
    //}
    //        ];
        }])
})();
