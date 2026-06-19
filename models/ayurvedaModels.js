const mongoose = require('mongoose');

// --- Ayurveda HomePage ---
const homePageSchema = new mongoose.Schema({
  banners: [{ heading: String, subheading: String, image: String, ctaText: String, ctaLink: String, cta2Text: String, cta2Link: String }],
  stats: [{ label: String, value: String, icon: String }],
  aboutSnippet: { title: String, description: String, image: String, ctaText: String },
  institutionalProfile: { image: String, heading: String, subheading: String, description: String, ctaText: String, ctaLink: String },
  whyChooseUs: [{ icon: String, heading: String, description: String }],
  whySection: { heading: String, description: String, ctaText: String, ctaLink: String },
  highlights: [{ title: String, description: String, icon: String }],
  lifeAtIshan: [{ image: String }]
}, { timestamps: true });

// --- Ayurveda Course (BAMS, etc.) ---
const courseSchema = new mongoose.Schema({
  name: String,
  duration: String,
  eligibility: String,
  overview: String,
  syllabus: [String],
  careerScope: String,
  slug: { type: String, unique: true }
}, { timestamps: true });

// --- Ayurveda About Us / Institute ---
const aboutUsSchema = new mongoose.Schema({
  ourStory: { title: String, subtitle: String, image: String, description: String },
  groupHistory: { title: String, subtitle: String, content: String },
  milestonesSection: { title: String, subtitle: String },
  milestones: [{ year: String, event: String }],
  keyDifferentiatorsSection: { title: String, subtitle: String },
  keyDifferentiators: [{ title: String }],
  chairmanMessage: { name: String, message: String, image: String },
  principalMessage: { name: String, designation: String, experience: String, message: String, image: String },
  missionVision: { vision: String, mission: String, values: [{ value: String }] },
  approvalsSection: { title: String, subtitle: String, description: String },
  approvals: [{ name: String, image: String, description: String }]
}, { timestamps: true });

// --- Ayurveda Admissions ---
const admissionSchema = new mongoose.Schema({
  admissionProcess: {
    description: String,
    steps: [{ step: String, title: String, desc: String }],
    documents: [{ text: String }],
    helpContact: String,
    whatsappContact: String
  },
  scholarships: {
    description: String,
    schemes: [{ name: String, typeStr: String, eligibility: String, benefit: String }],
    howToApply: [{ text: String }]
  },
  feeStructure: {
    instructions: String,
    link: String
  }
}, { timestamps: true });

// --- Ayurveda Academics ---
const academicsSchema = new mongoose.Schema({
  bamsProgram: {
    overview: String,
    duration: String,
    intake: String,
    eligibility: [{ text: String }],
    outcomes: [{ text: String }]
  },
  scopeOfBams: {
    description: String,
    sectors: [{ icon: String, title: String, desc: String }]
  },
  syllabus: {
    description: String,
    phases: [{ phase: String, years: String, subjects: String, pdf: String }]
  },
  departments: [{ name: String, description: String }]
}, { timestamps: true });

const facultySchema = new mongoose.Schema({
  name: String,
  designation: String,
  qualification: String,
  experience: String,
  specialization: String,
  bio: String,
  image: String
}, { timestamps: true });

const visitingFacultySchema = new mongoose.Schema({
  name: String,
  org: String,
  specialisation: String,
  impact: String,
  image: String
}, { timestamps: true });

// --- Ayurveda Hospital ---
const hospitalSchema = new mongoose.Schema({
  overview: { image: String, content: String },
  panchkarma: [{ title: String, description: String, image: String }],
  departments: [{ name: String, description: String }],
  diagnostics: [{ title: String, description: String }],
  services: [{ title: String, description: String }]
}, { timestamps: true });

// --- Student Corner (Policies) ---
const studentCornerSchema = new mongoose.Schema({
  antiRagging: { content: String },
  grievanceRedressal: { content: String },
  poshPolicy: { content: String },
  codeOfConduct: { content: String },
  privacyPolicy: { content: String }
}, { timestamps: true });

// --- Research & Careers ---
const researchSchema = new mongoose.Schema({
  researchJournal: {
    title: String, subtitle: String, description: String, image: String,
    stats: [{ label: String, value: String }],
    guidelinesLink: String
  },
  publications: {
    title: String, subtitle: String, description: String,
    items: [{ title: String, authors: String, journal: String, year: String, doi: String }]
  },
  researchProjects: {
    title: String, subtitle: String, description: String,
    stats: [{ icon: String, value: String, label: String }],
    items: [{ title: String, pi: String, department: String, status: String, funding: String }]
  },
  alumni: {
    title: String, subtitle: String,
    stats: [{ icon: String, value: String, label: String }],
    items: [{ name: String, batch: String, company: String, role: String, image: String }]
  },
  placements: {
    title: String, subtitle: String,
    summary: String,
    placementNumbers: [{ number: String, label: String }],
    companies: [{ name: String, logo: String }],
    successStories: [{ name: String, company: String, role: String, batch: String, quote: String, image: String }],
    placementProcess: [{ step: String, title: String, desc: String }]
  },
  careers: {
    title: String, subtitle: String, description: String, image: String,
    applyEmail: String,
    openings: [{ title: String, qualification: String, experience: String, dept: String, jobType: String }]
  },
  feedback: {
    title: String, subtitle: String, description: String, image: String,
    programmes: [{ label: String }]
  },
  academicJournal: { title: String, issn: String, content: String },
  facultyPublications: [{ title: String, author: String, journal: String, year: String }],
  projects: [{ title: String, body: String, status: String }]
}, { timestamps: true });

// --- Ayurveda Facilities ---
const facilitiesSchema = new mongoose.Schema({
  herbalGarden: { image: String, description: String, speciesCount: String, plants: [{ sanskrit: String, latin: String, part: String, use: String }] },
  hostel: { image: String, content: String },
  infrastructure: { image: String, content: String, features: [{ icon: String, title: String, desc: String }] },
  auditorium: { image: String, seating: String },
  sports: { image: String, content: String }
}, { timestamps: true });

// --- Digital Services ---
const digitalServicesSchema = new mongoose.Schema({
  studentPortal: { title: String, subtitle: String, description: String, image: String, link: String },
  feePayment: { title: String, subtitle: String, description: String, image: String, instructions: String, link: String },
  downloadsSection: { title: String, subtitle: String, description: String, image: String },
  downloads: [{ title: String, fileUrl: String }],
  pastPapersSection: { tag: String, title: String, subtitle: String, description: String, image: String },
  pastPapers: [{ title: String, fileUrl: String, year: String }],
  examinationPortal: { title: String, link: String }
}, { timestamps: true });

// --- Collections ---
const faqSchema = new mongoose.Schema({
  question: String,
  answer: String,
  category: String
}, { timestamps: true });

const newsSchema = new mongoose.Schema({
  title: String,
  date: String,
  image: String,
  description: String,
  link: String,
  category: String
}, { timestamps: true });

const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
  location: String,
  description: String,
  image: String
}, { timestamps: true });

const photoGallerySchema = new mongoose.Schema({
  title: String,
  image: String,
  category: String
}, { timestamps: true });

const videoGallerySchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  category: String
}, { timestamps: true });

const pressCoverageSchema = new mongoose.Schema({
  title: String,
  date: String,
  source: String,
  link: String,
  image: String
}, { timestamps: true });

const blogSchema = new mongoose.Schema({
  title: String,
  date: Date,
  author: String,
  image: String,
  content: String,
  slug: String
}, { timestamps: true });

const testimonialSchema = new mongoose.Schema({
  name: String,
  designation: String,
  feedback: String,
  image: String
}, { timestamps: true });

// --- Contact Singleton ---
const contactSchema = new mongoose.Schema({
  mainContact: {
    address: String,
    phone: String,
    email: String,
    mapEmbed: String
  },
  socialLinks: [{ platform: String, href: String }],
  collegeContacts: [{
    collegeName: String,
    phone: String,
    email: String,
    address: String
  }]
}, { timestamps: true });

// --- Regulatory Singletons ---
const mandatoryDisclosureSchema = new mongoose.Schema({
  statement: String,
  disclosureItems: [{ category: String, items: String }]
}, { timestamps: true });

const codeOfConductSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  content: String,
  intro: String,
  image: String,
  rules: [{ category: String, items: String }]
}, { timestamps: true });

// --- Navbar & Footer Site Configuration ---
const siteConfigSchema = new mongoose.Schema({
  navbar: {
    logo: { text: String, subtext: String, imageUrl: String },
    topBar: {
      phone: String,
      email: String,
      utilityLinks: [{ label: String, href: String }]
    },
    ctaButton: { label: String, href: String },
    navLinks: [{
      label: String,
      featured: { img: String, title: String, desc: String, href: String },
      columns: [{
        heading: String,
        icon: String,
        links: [{ label: String, href: String }]
      }],
      extraImgs: [{ img: String, caption: String, href: String }]
    }]
  },
  footer: {
    brandDescription: String,
    quickLinks: [{ label: String, href: String }],
    departmentLinks: [{ label: String, href: String }],
    socialLinks: [{ platform: String, href: String }],
    contact: { address: String, phone: String, email: String },
    bottomLinks: [{ label: String, href: String }],
    copyrightText: String
  }
}, { timestamps: true });

// --- Departments Collection ---
const departmentSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  type: { type: String, enum: ['Foundational', 'Clinical'], default: 'Foundational' },
  subtitle: String,
  description: String,
  image: String,
  highlights: [{ icon: String, title: String, description: String }]
}, { timestamps: true });

// --- Shared Lead Schema (Imported) ---
const Lead = require('./Lead');

module.exports = {
  AyurvedaHomePage: mongoose.model('AyurvedaHomePage', homePageSchema, 'ayurveda_homepages'),
  AyurvedaAboutUs: mongoose.model('AyurvedaAboutUs', aboutUsSchema, 'ayurveda_aboutus'),
  AyurvedaCourse: mongoose.model('AyurvedaCourse', courseSchema, 'ayurveda_courses'),
  AyurvedaAdmissions: mongoose.model('AyurvedaAdmissions', admissionSchema, 'ayurveda_admissions'),
  AyurvedaAcademics: mongoose.model('AyurvedaAcademics', academicsSchema, 'ayurveda_academics'),
  AyurvedaFaculty: mongoose.model('AyurvedaFaculty', facultySchema, 'ayurveda_faculty'),
  AyurvedaVisitingFaculty: mongoose.model('AyurvedaVisitingFaculty', visitingFacultySchema, 'ayurveda_visiting_faculty'),
  AyurvedaDepartment: mongoose.model('AyurvedaDepartment', departmentSchema, 'ayurveda_departments'),
  AyurvedaHospital: mongoose.model('AyurvedaHospital', hospitalSchema, 'ayurveda_hospital'),
  AyurvedaStudentCorner: mongoose.model('AyurvedaStudentCorner', studentCornerSchema, 'ayurveda_students'),
  AyurvedaResearch: mongoose.model('AyurvedaResearch', researchSchema, 'ayurveda_research'),
  AyurvedaFacilities: mongoose.model('AyurvedaFacilities', facilitiesSchema, 'ayurveda_facilities'),
  AyurvedaDigitalServices: mongoose.model('AyurvedaDigitalServices', digitalServicesSchema, 'ayurveda_digital'),
  AyurvedaFAQ: mongoose.model('AyurvedaFAQ', faqSchema, 'ayurveda_faqs'),
  AyurvedaNews: mongoose.model('AyurvedaNews', newsSchema, 'ayurveda_news'),
  AyurvedaEvent: mongoose.model('AyurvedaEvent', eventSchema, 'ayurveda_events'),
  AyurvedaPhotoGallery: mongoose.model('AyurvedaPhotoGallery', photoGallerySchema, 'ayurveda_photo_gallery'),
  AyurvedaVideoGallery: mongoose.model('AyurvedaVideoGallery', videoGallerySchema, 'ayurveda_video_gallery'),
  AyurvedaPressCoverage: mongoose.model('AyurvedaPressCoverage', pressCoverageSchema, 'ayurveda_press_coverage'),
  AyurvedaBlog: mongoose.model('AyurvedaBlog', blogSchema, 'ayurveda_blogs'),
  AyurvedaTestimonial: mongoose.model('AyurvedaTestimonial', testimonialSchema, 'ayurveda_testimonials'),
  AyurvedaLead: mongoose.model('AyurvedaLead', Lead.schema, 'ayurveda_leads'),
  AyurvedaContact: mongoose.model('AyurvedaContact', contactSchema, 'ayurveda_contacts'),
  AyurvedaSiteConfig: mongoose.model('AyurvedaSiteConfig', siteConfigSchema, 'ayurveda_siteconfig'),
  AyurvedaMandatoryDisclosure: mongoose.model('AyurvedaMandatoryDisclosure', mandatoryDisclosureSchema, 'ayurveda_mandatorydisclosure'),
  AyurvedaCodeOfConduct: mongoose.model('AyurvedaCodeOfConduct', codeOfConductSchema, 'ayurveda_codeofconduct'),
};
