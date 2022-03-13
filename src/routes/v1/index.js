const allRoutes = require("express").Router();
const userRoutes = require("../../modules/users/users.routes");
const userWorkDetailRoutes = require("../../modules/work-details/work-details.routes");

allRoutes.use(userRoutes);
allRoutes.use(userWorkDetailRoutes);

module.exports = allRoutes;
