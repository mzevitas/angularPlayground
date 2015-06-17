;(function (){
  
  'use strict';

  angular.module('News')

  .controller('ListCtrl', ['$scope', 'ListsFactory', '$cacheFactory',

    function ($scope, ListsFactory, $cacheFactory) {

      var cache = $cacheFactory.get('$http');

      $scope.lists = [];

      ListsFactory.get().success( function (response) {
        $scope.lists = response.results;
      });
    
      $scope.addList = function (listObj) {
        $scope.list = {};
        ListsFactory.add(listObj).success( function (results) {
          listObj.objectId = results.objectId;
          
        
          $scope.lists.push(listObj);
        // $scope.lists.push({title: $scope.title, upvotes: 0});
          cache.remove('https://api.parse.com/1/classes/list');

        // $scope.incrementsetOrder = function(l) {
        //     l.setOrder += 1;
        //     };
        });


      };

      $scope.deleteMe = function (id, index) {
        ListsFactory.del(id).success( function (response) {
          $scope.lists.splice(index, 1);
          cache.remove('https://api.parse.com/1/classes/list');
        });
      };

    }

  ])

}());