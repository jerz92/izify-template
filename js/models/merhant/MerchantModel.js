define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var MerchantModel = Backbone.Model.extend({

  		defaults : {
          merchant_id : 0,
		  shop_name : "",
		  email : "",
		  password : "",
		  name : "",
		  address : "",
		  city : "",
		  postal_code : 0,
		  phone_number : 0,
		  shop_title : "",
		  shop_description : "",
		  shipping_rate : 0,
		  refund_policy : "",
		  term_of_service : "",
		  bank_name : "",
		  bank_account_name : "",
		  bank_account_number : 0,
		  date_created : "",
		  date_updated : ""
      }

    });

  	return MerchantModel;

});
