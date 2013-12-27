define([
  'underscore',
  'backbone',
  'models/category/CategoryModel',
  'models/merchant/MerchantModel',
  'models/product/ProductModel'
], function(_, Backbone, CategoryModel, MerchantModel, ProductModel){

 //stuck here
  var OrderCollection = Backbone.Collection.extend({
    model: CategoryModel,
    url:"https://izify.com/api/izify-api/user/get_all_categories.php",
	parse: function(data) {
      	return data.tbl_categories;
    },
      
  });

  return OrderCollection;

});
