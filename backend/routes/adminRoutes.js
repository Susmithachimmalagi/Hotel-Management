const adminControllers = require("../controllers/adminControllers");

const express = require("express");

const router = express.Router();

router.post("/createadmin", adminControllers.createadmin);
router.get("/getadmin", adminControllers.getadmin);

module.exports = router;
