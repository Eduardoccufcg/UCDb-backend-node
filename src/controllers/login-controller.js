'use strict';

const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.post = async (req, res, next) => {

	const user = await User.findOne({

		where: {
			email: req.body.email
		}
	}
	);

	if (user !== null && user.dataValues.password === req.body.password) {

		const id = user.dataValues.id;
		var token = jwt.sign({ id }, process.env.SECRET, {
			expiresIn: 300 // expires in 5min
		});
		res.status(200).send({ auth: true, token: token });
	}

	res.status(400).send({ "error": 'Usuário ou Senha inválidos' });
};

