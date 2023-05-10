const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  role: {
    type: String,
    trim: true,
    // required: [true, "Please provide Role of the user"],
  },
  userId: [
    {
      type: String,
    },
  ],
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide name"],
  },
  jobDescription: {
    type: String,
    trim: true,
    required: [true, "Please provide job description"],
  },
  participants: {
    type: String,
    trim: true,
    required: [true, "Please provide total number of participants"],
  },
  pdfPath: {
    type: String,
    trim: true,
    required: [true, "Please provide pdf for job description"],
  },
});

module.exports = mongoose.model("job", jobSchema);
