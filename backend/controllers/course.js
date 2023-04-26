const { async } = require("rxjs");
const courseSchema = require("../models/createCourse");

const registerSchema = require("../models/register");

const getCourse = async (req, res) => {
  try {
    const getCourse = await courseSchema.find({});
    res.json(getCourse);
  } catch (error) {
    console.log(error);
  }
};

const createCourse = async (req, res) => {
  try {
    //Destructuring object.
    const { name, video, courseDescription } = req.body;
    const { courseFile, coursePdf } = req.files;

    const changeLocation = courseFile[0].path.split("/");

    const newImageLocation = "/" + changeLocation[1] + `/` + changeLocation[2];

    //Saving created course in the database.
    await courseSchema.create({
      courseName: name,
      courseDescription: courseDescription,
      videoLink: video,
      courseImage: newImageLocation,
      coursePdf: coursePdf[0].path,
    });

    res.redirect("http://localhost:3000/DisplayCourse");
  } catch (error) {
    console.log(error);
  }
};

const createPdfAndFile = async (req, res) => {
  try {
    const { coursePdf } = req.files;

    const { video } = req.body;

    const findCourse = await courseSchema.findOne({ _id: req.params.courseId });

    if (coursePdf) {
      await courseSchema.findByIdAndUpdate(
        { _id: req.params.courseId },
        { $push: { coursePdf: coursePdf[0].path } }
      );
    }

    if (video) {
      await courseSchema.findByIdAndUpdate(
        { _id: req.params.courseId },
        { $push: { videoLink: video } }
      );
    }
    // res.send("hello");
    res.redirect(`http://localhost:3000/specificCourse/${req.params.courseId}`);
  } catch (error) {
    console.log(error);
  }
};

const getSpecificCourse = async (req, res) => {
  try {
    const userData = await courseSchema.find({ _id: req.params.userId });
    res.json(userData);
  } catch (error) {
    console.log(error);
  }
};

const deleteCourse = async (req, res) => {
  try {
    await courseSchema.deleteOne({});
    res.send("deleted");
  } catch (error) {
    console.log(error);
  }
};

const enrollStudent = async (req, res) => {
  try {
    const { userId } = req.signedCookies;

    const { courseId } = req.params;

    const checkIfStudentIsEnrolled = await courseSchema.find({
      _id: courseId,
      enrolled_course: userId,
    });

    //check if student is already enrolled.
    if (checkIfStudentIsEnrolled.length === 0) {
      await courseSchema.findOneAndUpdate(
        { _id: courseId },
        {
          $push: { enrolled_course: userId },
        }
      );
      //If Sucess
      return res.json("Sucess");
    }
    //If Unsucess
    res.json("UnSucessfull");
  } catch (error) {
    console.log(error);
  }
};

const getEnrolledCourse = async (req, res) => {
  try {
    const getCourse = await courseSchema.find({
      enrolled_course: req.signedCookies.userId,
    });
    res.json(getCourse);
  } catch (error) {
    console.log(error);
  }
};

const getUserInformation = async (req, res) => {
  try {
    const getUserDetails = await registerSchema.findOne({
      userId: req.signedCookies.userId,
    });

    res.json(getUserDetails);
  } catch (error) {
    console.log(error);
  }
};

const unEnrollCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    const findCourse = await courseSchema.findOneAndUpdate(
      { _id: courseId },
      { $pull: { enrolled_course: { $in: [req.signedCookies.userId] } } }
    );

    res.json("sucess");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCourse,
  getSpecificCourse,
  createCourse,
  deleteCourse,
  createPdfAndFile,
  enrollStudent,
  getEnrolledCourse,
  getUserInformation,
  unEnrollCourse,
};
