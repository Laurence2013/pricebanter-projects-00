const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	createdOn: Date
});
const User = mongoose.model('User', userSchema);

module.exports = User || mongoose.models.User;
