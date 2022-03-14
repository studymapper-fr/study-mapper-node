const { sequelize } = require("../db/mysql");
const EducationDetailSchema = require("../schema/EducationDetail");
const { User } = require("../models/User");
const { EDUCATION_DETAIL } = require("../constants/database-table-names");

const EducationDetail = sequelize.define("WorkDetail", EducationDetailSchema, {
  tableName: EDUCATION_DETAIL,
  timestamps: false,
});

EducationDetail.belongsTo(User);

module.exports = { EducationDetail, EducationDetailSchema };
