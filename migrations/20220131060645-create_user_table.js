"use strict";
const UserSchema = require("../src/schema/User");
const TABLE_NAME = "user";

module.exports = {
  async up(queryInterface) {
    return queryInterface.createTable(TABLE_NAME, UserSchema);
  },

  async down(queryInterface) {
    return queryInterface.dropTable(TABLE_NAME);
  },
};
