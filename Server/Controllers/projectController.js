const projects = require("../Data/projectData");

const getProjects = (req, res) => {
  res.status(200).json({
    success: true,
    count: projects.length,
    projects,
  });
};

module.exports = {
  getProjects,
};