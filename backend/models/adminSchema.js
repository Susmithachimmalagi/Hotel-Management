const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      default: "admin",
    },
  },
  {
    collection: "admin",
  }
);

module.exports = mongoose.model("admin", adminSchema);
