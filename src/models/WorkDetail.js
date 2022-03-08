const { sequelize } = require("../db/mysql");
const WorkDetailSchema = require("../schema/WorkDetail");
const user = require("../models/User");

const WorkDetail = sequelize.define("WorkDetail", WorkDetailSchema, {
  tableName: "user-work-detail",
  timestamps: false,
});
//WorkDetail.belongsTo(user);

module.exports = { WorkDetail, WorkDetailSchema };
