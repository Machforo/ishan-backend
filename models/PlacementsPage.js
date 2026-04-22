const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  overview: {
    title: { type: String, default: "Placements Overview" },
    content: { type: String, default: "" },
    statistics: [{ label: String, value: String }]
  },
  recruiters: [{ name: String, logo: String }],
  alumni: [{ name: String, batch: String, company: String, role: String, quote: String, image: String }],
  processSteps: [{ step: String, title: String, desc: String }]
}, { timestamps: true });
module.exports = mongoose.model('PlacementsPage', schema);
