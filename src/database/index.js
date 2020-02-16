const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('ucdb','root','root',{
    host:'localhost',
    dialect:'mysql'
 
});

sequelize.authenticate().then(function(){
    console.log('OK')
}).catch(function(erro){
    console.log('Falha:' + erro)
});

module.exports = {sequelize,DataTypes};