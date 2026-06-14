const express = require("express");
const router = express.Router();
const placementHeadController = require("../controllers/placementHeadAndText");

router.get("/", placementHeadController.getPlacementHeadAndText);
router.put("/", placementHeadController.updatePlacementHeadAndText);

module.exports = router;
