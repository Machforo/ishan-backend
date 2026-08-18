const mongoose = require('mongoose');
require('dotenv').config();
const { PharmacyAdmission } = require('./models/pharmacyModels');

async function test() {
  await mongoose.connect(process.env.MONGODB_URI);
  try {
    let doc = await PharmacyAdmission.findOne();
    if (!doc) {
      doc = new PharmacyAdmission({
        howToApply: [{ num: "1", title: "Test", desc: "Test" }]
      });
      await doc.save();
    } else {
      await PharmacyAdmission.findByIdAndUpdate(doc._id, { alertBanner: { isActive: true } }, { returnDocument: 'after', overwrite: true });
    }
    console.log("Saved successfully");
  } catch (e) {
    console.error("Validation error:", e.message);
  }
  process.exit(0);
}
test();
