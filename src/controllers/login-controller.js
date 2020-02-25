'use strict';

const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.post = (req, res, next) => {
    if(req.body.user === 'edu' && req.body.pwd === '123'){
        //auth ok
        const id = 1; //esse id viria do banco de dados
        var token = jwt.sign({ id }, process.env.SECRET, {
          expiresIn: 300 // expires in 5min
        });
        res.status(200).send({ auth: true, token: token });
      }
      
      res.status(500).send('Login inválido!');
};

