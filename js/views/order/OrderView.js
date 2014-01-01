define(['jquery', 'underscore', 'backbone', 'models/global/GlobalModel', 'collections/order/OrderCollection', 'views/header/HeaderView', 'views/sidebar/SidebarView', 'views/footer/FooterView', 'text!templates/order/orderTemplate.html'], function($, _, Backbone, GlobalModel, OrderCollection,HeaderView,SidebarView,FooterView, orderTemplate) {
    var OrderView = Backbone.View.extend({
        el: $("#page"),
        initialize: function() {
            this.$el.off();
        },
		events: {
            "click #orderButton": "addOrder"
        },
		addOrder: function(event) {
			event.preventDefault();
			var url = "https://izify.com/api/izify-api/user/create_order.php";
			var global = new GlobalModel();
			var formValues = {
                merchantId: global.merchantId,
				productId: $("#productId").val(),
				quantity: $("#quantity").val(),
				email: $("#email").val(),
				name: $("#name").val(),
				password: $("#password").val(),
				mobilePhone: $("#mobilePhone").val(),
				address: $("#address").val(),
				city: $("#city").val(),
				state: $("#state").val(),
				postalCode: $("#postalCode").val(),
            };
			if ($("#email").val() == "") {
                alert("Enter email");
            } else if ($("#name").val() == "") {
                alert("Enter name");
            } else if ($("#password").val() == "") {
                alert("Enter password");
            } else if ($("#mobilePhone").val() == "") {
                alert("Enter mobilePhone");
            } else if ($("#address").val() == "") {
                alert("Enter address");
            } else if ($("#city").val() == "") {
                alert("Enter city");
            } else if ($("#state").val() == "") {
                alert("Enter state");
            } else if ($("#postalCode").val() == "") {
                alert("Enter postalCode");
            } else if ($("#quantity").val() == "") {
                window.location.replace("#home");
            } else {
				$.ajax({
                    url: url,
                    type: 'GET',
                    dataType: "json",
                    data: formValues,
                    success: function(data) {
                        alert("Order successfully created. Check your email for payment details. Thank you.");
						window.location.replace("#home");
                    },
                    error: function() {
                        window.location.replace("#home");
                    }
                });
			}
			
		},
        render: function(productId) {
			var that = this;
			var global = new GlobalModel();
            this.collection = new OrderCollection();
			var formValues = {
                merchantId: global.merchantId,
				productId: productId
            };
            this.collection.fetch({
				 data: formValues,
                success: function(collection, response) {
                    var template = _.template(orderTemplate, {
                        orders: that.collection.models
                    });
                    that.$el.html(template);
					var sidebarView = new SidebarView();
					sidebarView.render();
                },
                error: function(collection, response) {
                    console.log("error");
                }
            });
        },
    });
    return OrderView;
});