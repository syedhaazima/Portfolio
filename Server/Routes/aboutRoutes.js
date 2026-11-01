const express = require("express");
const router = express.Router();

const { getAbout } = require("../Controllers/aboutController");

router.get("/", getAbout);

module.exports = router;