'use strict';
const UserTypesSchema = require("../src/schema/UserTypes");
const TABLE_NAME = "userTypes";
module.exports = {
  async up (queryInterface) {
     return queryInterface.createTable(TABLE_NAME, UserTypesSchema);
  },

  async down (queryInterface) {
     return queryInterface.dropTable(TABLE_NAME);
  }
};
