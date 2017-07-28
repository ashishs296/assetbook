'use strict';

/**
 * @ngdoc overview
 * @name assetbookApp
 * @description
 * # assetbookApp
 *
 * Main module of the application.
 */
angular
  .module('assetbookApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.hashPrefix('');
    }).controller('RootCtrl' , function ($scope,gitService) {
     
       $scope.repo = [];
       $scope.count = 100;
      $scope.init = function()
      {
       //Get meta information about the repository
       gitService.getIssuesCount().then(getIssuesCountSuccess);
      }
     
      function getIssuesCountSuccess(data) {
            $scope.repo = data[0];
                   console.log($scope.repo.open_issues_count);
            };

      $scope.init(); 


  });
