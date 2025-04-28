CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var ctrl = this;
  console.log('Categories data received:', categories);
  
  // Ensure categories is always an array
  ctrl.categories = categories || [];
  
  // If the API returns an object, convert it to array
  if (categories && !Array.isArray(categories)) {
    ctrl.categories = Object.keys(categories).map(function(key) {
      return categories[key];
    });
  }
}
