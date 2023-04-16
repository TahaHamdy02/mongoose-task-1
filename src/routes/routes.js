const express = require("express");
const userController = require("../controller/user.controller");
const router = express.Router();
router.post("/users", userController.addUser);
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.findUser);
router.patch("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
