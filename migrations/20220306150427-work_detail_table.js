"use strict";
const WorkDetailSchema = require("../src/schema/WorkDetail");
const TABLE_NAME = "user-work-detail";

module.exports = {
  async up(queryInterface) {
    return queryInterface.createTable(TABLE_NAME, WorkDetailSchema);
  },

  async down(queryInterface) {
    return queryInterface.dropTable(TABLE_NAME);
  },
};
