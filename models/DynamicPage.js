const mongoose = require('mongoose');

const dynamicPageSchema = new mongoose.Schema({
  portal: {
    type: String,
    required: true,
    enum: ['iimt', 'ayurveda', 'law', 'pharmacy', 'hospital', 'landing1', 'landing2']
  },
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  template: {
    type: String,
    required: true,
    default: 'standard'
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  published: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

// Ensure slugs are unique per portal
dynamicPageSchema.index({ portal: 1, slug: 1 }, { unique: true });

module.exports = mongoose.model('DynamicPage', dynamicPageSchema, 'dynamic_pages');
