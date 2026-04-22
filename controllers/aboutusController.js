const Model = require('../models/AboutUs');

exports.get = async (req, res) => {
  try {
    let doc = await Model.findOne();
    if (!doc) {
      doc = await Model.create({});
    }
    res.json(doc);
  } catch(err) { res.status(500).json({ error: err.message }); }
};

exports.update = async (req, res) => {
  try {
    let doc = await Model.findOne();
    if (!doc) doc = new Model();
    Object.assign(doc, req.body);
    await doc.save();
    res.json(doc);
  } catch(err) { res.status(500).json({ error: err.message }); }
};
