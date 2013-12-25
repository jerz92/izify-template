define(['jquery', 'underscore', 'backbone', 'text!templates/content/aboutTemplate.html'], function($, _, Backbone, aboutTemplate) {
    var AboutView = Backbone.View.extend({
        el: $("#page"),
        initialize: function() {
            this.$el.off();
        },
        render: function() {
            this.$el.html(aboutTemplate);
        },
    });
    return AboutView;
});