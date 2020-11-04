const express = require("express");
const userController = require("../controllers/userController");
const userMiddleware = require("../middlewares/userMiddleware");

const userRouter = express.Router();

// It's possible to apply the checkUser middleware to
// all user routes starting with /:id
// userRouter.use("/:id", userMiddleware.checkUser);

// Or apply them individually on a per route basis:
userRouter.get("/", userController.getAll);
userRouter.get("/:id", userMiddleware.checkUser, userController.getSingleUser);
userRouter.post("/", userController.createUser);
userRouter.put("/:id", userMiddleware.checkUser, userController.updateUser);
userRouter.delete("/:id", userMiddleware.checkUser, userController.deleteUser);

module.exports = userRouter;
