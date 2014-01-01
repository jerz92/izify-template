define(['jquery', 'underscore', 'backbone','models/global/GlobalModel','collections/category/CategoryCollection', 'text!templates/sidebar/sidebarTemplate.html'], function($, _, Backbone,GlobalModel,CategoryCollection, sidebarTemplate) {
    var SidebarView = Backbone.View.extend({
        el: $("#sidebar"),
        initialize: function() {
            this.$el.off();
        },
        render: function() {
			var that = this;
			var global = new GlobalModel();
			this.collection = new CategoryCollection();
			var formValues = {
                merchantId: global.merchantId
				
            };
			this.collection.fetch({
                data: formValues,
                success: function(collection, response) {
                    var template = _.template(sidebarTemplate,{
                        categories: that.collection.models
                    });
					$("#sidebar").append(template);
                },
                error: function(collection, response) {
                    console.log("error");
                }
			});            
        }
    });
    return SidebarView;
});