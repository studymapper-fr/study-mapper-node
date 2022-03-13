const { DataTypes } = require("sequelize");

const UserTypeSchema = {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  type: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
  
};

module.exports = UserTypeSchema;
