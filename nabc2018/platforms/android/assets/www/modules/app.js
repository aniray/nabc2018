// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.home', 'starter.menu', 'starter.register', 'starter.programs'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
      if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

     .state('app', {
         url: '/app',
         abstract: true,
         templateUrl: 'modules/menu/menu.html',
         controller: 'MenuController'
     })
        .state('app.login', {
            url: '/login',
            views: {
                'menuContent': {
                    templateUrl: 'modules/login/login.html',
                    controller: 'LoginController'
                }
            }
        })
    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'modules/home/home.html',
                controller: 'HomeController'
            }
        }
    })
      .state('app.programs', {
          url: '/programs',
          views: {
              'menuContent': {
                  templateUrl: 'modules/programs/programs.html',
                  controller: 'ProgramsController'
              }
          }
      })
        .state('app.register', {
            url: '/register',
            views: {
                'menuContent': {
                    templateUrl: 'modules/register/register.html',
                    controller: 'RegisterController'
                }
            }
        });
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
