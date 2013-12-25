define(['jquery', 'underscore', 'backbone','models/global/GlobalModel','collections/merchant/MerchantCollection', 'text!templates/header/headerTemplate.html'], function($, _, Backbone,GlobalModel,MerchantCollection, headerTemplate) {
    var HeaderView = Backbone.View.extend({
        el: $("#header"),
        initialize: function() {
			this.render();
            this.$el.off();
			
        },
        render: function() {
			var that = this;
			var global = new GlobalModel();
			this.collection = new MerchantCollection();
			var formValues = {
                merchantId: global.merchantId
            };
			this.collection.fetch({
                data: formValues,
                success: function(collection, response) {
                    var template = _.template(headerTemplate,{
                        merchants: that.collection.models
                    });
					$("#header").append(template);
                },
                error: function(collection, response) {
                    console.log("error");
                }
			});            
        }
    });
    return HeaderView;
});