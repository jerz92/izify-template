define(['jquery', 'underscore', 'backbone', 'models/global/GlobalModel', 'collections/product/ProductDetailCollection', 'views/header/HeaderView', 'views/sidebar/SidebarView', 'views/footer/FooterView', 'text!templates/product/productTemplate.html'], function($, _, Backbone, GlobalModel, ProductDetailCollection,HeaderView, SidebarView,FooterView, productTemplate) {
    var ProductView = Backbone.View.extend({
        el: $("#page"),
        initialize: function() {
            this.$el.off();
        },
        render: function(productId) {
            
			var that = this;
			var global = new GlobalModel();
            this.collection = new ProductDetailCollection();
			var formValues = {
                merchantId: global.merchantId,
				productId: productId
            };
            this.collection.fetch({
				 data: formValues,
                success: function(collection, response) {
                    var template = _.template(productTemplate, {
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
        },
    });
    return ProductView;
});