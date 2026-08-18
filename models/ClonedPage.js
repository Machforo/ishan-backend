const mongoose = require('mongoose');

/**
 * A duplicate of an existing admin section, editable independently of the
 * original and published at its own URL slug.
 *
 * `content` holds the same shape the original endpoint returns, so the admin's
 * GenericEditor can render it with the original section's field definitions.
 */
const clonedPageSchema = new mongoose.Schema({
  siteKey: { type: String, required: true, index: true },
  originalPageId: { type: String, required: true },
  originalSectionId: { type: String, required: true },
  originalEndpoint: { type: String },
  newName: { type: String, required: true },
  newUrlSlug: { type: String, required: true },
  content: { type: mongoose.Schema.Types.Mixed, default: {} },
  isHidden: { type: Boolean, default: false },
}, { timestamps: true });

clonedPageSchema.index({ siteKey: 1, newUrlSlug: 1 }, { unique: true });

module.exports = mongoose.model('ClonedPage', clonedPageSchema, 'cloned_pages');
