const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide name"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Please provide email"],
  },
  subject: {
    type: String,
    trim: true,
    required: [true, "Please provide subject"],
  },
  message: {
    type: String,
    trim: true,
    required: [true, "Please provide message"],
  },
});

module.exports = mongoose.model("contact", contactSchema);
