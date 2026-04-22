const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  mainContact: { address: String, phone: String, email: String, mapEmbed: String },
  collegeContacts: [{ collegeName: String, phone: String, email: String, address: String }]
}, { timestamps: true });
module.exports = mongoose.model('ContactPage', schema);
