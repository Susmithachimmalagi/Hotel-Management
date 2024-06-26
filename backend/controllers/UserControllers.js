const User = require("../models/userSchema");

const createUser = async (req, res) => {
  const newuser = new User(req.body);
  try {
    await newuser.save();
    res.send({
      status: 200,
      message: "New user created",
    });
  } catch (error) {
    res.send({
      status: 500,
      message: "server error",
      error: error,
    });
  }
};

const getUsers = async (req, res) => {
  const users = await User.find();
  try {
    res.send({
      status: 200,
      users: users,
    });
  } catch (error) {
    res.send({
      status: 500,
      message: "server error",
      error: error,
    });
  }
};

module.exports = { createUser, getUsers };
