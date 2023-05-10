const express = require("express");
const router = express.Router();

//Importing functions from createCourse.js.

const {
  getCourse,
  getSpecificCourse,
  createCourse,
  createPdfAndFile,
  enrollStudent,
  getEnrolledCourse,
  getUserInformation,
  unEnrollCourse,
  deleteCourse,
  getCreatedCourse,
} = require("../controllers/course");

//Creating HTTP request methods with express router.
router
  .route("/createCourse")
  .get(getCourse)
  .post(createCourse)
  .delete(deleteCourse);

router.route("/getEnrolledCourse").get(getEnrolledCourse);

router.route("/getCreatedCourse").get(getCreatedCourse);

router.route("/getUserInformation").get(getUserInformation);

router.route("/getSpecificCourse/:userId").get(getSpecificCourse);

router.route("/enrollStudent/:courseId").get(enrollStudent);

router.route("/unEnrollCourse/:courseId").get(unEnrollCourse);

router.route("/get/:courseId").post(createPdfAndFile);

router.route("/deleteCourse/:courseId").get(deleteCourse);

router.route("/createPdfAndFile/:courseId").post(createPdfAndFile);

//Exporting router.

module.exports = router;
