var mongoose = require('mongoose');
var LectureSchema = new mongoose.Schema({
	belongsToClass:{
		type: 'String',
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
	courseId: {
		type: String
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Student',
			comment: String
		}
	],
}, { collection: 'Lecture' });

module.exports = mongoose.model('Lecture', LectureSchema);