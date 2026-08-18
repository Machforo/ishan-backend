const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const PageSetting = require('../models/PageSetting');

/**
 * GET /api/page-settings
 * GET /api/page-settings?siteKey=legal
 *
 * Read is public so the public sites can honour hidden sections without a token.
 */
router.get('/', async (req, res) => {
  try {
    const filter = req.query.siteKey ? { siteKey: req.query.siteKey } : {};
    const settings = await PageSetting.find(filter).lean();
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/** Convenience shape for the frontends: { "pageId:sectionId": true, … } */
router.get('/:siteKey/hidden', async (req, res) => {
  try {
    const settings = await PageSetting.find({ siteKey: req.params.siteKey, isHidden: true }).lean();
    const map = {};
    settings.forEach((s) => { map[`${s.pageId}:${s.sectionId}`] = true; });
    res.json(map);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/** POST /api/page-settings/toggle-hide  { siteKey, pageId, sectionId, isHidden } */
router.post('/toggle-hide', authMiddleware, async (req, res) => {
  try {
    const { siteKey, pageId, sectionId, isHidden } = req.body || {};
    if (!siteKey || !pageId || !sectionId) {
      return res.status(400).json({ message: 'siteKey, pageId and sectionId are required' });
    }

    const setting = await PageSetting.findOneAndUpdate(
      { siteKey, pageId, sectionId },
      { $set: { isHidden: Boolean(isHidden) } },
      { returnDocument: 'after', upsert: true, setDefaultsOnInsert: true }
    );

    res.json(setting);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
