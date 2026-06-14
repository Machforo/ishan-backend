const mongoose = require("mongoose");
// const ITEMS = [
//   { icon: Award, num: 30, suffix: "+", label: "Years of Legacy", sub: "Since 1994" },
//   { icon: Users, num: 50, suffix: "K+", label: "Alumni Worldwide", sub: "Across 40+ countries" },
//   { icon: Briefcase, num: 500, suffix: "+", label: "Recruiters", sub: "98% placement rate" },
//   { icon: BookOpen, num: 5, suffix: "", label: "Colleges", sub: "One multi-disciplinary group" },
//   { icon: GraduationCap, num: 120, suffix: "+", label: "Programmes", sub: "UG · PG · Diploma · PhD" },
// ];


const statsStripSchema = new mongoose.Schema({
    icon: String,
    num: Number,
    suffix: String,
    label: String,
    sub: String,
}, { timestamps: true });

module.exports = mongoose.model("statsStrip", statsStripSchema);