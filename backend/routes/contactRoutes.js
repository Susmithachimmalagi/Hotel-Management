const contactController = require("../controllers/contactControllers");
const express = require("express");
const router = express.Router();
router.post("/createcontact", contactController.createcontact);
router.get("/getcontact", contactController.getcontact);

module.exports = router;
