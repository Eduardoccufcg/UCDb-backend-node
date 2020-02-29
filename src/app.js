'use strict'
require('dotenv-safe').config({path:'.env'});
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('../src/database/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Carrega rotas
const indexRoutes = require('./routes/index');
const UserRoute = require('./routes/user-routes');
const LoginRoute = require('./routes/login-routes');
const ProfileRoute = require('./routes/profile-routes');

app.use('/', indexRoutes);
app.use('/users', UserRoute)
app.use('/login', LoginRoute)
app.use('/profiles', ProfileRoute)

// Carrega os modelos
const User = require('./models/user');
const Profile = require('./models/profile');

User.init(sequelize);
Profile.init(sequelize);
User.associate(sequelize.models);
Profile.associate(sequelize.models);

sequelize.sync({force:true})
module.exports = app;
