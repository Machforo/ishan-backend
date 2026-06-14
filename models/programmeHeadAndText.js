const mongoose = require("mongoose");
const programmeHeadAndTextSchema = new mongoose.Schema({
    heading: String,
    subheading: String,
    searchPlaceholder: String,
    ctaApply: String,
    ctaViewAll: String
})
const ProgrammeHeadAndText = mongoose.model("ProgrammeHeadAndText", programmeHeadAndTextSchema);
module.exports = ProgrammeHeadAndText;
