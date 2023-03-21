const seedUsers = require('./users');
const seedPosts = require('./posts');

const sequelize = require('../config/connection');

async function runSeeds() {
  await sequelize.sync({force: true});
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  process.exit(0); 
};

runSeeds();