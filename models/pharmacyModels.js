const mongoose = require('mongoose');

// --- Pharmacy HomePage ---
const homePageSchema = new mongoose.Schema({
  navMenu: { items: [{ name: String, link: String }] },
  banners: [{ heading: String, subheading: String, image: String, ctaText: String }],
  stats: [{ label: String, value: String, icon: String }],
  aboutSnippet: { title: String, content: String, image: String },
  brands: [{ name: String, logo: String }],
  whyIshan: [{ title: String, description: String, icon: String }],
  placements: { heading: String, subheading: String, stats: [{ label: String, value: String }] },
  gallery: [{ image: String }],
  footer: { quickLinks: [{ text: String, link: String }], contact: { address: String, phone: String, email: String } }
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

// --- Generic Page Collection ---
const pageSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  content: String,
  images: [{ image: String }],
  seo: { metaTitle: String, metaDescription: String }
}, { timestamps: true });

// --- FAQ Collection ---
const faqSchema = new mongoose.Schema({
  question: String,
  answer: String
}, { timestamps: true });

// --- About Us Singleton ---
const aboutUsSchema = new mongoose.Schema({
  ourStory: { title: String, content: String, image: String },
  milestones: [{ year: String, title: String, desc: String, event: String }],
  keyDifferentiators: [{ title: String }],
  principalMessage: { name: String, designation: String, message: String, image: String },
  missionVision: { vision: String, mission: String, coreValues: String, image1: String, image2: String },
  approvals: [{ title: String, description: String, logo: String }]
}, { timestamps: true });

// --- Regulatory Singletons ---
const mandatoryDisclosureSchema = new mongoose.Schema({
  statement: String,
  disclosureItems: [{ category: String, items: String }]
}, { timestamps: true });

const codeOfConductSchema = new mongoose.Schema({
  intro: String,
  image: String,
  rules: [{ category: String, items: String }]
}, { timestamps: true });

// --- Facility / Lab Schema ---
const facilitySchema = new mongoose.Schema({
  slug: { type: String, unique: true },
  title: String,
  subtitle: String,
  overviewHeading: String,
  overviewContent: String,
  image: String,
  highlights: [{ title: String, description: String }]
}, { timestamps: true });

// --- Student Hub & Events Schemas ---
const downloadSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  overview: String,
  image: String,
  files: [{ name: String, fileType: String, category: String, size: String, url: String }]
}, { timestamps: true });

const lectureSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  overviewHeading: String,
  overviewContent: String,
  events: [{ speaker: String, designation: String, topic: String, date: String, takeaways: String }]
}, { timestamps: true });

const visitSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  overviewHeading: String,
  overviewContent: String,
  image: String,
  visits: [{ company: String, location: String, date: String, description: String, takeaways: String }]
}, { timestamps: true });

const calendarSchema = new mongoose.Schema({
  name: String,
  date: String,
  venue: String,
  category: String,
  description: String
}, { timestamps: true });

const photoSchema = new mongoose.Schema({
  title: String,
  category: String,
  url: String
}, { timestamps: true });

const videoSchema = new mongoose.Schema({
  title: String,
  category: String,
  url: String
}, { timestamps: true });

const pressSchema = new mongoose.Schema({
  publication: String,
  date: String,
  headline: String,
  url: String,
  tag: String
}, { timestamps: true });

const portalSchema = new mongoose.Schema({
  title: String,
  instructions: String,
  link: String,
  image: String
}, { timestamps: true });

const placementSchema = new mongoose.Schema({
  placementNumbers: [{ value: String, label: String, icon: String }],
  recruitingPartners: [{ name: String, logo: String }],
  successStories: [{ name: String, program: String, company: String, package: String, quote: String, image: String }],
  placementProcess: [{ step: String, desc: String }]
}, { timestamps: true });

const researchProjectSchema = new mongoose.Schema({
  title: String,
  pi: String,
  department: String,
  status: String,
  funding: String
}, { timestamps: true });

const publicationSchema = new mongoose.Schema({
  title: String,
  authors: String,
  journal: String,
  year: String,
  doi: String
}, { timestamps: true });

const alumniSchema = new mongoose.Schema({
  name: String,
  batch: String,
  company: String,
  role: String,
  image: String
}, { timestamps: true });

const careerSchema = new mongoose.Schema({
  title: String,
  qualification: String,
  experience: String,
  dept: String,
  type: String
}, { timestamps: true });

const feedbackSchema = new mongoose.Schema({
  name: String,
  userType: String,
  programme: String,
  subject: String,
  message: String,
  rating: Number
}, { timestamps: true });

const admissionSchema = new mongoose.Schema({
  howToApply: [{ num: String, title: String, desc: String }],
  documents: [{ docName: String }],
  alertBanner: { title: String, content: String, isActive: Boolean },
  admissionContact: { phone: String, email: String },
  scholarships: [{ category: String, concession: String, description: String }]
}, { timestamps: true });

const certificateSchema = new mongoose.Schema({
  name: String,
  duration: String,
  fee: String,
  eligibility: String,
  desc: String
}, { timestamps: true });

const courseSchema = new mongoose.Schema({
  programName: String,
  duration: String,
  eligibility: String,
  annualIntake: String,
  annualFee: String,
  overview: String,
  curriculumStructure: String,
  careerScope: String,
  image: String
}, { timestamps: true });

const visitingFacultySchema = new mongoose.Schema({
  name: String,
  org: String,
  specialisation: String,
  impact: String,
  bar: String
}, { timestamps: true });

const navbarSchema = new mongoose.Schema({
  navLinks: [{
    label: String,
    featured: { img: String, title: String, desc: String, href: String },
    columns: [{
      heading: String,
      icon: String,
      links: [{ label: String, href: String }]
    }],
    extraImgs: [{ img: String, caption: String, href: String }]
  }],
  searchableItems: [{ name: String, href: String }],
  popularSearches: [String]
}, { timestamps: true });

const footerSchema = new mongoose.Schema({
  aboutText: String,
  socialLinks: { facebook: String, instagram: String, linkedin: String, youtube: String },
  contactInfo: {
    address: String,
    phone: String,
    email: String,
    workingHours: String
  },
  quickLinks: [{ label: String, href: String }],
  programs: [{ label: String, href: String }],
  campus: [{ label: String, href: String }]
}, { timestamps: true });

module.exports = {
  PharmacyHomePage: mongoose.model('PharmacyHomePage', homePageSchema, 'pharmacy_homepages'),
  PharmacyAboutUs: mongoose.model('PharmacyAboutUs', aboutUsSchema, 'pharmacy_aboutus'),
  PharmacyFacility: mongoose.model('PharmacyFacility', facilitySchema, 'pharmacy_facilities'),
  PharmacyDownload: mongoose.model('PharmacyDownload', downloadSchema, 'pharmacy_downloads'),
  PharmacyPastPaper: mongoose.model('PharmacyPastPaper', downloadSchema, 'pharmacy_pastpapers'),
  PharmacyGuestLecture: mongoose.model('PharmacyGuestLecture', lectureSchema, 'pharmacy_guestlectures'),
  PharmacyIndustrialVisit: mongoose.model('PharmacyIndustrialVisit', visitSchema, 'pharmacy_industrialvisits'),
  PharmacyCalendarEvent: mongoose.model('PharmacyCalendarEvent', calendarSchema, 'pharmacy_calendarevents'),
  PharmacyPhoto: mongoose.model('PharmacyPhoto', photoSchema, 'pharmacy_photos'),
  PharmacyVideo: mongoose.model('PharmacyVideo', videoSchema, 'pharmacy_videos'),
  PharmacyPress: mongoose.model('PharmacyPress', pressSchema, 'pharmacy_press'),
  PharmacyStudentPortal: mongoose.model('PharmacyStudentPortal', portalSchema, 'pharmacy_studentportal'),
  PharmacyFeePayment: mongoose.model('PharmacyFeePayment', portalSchema, 'pharmacy_feepayment'),
  PharmacyFaculty: mongoose.model('PharmacyFaculty', facultySchema, 'pharmacy_faculty'),
  PharmacyProgram: mongoose.model('PharmacyProgram', programSchema, 'pharmacy_programs'),
  PharmacyResearch: mongoose.model('PharmacyResearch', researchSchema, 'pharmacy_research'),
  PharmacyTestimonial: mongoose.model('PharmacyTestimonial', testimonialSchema, 'pharmacy_testimonials'),
  PharmacyNews: mongoose.model('PharmacyNews', newsSchema, 'pharmacy_news'),
  PharmacyFAQ: mongoose.model('PharmacyFAQ', faqSchema, 'pharmacy_faqs'),
  PharmacyPage: mongoose.model('PharmacyPage', pageSchema, 'pharmacy_pages'),
  PharmacyLead: mongoose.model('PharmacyLead', Lead.schema, 'pharmacy_leads'),
  PharmacyContact: mongoose.model('PharmacyContact', contactSchema, 'pharmacy_contacts'),
  PharmacyPlacement: mongoose.model('PharmacyPlacement', placementSchema, 'pharmacy_placements'),
  PharmacyResearchProject: mongoose.model('PharmacyResearchProject', researchProjectSchema, 'pharmacy_researchprojects'),
  PharmacyPublication: mongoose.model('PharmacyPublication', publicationSchema, 'pharmacy_publications'),
  PharmacyAlumni: mongoose.model('PharmacyAlumni', alumniSchema, 'pharmacy_alumni'),
  PharmacyCareer: mongoose.model('PharmacyCareer', careerSchema, 'pharmacy_careers'),
  PharmacyFeedback: mongoose.model('PharmacyFeedback', feedbackSchema, 'pharmacy_feedbacks'),
  PharmacyAdmission: mongoose.model('PharmacyAdmission', admissionSchema, 'pharmacy_admissions'),
  PharmacyCertificate: mongoose.model('PharmacyCertificate', certificateSchema, 'pharmacy_certificates'),
  PharmacyCourse: mongoose.model('PharmacyCourse', courseSchema, 'pharmacy_courses'),
  PharmacyVisitingFaculty: mongoose.model('PharmacyVisitingFaculty', visitingFacultySchema, 'pharmacy_visitingfaculty'),
  PharmacyNavbar: mongoose.model('PharmacyNavbar', navbarSchema, 'pharmacy_navbars'),
  PharmacyFooter: mongoose.model('PharmacyFooter', footerSchema, 'pharmacy_footers'),
  PharmacyMandatoryDisclosure: mongoose.model('PharmacyMandatoryDisclosure', mandatoryDisclosureSchema, 'pharmacy_mandatorydisclosure'),
  PharmacyCodeOfConduct: mongoose.model('PharmacyCodeOfConduct', codeOfConductSchema, 'pharmacy_codeofconduct')
};
