const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "bonjour à tous" });
});

module.exports = router;
