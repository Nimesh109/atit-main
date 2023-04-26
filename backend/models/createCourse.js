const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  courseName: {
    type: String,
    trim: true,
    required: [true, "Please provide name"],
  },
  courseDescription: {
    type: String,
    trim: true,
    required: [true, "Please provide name"],
  },
  courseImage: {
    type: String,
    trim: true,
  },
  videoLink: [
    {
      type: String,
      trim: true,
    },
  ],
  coursePdf: [
    {
      type: String,
      trim: true,
    },
  ],
  enrolled_course: [
    {
      type: String,
      trim: true,
    },
  ],
});

module.exports = mongoose.model("course", courseSchema);
