const express = require("express");
const router = express.Router();

const { getSkills } = require("../Controllers/skillsController");

router.get("/", getSkills);

module.exports = router;