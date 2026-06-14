const express = require("express");
const router = express.Router();
const programmeHeadController = require("../controllers/programmeHeadAndText");

router.get("/", programmeHeadController.getProgrammeHeadAndText);
router.put("/", programmeHeadController.updateProgrammeHeadAndText);

module.exports = router;
