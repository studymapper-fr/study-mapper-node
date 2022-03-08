const userWorkDetailRoutes = require("express").Router();
const { getWorkDetailController } = require("./work-details.controller");
const isAuthenticated = require("../../middlewares/isAuthenticated");

userWorkDetailRoutes.get(
  "/work-detail/:id",
  isAuthenticated,
  getWorkDetailController
);

module.exports = userWorkDetailRoutes;
