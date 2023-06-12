const Sequelize = require("sequelize")
const dbConfig = require('../config/dataBase');
const User = require('../models/User')
const UserData = require('../models/UserData')
const Address = require('../models/Address')
const RgData = require('../models/RgData')
const TitleData = require('../models/TitleData')

const connection = new Sequelize(dbConfig)
connection.authenticate().then(()=>{ console.log('foi')}).catch((error) => {console.log('foi nao')})

// Connections
User.init(connection);
UserData.init(connection);
Address.init(connection);
RgData.init(connection);
TitleData.init(connection);

// Association
User.associate(connection.models);
UserData.associate(connection.models);
Address.associate(connection.models);
RgData.associate(connection.models);
TitleData.associate(connection.models);




module.exports = connection;