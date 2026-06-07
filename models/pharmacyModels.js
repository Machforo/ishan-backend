const mongoose = require('mongoose');

// --- Pharmacy HomePage ---
const homePageSchema = new mongoose.Schema({
  banners: [{ heading: String, subheading: String, image: String, ctaText: String }],
  stats: [{ label: String, value: String, icon: String }],
  aboutSnippet: { title: String, content: String, image: String }
}, { timestamps: true });

// --- Faculty Collection ---
const facultySchema = new mongoose.Schema({
  name: String,
  designation: String,
  department: String,
  qualification: String,
  experience: String,
  image: String
}, { timestamps: true });

// --- Programs Collection ---
const programSchema = new mongoose.Schema({
  name: String,
  overview: String,
  curriculum: String,
  eligibility: String,
  duration: String,
  slug: { type: String, unique: true }
}, { timestamps: true });

// --- Research Singleton ---
const researchSchema = new mongoose.Schema({
  overview: String,
  projects: [{ title: String, description: String, status: String }],
  publications: [{ title: String, author: String, journal: String, year: String }]
}, { timestamps: true });

// --- Shared Lead Schema ---
const Lead = require('./Lead');

// --- Testimonials Collection ---
const testimonialSchema = new mongoose.Schema({
  name: String,
  image: String,
  designation: String,
  feedback: String,
  type: String
}, { timestamps: true });

// --- News Collection ---
const newsSchema = new mongoose.Schema({
  image: String,
  title: String,
  date: String,
  description: String,
  link: String
}, { timestamps: true });

// --- Contact Singleton ---
const contactSchema = new mongoose.Schema({
  address: String,
  phone: String,
  email: String,
  mapEmbed: String
}, { timestamps: true });

module.exports = {
  PharmacyHomePage: mongoose.model('PharmacyHomePage', homePageSchema, 'pharmacy_homepages'),
  PharmacyFaculty: mongoose.model('PharmacyFaculty', facultySchema, 'pharmacy_faculty'),
  PharmacyProgram: mongoose.model('PharmacyProgram', programSchema, 'pharmacy_programs'),
  PharmacyResearch: mongoose.model('PharmacyResearch', researchSchema, 'pharmacy_research'),
  PharmacyTestimonial: mongoose.model('PharmacyTestimonial', testimonialSchema, 'pharmacy_testimonials'),
  PharmacyNews: mongoose.model('PharmacyNews', newsSchema, 'pharmacy_news'),
  PharmacyLead: mongoose.model('PharmacyLead', Lead.schema, 'pharmacy_leads'),
  PharmacyContact: mongoose.model('PharmacyContact', contactSchema, 'pharmacy_contacts'),
};
