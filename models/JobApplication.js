const mongoose = require('mongoose');

const jobAppSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  jobTitle: { type: String, required: true },
  department: { type: String },
  resumeLink: { type: String }, // Can be a drive link or pure text
  coverLetter: { type: String },
  status: { type: String, enum: ['New', 'Reviewed', 'Rejected', 'Hired'], default: 'New' }
}, { timestamps: true });

module.exports = mongoose.model('JobApplication', jobAppSchema);
