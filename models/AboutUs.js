const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  aboutIshan: { title: { type: String, default: "About Ishan" }, description: { type: String, default: "" }, image: { type: String, default: "" } },
  chairmanMessage: { title: { type: String, default: "Chairman's Message" }, message: { type: String, default: "" }, name: { type: String, default: "" }, image: { type: String, default: "" } },
  missionVision: { mission: { type: String, default: "" }, vision: { type: String, default: "" } },
  awards: [{ title: String, description: String, image: String, year: String }],
  approvals: [{ name: String, fullTitle: String, description: String, image: String, link: String }],
  milestones: [{ year: String, event: String }]
}, { timestamps: true });
module.exports = mongoose.model('AboutUs', schema);
