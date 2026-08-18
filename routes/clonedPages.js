const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const ClonedPage = require('../models/ClonedPage');

function normaliseSlug(raw = '') {
  let slug = String(raw).trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-/]/g, '');
  slug = slug.replace(/^\/+/, '').replace(/\/+$/, '');
  return slug;
}

/** GET /api/cloned-pages[?siteKey=legal] — used by the admin to build its tree. */
router.get('/', async (req, res) => {
  try {
    const filter = req.query.siteKey ? { siteKey: req.query.siteKey } : {};
    res.json(await ClonedPage.find(filter).sort({ createdAt: -1 }).lean());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/** Public lookup for the websites: /api/cloned-pages/by-slug?siteKey=legal&slug=new-hostel */
router.get('/by-slug', async (req, res) => {
  try {
    const { siteKey, slug } = req.query;
    if (!siteKey || !slug) return res.status(400).json({ message: 'siteKey and slug are required' });
    const page = await ClonedPage.findOne({ siteKey, newUrlSlug: normaliseSlug(slug), isHidden: false }).lean();
    if (!page) return res.status(404).json({ message: 'Not found' });
    res.json(page);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/** The editable payload, shaped like the original singleton endpoint. */
router.get('/:id/content', async (req, res) => {
  try {
    const page = await ClonedPage.findById(req.params.id).lean();
    if (!page) return res.status(404).json({ message: 'Cloned page not found' });
    res.json(page.content || {});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id/content', authMiddleware, async (req, res) => {
  try {
    const content = { ...(req.body || {}) };
    delete content._id;
    delete content.__v;
    const page = await ClonedPage.findByIdAndUpdate(req.params.id, { $set: { content } }, { new: true });
    if (!page) return res.status(404).json({ message: 'Cloned page not found' });
    res.json(page.content || {});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const page = await ClonedPage.findById(req.params.id).lean();
    if (!page) return res.status(404).json({ message: 'Cloned page not found' });
    res.json(page);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { siteKey, originalPageId, originalSectionId, originalEndpoint, newName, newUrlSlug, content } = req.body || {};
    if (!siteKey || !originalPageId || !originalSectionId || !newName || !newUrlSlug) {
      return res.status(400).json({ message: 'siteKey, originalPageId, originalSectionId, newName and newUrlSlug are required' });
    }

    const slug = normaliseSlug(newUrlSlug);
    if (!slug) return res.status(400).json({ message: 'newUrlSlug must contain at least one letter or number' });

    if (await ClonedPage.exists({ siteKey, newUrlSlug: slug })) {
      return res.status(409).json({ message: `The slug "${slug}" is already in use on this site.` });
    }

    const cleanContent = { ...(content || {}) };
    delete cleanContent._id;
    delete cleanContent.__v;

    const page = await ClonedPage.create({
      siteKey, originalPageId, originalSectionId, originalEndpoint,
      newName, newUrlSlug: slug, content: cleanContent,
    });
    res.status(201).json(page);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/** Metadata only — name, slug, visibility. Content goes through /:id/content. */
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const update = {};
    if (req.body.newName !== undefined) update.newName = req.body.newName;
    if (req.body.isHidden !== undefined) update.isHidden = Boolean(req.body.isHidden);
    if (req.body.newUrlSlug !== undefined) {
      const slug = normaliseSlug(req.body.newUrlSlug);
      if (!slug) return res.status(400).json({ message: 'newUrlSlug must contain at least one letter or number' });
      const current = await ClonedPage.findById(req.params.id).lean();
      if (!current) return res.status(404).json({ message: 'Cloned page not found' });
      if (await ClonedPage.exists({ siteKey: current.siteKey, newUrlSlug: slug, _id: { $ne: req.params.id } })) {
        return res.status(409).json({ message: `The slug "${slug}" is already in use on this site.` });
      }
      update.newUrlSlug = slug;
    }

    const page = await ClonedPage.findByIdAndUpdate(req.params.id, { $set: update }, { new: true });
    if (!page) return res.status(404).json({ message: 'Cloned page not found' });
    res.json(page);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const page = await ClonedPage.findByIdAndDelete(req.params.id);
    if (!page) return res.status(404).json({ message: 'Cloned page not found' });
    res.json({ message: 'Cloned page deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
