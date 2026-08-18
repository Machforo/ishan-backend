const mongoose = require('mongoose');

/**
 * Per-section display settings for the statically-configured admin sections
 * (the ones declared in ishan-admin/src/config/siteConfigs.ts).
 *
 * `siteKey`  — matches the key in siteConfigs (iimt, hospital, legal, pharmacy, ayurveda, …)
 * `pageId`   — Page.id in siteConfigs
 * `sectionId`— Section.id in siteConfigs
 */
const pageSettingSchema = new mongoose.Schema({
  siteKey: { type: String, required: true, index: true },
  pageId: { type: String, required: true },
  sectionId: { type: String, required: true },
  isHidden: { type: Boolean, default: false },
}, { timestamps: true });

pageSettingSchema.index({ siteKey: 1, pageId: 1, sectionId: 1 }, { unique: true });

module.exports = mongoose.model('PageSetting', pageSettingSchema, 'page_settings');
