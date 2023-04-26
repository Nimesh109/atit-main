//Importing express from package.json.
const express = require("express");
//Initializing the express functions to app variable.
const app = express();

const multer = require("multer");

const path = require("path");

// const multer = multer({ dest: "" });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/courses");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const multipleUpload = upload.fields([
  { name: "courseFile", maxCount: 1 },
  { name: "coursePdf", maxCount: 1 },
]);

//Importing auth.js file from routes folder.
const auth = require("./routes/auth");

//Importing course.js file from routes folder.
const course = require("./routes/course");

//Importing contact.js file from routes folder.
const contact = require("./routes/contact");

const cokkieParser = require("cookie-parser");

app.use(cokkieParser("signed-cookie"));

//Acceping the incomming request object as a json object.
app.use(express.json());

//Acceping the incomming request object as  String or arrays.
app.use(express.urlencoded({ extended: true }));

app.use(express.static("./public"));

//Initializing all the routes from auth as a middleware in the server.
app.use("/", auth);

//Initializing all the routes from course as a middleware in the server.
app.use("/", multipleUpload, course);

//Initializing all the routes from contact as a middleware in the server.
app.use("/", contact);

//Importing connectDB function from db folder.
const connectDB = require("./db/connect");

//Importing dotenv and configuring the dotenv in the project.
require("dotenv").config();

//Initializing the port value.
const port = 8000 || process.env.PORT;

//Connecting to database and starting the server.
const start = async () => {
  try {
    //Connecting to the server.
    await connectDB(process.env.MONGO_URL);
    //Starting the server on port 8000.
    app.listen(port, () => {
      console.log(`Listening to ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

//Calling the start function and starting the server.
start();
