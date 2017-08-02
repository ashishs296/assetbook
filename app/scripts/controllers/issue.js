'use strict';

/**
 * @ngdoc function
 * @name assetbookApp.controller:IssueCtrl
 * @description
 * # IssueCtrl
 * Controller of the assetbookApp
 */
angular.module('assetbookApp')
  .controller('IssueCtrl', function ($scope, $routeParams, $location, $http,$timeout,gitService) {
  function issueSuccess(data) {
      $scope.issue = data;
      $scope.issue.url = "https://github.com/aurelia/framework/issues/" + $routeParams.Id;
      if($scope.issue.comments && $scope.issue.comments > 0)
      {

  $timeout(gitService.getIssueComments($routeParams.Id).then(issueCommentSuccess),200);
      }
            console.log(data);
			
			}
  function issueCommentSuccess(data)
  {
    $scope.issueComments = data;
    console.log($scope.issueComments);
  }    

  gitService.getIssue($routeParams.Id).then(issueSuccess);


  });
