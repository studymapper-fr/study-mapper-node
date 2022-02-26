'use strict';
const TABLE_NAME="user";
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addColumn(TABLE_NAME, 'userTypeId', {
       type: Sequelize.DataTypes.INTEGER(11),
       defaultValue: 1
     });
     queryInterface.addConstraint(TABLE_NAME, {
      fields: ['userTypeId'],
      type: 'foreign key',
      name: 'custom_fkey_user_type_id',
      references: { //Required field
        table: 'userTypes',
        field: 'id'
      },
      onDelete: 'no action',
      onUpdate: 'no action'
    });
  },

  async down (queryInterface) {
    await queryInterface.removeConstraint(TABLE_NAME, 'custom_fkey_user_type_id').then(() => queryInterface.removeColumn(TABLE_NAME,'userTypeId'))
    
  }
};
