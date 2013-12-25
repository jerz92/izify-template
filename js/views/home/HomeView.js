define(['jquery', 'underscore', 'backbone','views/sidebar/SidebarView','text!templates/home/homeTemplate.html'], function($, _, Backbone,SidebarView, homeTemplate) {
    var HomeView = Backbone.View.extend({
        el: $("#page"),
        initialize: function() {
            this.$el.off();
        },
        render: function() {
            this.$el.html(homeTemplate);
			var sidebarView = new SidebarView();
			sidebarView.render();
        },
    });
    return HomeView;
});