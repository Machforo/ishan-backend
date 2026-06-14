const express = require("express");
const router = express.Router();
const marqueeController = require("../controllers/marquee");

router.get("/", marqueeController.getMarquee);
router.put("/", marqueeController.updateMarquee); // Using PUT since we either update or create a single record

module.exports = router;
