const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  // db name
  process.env.DB_NAME,
  // user name
  process.env.DB_USER,
  // password
  process.env.DB_PASS,
  // options object
  {
    host: 'localhost', // 127.0.0.1
    dialect: 'mysql',
    port: 3306
  }
)

module.exports = sequelize;