define(['jquery', 'underscore', 'backbone', 'text!templates/home/homeTemplate.html'], function($, _, Backbone, homeTemplate) {
    var HomeView = Backbone.View.extend({
        el: $("#page"),
        initialize: function() {
            this.$el.off();
        },
        events: {
            'click [data-toggle=offcanvas]': 'toggleClass'
        },
        toggleClass: function(e) {
            this.$('.row-offcanvas').toggleClass('active');
        },
        render: function() {
            this.$el.html(homeTemplate);
        },
    });
    return HomeView;
});