define([
  'underscore',
  'backbone',
  'models/product/ProductModel'
], function(_, Backbone, ProductModel){

  var ProductCategoryCollection = Backbone.Collection.extend({
    model: ProductModel,
    url:"https://izify.com/api/izify-api/user/get_all_products_by_category.php",
	//url:"https://localhost:8888/izify-api/user/get_all_products_by_category.php",
	parse: function(data) {
      	return data.tbl_products;
    },
      
  });

  return ProductCategoryCollection;

});
