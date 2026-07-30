const mongoose = require('mongoose');

// --- IIMT HomePage ---
const iimtHomePageSchema = new mongoose.Schema({
  header: {
    phone: String,
    email: String,
    logoText: String,
    logoSubtext: String,
    alertText: String,
    alertLinkText: String,
    alertLink: String,
    portalLinks: [{ label: String, href: String }],
    navLinks: [{ label: String, href: String, featured: { img: String, title: String, desc: String, href: String }, columns: [{ heading: String, icon: String, links: [{ label: String, href: String }] }], extraImgs: [{ img: String, caption: String, href: String }] }]
  },
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
    heading: String,
    description: String,
    points: [{ title: String, description: String, icon: String }],
    cta: String
  },
  lifeAtIimt: {
    heading: String,
    images: [{ url: String }]
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
  ourStory: { 
    image: String, 
    description: String,
    bannerImage: String,
    editorialPhotos: [{ url: String }],
    timelineInfographic: String
  },
  ourJourney: [{ year: String, event: String }],
  keyDifferentiators: [{ title: String, description: String }],
  directorMessage: { 
    name: String, 
    designation: String, 
    message: String, 
    image: String,
    candidImage: String
  },
  missionVision: { 
    vision: String, 
    mission: String, 
    coreValues: [{ text: String }],
    bannerImage: String,
    editorialPhotos: [{ url: String }]
  },
  approvalsAffiliations: [{ 
    name: String, 
    image: String, 
    subheading: String, 
    description: String 
  }],
  whyIimt: { 
    content: String,
    bannerImage: String,
    images: [{ url: String }]
  },
  bestPractices: [{ title: String, content: String, image: String }],
  bestPracticesBanner: String,
  greenInitiatives: { 
    content: String,
    bannerImage: String,
    images: [{ url: String }]
  },
  campusCredibilityPhoto: String,
  mandatoryDisclosure: {
    complianceStatement: String,
    downloadPdfUrl: String,
    disclosures: [{ category: String, items: [{ text: String }] }],
    bannerImage: String
  },
  researchJournal: {
    description: String,
    issn: String,
    frequency: String,
    ugcCare: String,
    peerReviewed: String,
    websiteUrl: String,
    bannerImage: String
  }
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
  slug: { type: String, unique: true },
  bannerImage: String,
  studentActivityImages: [{ url: String }],
  placementOutcomeImage: String,
  facultyTeachingImage: String,
  images: [{ url: String }]
}, { timestamps: true });

// --- IIMT Campus Life ---
const iimtCampusLifeSchema = new mongoose.Schema({
  infrastructure: { 
    image: String, 
    imageUrl: String,
    content: String, 
    facilities: [{ icon: String, title: String, desc: String, link: String }],
    heroWideAngle: String,
    eventPhoto: String,
    entranceImage: String,
    interiorDetails: [{ url: String }],
    bannerImage: String,
    images: [{ url: String }]
  },
  itLabs: { 
    specs: {
      computers: String,
      internetSpeed: String,
      software: String,
      timings: String
    },
    rules: [{ text: String }],
    equipmentWideImage: String,
    equipmentCloseups: [{ url: String }],
    studentsWorkingImages: [{ url: String }],
    safetySignageImage: String,
    bannerImage: String,
    images: [{ url: String }]
  },
  library: {
    image: String,
    imageUrl: String,
    content: String,
    specs: [{ label: String, value: String }],
    equipmentWideImage: String,
    equipmentCloseups: [{ url: String }],
    studentsWorkingImages: [{ url: String }],
    safetySignageImage: String,
    bannerImage: String,
    images: [{ url: String }]
  },
  auditorium: {
    image: String,
    imageUrl: String,
    content: String,
    specs: [{ label: String, value: String }],
    heroWideAngle: String,
    eventPhoto: String,
    entranceImage: String,
    interiorDetails: [{ url: String }],
    equipmentWideImage: String,
    equipmentCloseups: [{ url: String }],
    studentsWorkingImages: [{ url: String }],
    safetySignageImage: String,
    bannerImage: String,
    images: [{ url: String }]
  },
  sports: {
    content: String,
    specs: [{ label: String, value: String }],
    heroWideAngle: String,
    eventPhoto: String,
    entranceImage: String,
    interiorDetails: [{ url: String }],
    bannerImage: String,
    images: [{ url: String }]
  },
  hostel: {
    image: String,
    content: String,
    amenities: [{ text: String }],
    specs: [{ label: String, value: String }],
    roomInteriors: [{ url: String }],
    washroomImages: [{ url: String }],
    diningHallImages: [{ url: String }],
    commonRoomImages: [{ url: String }],
    securityCctvImages: [{ url: String }],
    bannerImage: String,
    images: [{ url: String }]
  },
  culturalActivities: {
    content: String,
    specs: [{ label: String, value: String }],
    performancesImages: [{ url: String }],
    competitionsImages: [{ url: String }],
    crowdShotsImages: [{ url: String }],
    prizeCeremonyImages: [{ url: String }],
    bannerImage: String,
    images: [{ url: String }]
  },
  faculty: [{
    name: String,
    designation: String,
    dept: String,
    qualification: String,
    specialisation: String,
    image: String
  }],
  visitingFaculty: [{
    name: String,
    org: String,
    specialisation: String,
    dept: String,
    image: String
  }]
}, { timestamps: true });


// --- IIMT Student Zone ---
const iimtStudentZoneSchema = new mongoose.Schema({
  downloads: {
    pageTitle: String,
    pageSubtitle: String,
    bannerImage: String,
    files: [{ name: String, fileType: String, category: String, size: String, link: String }]
  },
  pastPapers: {
    pageTitle: String,
    pageSubtitle: String,
    subheading: String,
    heading: String,
    description: String,
    footerText: String,
    bannerImage: String,
    papers: [{ name: String, program: String, year: String, size: String, link: String, semester: String }]
  },
  codeOfConduct: {
    pageTitle: String,
    pageSubtitle: String,
    bannerImage: String,
    content: String
  },
  antiRagging: {
    pageTitle: String,
    pageSubtitle: String,
    helplinePhone: String,
    bannerImage: String,
    content: String
  },
  grievanceRedressal: {
    pageTitle: String,
    pageSubtitle: String,
    bannerImage: String,
    content: String
  },
  privacyPolicy: {
    pageTitle: String,
    pageSubtitle: String,
    bannerImage: String,
    content: String
  }
}, { timestamps: true });

// --- IIMT Admissions ---
const iimtAdmissionsSchema = new mongoose.Schema({
  howToApply: {
    highlight: String,
    bannerImage: String,
    images: [{ url: String }],
    admissionProcess: [{ step: String, desc: String }],
    documentChecklist: [String],
    helpContact: String
  },
  scholarships: [{ category: String, description: String }],
  faqs: [{ question: String, answer: String }],
  scholarshipsBanner: String,
  scholarshipsHandoverImages: [{ url: String }],
  faqsBanner: String
}, { timestamps: true });

// --- IIMT Placements ---
const iimtPlacementsSchema = new mongoose.Schema({
  stats: [{ label: String, value: String, description: String }],
  process: [{ step: String, desc: String }],
  partners: [{ name: String, logo: String }],
  studentSuccess: [{ name: String, company: String, feedback: String, photo: String }],
  statsInfographic: String,
  placementCeremonyImages: [{ url: String }]
}, { timestamps: true });


// --- IIMT Learning & Activities ---
const iimtLearningSchema = new mongoose.Schema({
  eventsCalendar: {
    pageTitle: String,
    pageSubtitle: String,
    subheading: String,
    heading: String,
    description: String,
    ctaText1: String,
    ctaText2: String,
    registerText: String,
    events: [{
      name: String,
      date: String,
      venue: String,
      category: String,
      description: String,
      image: String
    }]
  },
  skillDevelopment: {
    pageTitle: String,
    pageSubtitle: String,
    description: String,
    bannerImage: String,
    images: [{ url: String }],
    skills: [{ text: String }]
  },
  debatesGD: {
    pageTitle: String,
    pageSubtitle: String,
    subheading: String,
    heading: String,
    description: String,
    participationLabel: String,
    participationPoints: [{ text: String }],
    activities: [{
      title: String,
      description: String,
      icon: String
    }],
    highlightsHeading: String,
    pastHighlights: String,
    highlightsFooter: String,
    bannerImage: String,
    images: [{ url: String }]
  },
  industrialVisits: {
    pageTitle: String,
    pageSubtitle: String,
    subheading: String,
    heading: String,
    description: String,
    sectors: [{
      label: String,
      icon: String
    }],
    whyVisitsMatterHeading: String,
    whyVisitsMatter: [{ text: String }],
    recentVisitsHeading: String,
    visits: [{
      company: String,
      sector: String,
      program: String,
      year: String,
      outcome: String,
      image: String
    }]
  },
  guestLectures: {
    pageTitle: String,
    pageSubtitle: String,
    subheading: String,
    heading: String,
    description: String,
    whatToExpectTitle: String,
    whatToExpectDesc: String,
    nationalSeminarsHeading: String,
    nationalSeminars: String,
    events: [{
      speaker: String,
      designation: String,
      topic: String,
      date: String,
      takeaways: String,
      image: String
    }]
  }
}, { timestamps: true });

// --- IIMT Academics ---
const iimtAcademicsSchema = new mongoose.Schema({
  educationOverview: {
    description: String,
    highlights: [String],
    bannerImage: String,
    editorialPhotos: [{ url: String }],
    infographicImage: String
  },
  pedagogyLabs: {
    introTitle: String,
    introDesc: String,
    introPoints: [String],
    facilities: [{
      title: String,
      description: String,
      icon: String
    }],
    practiceTeachingDesc: String,
    equipmentWideImage: String,
    equipmentCloseups: [{ url: String }],
    studentsWorkingImages: [{ url: String }],
    safetySignageImage: String,
    practiceTeachingImage: String
  },
  certificatePrograms: {
    introText: String,
    programs: [{
      name: String,
      duration: String,
      fee: String,
      eligibility: String,
      desc: String
    }]
  }
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
  link: String,
  bannerImage: String
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
    mapEmbed: String,
    bannerImage: String,
    images: [{ url: String }]
  },
  collegeContacts: [{
    collegeName: String,
    phone: String,
    email: String,
    address: String
  }],
  feedback: {
    pageTitle: String,
    pageSubtitle: String,
    description: String,
    bannerImage: String,
    images: [{ url: String }]
  },
  careers: {
    pageTitle: String,
    pageSubtitle: String,
    description: String,
    email: String,
    bannerImage: String,
    images: [{ url: String }],
    jobs: [{ title: String, qualification: String, dept: String, type: { type: String } }]
  }
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
  IimtLearning: mongoose.model('IimtLearning', iimtLearningSchema, 'iimt_learning'),
  IimtGallery: mongoose.model('IimtGallery', iimtGallerySchema, 'iimt_gallery'),
  IimtNewsEvent: mongoose.model('IimtNewsEvent', iimtNewsEventSchema, 'iimt_newsevents'),
  IimtFeePayment: mongoose.model('IimtFeePayment', iimtFeePaymentSchema, 'iimt_feepayment'),
  IimtStudentPortal: mongoose.model('IimtStudentPortal', iimtStudentPortalSchema, 'iimt_studentportal'),
  IimtContactUs: mongoose.model('IimtContactUs', iimtContactUsSchema, 'iimt_contactus'),
  IimtAcademics: mongoose.model('IimtAcademics', iimtAcademicsSchema, 'iimt_academics'),
  

  IimtStudentZone: mongoose.model('IimtStudentZone', iimtStudentZoneSchema, 'iimt_studentzone'),
  IimtLead: mongoose.model('IimtLead', Lead.schema, 'iimt_leads'),
  IimtJobApplication: mongoose.model('IimtJobApplication', JobApplication.schema, 'iimt_jobapplications'),
};
