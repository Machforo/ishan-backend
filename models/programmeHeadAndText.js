const mongoose = require("mongoose");
const programmeHeadAndTextSchema = new mongoose.Schema({
    heading: String,
    subheading: String,
    searchPlaceholder: String,
    ctaApply: String,
    ctaViewAll: String,
    ctaApplyLink: { type: String, default: "#contact" },
    ctaViewAllLink: { type: String, default: "#colleges" }
})
const ProgrammeHeadAndText = mongoose.model("ProgrammeHeadAndText", programmeHeadAndTextSchema);
module.exports = ProgrammeHeadAndText;
