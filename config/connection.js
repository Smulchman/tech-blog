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
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
)

module.exports = sequelize;