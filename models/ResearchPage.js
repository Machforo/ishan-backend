const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  journals: [{ title: String, volume: String, issue: String, link: String }],
  areas: [{ name: String, description: String }],
  numbers: [{ label: String, value: String }]
}, { timestamps: true });
module.exports = mongoose.model('ResearchPage', schema);
