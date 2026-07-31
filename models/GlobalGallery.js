const mongoose = require("mongoose");

const globalGallerySchema = new mongoose.Schema({
  portal: { type: String, required: true },
  urlPath: { type: String, required: true },
  title: { type: String },
  images: [{
    url: String,
    caption: String
  }]
}, { timestamps: true });

// Prevent multiple galleries for the same URL in the same portal
globalGallerySchema.index({ portal: 1, urlPath: 1 }, { unique: true });

module.exports = mongoose.model("GlobalGallery", globalGallerySchema);
