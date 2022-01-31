const { Sequelize, sequelize } = require("../db/mysql");
const generateModel = require("../schema/User");

const User = sequelize.define("User", generateModel(Sequelize));

module.exports = { User, UserSchema };
