const mongoose = require('mongoose');

// --- Legal HomePage ---
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
  image: String,
  specialization: [String]
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

// --- Legal Infrastructure ---
const infrastructureSchema = new mongoose.Schema({
  library: { image: String, content: String, totalBooks: String },
  mootCourt: { image: String, description: String },
  hostel: { image: String, content: String }
}, { timestamps: true });

// --- Shared Lead Schema ---
const Lead = require('./Lead');

module.exports = {
  LegalHomePage: mongoose.model('LegalHomePage', homePageSchema, 'legal_homepages'),
  LegalFaculty: mongoose.model('LegalFaculty', facultySchema, 'legal_faculty'),
  LegalProgram: mongoose.model('LegalProgram', programSchema, 'legal_programs'),
  LegalInfrastructure: mongoose.model('LegalInfrastructure', infrastructureSchema, 'legal_infrastructure'),
  LegalLead: mongoose.model('LegalLead', Lead.schema, 'legal_leads'),
};
