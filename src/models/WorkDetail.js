const { sequelize } = require("../db/mysql");
const WorkDetailSchema = require("../schema/WorkDetail");
const { User } = require("../models/User");
const { WORK_DETAIL } = require("../constants/database-table-names");

const WorkDetail = sequelize.define("WorkDetail", WorkDetailSchema, {
  tableName: WORK_DETAIL,
  timestamps: false,
});

WorkDetail.belongsTo(User);

module.exports = { WorkDetail, WorkDetailSchema };
