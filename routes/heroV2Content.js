const express = require("express");
const router = express.Router();
const heroV2Controller = require("../controllers/heroV2Content");

router.get("/", heroV2Controller.getHeroV2Content);
router.put("/", heroV2Controller.updateHeroV2Content);

module.exports = router;
