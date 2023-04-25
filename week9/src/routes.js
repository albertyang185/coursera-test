(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.template.html'
      })
    
      // Premade list page
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/templates/categories-root.template.html',
        controller: 'CategoriesController as categoriesCtrl',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

    // Premade list page
    .state('items', {
        url: '/items/{categoryShortName}',
        templateUrl: 'src/templates/items-root.template.html',
        controller: 'ItemsController as itemsCtrl',
         resolve: {
            items: ['$stateParams', 'MenuDataService', 
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
        } 
        })
    
    }
    
    })();
    