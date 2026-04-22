const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  image: String
});

const statSchema = new mongoose.Schema({
  number: String,
  label: String
});

const dignitarySchema = new mongoose.Schema({
  name: String,
  role: String,
  quote: String,
  image: String
});

const programSchema = new mongoose.Schema({
  name: String,
  level: String,
  college: String,
  duration: String,
  affiliation: String,
  criteria: String,
  description: String,
  link: String
});

const whyIshanSchema = new mongoose.Schema({
  title: String,
  description: String,
  icon: String
});

const logoSchema = new mongoose.Schema({
  name: String,
  url: String
});

const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
  image: String,
  link: String,
  category: String,
  description: String
});

const testimonialSchema = new mongoose.Schema({
  name: String,
  batch: String,
  role: String,
  company: String,
  quote: String,
  image: String,
  category: String // Alumni / Student
});

const approvalSchema = new mongoose.Schema({
  name: String,
  fullTitle: String,
  description: String,
  image: String,
  link: String
});

const homePageSchema = new mongoose.Schema({
  hero: { banners: [bannerSchema] },
  stats: [statSchema],
  dignitaries: [dignitarySchema],
  programs: { title: String, subtitle: String, list: [programSchema] },
  whyIshan: { title: String, features: [whyIshanSchema] },
  whatsHappening: { title: String, events: [eventSchema] },
  campusLife: { title: String, subtitle: String, images: [logoSchema] },
  scholarships: { 
    title: { type: String, default: "Academic Scholarships" },
    subtitle: { type: String, default: "Helping You Thrive" },
    description: String, 
    list: [{ category: String, concession: String, description: String }] 
  },
  recruiters: { title: String, logos: [logoSchema] },
  testimonials: { title: String, list: [testimonialSchema] },
  regulatoryBodies: { title: String, list: [approvalSchema] },
  enquiryCta: { title: String, subtitle: String, buttonText: String }
}, { timestamps: true });

module.exports = mongoose.model('HomePage', homePageSchema);
