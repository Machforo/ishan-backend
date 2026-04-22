const mongoose = require('mongoose');

// --- Ayurveda HomePage ---
const homePageSchema = new mongoose.Schema({
  banners: [{ heading: String, subheading: String, image: String, ctaText: String, ctaLink: String }],
  stats: [{ label: String, value: String, icon: String }],
  aboutSnippet: { title: String, description: String, image: String, ctaText: String },
  institutionalProfile: { image: String, heading: String, subheading: String, description: String, ctaText: String, ctaLink: String },
  whyChooseUs: [{ icon: String, heading: String, description: String }],
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
  ourStory: { image: String, description: String },
  groupHistory: { content: String },
  chairmanMessage: { name: String, message: String, image: String },
  principalMessage: { name: String, message: String, image: String },
  missionVision: { vision: String, mission: String, values: [String] },
  approvals: [{ name: String, image: String, description: String }]
}, { timestamps: true });

// --- Ayurveda Admissions ---
const admissionSchema = new mongoose.Schema({
  admissionsHome: { title: String, content: String },
  eligibilityIntake: { eligibility: String, intake: String },
  neetCounselling: { guide: String, link: String },
  scholarships: [{ category: String, description: String }]
}, { timestamps: true });

// --- Ayurveda Academics ---
const academicsSchema = new mongoose.Schema({
  departments: [{ name: String, description: String }]
}, { timestamps: true });

const facultySchema = new mongoose.Schema({
  name: String,
  designation: String,
  qualification: String,
  experience: String,
  specialization: String,
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
  academicJournal: { title: String, issn: String, content: String },
  facultyPublications: [{ title: String, author: String, journal: String, year: String }],
  projects: [{ title: String, body: String, status: String }],
  placements: { summary: String, companies: [{ name: String, logo: String }] },
  alumni: [{ name: String, batch: String, testimonial: String, image: String }]
}, { timestamps: true });

// --- Ayurveda Facilities ---
const facilitiesSchema = new mongoose.Schema({
  herbalGarden: { image: String, description: String, speciesCount: String },
  hostel: { image: String, content: String },
  infrastructure: { image: String, content: String },
  auditorium: { image: String, seating: String },
  sports: { image: String, content: String }
}, { timestamps: true });

// --- Digital Services ---
const digitalServicesSchema = new mongoose.Schema({
  studentPortal: { title: String, link: String },
  feePayment: { title: String, link: String },
  downloads: [{ title: String, fileUrl: String }],
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
  date: Date,
  image: String,
  description: String,
  link: String
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

// --- Shared Lead Schema (Imported) ---
const Lead = require('./Lead');

module.exports = {
  AyurvedaHomePage: mongoose.model('AyurvedaHomePage', homePageSchema, 'ayurveda_homepages'),
  AyurvedaAboutUs: mongoose.model('AyurvedaAboutUs', aboutUsSchema, 'ayurveda_aboutus'),
  AyurvedaCourse: mongoose.model('AyurvedaCourse', courseSchema, 'ayurveda_courses'),
  AyurvedaAdmissions: mongoose.model('AyurvedaAdmissions', admissionSchema, 'ayurveda_admissions'),
  AyurvedaAcademics: mongoose.model('AyurvedaAcademics', academicsSchema, 'ayurveda_academics'),
  AyurvedaFaculty: mongoose.model('AyurvedaFaculty', facultySchema, 'ayurveda_faculty'),
  AyurvedaHospital: mongoose.model('AyurvedaHospital', hospitalSchema, 'ayurveda_hospital'),
  AyurvedaStudentCorner: mongoose.model('AyurvedaStudentCorner', studentCornerSchema, 'ayurveda_students'),
  AyurvedaResearch: mongoose.model('AyurvedaResearch', researchSchema, 'ayurveda_research'),
  AyurvedaFacilities: mongoose.model('AyurvedaFacilities', facilitiesSchema, 'ayurveda_facilities'),
  AyurvedaDigitalServices: mongoose.model('AyurvedaDigitalServices', digitalServicesSchema, 'ayurveda_digital'),
  AyurvedaFAQ: mongoose.model('AyurvedaFAQ', faqSchema, 'ayurveda_faqs'),
  AyurvedaNews: mongoose.model('AyurvedaNews', newsSchema, 'ayurveda_news'),
  AyurvedaBlog: mongoose.model('AyurvedaBlog', blogSchema, 'ayurveda_blogs'),
  AyurvedaTestimonial: mongoose.model('AyurvedaTestimonial', testimonialSchema, 'ayurveda_testimonials'),
  AyurvedaLead: mongoose.model('AyurvedaLead', Lead.schema, 'ayurveda_leads'),
};
