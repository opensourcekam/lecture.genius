var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  passportLocalMongoose = require('passport-local-mongoose');

var StudentSchema = Schema({
	username: {
		type: String
	},
	firstname: {
   		type: String
	},
   	firstname: {
   		type: String
   	},
    lastname: {
    	type: String
    }
});

StudentSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Student', StudentSchema);