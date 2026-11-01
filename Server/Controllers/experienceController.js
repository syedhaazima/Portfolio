const experiences = require("../Data/ExperienceData");

const getExperience = (req, res) => {
  res.status(200).json({
    success: true,
    count: experiences.length,
    experiences,
  });
};

module.exports = { getExperience };