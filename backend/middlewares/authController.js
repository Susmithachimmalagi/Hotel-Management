const User = require("../models/userSchema");

const loginAuth = async (req, res, next) => {
  const { email, password, role } = req.body;
  const user = await User.findOne({ email: email });
  try {
    if (user && email === user.email && role === "admin") {
      res.send({
        status: 200,
        message: "admin  found",
        users: user,
      });
      next();
    } else {
      res.send({
        status: 404,
        message: "admin not found",
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

module.exports = { loginAuth };
