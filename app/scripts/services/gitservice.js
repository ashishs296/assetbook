'use strict';

/**
 * @ngdoc service
 * @name assetbookApp.gitService
 * @description
 * # gitService
 * Service in the assetbookApp.
 */
angular.module('assetbookApp')
  .service('gitService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function


          var service = {
              getIssues: getIssues,
             // editGroup: editGroup,
            //  deleteGroup: deleteGroup,
             // getAllGroups: getAllGroups
          }
          return service;

          /*GET ALL GROUPS*/
          function getIssues() {
var opts = {data : '', page :'', username :'',repo:'',state:''};
			opts.data = opts.data || [];
    		opts.page = opts.page || 1;
    		opts.username = 'aurelia';
    		opts.repo = 'framework';
    		opts.state = 'open';
    		//https://api.github.com/repos/aurelia/framework/issues?state=open
    		var url = 'https://api.github.com/repos/' + opts.username + '/' + opts.repo;
    		url += '/issues?&page=' + opts.page + '&per_page=100&state=' + opts.state;

              var req = {
                  method: 'GET',
                  url: url,
                  headers: {
                      'Content-Type': "application/json"
                  }
              };
              return $http(req)
                  .then(aftergettingdata)
                  .catch(function (message) {
                      console.log("Error in getAllGroups service");
                      console.log(message);
                     // exception.catcher('XHR Failed for get ode')(message);
                  });

              function aftergettingdata(data, status, headers, config) {
                  return data.data;
              }
          }       


  });
