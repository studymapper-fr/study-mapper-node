const { sequelize } = require("../db/mysql");
const UserSchema = require("../schema/User");

const User = sequelize.define("User", UserSchema, {
  tableName: "user",
  timestamps: false,
});

module.exports = { User, UserSchema };
