(function() {

    'use strict';

   angular.module('News', ['ngRoute', 'ngCookies'])


   .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers : {
        'X-Parse-Application-Id' : 'pFf3UIa1ZDK5xiCOpBLW6t3iNGdkObsnTlcllhOo',
        'X-Parse-REST-API-Key'  : 'jVsXe2jpAWWcNOUP6oiND5U4o1fbbdGggI2W8zKd',
        'Content-Type' : 'application/json'
      }
    } 
  })
     .config([ '$routeProvider', function ($routeProvider) {

    $routeProvider

    .when('/', {
      templateUrl: 'index.html',
      controller: 'ListCtrl'
    })
    // .when('/addListItem', {
    //   templateUrl: 'scripts/lists/list.html',
    //   controller: 'ListCtrl'
    //   })
}]);


$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

$(function() {
    $( "#sortable1, #sortable2, #sortable3, #sortable4" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  });



}());





