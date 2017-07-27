'use strict';

/**
 * @ngdoc function
 * @name assetbookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assetbookApp
 */
angular.module('assetbookApp')
  .controller('MainCtrl', function ($scope,gitService) {
      $scope.demo = "Hi";
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
 debugger;
  gitService.getIssues().then(addGroupSuccess)

 function addGroupSuccess(data) {
            console.log(data);
			};

  });
