define([
  'jquery',
  'underscore',
  'backbone',
  'models/merchant/MerchantModel'
], function($, _, Backbone, MerchantModel){
  var MerchantCollection = Backbone.Collection.extend({
    model: MerchantModel,
    
    

  });
 
  return MerchantCollection;
});
