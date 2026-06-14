const mongoose = require('mongoose');

// --- IIMT HomePage ---
const iimtHomePageSchema = new mongoose.Schema({
  banners: [{ 
    heading: String, 
    subheading: String, 
    image: String,
    cta1: String,
    cta2: String
  }],
  numbers: [{ label: String, value: String }],
  partnerships: [{ name: String, image: String }],
  aboutIimt: { heading: String, description: String, image: String },
  standApart: {
    description: String,
    points: [String],
    cta: String
  },
  lifeAtIimt: {
    heading: String,
    images: [String]
  },
  successStories: {
    students: [{ photo: String, feedback: String, name: String }],
    parents: [{ photo: String, feedback: String, name: String }]
  },
  footer: {
    quickLinks: [{ label: String, href: String }],
    programs: [{ label: String, href: String }],
    socialLinks: [{ platform: String, href: String }],
    contact: { address: String, phone: String, email: String }
  }
}, { timestamps: true });

// --- IIMT About Us ---
const iimtAboutUsSchema = new mongoose.Schema({
  ourStory: { image: String, description: String },
  ourJourney: [{ year: String, event: String }],
  keyDifferentiators: [{ title: String, description: String }],
  directorMessage: { name: String, designation: String, message: String, image: String },
  missionVision: { 
    vision: String, 
    mission: String, 
    coreValues: [String] 
  },
  approvalsAffiliations: [{ 
    name: String, 
    image: String, 
    subheading: String, 
    description: String 
  }],
  whyIimt: { content: String },
  bestPractices: [{ title: String, content: String }],
  greenInitiatives: { content: String }
}, { timestamps: true });

// --- IIMT Courses ---
const iimtCourseSchema = new mongoose.Schema({
  programName: String,
  overview: String,
  homepageSummary: String,
  curriculumStructure: String,
  careerScope: String,
  quickFacts: String,
  careerOutcome: String,
  duration: String,
  annualFee: String,
  annualIntake: String,
  eligibility: String,
  slug: { type: String, unique: true }
}, { timestamps: true });

// --- IIMT Campus Life ---
const iimtCampusLifeSchema = new mongoose.Schema({
  infrastructure: { image: String, content: String },
  itLabs: { 
    specs: {
      computers: String,
      internetSpeed: String,
      software: String,
      timings: String
    },
    rules: [String]
  },
  library: {
    image: String,
    totalBooks: String,
    digitalAccess: String,
    eJournals: String,
    seating: String
  },
  auditorium: {
    image: String,
    seating: String,
    avStatus: String,
    events: String
  },
  sports: [{ image: String, title: String, link: String }],
  hostel: { image: String, content: String },
  culturalActivities: {
    images: [String],
    highlights: [String]
  },
  faculty: [{
    name: String,
    designation: String,
    dept: String,
    qualification: String,
    specialisation: String,
    image: String
  }]
}, { timestamps: true });

// --- IIMT Admissions ---
const iimtAdmissionsSchema = new mongoose.Schema({
  howToApply: {
    highlight: String,
    admissionProcess: [{ step: String, desc: String }],
    documentChecklist: [String],
    helpContact: String
  },
  scholarships: [{ category: String, description: String }],
  faqs: [{ question: String, answer: String }]
}, { timestamps: true });

// --- IIMT Placements ---
const iimtPlacementsSchema = new mongoose.Schema({
  stats: [{ label: String, value: String, description: String }],
  process: [{ step: String, desc: String }],
  partners: [{ name: String, logo: String }],
  studentSuccess: [{ name: String, company: String, feedback: String, photo: String }]
}, { timestamps: true });

// --- IIMT Gallery ---
const iimtGallerySchema = new mongoose.Schema({
  photos: [{ title: String, url: String }],
  videos: [{ title: String, url: String }],
  pressCoverage: [{ title: String, url: String, date: String }]
}, { timestamps: true });

// --- IIMT News & Events ---
const iimtNewsEventSchema = new mongoose.Schema({
  title: String, 
  date: Date, 
  description: String, 
  image: String 
}, { timestamps: true });

// --- IIMT Fee Payment ---
const iimtFeePaymentSchema = new mongoose.Schema({
  title: String,
  description: String,
  cta: String,
  link: String
}, { timestamps: true });

// --- IIMT Student Portal ---
const iimtStudentPortalSchema = new mongoose.Schema({
  title: String,
  description: String,
  cta: String,
  link: String
}, { timestamps: true });

// --- IIMT Contact Us ---
const iimtContactUsSchema = new mongoose.Schema({
  mainContact: {
    address: String,
    phone: String,
    email: String,
    mapEmbed: String
  },
  collegeContacts: [{
    collegeName: String,
    phone: String,
    email: String,
    address: String
  }]
}, { timestamps: true });

const Lead = require('./Lead');
const JobApplication = require('./JobApplication');

module.exports = {
  IimtHomePage: mongoose.model('IimtHomePage', iimtHomePageSchema, 'iimt_homepages'),
  IimtAboutUs: mongoose.model('IimtAboutUs', iimtAboutUsSchema, 'iimt_aboutus'),
  IimtCourse: mongoose.model('IimtCourse', iimtCourseSchema, 'iimt_courses'),
  IimtCampusLife: mongoose.model('IimtCampusLife', iimtCampusLifeSchema, 'iimt_campuslife'),
  IimtAdmissions: mongoose.model('IimtAdmissions', iimtAdmissionsSchema, 'iimt_admissions'),
  IimtPlacements: mongoose.model('IimtPlacements', iimtPlacementsSchema, 'iimt_placements'),
  IimtGallery: mongoose.model('IimtGallery', iimtGallerySchema, 'iimt_gallery'),
  IimtNewsEvent: mongoose.model('IimtNewsEvent', iimtNewsEventSchema, 'iimt_newsevents'),
  IimtFeePayment: mongoose.model('IimtFeePayment', iimtFeePaymentSchema, 'iimt_feepayment'),
  IimtStudentPortal: mongoose.model('IimtStudentPortal', iimtStudentPortalSchema, 'iimt_studentportal'),
  IimtContactUs: mongoose.model('IimtContactUs', iimtContactUsSchema, 'iimt_contactus'),
  
  IimtLead: mongoose.model('IimtLead', Lead.schema, 'iimt_leads'),
  IimtJobApplication: mongoose.model('IimtJobApplication', JobApplication.schema, 'iimt_jobapplications'),
};
