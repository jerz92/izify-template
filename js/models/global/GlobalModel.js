define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var GlobalModel = Backbone.Model.extend({

	defaults : {
	keyCode: '231e0513ccd23611139732ba31decaa4',
	secretCode: 'b3a04c3e89fa4d5052137eb95d2bf512',
	}
	/*initialize:function(){
  		console.log(this.myGlobalVar);
	}*/
	
	});

  	return GlobalModel;

});
