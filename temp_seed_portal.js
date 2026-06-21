const mongoose = require('mongoose');
require('dotenv').config();
const { IimtFeePayment, IimtStudentPortal } = require('./models/iimtModels');

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    await IimtFeePayment.deleteMany({});
    await IimtStudentPortal.deleteMany({});

    await IimtFeePayment.create({
      title: "Fee Payment",
      description: "Pay tuition fees, hostel charges, and examination fees online through the Ishan Fee Payment Portal. Select IIMT as your institution, choose your program, and complete payment via net banking, UPI, or card. Download your receipt immediately after payment.",
      cta: "Go to Fee Payment Portal →",
      link: "https://fee.ishan.ac"
    });

    await IimtStudentPortal.create({
      title: "Student Portal",
      description: "Current IIMT students can access their Office 365 accounts for email, timetables, and academic resources. Examination results are available through the CCS University result portal.",
      cta: "",
      link: ""
    });

    console.log("✅ Seeded: Fee Payment & Student Portal");
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
    mongoose.disconnect();
  }
}

seed();
