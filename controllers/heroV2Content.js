const HeroV2Content = require("../models/heroV2Content");

exports.getHeroV2Content = async (req, res) => {
    try {
        const data = await HeroV2Content.findOne();
        if (!data) {
            return res.status(200).json({
                badgeText: "Admissions Live · 2026-27",
                heading: "Where India's ambition meets",
                headingEnd: "30 years of legacy.",
                subtext: "Since 1994, Ishan Educational Institutions has shaped over 50,000 professionals across Law, Management, Pharmacy, Ayurveda & Education. One campus. Five accredited colleges. Limitless careers.",
                highlights: [
                    { text: "30+ years of academic legacy" },
                    { text: "5 colleges • one multi-disciplinary group" },
                    { text: "500+ recruiters • 98% placement rate" },
                    { text: "BCI • AICTE • PCI • NCISM • NCTE approved" }
                ],
                ctaExploreText: "Explore Programmes",
                applicationsCount: "2,400+",
                applicationsLabel: "applications this week",
                formTagline: "Start Your Journey",
                formHeading: "Apply in 2 minutes",
                formSubtext: "Call-back within 2 working hours",
                formCta: "Get My Call Back",
                offerText: "Early-bird scholarship up to 50%",
                offerSubtext: "Limited seats",
                confidentialityText: "100% confidential · No spam · Unsubscribe anytime"
            });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateHeroV2Content = async (req, res) => {
    try {
        let data = await HeroV2Content.findOne();
        if (data) {
            Object.assign(data, req.body);
            await data.save();
        } else {
            data = new HeroV2Content(req.body);
            await data.save();
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
