const DynamicPage = require('../models/DynamicPage');

exports.getPages = async (req, res) => {
  try {
    const pages = await DynamicPage.find().sort({ createdAt: -1 });
    res.json(pages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPageBySlug = async (req, res) => {
  try {
    const { portal, slug } = req.params;
    const page = await DynamicPage.findOne({ portal, slug });
    if (!page) return res.status(404).json({ message: 'Page not found' });
    res.json(page);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createPage = async (req, res) => {
  try {
    const page = new DynamicPage(req.body);
    await page.save();
    res.status(201).json(page);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updatePage = async (req, res) => {
  try {
    const page = await DynamicPage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!page) return res.status(404).json({ message: 'Page not found' });
    res.json(page);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletePage = async (req, res) => {
  try {
    const page = await DynamicPage.findByIdAndDelete(req.params.id);
    if (!page) return res.status(404).json({ message: 'Page not found' });
    res.json({ message: 'Page deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
