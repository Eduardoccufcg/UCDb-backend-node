'use strict';

const User = require('../models/user');

exports.post = async (req, res, next) => {

	if (await User.findOne({

		where: {
			email: req.body.email
		}
	}
	) != null) {
		res.status(409).send({ "error": "Usuário já cadastrado" });
	}

	await User.create(
		req.body
	)
		.then(function (user) {

			res.status(201).send({
				id: user.id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
			});
		})
		.catch((erro) => {
			res.status(500).send("Houve um erro " + erro);
		});
};
