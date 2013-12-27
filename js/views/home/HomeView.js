define(['jquery', 'underscore', 'backbone', 'models/global/GlobalModel', 'collections/product/ProductCollection', 'views/header/HeaderView', 'views/sidebar/SidebarView', 'views/footer/FooterView', 'text!templates/home/homeTemplate.html'], function($, _, Backbone, GlobalModel, ProductCollection,HeaderView, SidebarView,FooterView, homeTemplate) {
    var HomeView = Backbone.View.extend({
        el: $("#page"),
        initialize: function() {
            this.$el.off();
        },
        render: function() {
            
var that = this;
			var global = new GlobalModel();
            this.collection = new ProductCollection();
			var formValues = {
                merchantId: global.merchantId
            };
            this.collection.fetch({
				 data: formValues,
                success: function(collection, response) {
                    var template = _.template(homeTemplate, {
                        products: that.collection.models
                    });
                    that.$el.html(template);
					var sidebarView = new SidebarView();
					sidebarView.render();
                },
                error: function(collection, response) {
                    console.log("error");
                }
            });
			
			/*var sidebarView = new SidebarView();
			sidebarView.render();*/
        },
    });
    return HomeView;
});