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
      $scope.issues = [];
  
  gitService.getIssues().then(getIssuesSuccess);

  function getIssuesSuccess(data) {

      $scope.issues = data;
            console.log(data);
			};

 
  });
