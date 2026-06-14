const express = require("express");
const router = express.Router();
const statsStripController = require("../controllers/statsStrip");

router.get("/", statsStripController.getStatsStrip);
router.put("/", statsStripController.updateStatsStrip);

module.exports = router;
