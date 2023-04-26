const express = require("express");
const router = express.Router();

//Importing functions from createCourse.js.
const { createContact } = require("../controllers/contact");

//Creating HTTP request methods with express router.
router.route("/api/createContact").post(createContact);

module.exports = router;
