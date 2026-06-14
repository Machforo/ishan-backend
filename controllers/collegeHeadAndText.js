const CollegeHeadAndText = require("../models/collegeHeadAndText");

exports.getCollegeHeadAndText = async (req, res) => {
    try {
        const data = await CollegeHeadAndText.findOne();
        if (!data) {
            return res.status(200).json({ heading: "", text: "" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCollegeHeadAndText = async (req, res) => {
    try {
        let data = await CollegeHeadAndText.findOne();
        if (data) {
            data.heading = req.body.heading;
            data.text = req.body.text;
            await data.save();
        } else {
            data = new CollegeHeadAndText({
                heading: req.body.heading,
                text: req.body.text
            });
            await data.save();
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
