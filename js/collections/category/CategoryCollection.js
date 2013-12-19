define([
  'underscore',
  'backbone',
  'models/category/CategoryModel'
], function(_, Backbone, CategoryModel){

  var CategoryCollection = Backbone.Collection.extend({
    model: CategoryModel,
    url:"http://localhost:8888/izify-api/user/get_all_categories.php",
	parse: function(data) {
      	return data.tbl_categories;
    },
      
  });

  return CategoryCollection;

});