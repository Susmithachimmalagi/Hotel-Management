const mongoose = require("mongoose");

const packageSchema = mongoose.Schema(
  {
    HotelName: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Reviews: {
      type: String,
      required: true,
    },
    Price: {
      type: String,
      required: true,
    },
    Location: {
      type: String,
      required: true,
    },
  },
  {
    collection: "package",
  }
);

module.exports = mongoose.model("package", packageSchema);
