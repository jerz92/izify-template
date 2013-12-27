// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/category/CategoryView',
  'views/product/ProductView',
  'views/order/OrderView',
  'views/content/AboutView',
  'views/content/ContactView',
  'views/header/HeaderView',
  'views/footer/FooterView',
], function($, _, Backbone, HomeView,CategoryView,ProductView,OrderView, AboutView, ContactView,HeaderView,FooterView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      // Default
	  'category/index/:categoryId':'showCategory',
	  'product/detail/:productId':'showProduct',
	  'order/index/:productId':'showOrder',
	  'about':'showAbout',
	  'contact':'showContact',
      '*actions': 'defaultAction'
    }
	
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
	app_router.on('route:showCategory', function (categoryId) {
     	
        var categoryView = new CategoryView();
        categoryView.render(categoryId);
    });
	
	app_router.on('route:showProduct', function (productId) {
     	
        var productView = new ProductView();
        productView.render(productId);
    });
	
	app_router.on('route:showOrder', function (productId) {
     	
        var orderView = new OrderView();
        orderView.render(productId);
    });
	
	app_router.on('route:showAbout', function (actions) {
     	
        var aboutView = new AboutView();
        aboutView.render();
    });
	
	app_router.on('route:showContact', function (actions) {
     	
        var contactView = new ContactView();
        contactView.render();
    });
	
    app_router.on('route:defaultAction', function (actions) {
     	
       // We have no matching route, lets display the home page 
        var homeView = new HomeView();
        homeView.render();
    });

    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
	
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});