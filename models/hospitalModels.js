const mongoose = require('mongoose');

// --- Hospital HomePage ---
const homePageSchema = new mongoose.Schema({
  opdHours: String,
  experienceText: String,
  contactPhone: String,
  contactEmail: String,
  contactAddress: String,
  footerDescription: String,
  facebookUrl: String,
  instagramUrl: String,
  youtubeUrl: String,
  footerCtaHeading: String,
  footerCtaSubtext: String,
  footerCtaBtnText: String,
  whyChooseUsSub: String,
  whyChooseUsHeading: String,
  panchkarmaPageTitle: String,
  panchkarmaPageSub: String,
  whatIsPanchkarmaTitle: String,
  whatIsPanchkarmaDesc1: String,
  whatIsPanchkarmaDesc2: String,
  navItems: [mongoose.Schema.Types.Mixed],
  quickLinks: [mongoose.Schema.Types.Mixed],
  patientLinks: [mongoose.Schema.Types.Mixed],
  legalLinks: [mongoose.Schema.Types.Mixed],
  departmentsHeading: String,
  departmentsSubheading: String,
  panchkarmaHeading: String,
  panchkarmaDescription: String,
  panchkarmaImage: String,
  panchkarmaBenefits: [mongoose.Schema.Types.Mixed],
  accreditationsHeading: String,
  accreditationsSubheading: String,
  doctorsHeading: String,
  doctorsSubheading: String,
  doctorsDescription: String,
  banners: [{ heading: String, subheading: String, image: String, ctaText: String }],
  stats: [{ label: String, value: String, description: String }],
  institutionalProfile: {
    heading: String,
    subheading: String,
    description: String,
    image: String,
    ctaText: String,
    ctaLink: String
  },
  whyChooseUs: [{ heading: String, description: String, icon: String }],
  gallery: [{ image: String }],
  accreditations: [{ text: String }]
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
  specialization: [String],
  category: String,
  days: String
}, { timestamps: true });

// --- Department Detail ---
const departmentSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  treatments: [String],
  slug: { type: String, unique: true },
  subtitle: String,
  path: String,
  color: String,
  category: String,
  icon: String
}, { timestamps: true });

// --- Patient Services ---
const servicesSchema = new mongoose.Schema({
  title: String,
  description: String,
  servicesList: [{ name: String, desc: String, icon: String, path: String }]
}, { timestamps: true });

// --- Testimonials Collection ---
const testimonialSchema = new mongoose.Schema({
  name: String,
  image: String,
  designation: String,
  feedback: String,
  type: String,
  rating: { type: Number, default: 5 }
}, { timestamps: true });

// --- Shared Lead Schema ---
const Lead = require('./Lead');

// --- About Us Singleton ---
const aboutUsSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  ourStory: { image: String, description: String },
  missionVision: { vision: String, mission: String, values: [mongoose.Schema.Types.Mixed] }
}, { timestamps: true });

// --- Panchkarma Collection ---
const panchkarmaSchema = new mongoose.Schema({
  name: String,
  description: String,
  conditions: [String],
  procedure: String,
  duration: String,
  eligibility: String,
  slug: { type: String, unique: true },
  image: String
}, { timestamps: true });

module.exports = {
  HospitalHomePage: mongoose.model('HospitalHomePage', homePageSchema, 'hospital_homepages'),
  HospitalDoctor: mongoose.model('HospitalDoctor', doctorSchema, 'hospital_doctors'),
  HospitalDepartment: mongoose.model('HospitalDepartment', departmentSchema, 'hospital_departments'),
  HospitalServices: mongoose.model('HospitalServices', servicesSchema, 'hospital_services'),
  HospitalTestimonial: mongoose.model('HospitalTestimonial', testimonialSchema, 'hospital_testimonials'),
  HospitalLead: mongoose.model('HospitalLead', Lead.schema, 'hospital_leads'),
  HospitalAboutUs: mongoose.model('HospitalAboutUs', aboutUsSchema, 'hospital_aboutus'),
  HospitalPanchkarma: mongoose.model('HospitalPanchkarma', panchkarmaSchema, 'hospital_panchkarma'),
};
