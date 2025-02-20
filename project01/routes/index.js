const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const User = require('../src/models/user');

router.get('/', async(req,res,next) => {
	const result00 = await User.find({name: 'Mark Henry'});

	console.log(result00);
	try{
		res.send({
			success: true, 
			message: 'User list retreived successfully!',
			data: result00
		})
	}catch(err){
		res.send({
			success: false, 
			message: 'User list retreived unsuccessfully!',
			data: err
		})
	}
});
router.post('/', async(req,res,next) => {
	const user00 = new User({
		name: req.body.name,
		email: req.body.email
	});
	try{
		const result00 = await User.create(user00);
		res.send({
			success: true,
			message: 'User created successfully!',
			data: result00
		})
	}catch(err){
		res.send({
			success: false, 
			message: 'User is NOT created!',
			data: err
		})
	}
});

module.exports = router;
