const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  header: { title: { type: String, default: "Our Colleges" }, subtitle: { type: String, default: "Explore Ishan Institutions" }, image: { type: String, default: "" } },
  collegesList: [{ name: String, overview: String, image: String, programsOffered: [String], link: String }]
}, { timestamps: true });
module.exports = mongoose.model('CollegesPage', schema);
