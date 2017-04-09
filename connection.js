var mongoose = require('mongoose');
mongoose.connect('mongodb://imauri:565632@ds155490.mlab.com:55490/connect_to_mongo');

var connection = mongoose.connection;

connection.on('connected', function() {
	console.log('connected to db');
});

connection.on('disconnected',function() {
	console.log('disconnected to db');
});

connection.on('error', function(error) {
	console.log('db connection error');
});

process.on('SIGINT', function() {
	connection.close(function() {
		console.log('db connection close due to process termination');
		process.exit(0);

	});
});

module.exports = connection;
