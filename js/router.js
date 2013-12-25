// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/content/AboutView',
  'views/content/ContactView',
  'views/header/HeaderView',
  'views/footer/FooterView',
], function($, _, Backbone, HomeView, AboutView, ContactViews,HeaderView,FooterView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      // Default
	  'about':'showAbout',
	  'contact':'showContact',
      '*actions': 'defaultAction'
    }
	
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
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
	var headerView = new HeaderView();
	headerView.render();
	var footerView = new FooterView();
	footerView.render();
	
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});