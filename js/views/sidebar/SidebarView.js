define(['jquery', 'underscore', 'backbone','models/global/GlobalModel','collections/category/CategoryCollection', 'text!templates/sidebar/sidebarTemplate.html'], function($, _, Backbone,GlobalModel,CategoryCollection, sidebarTemplate) {
    var SidebarView = Backbone.View.extend({
        el: $("#sidebar"),
        initialize: function() {
            this.$el.off();
        },
        events: {
            'click [data-toggle=offcanvas]': 'toggleClass'
        },
        toggleClass: function(e) {
			console.log("fire");
            this.$('.row-offcanvas').toggleClass('active');
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
                error: function(model, response) {
                    console.log(that.model);
                }
			});            
        }
    });
    return SidebarView;
});