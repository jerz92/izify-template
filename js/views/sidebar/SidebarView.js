define(['jquery', 'underscore', 'backbone', 'text!templates/sidebar/sidebarTemplate.html'], function($, _, Backbone, sidebarTemplate) {
    var SidebarView = Backbone.View.extend({
        el: $("#sidebar"),
        initialize: function() {
            this.$el.off();
        },
        events: {
            'click [data-toggle=offcanvas]': 'toggleClass'
        },
        toggleClass: function(e) {
			console.log("fire");
            this.$('.row-offcanvas').toggleClass('active');
        },
        render: function() {
            //var compiledTemplate = _.template(sidebarTemplate, data);
            $("#sidebar").append(sidebarTemplate);
        }
    });
    return SidebarView;
});