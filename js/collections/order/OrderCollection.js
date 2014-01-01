define([
  'underscore',
  'backbone',
  'models/order/OrderModel',
], function(_, Backbone, OrderModel){

 //stuck here
  var OrderCollection = Backbone.Collection.extend({
    model: OrderModel,
    url:"https://izify.com/api/izify-api/user/get_order_details.php",
	parse: function(data) {
      	return data.tbl_orders;
    },
      
  });

  return OrderCollection;

});
