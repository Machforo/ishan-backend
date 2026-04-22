const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  college: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  whatsapp: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  timings: {
    type: String,
  },
  orderIndex: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
