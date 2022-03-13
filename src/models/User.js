const { sequelize } = require("../db/mysql");
const UserSchema = require("../schema/User");
const { USER } = require("../constants/database-table-names");
const { WorkDetail } = require("../models/WorkDetail");

const User = sequelize.define("User", UserSchema, {
  tableName: USER,
  timestamps: false,
});

module.exports = { User, UserSchema };
