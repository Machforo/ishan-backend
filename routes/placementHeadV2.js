const express = require("express");
const router = express.Router();
const placementHeadV2Controller = require("../controllers/placementHeadV2");

router.get("/", placementHeadV2Controller.getPlacementHeadV2);
router.put("/", placementHeadV2Controller.updatePlacementHeadV2);

module.exports = router;
