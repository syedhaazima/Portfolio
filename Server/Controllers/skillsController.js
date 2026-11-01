const skills = require("../Data/skillsData");

const getSkills = (req, res) => {
  res.status(200).json({
    success: true,
    skills,
  });
};

module.exports = { getSkills };