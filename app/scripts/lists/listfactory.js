;(function (){
  
  'use strict';

  angular.module('News')

  .factory('ListsFactory', ['$http', 'PARSE',

    function ($http, PARSE) {


      var getAllLists = function () {
        return $http.get(PARSE.URL + 'classes/list', {
          headers: PARSE.CONFIG.headers,
          cache: true
        });
      };

      var addList = function (listObj) {

        
            
        return $http.post(PARSE.URL + 'classes/list', listObj, PARSE.CONFIG);
      };
       

      var deleteList = function (id) {
        return $http.delete(PARSE.URL + 'classes/list/' + id, PARSE.CONFIG);
      };
    
  
      return {
        get : getAllLists,
        add : addList,
        del : deleteList
      };

    }

  ])

}());