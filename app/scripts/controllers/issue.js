'use strict';

/**
 * @ngdoc function
 * @name assetbookApp.controller:IssueCtrl
 * @description
 * # IssueCtrl
 * Controller of the assetbookApp
 */

var converter = new showdown.Converter();
angular.module('assetbookApp')
  .controller('IssueCtrl', function ($scope, $routeParams, $location, $http, $timeout, gitService) {
      $scope.issue = null;
      function issueSuccess(data) {
          $scope.issue = data;
          $scope.issue.body = converter.makeHtml($scope.issue.body);
          if ($scope.issue.comments && $scope.issue.comments > 0) {
              $timeout(gitService.getIssueComments($routeParams.Id).then(issueCommentSuccess), 200);
          }
          console.log(data);

      }
      function issueCommentSuccess(data) {
          $scope.issueComments = data;
          console.log($scope.issueComments);
      }

      gitService.getIssue($routeParams.Id).then(issueSuccess);

      $scope.getHtmlData = function (text) {
          return converter.makeHtml(text);
      }

  });
