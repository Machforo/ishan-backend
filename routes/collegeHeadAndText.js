const express = require("express");
const router = express.Router();
const collegeHeadController = require("../controllers/collegeHeadAndText");

router.get("/", collegeHeadController.getCollegeHeadAndText);
router.put("/", collegeHeadController.updateCollegeHeadAndText);

module.exports = router;
