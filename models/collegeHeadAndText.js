const mongoose = require("mongoose");
const collegeHeadAndTextSchema = new mongoose.Schema({
    heading: String,
    text: String
})
const CollegeHeadAndText = mongoose.model("CollegeHeadAndText", collegeHeadAndTextSchema);
module.exports = CollegeHeadAndText;