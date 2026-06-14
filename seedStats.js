const mongoose = require('mongoose');
require('dotenv').config();
const StatsStrip = require('./models/statsStrip');

const items = [
  { icon: "Award", num: 30, suffix: "+", label: "Years of Legacy", sub: "Since 1994" },
  { icon: "Users", num: 50, suffix: "K+", label: "Alumni Worldwide", sub: "Across 40+ countries" },
  { icon: "Briefcase", num: 500, suffix: "+", label: "Recruiters", sub: "98% placement rate" },
  { icon: "BookOpen", num: 5, suffix: "", label: "Colleges", sub: "One multi-disciplinary group" },
  { icon: "GraduationCap", num: 120, suffix: "+", label: "Programmes", sub: "UG · PG · Diploma · PhD" },
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms');
  await StatsStrip.deleteMany({});
  await StatsStrip.insertMany(items);
  console.log("Seeded 5 stats strip items!");
  process.exit(0);
}

seed().catch(e => { console.error(e); process.exit(1); });
