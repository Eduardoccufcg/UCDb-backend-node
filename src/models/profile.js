
const {DataTypes,Model} = require('sequelize') 


class Profile extends Model{
	static init(sequelize){
		super.init({
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
					notNull: true
				},
				unique:true
			}
		},{
			sequelize
		})
	}
	static associate(models){
		this.belongsToMany(models.User,{foreignKey: "profile_id", through:"user_like_profile",as:'users' })
	}


}
module.exports = Profile;