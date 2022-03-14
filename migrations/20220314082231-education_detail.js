"use strict";
const EducationDetailSchema = require("../src/schema/EducationDetail");
const { EDUCATION_DETAIL } = require("../src/constants/database-table-names");

module.exports = {
  async up(queryInterface) {
    return queryInterface.createTable(EDUCATION_DETAIL, EducationDetailSchema);
  },

  async down(queryInterface) {
    return queryInterface.dropTable(EDUCATION_DETAIL);
  },
};
