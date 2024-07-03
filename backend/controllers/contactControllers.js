const contact = require("../models/contactSchema");

const createcontact = async (req, res) => {
  const newcontact = new contact(req.body);
  try {
    await newcontact.save();
    res.send({
      status: 200,
      message: "Message sent successfully ",
    });
  } catch (error) {
    res.send({
      status: 500,
      message: "server error",
      error: error,
    });
  }
};

const getcontact = async (req, res) => {
  const contact = await contact.find();
  try {
    res.send({
      status: 200,
      contact: contact,
    });
  } catch (error) {
    res.send({
      status: 500,
      message: "server error",
      error: error,
    });
  }
};

module.exports = { createcontact, getcontact };
