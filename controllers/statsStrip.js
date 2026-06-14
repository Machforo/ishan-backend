const StatsStrip = require("../models/statsStrip");

exports.getStatsStrip = async (req, res) => {
    try {
        const data = await StatsStrip.find();
        res.status(200).json({ items: data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateStatsStrip = async (req, res) => {
    try {
        await StatsStrip.deleteMany({});
        const items = req.body.items || req.body;
        const docs = Array.isArray(items) ? items : [];
        const saved = await StatsStrip.insertMany(docs);
        res.status(200).json({ items: saved });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
