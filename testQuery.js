const mongoose = require('mongoose');
require('dotenv').config();
const { LandingPage1 } = require('./models/LandingPageModels');

async function test() {
  try {
    console.log("Connecting to", process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected. Querying LandingPage1...");
    const data = await LandingPage1.findOne();
    console.log("Result:", data ? "Found" : "Not Found");
    process.exit(0);
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

test();
