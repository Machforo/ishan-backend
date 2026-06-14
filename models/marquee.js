const mongoose = require("mongoose");

const marqueeSchema = new mongoose.Schema({
    text: String,
});

const Marquee = mongoose.model("Marquee", marqueeSchema);

module.exports = Marquee;