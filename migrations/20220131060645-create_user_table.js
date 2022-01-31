"use strict";
const generateSchema = require("../src/schema/User");
const TABLE_NAME = "user";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(TABLE_NAME, generateSchema(Sequelize));
  },

  async down(queryInterface) {
    return queryInterface.dropTable(TABLE_NAME);
  },
};
