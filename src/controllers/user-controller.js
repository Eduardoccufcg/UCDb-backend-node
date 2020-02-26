'use strict';

const User = require('../models/user');

exports.post = (req, res, next) => {

	User.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password
	})
		.then(function (result) {

			res.status(201).send(User.build({
				id: result.id,
				firstName: result.firstName,
				lastName: result.lastName,
				email: result.email
			}))
		})
		.catch(function (erro) {
			
			res.status(500).send("Houve um erro " + erro);
		});
};
