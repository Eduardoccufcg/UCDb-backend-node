const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('ucdb','root','masterroot',{
    host:'live.chlofxt42b3u.us-east-2.rds.amazonaws.com',
    dialect:'mysql'
 
});

sequelize.authenticate().then(function(){
    console.log('OK')
}).catch(function(erro){
    console.log('Falha:' + erro)
});

module.exports = {sequelize,DataTypes};