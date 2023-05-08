const express = require("express");
const router = express.Router();

//Importing functions from createCourse.js.

const {
  createJobs,
  getAllJobs,
  applyJob,
  getAppliedJobs,
} = require("../controllers/jobs");

//Creating HTTP request methods with express router.
router.route("/api/createJobs").post(createJobs);

router.route("/api/allJobs").get(getAllJobs);

router.route("/api/applyJob/:jobId").get(applyJob);

router.route("/api/getAppliedJobs").get(getAppliedJobs);

//Exporting router.

module.exports = router;
