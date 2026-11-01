const express = require("express");
const router = express.Router();

const { getExperience } = require("../Controllers/experienceController");

router.get("/", getExperience);

module.exports = router;