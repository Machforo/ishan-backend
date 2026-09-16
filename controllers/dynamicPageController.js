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
    let portalQuery = portal;
    if (portal === 'legal' || portal === 'law') {
      portalQuery = { $in: ['legal', 'law'] };
    } else if (portal === 'landing1' || portal === 'landingPage1' || portal === 'landing-page-1') {
      portalQuery = { $in: ['landing1', 'landingPage1', 'landing-page-1'] };
    } else if (portal === 'landing2' || portal === 'landingPage2' || portal === 'landing-page-2') {
      portalQuery = { $in: ['landing2', 'landingPage2', 'landing-page-2'] };
    }
    const page = await DynamicPage.findOne({ portal: portalQuery, slug });
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
