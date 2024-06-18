const userController = require("../controllers/UserControllers");

const express = require("express");

const router = express.Router();

router.post("/createuser", userController.createUser);
router.get("/getusers", userController.getUsers);
router.post("/loginuser", userController.loginUser);

module.exports = router;
