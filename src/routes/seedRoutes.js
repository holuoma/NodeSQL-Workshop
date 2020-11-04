const express = require("express");
const seedController = require("../controllers/seedController");
const userController = require("../controllers/userController");

const seedRouter = express.Router();

seedRouter.get("/recreate", seedController.recreate, userController.getAll);

module.exports = seedRouter;
