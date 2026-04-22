const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  news: [{ title: String, date: String, content: String, image: String, link: String }],
  events: [{ title: String, date: String, location: String, description: String, image: String }]
}, { timestamps: true });
module.exports = mongoose.model('NewsEventPage', schema);
