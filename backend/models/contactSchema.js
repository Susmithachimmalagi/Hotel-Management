const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Moblie: {
      type: String,
      required: true,
    },
    Message: {
      type: String,
      required: true,
    },
  },
  {
    collection: "Contact",
  }
);

module.exports = mongoose.model("Contact", contactSchema);
