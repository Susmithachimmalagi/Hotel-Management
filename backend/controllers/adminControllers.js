const admin = require("../models/adminSchema");

const createadmin = async (req, res) => {
  const newadmin = new admin(req.body);
  try {
    await newadmin.save();
    res.send({
      status: 200,
      message: "New admin created",
    });
  } catch (error) {
    res.send({
      status: 500,
      message: "server error",
      error: error,
    });
  }
};

const getadmin = async (req, res) => {
  const admindata = await admin.find();
  try {
    res.send({
      status: 200,
      admin: admindata,
    });
  } catch (error) {
    res.send({
      status: 500,
      message: "server error",
      error: error,
    });
  }
};

module.exports = { createadmin, getadmin };
