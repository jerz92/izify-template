// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'router', // Request router.js
  'bootstrap',
  'offcanvas',
], function($, _, Backbone, Router, Bootstrap,Offcanvas){
	jQuery.noConflict();
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
});
