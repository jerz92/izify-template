define(['jquery', 'underscore', 'backbone','views/sidebar/SidebarView', 'text!templates/content/contactTemplate.html'], function($, _, Backbone,SidebarView, contactTemplate) {
    var ContactView = Backbone.View.extend({
        el: $("#page"),
        initialize: function() {
            this.$el.off();
        },
        render: function() {
            this.$el.html(contactTemplate);
			
			var sidebarView = new SidebarView();
      		sidebarView.render();
        },
    });
    return ContactView;
});