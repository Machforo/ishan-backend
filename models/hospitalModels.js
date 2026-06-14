const mongoose = require('mongoose');

// --- Hospital HomePage ---
const homePageSchema = new mongoose.Schema({
  banners: [{ heading: String, subheading: String, image: String, ctaText: String }],
  stats: [{ label: String, value: String, description: String }],
  aboutHospital: { title: String, content: String, image: String }
}, { timestamps: true });

// --- Doctor Collection ---
const doctorSchema = new mongoose.Schema({
  name: String,
  designation: String,
  department: String,
  qualification: String,
  experience: String,
  image: String,
  opdTimings: String,
  specialization: [String]
}, { timestamps: true });

// --- Department Detail ---
const departmentSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  treatments: [String],
  slug: { type: String, unique: true }
}, { timestamps: true });

// --- Patient Services ---
const servicesSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  features: [String]
}, { timestamps: true });

// --- Testimonials Collection ---
const testimonialSchema = new mongoose.Schema({
  name: String,
  image: String,
  designation: String,
  feedback: String,
  type: String
}, { timestamps: true });

// --- Shared Lead Schema ---
const Lead = require('./Lead');

// --- About Us Singleton ---
const aboutUsSchema = new mongoose.Schema({
  ourStory: { image: String, description: String },
  missionVision: { vision: String, mission: String, values: [String] }
}, { timestamps: true });

module.exports = {
  HospitalHomePage: mongoose.model('HospitalHomePage', homePageSchema, 'hospital_homepages'),
  HospitalDoctor: mongoose.model('HospitalDoctor', doctorSchema, 'hospital_doctors'),
  HospitalDepartment: mongoose.model('HospitalDepartment', departmentSchema, 'hospital_departments'),
  HospitalServices: mongoose.model('HospitalServices', servicesSchema, 'hospital_services'),
  HospitalTestimonial: mongoose.model('HospitalTestimonial', testimonialSchema, 'hospital_testimonials'),
  HospitalLead: mongoose.model('HospitalLead', Lead.schema, 'hospital_leads'),
  HospitalAboutUs: mongoose.model('HospitalAboutUs', aboutUsSchema, 'hospital_aboutus'),
};
