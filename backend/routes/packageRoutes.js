const packageController = require("../controllers/packageControllers");
const express = require("express");
const router = express.Router();
router.post("/createpackage", packageController.createpackage);
router.get("/getpackage", packageController.getpackage);

module.exports = router;
