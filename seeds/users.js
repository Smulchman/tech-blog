const { User } = require("../models");

const userData = [
  {
    id: 1,
    first_name: "Bongo",
    last_name: "Blumbus",
    username: "BongoBones",
    email: "Beebo@booboo.gov",
    password: "GrungusGooGoo",
  },
  {
    id: 2,
    first_name: "Bimbo",
    last_name: "Boggins",
    username: "notBilbo",
    email: "notbilbo@yahoo.net",
    password: "maegnas4ever",
  },
  {
    id: 3,
    first_name: "Glenk",
    last_name: "Kroct",
    username: "goblinzRule",
    email: "daBigestGobbo@goblin.com",
    password: "luvElves",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
