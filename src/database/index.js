const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('ucdb','root', process.env.BD_SENHA,{
    host: process.env.AWS_RDB_URL,
    dialect:'mysql',
    port: process.env.BD_PORTA
});


sequelize.authenticate().then(function(){
    console.log('OK')
}).catch(function(erro){
    console.log('Falha:' + erro)
});

module.exports = {sequelize,DataTypes};