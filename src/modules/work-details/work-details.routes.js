const userWorkDetailRoutes = require("express").Router();
const {
  getWorkDetailController,
  createWorkDetailController,
} = require("./work-details.controller");
const isAuthenticated = require("../../middlewares/isAuthenticated");

userWorkDetailRoutes.get(
  "/work-detail/:id",
  isAuthenticated,
  getWorkDetailController
);

userWorkDetailRoutes.post(
  "/work-detail/:id",
  isAuthenticated,
  createWorkDetailController
);

module.exports = userWorkDetailRoutes;
