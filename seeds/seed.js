const sequelize = require('../config/connection');

async function runSeeds() {
  await sequelize.sync({force: true});

  
}