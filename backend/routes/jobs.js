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
router.route("/createJobs").post(createJobs);

router.route("/allJobs").get(getAllJobs);

router.route("/applyJob/:jobId").get(applyJob);

router.route("/getAppliedJobs").get(getAppliedJobs);

//Exporting router.

module.exports = router;
