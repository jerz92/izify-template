define(['jquery', 'underscore', 'backbone','text!templates/content/contactTemplate.html'], function($, _, Backbone, contactTemplate) {
    var ContactView = Backbone.View.extend({
        el: $("#page"),
        initialize: function() {
            this.$el.off();
        },
        render: function() {
            this.$el.html(contactTemplate);
			
        },
    });
    return ContactView;
});