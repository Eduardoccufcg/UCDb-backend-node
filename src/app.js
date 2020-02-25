'use strict'
require('dotenv-safe').config({path:'.env'});

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Carrega rotas
const indexRoutes = require('./routes/index');
const UserRoute = require('./routes/user-routes');
const LoginRoute = require('./routes/login-routes');

app.use('/', indexRoutes);
app.use('/users', UserRoute)
app.use('/login', LoginRoute)

// Carrega os modelos
const User = require('./models/user');

module.exports = app;
