var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  
var LectureSchema = Schema({
	_creator:{
		type: Number,
		ref: 'Class'
	},
	title : {
		type: String
	},
   	lectureNotes: {
   		type: String
   	},
	courseDate: {
		type: Date
	},
    courseInstructor: {
    	type: String,
    	// REFRENCE TO CLASS TEACHER
	},
	// comments: [
	// 	{
	// 		ref: 'Student',
	// 		comment: String
	// 	}
	// ],
});

module.exports = mongoose.model('Lecture', LectureSchema);