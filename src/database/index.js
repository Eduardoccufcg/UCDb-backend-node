const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('ucdb','root', process.env.BD_SENHA || "root",{
    host: process.env.AWS_RDB_URL || "localhost",
    dialect:'mysql',
    port: process.env.BD_PORTA || 3306
});


sequelize.authenticate().then(function(){
    console.log('OK')
}).catch(function(erro){
    console.log('Falha:' + erro)
});

module.exports = {sequelize,DataTypes};