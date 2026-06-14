const ProgrammeHeadAndText = require("../models/programmeHeadAndText");

exports.getProgrammeHeadAndText = async (req, res) => {
    try {
        const data = await ProgrammeHeadAndText.findOne();
        if (!data) {
            return res.status(200).json({ heading: "", subheading: "", searchPlaceholder: "", ctaApply: "", ctaViewAll: "" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateProgrammeHeadAndText = async (req, res) => {
    try {
        let data = await ProgrammeHeadAndText.findOne();
        if (data) {
            data.heading = req.body.heading;
            data.subheading = req.body.subheading;
            data.searchPlaceholder = req.body.searchPlaceholder;
            data.ctaApply = req.body.ctaApply;
            data.ctaViewAll = req.body.ctaViewAll;
            await data.save();
        } else {
            data = new ProgrammeHeadAndText({
                heading: req.body.heading,
                subheading: req.body.subheading,
                searchPlaceholder: req.body.searchPlaceholder,
                ctaApply: req.body.ctaApply,
                ctaViewAll: req.body.ctaViewAll
            });
            await data.save();
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
