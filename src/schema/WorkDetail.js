const { DataTypes } = require("sequelize");

const WorkDetailSchema = {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  title: DataTypes.STRING(100),
  description: DataTypes.STRING(255),
  employer: DataTypes.STRING(100),
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
  startDate: DataTypes.DATE,
  endDate: DataTypes.DATE,
};

module.exports = WorkDetailSchema;
