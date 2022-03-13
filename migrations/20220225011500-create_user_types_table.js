'use strict';
const UserTypesSchema = require("../src/schema/UserTypes");
const TABLE_NAME = "userTypes";
module.exports = {
  async up (queryInterface) {
     return queryInterface.createTable(TABLE_NAME, UserTypesSchema).then(() => {
       queryInterface.bulkInsert('userTypes', [{
        type: "STUDENT"
      }, {
        type: "SCHOOL"
      },{
        type: "COMPANY"
      }]);
     });
  },

  async down (queryInterface) {
     return queryInterface.dropTable(TABLE_NAME);
  }
};
