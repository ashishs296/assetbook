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
    'ngTouch',
    'angularMoment',
    'angular-loading-bar'
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
      .when('/issue/:Id', {
        templateUrl: 'views/issue.html',
        controller: 'IssueCtrl',
        controllerAs: 'issue',
        resolve: {
      // I will cause a 1 second delay
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
      }})
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
      };
     
      function getIssuesCountSuccess(data) {
            $scope.repo = data[0];
                   console.log($scope.repo.open_issues_count);
            }

      $scope.init(); 


  }).filter('nl2br', ['$sanitize', function($sanitize) {
  var tag = (/xhtml/i).test(document.doctype) ? '<br />' : '<br>';
  return function(msg) {
    msg = (msg + '').replace(/(\r\n|\n\r|\r|\n|&#10;&#13;|&#13;&#10;|&#10;|&#13;)/g, tag + '$1');
    return $sanitize(msg);};
  }]);