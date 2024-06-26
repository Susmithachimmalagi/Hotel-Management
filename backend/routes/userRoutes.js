const userController = require("../controllers/UserControllers");
// const authController = require("../middlewares/authController");
const express = require("express");

const router = express.Router();

router.post("/createuser", userController.createUser);
router.get("/getusers", userController.getUsers);
// router.use(authController.loginAuth);
// router.post("/loginuser", authController.loginAuth, userController.loginUser);

module.exports = router;
