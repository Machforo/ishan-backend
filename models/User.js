const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['super_admin', 'admin', 'team'],
    default: 'team'
  },
  permissions: {
    sites: [String], // e.g., ["iimt", "legal"]
    sections: [String], // e.g., ["iimt:banner", "legal:faculty_list"]
    canCreate: { type: Boolean, default: false },
    canUpdate: { type: Boolean, default: false },
    canDelete: { type: Boolean, default: false }
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
