define([
  'jquery',
  'underscore',
  'backbone',
  'models/global/GlobalModel'
], function($, _, Backbone, GlobalModel){
  var GlobalCollection = Backbone.Collection.extend({
    model: GlobalModel,
    
    

  });
 
  return GlobalCollection;
});
