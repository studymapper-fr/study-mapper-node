'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('userTypes', [{
      type: "STUDENT"
    }, {
      type: "SCHOOL"
    },{
      type: "COMPANY"
    }]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('userTypes', null, {});  
  }
};
