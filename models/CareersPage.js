const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  jobs: [{ title: String, department: String, type: { type: String }, location: String, requirements: String, description: String }]
}, { timestamps: true });
module.exports = mongoose.model('CareersPage', schema);
