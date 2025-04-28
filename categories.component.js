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
    
    $ctrl.$onChanges = function(changes) {
      if (changes.categories) {
        console.log('Categories changed:', $ctrl.categories);
      }
    };
  }
})();
