const jobSchema = require("../models/jobs");

const getAllJobs = async (req, res) => {
  try {
    const getAllJobs = await jobSchema.find({
      userId: { $nin: [req.signedCookies.userId] },
    });
    res.json({ getAllJobs });
  } catch (error) {
    console.log(error);
  }
};

const getAppliedJobs = async (req, res) => {
  try {
    const getAppliedJobs = await jobSchema.find({
      userId: { $in: req.signedCookies.userId },
    });
    res.json(getAppliedJobs);
  } catch (error) {
    console.log(error);
  }
};

const createJobs = async (req, res) => {
  try {
    await jobSchema.create({ ...req.body });
    res.redirect("http://localhost:3000/DisplayJobs");
  } catch (error) {
    console.log(error);
  }
};

const applyJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    console.log(jobId);
    console.log(req.signedCookies.userId);
    const findIfUserApplyed = await jobSchema.findOne({
      _id: jobId,
      userId: { $in: req.signedCookies.userId },
    });
    console.log(findIfUserApplyed);
    if (!findIfUserApplyed) {
      await jobSchema.findByIdAndUpdate(
        { _id: jobId },
        { $push: { userId: req.signedCookies.userId } }
      );
      return res.json("Successful");
    }
    res.json("Unsuccessful");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createJobs, getAllJobs, applyJob, getAppliedJobs };
