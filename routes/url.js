const express = require("express");
const {
  handleGenerateNewShortURL,
  redirectToWebsite,
  getAnalytics,
} = require("../controllers/url");

const router = express.Router();

// Routes
router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", redirectToWebsite);
router.get("/analytics/:shortId", getAnalytics);

module.exports = router;
