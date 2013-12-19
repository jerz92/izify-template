define(['jquery', 'underscore', 'backbone','views/sidebar/SidebarView', 'text!templates/content/aboutTemplate.html'], function($, _, Backbone,SidebarView, aboutTemplate) {
    var AboutView = Backbone.View.extend({
        el: $("#page"),
        initialize: function() {
            this.$el.off();
        },
        render: function() {
            this.$el.html(aboutTemplate);
			
			var sidebarView = new SidebarView();
      		sidebarView.render();
        },
    });
    return AboutView;
});