const { DataTypes } = require("sequelize");

const UserSchema = {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: DataTypes.STRING(100),
  lastName: DataTypes.STRING(100),
  email: DataTypes.STRING(150),
  password: DataTypes.STRING(255),
  city: DataTypes.STRING(50),
  state: DataTypes.STRING(50),
  country: DataTypes.STRING(50),
  zipCode: DataTypes.STRING(50),
  active: DataTypes.BOOLEAN,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
};

module.exports = UserSchema;
