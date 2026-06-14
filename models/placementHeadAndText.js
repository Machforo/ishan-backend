const mongoose = require("mongoose");
const placementHeadAndTextSchema = new mongoose.Schema({
    image: String,
    badgeNum: String,
    badgeText: String,
    heading: String,
    highlight: String,
    description: String,
    ctaText: String,
    ctaLink: String,
    recruitersHeading: String
})
const PlacementHeadAndText = mongoose.model("PlacementHeadAndText", placementHeadAndTextSchema);
module.exports = PlacementHeadAndText;
