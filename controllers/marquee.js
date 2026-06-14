const Marquee = require("../models/marquee");

exports.getMarquee = async (req, res) => {
    try {
        const marquee = await Marquee.findOne();
        if (!marquee) {
            return res.status(200).json({ text: "" });
        }
        res.status(200).json(marquee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateMarquee = async (req, res) => {
    try {
        let marquee = await Marquee.findOne();
        if (marquee) {
            marquee.text = req.body.text;
            await marquee.save();
        } else {
            marquee = new Marquee({ text: req.body.text });
            await marquee.save();
        }
        res.status(200).json(marquee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
