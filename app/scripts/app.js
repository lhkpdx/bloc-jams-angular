(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         
         $stateProvider
         .state('landing', {
             url: '/',
             templateUrl: '/templates/landing.html'
         })
         .state('album', {
             url: '/album',
             templateUrl: '/templates/album.html'
<<<<<<< HEAD
          })  
         .state('collection', {
             url: '/collection',
             templateUrl: '/templates/collection.html'
         
         });
 }
     
=======
         })
         .state('collection', {
             url: '/collection',
             templateUrl: '/templates/collection.html'
         });
 }
>>>>>>> lesson_3
 
      angular
         .module('blocJams', ['ui.router'])
         .config(config);
 })();