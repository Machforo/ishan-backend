const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  files: [{ title: String, category: String, url: String }],
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });
module.exports = mongoose.model('DownloadsPage', schema);
