const packages = require("../models/packageSchema");

const createpackage = async (req, res) => {
  const newpackage = new packages(req.body);
  try {
    await newpackage.save();
    res.send({
      status: 200,
      message: "New package created",
    });
  } catch (error) {
    res.send({
      status: 500,
      message: "server error",
      error: error,
    });
  }
};

const getpackage = async (req, res) => {
  const packagedata = await packages.find();
  try {
    res.send({
      status: 200,
      package: packagedata,
    });
  } catch (error) {
    res.send({
      status: 500,
      message: "server error",
      error: error,
    });
  }
};
module.exports = { createpackage, getpackage };
