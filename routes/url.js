const express = require("express");
const {
  handleGenerateNewShortURL,
  getAnalytics,
} = require("../controllers/url");

const router = express.Router();

// Routes
router.post("/", handleGenerateNewShortURL);

router.get("/analytics/:shortId", getAnalytics);

module.exports = router;
