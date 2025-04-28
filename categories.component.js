(function() {
  'use strict';
  
  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'templates/categories.component.template.html',
    bindings: {
      categories: '<'
    },
    controller: CategoriesComponentController
  });
  
  function CategoriesComponentController() {
    var $ctrl = this;
    
    $ctrl.$onInit = function() {
      console.log('Categories in component:', $ctrl.categories);
    };
  }
})();
