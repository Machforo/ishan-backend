const mongoose = require("mongoose");

const globalSectionSchema = new mongoose.Schema({
  portal: { type: String, required: true },
  urlPath: { type: String, required: true },
  sections: [{
    templateName: String,
    htmlContent: String
  }]
}, { timestamps: true });

// Prevent multiple section groups for the same URL in the same portal
globalSectionSchema.index({ portal: 1, urlPath: 1 }, { unique: true });

module.exports = mongoose.model("GlobalSection", globalSectionSchema);
