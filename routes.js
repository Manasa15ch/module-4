CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var ctrl = this;
  console.log('Categories data received:', categories);
  
  // The API returns an array, so we can use it directly
  ctrl.categories = categories;
  
  // If for some reason it's not an array, convert it
  if (categories && !Array.isArray(categories)) {
    ctrl.categories = Object.keys(categories).map(function(key) {
      return categories[key];
    });
  }
}

