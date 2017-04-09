var mongoose = require('mongoose');
var ClassSchema = new mongoose.Schema({
   	title: {
   		type: String
   	},
    professor: {
    	type: String
	},
	lectures: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Lecture'
		}
	],
	date: {
		type: Date
	}
	// has many lectures --- run population on Lecture schema 
});

module.exports = mongoose.model('Class', ClassSchema);