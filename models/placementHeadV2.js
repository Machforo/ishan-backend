const mongoose = require("mongoose");
const placementHeadV2Schema = new mongoose.Schema({
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
const PlacementHeadV2 = mongoose.model("PlacementHeadV2", placementHeadV2Schema);
module.exports = PlacementHeadV2;
