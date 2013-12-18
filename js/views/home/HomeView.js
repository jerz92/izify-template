define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),
	
    render: function(){
      this.$el.html(homeTemplate);
	  
	  	$('[data-toggle=offcanvas]').click(function() {
    		$('.row-offcanvas').toggleClass('active');
  		});
    }

  });

  return HomeView;
  
});
