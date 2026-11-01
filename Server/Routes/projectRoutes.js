const express = require("express");
const router = express.Router();

const { getProjects } = require("../Controllers/projectController");

router.get("/", getProjects);

module.exports = router;