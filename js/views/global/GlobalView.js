define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var GlobalView = Backbone.View.extend({
        el: $("#page"),
        initialize: function() {
            this.$el.off();
        },
		events: {
            'click #offcanvas': 'toggleClass'
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
                error: function(collection, response) {
                    console.log(that.model);
                }
			});     		
        },
    });
    return GlobalView;
});