'use strict';

/**
 * @ngdoc function
 * @name assetbookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assetbookApp
 */
angular.module('assetbookApp')
  .controller('MainCtrl', function ($scope) {
      $scope.demo = "Hi";
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
