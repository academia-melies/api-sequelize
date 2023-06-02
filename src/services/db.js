const Sequelize = require("sequelize")
const dbConfig = require('../config/dataBase');
const { User, UserData, Address, RgData, TitleData } = require("../models");


const connection = new Sequelize(dbConfig)

// Connections
User.init(connection);
UserData.init(connection);
Address.init(connection);
RgData.init(connection);
TitleData.init(connection);

// Association
User.associate(connection.models);
UserData.associate(connection.models);



module.exports = connection;