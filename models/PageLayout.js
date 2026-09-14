const mongoose = require('mongoose');

/**
 * PageLayout Schema
 * Stores the ordered sections and custom sections for any page of a portal.
 *
 * siteKey: e.g. "hospital", "ayurveda", "iimt", etc.
 * pageId: e.g. "homepage", "about_us", "doctors", "departments", "services", "faqs", "appointment", "contact"
 */
const sectionItemSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ['builtin', 'custom_html', 'hero', 'split', 'cards', 'cta', 'faq'],
    default: 'builtin'
  },
  order: { type: Number, default: 0 },
  isHidden: { type: Boolean, default: false },
  heading: { type: String, default: '' },
  subheading: { type: String, default: '' },
  description: { type: String, default: '' },
  htmlContent: { type: String, default: '' }, // Dangerous HTML / Rich Text
  image: { type: String, default: '' },
  ctaText: { type: String, default: '' },
  ctaLink: { type: String, default: '' },
  items: [mongoose.Schema.Types.Mixed],       // For cards, faqs, lists
  settings: { type: mongoose.Schema.Types.Mixed, default: {} } // Styling options
}, { _id: false });

const pageLayoutSchema = new mongoose.Schema({
  siteKey: { type: String, required: true, index: true },
  pageId: { type: String, required: true, index: true },
  sections: [sectionItemSchema]
}, { timestamps: true });

pageLayoutSchema.index({ siteKey: 1, pageId: 1 }, { unique: true });

module.exports = mongoose.model('PageLayout', pageLayoutSchema, 'page_layouts');
