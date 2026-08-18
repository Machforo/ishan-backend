const mongoose = require('mongoose');

/**
 * Shared shape for the campus-life pages (auditorium, sports, library, IT lab,
 * cultural activities). Each block owns everything the page renders, so nothing
 * on those pages needs to stay hardcoded.
 *
 * `images` is an open-ended array: the admin can add, remove and reorder as many
 * photos as a section warrants, and the frontend grid adapts to the count.
 */
const campusSectionSchema = new mongoose.Schema({
  title: String,              // page banner heading
  subtitle: String,           // page banner sub-heading
  heading: String,            // in-page section heading
  content: String,            // rich text body
  badge: String,              // floating badge over the feature image
  bannerImage: String,        // feature image
  images: [{ url: String, caption: String }],
  specs: [{ label: String, value: String }],
  notes: {
    title: String,
    items: [String],
  },
}, { _id: false });

const campusLifeSchema = new mongoose.Schema({
  auditorium: campusSectionSchema,
  sports: campusSectionSchema,
  library: campusSectionSchema,
  itLab: campusSectionSchema,
  culturalActivities: campusSectionSchema,
  pageGallery: { title: String, images: [{ url: String }] },
}, { timestamps: true });

module.exports = { campusSectionSchema, campusLifeSchema };
