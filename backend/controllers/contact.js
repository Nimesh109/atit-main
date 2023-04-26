const contactSchema = require("../models/contact");

const createContact = async (req, res) => {
  try {
    await contactSchema.create({ ...req.body });
    res.json("Sucess");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createContact };
