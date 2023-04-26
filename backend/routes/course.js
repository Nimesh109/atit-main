const express = require("express");
const router = express.Router();

//Importing functions from createCourse.js.

const {
  getCourse,
  getSpecificCourse,
  createCourse,
  deleteCourse,
  createPdfAndFile,
  enrollStudent,
  getEnrolledCourse,
  getUserInformation,
  unEnrollCourse,
} = require("../controllers/course");

//Creating HTTP request methods with express router.
router
  .route("/api/createCourse")
  .get(getCourse)
  .post(createCourse)
  .delete(deleteCourse);

router.route("/api/getEnrolledCourse").get(getEnrolledCourse);

router.route("/api/getUserInformation").get(getUserInformation);

router.route("/api/getSpecificCourse/:userId").get(getSpecificCourse);

router.route("/api/enrollStudent/:courseId").get(enrollStudent);

router.route("/api/unEnrollCourse/:courseId").get(unEnrollCourse);

router.route("/api/get/:courseId").post(createPdfAndFile);

router.route("/api/createPdfAndFile/:courseId").post(createPdfAndFile);

//Exporting router.

module.exports = router;
