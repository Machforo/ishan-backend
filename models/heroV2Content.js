const mongoose = require("mongoose");

const heroV2ContentSchema = new mongoose.Schema({
    badgeText: { type: String, default: "Admissions Live · 2026-27" },
    heading: { type: String, default: "Where India's ambition meets" },
    headingHighlight: { type: String, default: "ambition" },
    headingEnd: { type: String, default: "30 years of legacy." },
    subtext: { type: String, default: "Since 1994, Ishan Educational Institutions has shaped over 50,000 professionals across Law, Management, Pharmacy, Ayurveda & Education. One campus. Five accredited colleges. Limitless careers." },
    highlights: [{ text: String }],
    ctaExploreText: { type: String, default: "Explore Programmes" },
    applicationsCount: { type: String, default: "2,400+" },
    applicationsLabel: { type: String, default: "applications this week" },
    formTagline: { type: String, default: "Start Your Journey" },
    formHeading: { type: String, default: "Apply in 2 minutes" },
    formSubtext: { type: String, default: "Call-back within 2 working hours" },
    formCta: { type: String, default: "Get My Call Back" },
    offerText: { type: String, default: "Early-bird scholarship up to 50%" },
    offerSubtext: { type: String, default: "Limited seats" },
    confidentialityText: { type: String, default: "100% confidential · No spam · Unsubscribe anytime" }
});

const HeroV2Content = mongoose.model("HeroV2Content", heroV2ContentSchema);
module.exports = HeroV2Content;
