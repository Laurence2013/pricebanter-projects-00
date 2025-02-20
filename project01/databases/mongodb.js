const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/testDb';
const connectDB = async () => await mongoose.connect(dbURI).then(_ => {
	if(mongoose.connection.readyState === 0){
		console.log('NOT connected to MongoDB!');
	}
	if(mongoose.connection.readyState === 1){
		console.log('CONNECTED to MongoDB!');
	}
	if(mongoose.connection.readyState === 2){
		console.log('...connecting to MongoDB!');
	}
});
mongoose.connection.on('connected', _ => console.log('Mongoose connected to... ' + dbURI));
mongoose.connection.on('error', err => console.log('Mongoose connected error: ' + err));

module.exports = connectDB;
