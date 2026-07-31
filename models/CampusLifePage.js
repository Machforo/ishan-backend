const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  gallery: [{ title: String, url: String }],
  facilities: [{ name: String, description: String, icon: String, image: String }],
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });
module.exports = mongoose.model('CampusLifePage', schema);
