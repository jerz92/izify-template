define(['jquery', 'underscore', 'backbone', 'models/global/GlobalModel', 'collections/product/ProductCategoryCollection', 'views/header/HeaderView', 'views/sidebar/SidebarView', 'views/footer/FooterView', 'text!templates/category/categoryTemplate.html'], function($, _, Backbone, GlobalModel, ProductCategoryCollection,HeaderView, SidebarView,FooterView, categoryTemplate) {
    var CategoryView = Backbone.View.extend({
        el: $("#page"),
        initialize: function() {
            this.$el.off();
        },
        render: function(categoryId) {
            
			var that = this;
			var global = new GlobalModel();
            this.collection = new ProductCategoryCollection();
			var formValues = {
                merchantId: global.merchantId,
				categoryId: categoryId
            };
            this.collection.fetch({
				 data: formValues,
                success: function(collection, response) {
                    var template = _.template(categoryTemplate, {
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
    return CategoryView;
});