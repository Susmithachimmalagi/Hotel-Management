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
let admin = false;
const loginUser = async (req, res) => {
  const { email, password, role } = req.body;
  if (role === "admin") {
    admin = true;
  }
  const user = await User.findOne({ email: email });
  try {
    if (user && email === user.email) {
      res.send({
        status: 200,
        message: "user  found",
        users: user,
      });
    } else {
      res.send({
        status: 404,
        message: "user not found",
        users: user,
      });
    }
  } catch (error) {
    res.send({
      status: 500,
      message: "server error",
      error: error,
    });
    console.log(error);
  }
};


module.exports = { createUser, getUsers, loginUser };
