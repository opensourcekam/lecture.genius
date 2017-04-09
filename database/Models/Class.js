var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var ClassSchema = Schema({
	_id: {
		type: Number
	},
   	title: {
   		type: String
   	},
    professor: {
    	type: String
	},
	lectures: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Lecture'
		}
	],
	date: {
		type: Date
	}
});

module.exports = mongoose.model('Class', ClassSchema);