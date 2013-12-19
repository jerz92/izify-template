define([
  'underscore',
  'backbone',
  'models/category/CategoryModel'
], function(_, Backbone, CategoryModel){

  var CategoryCollection = Backbone.Collection.extend({
    model: CategoryModel,
    url:"https://izify.com/api/izify-api/user/get_all_categories.php",
	parse: function(data) {
      	return data.tbl_categories;
    },
      
  });

  return CategoryCollection;

});