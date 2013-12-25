define([
  'underscore',
  'backbone',
  'models/product/ProductModel'
], function(_, Backbone, ProductModel){

  var ProductCollection = Backbone.Collection.extend({
    model: ProductModel,
    url:"https://izify.com/api/izify-api/user/get_all_products.php",
	//url:"http://localhost:8888/izify-api/user/get_all_products.php",
	parse: function(data) {
      	return data.tbl_products;
    },
      
  });

  return ProductCollection;

});
