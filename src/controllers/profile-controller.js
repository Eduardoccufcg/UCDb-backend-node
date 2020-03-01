'use strict';

const Profile = require('../models/profile');
const {Op} = require('sequelize');

exports.post = async (req, res, next) => {

    await Profile.bulkCreate(req.body).
    
    then((result) => {
        
        res.status(201).send(result);

    }).catch((erro) => {
        res.status(500).send("Houve um erro " + erro);
    });
	
};

exports.get = async (req, res, next) => {

    const profiles = await Profile.findAll();
    res.status(200).send(profiles);
};

exports.getById = async (req, res, next) => {

    const id = req.params.id;
    const profile = await Profile.findByPk(id);
    res.status(200).send(profile);
};

exports.searchBySubstring = async (req, res, next) => {

   
    const substring = `%${req.query.substring}%`; 
    
    const profiles = await Profile.findAll({
        where:{
            name:{
                [Op.like]: substring
            }
        },
        attributes: ['id', 'name']
    });
    res.status(200).send(profiles);
};

exports.deleteById = async (req, res, next) => {

    const id = req.params.id;
    const profile = await Profile.findByPk(id);
    if(profile == null){
        res.status(404).send({"error": "perfil não existe"});
    }else{
        profile.destroy().then(()=>{
            res.status(204).send();
        }).catch(()=>{
            res.status(500).send();
    
        });
    };
};