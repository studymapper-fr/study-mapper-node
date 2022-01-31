const generateSchema = function (Sequelize) {
  return {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: Sequelize.STRING(100),
    lastName: Sequelize.STRING(100),
    email: Sequelize.STRING(150),
    password: Sequelize.STRING(255),
    city: Sequelize.STRING(50),
    state: Sequelize.STRING(50),
    country: Sequelize.STRING(50),
    zipCode: Sequelize.STRING(50),
    active: Sequelize.BOOLEAN,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  };
};

module.exports = generateSchema;
