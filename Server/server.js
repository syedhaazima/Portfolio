
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const errorMiddleware = require("./Middleware/errorMiddleware");
const notFoundMiddleware = require("./Middleware/notFoundMiddleware");

const projectRoutes = require("./Routes/projectRoutes");
const aboutRoutes = require("./Routes/aboutRoutes");
const skillsRoutes = require("./Routes/skillsRoutes");
const experienceRoutes = require("./Routes/experienceRoutes");

const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio Backend is running successfully!",
    status: "Server Online",
  });
});

// API Routes
app.use("/api/projects", projectRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/experience", experienceRoutes);

// Default Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Syed Haazima Portfolio API",
  });
});

// Error Handling — Always at the bottom
app.use(notFoundMiddleware);
app.use(errorMiddleware);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
