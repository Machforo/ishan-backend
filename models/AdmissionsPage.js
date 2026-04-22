const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  overview: { title: { type: String, default: "Admissions Overview" }, content: { type: String, default: "" }, image: { type: String, default: "" } },
  programs: [{ name: String, level: String, college: String, duration: String, affiliation: String, criteria: String }],
  scholarships: [{ category: String, concession: String }],
  international: { title: { type: String, default: "International Admissions" }, content: { type: String, default: "" } },
  steps: [{ step: String, title: String, desc: String }],
  importantDates: [{ label: String, date: String }]
}, { timestamps: true });
module.exports = mongoose.model('AdmissionsPage', schema);
