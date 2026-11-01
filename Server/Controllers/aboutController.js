const about = require("../Data/aboutData");

const getAbout = (req, res) => {
  res.status(200).json({
    success: true,
    about,
  });
};

module.exports = { getAbout };