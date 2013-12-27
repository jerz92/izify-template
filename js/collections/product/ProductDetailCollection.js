define([
  'underscore',
  'backbone',
  'models/product/ProductModel'
], function(_, Backbone, ProductModel){

  var ProductDetailCollection = Backbone.Collection.extend({
    model: ProductModel,
    url:"https://izify.com/api/izify-api/user/get_product_details.php",
	//url:"http://localhost:8888/izify-api/user/get_product_details.php",
	parse: function(data) {
      	return data.tbl_products;
    },
      
  });

  return ProductDetailCollection;

});
