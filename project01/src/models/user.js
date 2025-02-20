const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true
	},
	createdOn: Date
});
const User = mongoose.model('User', userSchema);

module.exports = User || mongoose.models.User;
