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


$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

// $(function() {
    $( "#sortable1, #sortable2, #sortable3, #sortable4" ).sortable({
      connectWith: ".connectedSortable",
       // update: function () {
       //       var order1 = $('#sortable1').sortable('toArray').toString();
       //       var order2 = $('#sortable2').sortable('toArray').toString();
       //       var order3 = $('#sortable3').sortable('toArray').toString();
       //       var order4 = $('#sortable4').sortable('toArray').toString();


       //       // alert("Order 1:" + order1 + "\n Order 2:" + order2); //Just showing update
       //       $.ajax({
       //           type: "POST",
       //           url: "https://api.parse.com/1/classes/list",
       //           headers:{
       //              'X-Parse-Application-Id' : 'pFf3UIa1ZDK5xiCOpBLW6t3iNGdkObsnTlcllhOo',
       //              'X-Parse-REST-API-Key'  : 'jVsXe2jpAWWcNOUP6oiND5U4o1fbbdGggI2W8zKd'
       //           },
       //           data: "order1=" + order1 + "&order2=" + order2 + "&order3=" + order3 + "&order4=" + order4,
       //           dataType: "json",
       //           success: function (data) {


       //           }
       //       });

       //   }
      
  // });
    }).disableSelection();


// $(document).ready(function () { 
//     $('input[name="order"]:hidden').val('Work!');
// });


}]);


}());





