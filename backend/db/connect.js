//Importing mongoose from package.json.
const mongoose = require("mongoose");

//Connecting to the cloud mongoDB.
const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose.connect(
    "mongodb+srv://nimeshA:aashish9841@nodeexpress.hklv3fs.mongodb.net/db?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  );
};

//Exporting the connectDB function.
module.exports = connectDB;
