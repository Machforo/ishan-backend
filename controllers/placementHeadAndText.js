const PlacementHeadAndText = require("../models/placementHeadAndText");

exports.getPlacementHeadAndText = async (req, res) => {
    try {
        const data = await PlacementHeadAndText.findOne();
        if (!data) {
            return res.status(200).json({ 
                image: "", badgeNum: "", badgeText: "", heading: "", 
                highlight: "", description: "", ctaText: "", 
                ctaLink: "", recruitersHeading: "" 
            });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePlacementHeadAndText = async (req, res) => {
    try {
        let data = await PlacementHeadAndText.findOne();
        if (data) {
            data.image = req.body.image;
            data.badgeNum = req.body.badgeNum;
            data.badgeText = req.body.badgeText;
            data.heading = req.body.heading;
            data.highlight = req.body.highlight;
            data.description = req.body.description;
            data.ctaText = req.body.ctaText;
            data.ctaLink = req.body.ctaLink;
            data.recruitersHeading = req.body.recruitersHeading;
            await data.save();
        } else {
            data = new PlacementHeadAndText({
                image: req.body.image,
                badgeNum: req.body.badgeNum,
                badgeText: req.body.badgeText,
                heading: req.body.heading,
                highlight: req.body.highlight,
                description: req.body.description,
                ctaText: req.body.ctaText,
                ctaLink: req.body.ctaLink,
                recruitersHeading: req.body.recruitersHeading
            });
            await data.save();
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
