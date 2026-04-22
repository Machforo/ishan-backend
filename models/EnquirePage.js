const mongoose = require('mongoose');

const enquirePageSchema = new mongoose.Schema({
  header: {
    title: String,
    subtitle: String,
  },
  programs: [{ name: String }],
  colleges: [{ name: String }]
}, { timestamps: true });

module.exports = mongoose.model('EnquirePage', enquirePageSchema);
