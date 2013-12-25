define(['jquery', 'underscore', 'backbone','models/global/GlobalModel','collections/merchant/MerchantCollection', 'text!templates/footer/footerTemplate.html'], function($, _, Backbone,GlobalModel,MerchantCollection, footerTemplate) {
    var FooterView = Backbone.View.extend({
        el: $("#footer"),
        initialize: function() {
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
                    var template = _.template(footerTemplate,{
                        merchants: that.collection.models
                    });
					$("#footer").append(template);
                },
                error: function(collection, response) {
                    console.log("error");
                }
			});            
        }
    });
    return FooterView;
});