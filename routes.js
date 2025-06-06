(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<h1>Welcome to our Restaurant</h1><a ui-sref="categories">View Categories</a>'
    })

    .state('categories', {
      url: '/categories',
      template: '<categories items="categories.items"></categories>',
      controller: 'CategoriesController as categories',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{category}',
      template: '<items items="items.items"></items>',
      controller: 'ItemsController as items',
      resolve: {
        items: ['$stateParams', 'MenuDataService',
          function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.category);
        }]
      }
    });
}

})();
