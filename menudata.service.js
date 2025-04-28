service.getAllCategories = function() {
  return $http({
    method: "GET",
    url: "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"
  }).then(function(response) {
    console.log('API Response:', response);
    return response.data;
  }).catch(function(error) {
    console.error('Error fetching categories:', error);
    return []; // Return empty array on error
  });
};
