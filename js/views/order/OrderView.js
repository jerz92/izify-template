define(['jquery', 'underscore', 'backbone', 'models/global/GlobalModel', 'collections/order/OrderCollection', 'views/header/HeaderView', 'views/sidebar/SidebarView', 'views/footer/FooterView', 'text!templates/category/orderTemplate.html'], function($, _, Backbone, GlobalModel, OrderCollection,HeaderView,SidebarView,FooterView, orderTemplate) {
    var OrderView = Backbone.View.extend({
        el: $("#page"),
        initialize: function() {
            this.$el.off();
        },
        render: function(productId) {
            
			var that = this;
			var global = new GlobalModel();
            this.collection = new OrderCollection();
			var formValues = {
                merchantId: global.merchantId,
				productId: productId
            };
            this.collection.fetch({
				 data: formValues,
                success: function(collection, response) {
                    var template = _.template(orderTemplate, {
                        orders: that.collection.models
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
    return OrderView;
});