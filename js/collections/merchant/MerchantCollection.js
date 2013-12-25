define([
  'underscore',
  'backbone',
  'models/merchant/MerchantModel'
], function(_, Backbone, MerchantModel){

  var MerchantCollection = Backbone.Collection.extend({
    model: MerchantModel,
    url:"https://izify.com/api/izify-api/user/get_general_details.php",
	//url:"http://localhost:8888/izify-api/user/get_general_details.php",
	parse: function(data) {
      	return data.tbl_merchants;
    },
      
  });

  return MerchantCollection;

});
