const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  course: {
    type: String
  },
  message: {
    type: String
  },
  source: {
    type: String,
    default: 'Website Enquiry Form'
  },
  status: {
    type: String,
    enum: ['New', 'Contacted', 'Closed'],
    default: 'New'
  }
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);
