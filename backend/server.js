const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import projects data (we'll create this next)
const projects = require("./data/projects.json");

// Routes
app.get("/api/projects", (req, res) => {
  try {
    // Simulate API delay to show loading states
    setTimeout(() => {
      res.json({
        success: true,
        data: projects,
        count: projects.length,
      });
    }, 1000);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch projects",
    });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "API is running!" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Projects API running on http://localhost:${PORT}`);
});
