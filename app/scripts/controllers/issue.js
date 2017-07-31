'use strict';

/**
 * @ngdoc function
 * @name assetbookApp.controller:IssueCtrl
 * @description
 * # IssueCtrl
 * Controller of the assetbookApp
 */
angular.module('assetbookApp')
  .controller('IssueCtrl', function ($scope, $routeParams, $location, $http,gitService) {
  	debugger;
  	$scope.id=$routeParams.id;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   gitService.getIssue(808).then(issueSuccess)

  function issueSuccess(data) {
      $scope.issue = data;
      $scope.issue.body = $scope.issue.body.replace("\r\n","<br />");
            console.log(data);
			
			};
  });
