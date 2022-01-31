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
  city: {
    type: DataTypes.STRING(50),
    defaultValue: null,
  },
  state: {
    type: DataTypes.STRING(50),
    defaultValue: null,
  },
  country: {
    type: DataTypes.STRING(50),
    defaultValue: null,
  },
  zipCode: {
    type: DataTypes.STRING(50),
    defaultValue: null,
  },
  active: DataTypes.BOOLEAN,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
};

module.exports = UserSchema;
