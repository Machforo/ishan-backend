const mongoose = require('mongoose');

// --- Legal HomePage ---
const homePageSchema = new mongoose.Schema({
  navMenu: { items: [{ name: String, link: String }] },
  banners: [{ heading: String, subheading: String, image: String, ctaText: String, ctaLink: String, cta2Text: String, cta2Link: String }],
  stats: [{ label: String, value: String, icon: String }],
  aboutSnippet: { title: String, content: String, image: String },
  brands: [{ name: String, logo: String }],
  whyIshanObj: { title: String, description: String },
  whyIshan: [{ title: String, description: String, icon: String }],
  placements: { heading: String, subheading: String, stats: [{ label: String, value: String }], recruitingPartners: [{ name: String, logo: String }] },
  facultyConfig: { title: String, description: String, subheading: String },
  newsConfig: { title: String, description: String, subheading: String },
  gallery: [{ image: String }],
  contactUs: { title: String, content: String, phone: String, address: String, workingHours: String },
  footer: { quickLinks: [{ text: String, link: String }], contact: { address: String, phone: String, email: String } },
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

// --- Faculty Collection ---
const facultySchema = new mongoose.Schema({
  name: String,
  designation: String,
  department: String,
  qualification: String,
  specialisation: String,
  bio: String,
  publications: String,
  experience: String,
  image: String,
  departmentBanner: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

// --- Programs Collection ---
const programSchema = new mongoose.Schema({
  name: String,
  overview: String,
  curriculumStructure: String,
  curriculum: String,
  eligibility: String,
  duration: String,
  annualIntake: String,
  annualFee: String,
  careerScope: String,
  image: String,
  bannerImage: String,
  studentActivityImages: [{ url: String }],
  placementOutcomeImage: String,
  facultyTeachingImage: String,
  images: [{ url: String }],
  slug: { type: String, unique: true },
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

// --- Research Singleton ---
const researchSchema = new mongoose.Schema({
  overview: String,
  projects: [{ title: String, description: String, status: String }],
  publications: [{ title: String, author: String, journal: String, year: String }],
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

// --- Shared Lead Schema ---
const Lead = require('./Lead');

// --- Testimonials Collection ---
const testimonialSchema = new mongoose.Schema({
  name: String,
  image: String,
  designation: String,
  feedback: String,
  type: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

// --- News Collection ---
const newsSchema = new mongoose.Schema({
  image: String,
  title: String,
  date: String,
  category: String,
  description: String,
  link: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

// --- Career & Feedback Pages ---
const careersPageSchema = new mongoose.Schema({ title: String, subtitle: String, overview: String, image: String, bannerImage: String }, { timestamps: true });
const feedbackPageSchema = new mongoose.Schema({ title: String, subtitle: String, overview: String, image: String, bannerImage: String }, { timestamps: true });

// --- Contact Singleton ---
const contactSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  overview: String,
  image: String,
  bannerImage: String,
  address: String,
  phone: String,
  email: String,
  mapEmbed: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

// --- Generic Page Collection ---
const pageSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  content: String,
  images: [{ image: String }],
  seo: { metaTitle: String, metaDescription: String },
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

// --- FAQ Collection ---
const faqSchema = new mongoose.Schema({
  question: String,
  answer: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

// --- About Us Singleton ---
const aboutUsSchema = new mongoose.Schema({
  ourStory: { title: String, content: String, image: String },
  bannerImage: String,
  editorialPhotos: [{ url: String }],
  milestones: [{ year: String, title: String, desc: String, event: String }],
  keyDifferentiators: [{ title: String }],
  principalMessage: { name: String, designation: String, message: String, image: String, candidImage: String },
  missionVision: { vision: String, mission: String, coreValues: String, image1: String, image2: String, bannerImage: String },
  approvals: [{ title: String, description: String, logo: String }],
  approvalsPageBanner: String, approvalsHeading: String, approvalsDescription: String,
  WhyIshanLaw: { content: String, image: String, bannerImage: String, images: [{ url: String }], reasons: [{ title: String, description: String, icon: String }] },
  bestPractices: [{ title: String, content: String, image: String }],
  bestPracticesBanner: String,
  greenInitiatives: { content: String, image: String, bannerImage: String, images: [{ url: String }], initiatives: [{ title: String, desc: String, stat: String, icon: String }] },
  faqsBanner: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

// --- Regulatory Singletons ---
const mandatoryDisclosureSchema = new mongoose.Schema({ title: String, subtitle: String,
  bannerImage: String,
  statement: String,
  disclosureItems: [{ category: String, items: String }],
  antiRagging: { title: String, subtitle: String, bannerImage: String, helpline: String, content: String, image: String, committeeText: String, reportMethods: [{ method: String }], pledgeTitle: String, pledgeText: String },
  grievanceRedressal: { title: String, subtitle: String, bannerImage: String, content: String, image: String, portalLink: String, process: [{ step: String, description: String }] },
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const codeOfConductSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  content: String,
  intro: String,
  image: String,
  rules: [{ category: String, items: String }],
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

// --- Facility / Lab Schema ---
const facilitySchema = new mongoose.Schema({
  slug: { type: String, unique: true },
  title: String,
  subtitle: String,
  overviewHeading: String,
  overviewContent: String,
  image: String,
  bannerImage: String,
  editorialPhotos: [{ url: String }],
  images: [{ url: String }],
  highlights: [{ title: String, description: String }],
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

// --- Student Hub & Events Schemas ---
const downloadSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  overview: String,
  image: String,
  files: [{ name: String, fileType: String, category: String, size: String, url: String }],
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

// --- Guest Lecture (collection, one doc per lecture) ---
const lectureSchema = new mongoose.Schema({
  title: String,
  speaker: String,
  designation: String,
  date: String,
  image: String,
  description: String,
  topics: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });


const visitSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  overviewHeading: String,
  overviewContent: String,
  image: String,
  bannerImage: String,
  visitPhotos: [{ url: String }],
  visits: [{ company: String, location: String, date: String, description: String, takeaways: String }],
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const calendarSchema = new mongoose.Schema({
  name: String,
  date: String,
  venue: String,
  category: String,
  description: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const photoSchema = new mongoose.Schema({
  title: String,
  category: String,
  url: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const videoSchema = new mongoose.Schema({
  title: String,
  category: String,
  url: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const pressSchema = new mongoose.Schema({
  title: String,
  publication: String,
  date: String,
  link: String,
  image: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const researchJournalSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  content: String,
  image: String,
  bannerImage: String,
  journalCoverImage: String,
  editorialBoardPhotos: [{ url: String }],
  stats: [{ label: String, value: String }],
  guidelinesLink: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const portalSchema = new mongoose.Schema({
  title: String,
  instructions: String,
  link: String,
  image: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const placementSchema = new mongoose.Schema({
  placementNumbers: [{ value: String, label: String, icon: String }],
  recruitingPartners: [{ name: String, logo: String }],
  successStories: [{ name: String, program: String, company: String, package: String, quote: String, image: String }],
  placementProcess: [{ step: String, desc: String }],
  bannerImage: String,
  ceremonyPhoto: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const researchProjectSchema = new mongoose.Schema({
  title: String,
  pi: String,
  department: String,
  status: String,
  funding: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const publicationSchema = new mongoose.Schema({
  title: String,
  authors: String,
  journal: String,
  year: String,
  doi: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const alumniSchema = new mongoose.Schema({
  name: String,
  batch: String,
  company: String,
  role: String,
  currentRole: String,
  quote: String,
  image: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const careerSchema = new mongoose.Schema({
  title: String,
  qualification: String,
  experience: String,
  dept: String,
  type: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const feedbackSchema = new mongoose.Schema({
  name: String,
  userType: String,
  programme: String,
  subject: String,
  message: String,
  rating: Number,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const admissionSchema = new mongoose.Schema({
  howToApply: [{ num: String, title: String, desc: String }],
  documents: [{ docName: String }],
  alertBanner: { title: String, content: String, isActive: Boolean },
  admissionContact: { phone: String, email: String },
  scholarships: [{ category: String, concession: String, description: String }],
  bannerImage: String,
  orientationPhotos: [{ url: String }],
  scholarshipsBanner: String,
  scholarshipsHandoverPhotos: [{ url: String }],
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const programsOverviewSchema = new mongoose.Schema({
  content: String,
  image: String,
  bannerImage: String,
  editorialPhotos: [{ url: String }],
  keyPoints: [{ point: String }],
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const certificateOverviewSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  content: String,
  image: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const internshipExternshipSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  overview: String,
  image: String,
  bannerImage: String,
  images: [{ url: String }],
  opportunities: [{ title: String, desc: String }],
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const genericPageSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  content: String,
  image: String,
  bannerImage: String,
  images: [{ url: String }],
  items: [{ title: String, desc: String, icon: String }],
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const certificateSchema = new mongoose.Schema({
  name: String,
  duration: String,
  fee: String,
  eligibility: String,
  desc: String,
  pageGallery: { title: String, images: [{ url: String }] }
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
  image: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const visitingFacultySchema = new mongoose.Schema({
  name: String,
  org: String,
  specialisation: String,
  impact: String,
  bar: String,
  pageGallery: { title: String, images: [{ url: String }] }
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
  popularSearches: [{ text: String }],
  pageGallery: { title: String, images: [{ url: String }] }
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
  campus: [{ label: String, href: String }],
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

const infrastructureSchema = new mongoose.Schema({
  library: { image: String, content: String, totalBooks: String, bannerImage: String, images: [{ url: String }] },
  mootCourt: { image: String, description: String },
  hostel: { image: String, content: String, bannerImage: String, images: [{ url: String }] },
  infrastructure: { bannerImage: String, images: [{ url: String }] },
  auditorium: { bannerImage: String, images: [{ url: String }] },
  sports: { bannerImage: String, images: [{ url: String }] },
  itLab: { bannerImage: String, images: [{ url: String }] },
  newsEventsBanner: String,
  alumniNetworkBanner: String,
  alumniMeetPhoto: String,
  newsEventsBannerImage: String,
  pageGallery: { title: String, images: [{ url: String }] }
}, { timestamps: true });

module.exports = {
  LegalHomePage: mongoose.model('LegalHomePage', homePageSchema, 'legal_homepages'),
  LegalAboutUs: mongoose.model('LegalAboutUs', aboutUsSchema, 'legal_aboutus'),
  LegalFacility: mongoose.model('LegalFacility', facilitySchema, 'legal_facilities'),
  LegalDownload: mongoose.model('LegalDownload', downloadSchema, 'legal_downloads'),
  LegalPastPaper: mongoose.model('LegalPastPaper', downloadSchema, 'legal_pastpapers'),
  LegalGuestLecture: mongoose.model('LegalGuestLecture', lectureSchema, 'legal_guestlectures'),
  LegalGuestLecturesPage: mongoose.model('LegalGuestLecturesPage', new mongoose.Schema({ title: String, subtitle: String, overview: String, image: String }, { timestamps: true }), 'legal_guestlecturespage'),
  LegalIndustrialVisit: mongoose.model('LegalIndustrialVisit', visitSchema, 'legal_industrialvisits'),
  LegalCalendarEvent: mongoose.model('LegalCalendarEvent', calendarSchema, 'legal_calendarevents'),
  LegalPhoto: mongoose.model('LegalPhoto', photoSchema, 'legal_photos'),
  LegalVideo: mongoose.model('LegalVideo', videoSchema, 'legal_videos'),
  LegalPress: mongoose.model('LegalPress', pressSchema, 'legal_press'),
  LegalStudentPortal: mongoose.model('LegalStudentPortal', portalSchema, 'legal_studentportal'),
  LegalFeePayment: mongoose.model('LegalFeePayment', portalSchema, 'legal_feepayment'),
  LegalFaculty: mongoose.model('LegalFaculty', facultySchema, 'legal_faculty'),
  LegalProgram: mongoose.model('LegalProgram', programSchema, 'legal_programs'),
  LegalResearch: mongoose.model('LegalResearch', researchSchema, 'legal_research'),
  LegalTestimonial: mongoose.model('LegalTestimonial', testimonialSchema, 'legal_testimonials'),
  LegalNews: mongoose.model('LegalNews', newsSchema, 'legal_news'),
  LegalFAQ: mongoose.model('LegalFAQ', faqSchema, 'legal_faqs'),
  LegalPage: mongoose.model('LegalPage', pageSchema, 'legal_pages'),
  LegalLead: mongoose.model('LegalLead', Lead.schema, 'legal_leads'),
  LegalContact: mongoose.model('LegalContact', contactSchema, 'legal_contacts'),
  LegalPlacement: mongoose.model('LegalPlacement', placementSchema, 'legal_placements'),
  LegalResearchProject: mongoose.model('LegalResearchProject', researchProjectSchema, 'legal_researchprojects'),
  LegalResearchJournal: mongoose.model('LegalResearchJournal', researchJournalSchema, 'legal_researchjournal'),
  LegalPublication: mongoose.model('LegalPublication', publicationSchema, 'legal_publications'),
  LegalAlumni: mongoose.model('LegalAlumni', alumniSchema, 'legal_alumni'),
  LegalCareer: mongoose.model('LegalCareer', careerSchema, 'legal_careers'),
  LegalCareersPage: mongoose.model('LegalCareersPage', careersPageSchema, 'legal_careerspage'),
  LegalFeedback: mongoose.model('LegalFeedback', feedbackSchema, 'legal_feedbacks'),
  LegalFeedbackPage: mongoose.model('LegalFeedbackPage', feedbackPageSchema, 'legal_feedbackpage'),
  LegalAdmission: mongoose.model('LegalAdmission', admissionSchema, 'legal_admissions'),
  LegalProgramsOverview: mongoose.model('LegalProgramsOverview', programsOverviewSchema, 'legal_programsoverview'),
  LegalCertificateOverview: mongoose.model('LegalCertificateOverview', certificateOverviewSchema, 'legal_certificateoverview'),
  LegalInternshipExternship: mongoose.model('LegalInternshipExternship', internshipExternshipSchema, 'legal_internshipexternship'),
  LegalMootCourt: mongoose.model('LegalMootCourt', genericPageSchema, 'legal_mootcourt'),
  LegalAidCell: mongoose.model('LegalAidCell', genericPageSchema, 'legal_legalaidcell'),
  LegalSkillDevelopment: mongoose.model('LegalSkillDevelopment', genericPageSchema, 'legal_skilldevelopment'),
  LegalDebatesGD: mongoose.model('LegalDebatesGD', genericPageSchema, 'legal_debatesgd'),
  LegalCulturalActivities: mongoose.model('LegalCulturalActivities', genericPageSchema, 'legal_culturalactivities'),
  LegalCertificate: mongoose.model('LegalCertificate', certificateSchema, 'legal_certificates'),
  LegalCourse: mongoose.model('LegalCourse', courseSchema, 'legal_courses'),
  LegalVisitingFaculty: mongoose.model('LegalVisitingFaculty', visitingFacultySchema, 'legal_visitingfaculty'),
  LegalNavbar: mongoose.model('LegalNavbar', navbarSchema, 'legal_navbars'),
  LegalFooter: mongoose.model('LegalFooter', footerSchema, 'legal_footers'),
  LegalMandatoryDisclosure: mongoose.model('LegalMandatoryDisclosure', mandatoryDisclosureSchema, 'legal_mandatorydisclosure'),
  LegalCodeOfConduct: mongoose.model('LegalCodeOfConduct', codeOfConductSchema, 'legal_codeofconduct'),
  LegalInfrastructure: mongoose.model('LegalInfrastructure', infrastructureSchema, 'legal_infrastructures')
};
