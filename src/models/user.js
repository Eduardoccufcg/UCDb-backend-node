
const { sequelize } = require('../database/index');
const {Sequelize} = require('sequelize')
const User = sequelize.define('User', {

	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
			notNull: true
		}
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
			notNull: true
		}
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
			notNull: true
		}
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			min: 8,
			notEmpty: true,
			notNull: true
		}
	}
});

User.sync();

module.exports = User;