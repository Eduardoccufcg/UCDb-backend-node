
const {DataTypes,Model} = require('sequelize') 

class User extends Model{
	static init(sequelize){
		super.init({
			firstName: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
					notNull: true
				}
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
					notNull: true
				},
				unique: true
			},
			lastName: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
					notNull: true
				}
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					min: 8,
					notEmpty: true,
					notNull: true
				}
			}


		},{
			sequelize
		})
	}

	static associate(models){
		this.belongsToMany(models.Profile,{foreignKey: "user_id", through:"user_like_profile",as:'profiles' })
	}


}

module.exports = User;