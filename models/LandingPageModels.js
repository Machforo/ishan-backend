const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  id: Number,
  image: String,
  tag: String,
  title: String,
  subtitle: String,
  ctaText: { type: String, default: "Apply Now" },
  ctaLink: { type: String, default: "#contact" },
  specialisations: [{ name: String }],
  programs: [{ name: String }],
  stats: [{ num: String, label: String }]
});

const collegeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  short: String,
  desc: String,
  image: String,
  programs: String,
  accreditation: String,
  ctaText: { type: String, default: "Explore" },
  ctaLink: { type: String, default: "#programmes" }
});

const campusLifeSchema = new mongoose.Schema({
  id: Number,
  title: String,
  image: String,
  gallery: [{ url: String }],
  description: String
});

const researchCardSchema = new mongoose.Schema({
  id: Number,
  tag: String,
  title: String,
  image: String
});

const testimonialSchema = new mongoose.Schema({
  id: Number,
  quote: String,
  name: String,
  designation: String, // Added as per user request (Feedback)
  course: String,
  batch: String,
  image: String
});

const achievementSchema = new mongoose.Schema({
  id: Number,
  title: String,
  desc: String
});

const newsSchema = new mongoose.Schema({
  id: Number,
  date: String,
  title: String,
  description: String, // Added as per user request
  image: String
});

const socialPostSchema = new mongoose.Schema({
  id: Number,
  likes: Number,
  image: String,
  caption: String
});

const navMenuItemSchema = new mongoose.Schema({
  title: String,
  items: [{ name: String }]
});

const landingPageSchema = new mongoose.Schema({
  logo: { type: String, default: "https://www.ishan.ac/icons/ishan-logo.svg" },
  newsFlash: [{ tag: String, date: String, title: String, body: String }], // For "News Reflected" in Home Banner
  hero: { 
    banners: [bannerSchema] 
  },
  highlights: [{ text: String }],
  programCategories: [{ id: String, label: String }],
  programs: {
    ug: [{ name: String, school: String }],
    pg: [{ name: String, school: String }],
    diploma: [{ name: String, school: String }],
    doctoral: [{ name: String, school: String }]
  },
  programmeSection: {
    heading: { type: String, default: "Discover your future-ready programme" },
    subheading: { type: String, default: "Explore programmes across Law, Management, Pharmacy, Ayurveda and Education, approved by BCI, AICTE, PCI, NCISM and NCTE." }
  },
  collegeSection: {
    heading: { type: String, default: "Our 5 Colleges" },
    subheading: { type: String, default: "Specialist faculties. One campus." }
  },
  colleges: [collegeSchema],
  campusLife: {
    nationalitiesCount: { type: Number, default: 15 },
    sections: [campusLifeSchema]
  },
  campusLinks: [{ text: String }],
  facilityLinks: [{ text: String }],
  researchSection: {
    heading: { type: String, default: "Research Hub" },
    subheading: { type: String, default: "Driving innovation and academic excellence." },
    ctaText: { type: String, default: "Know More" },
    ctaLink: { type: String, default: "#research" }
  },
  researchCards: [researchCardSchema],
  researchLinks: [{ text: String }],
  placementStats: [{ num: String, label: String }],
  recruiters: [{ name: String }],
  testimonials: [testimonialSchema],
  achievements: [achievementSchema],
  aboutImages: [{ url: String }],
  aboutContent: {
    title: { type: String, default: "The first multi-disciplinary institution of Greater Noida, shaping professionals since 1994" },
    description: { type: String, default: "From a single management institute to five thriving colleges across Law, Management, Pharmacy, Ayurveda and Education, Ishan has grown into one of North India's most respected names in higher education, with 50,000+ alumni in leadership roles worldwide." }
  },
  news: [newsSchema],
  socialPosts: [socialPostSchema],
  navMenu: [navMenuItemSchema],
  contactInfo: {
    location: { type: String, default: "Greater Noida, UP" },
    admissionNumber: { type: String, default: "+91-120-2326600" },
    email: { type: String, default: "admissions@ishan.ac" },
    officeHours: { type: String, default: "9:00 AM - 5:00 PM" },
    instagramHandle: { type: String, default: "@ishan_institutions" },
    instagramLink: { type: String, default: "#" }
  },
  footerLinks: {
    quickLinks: [{ text: String }],
    rankings: [{ text: String }],
    group: [{ text: String }]
  },
  floatingWidgets: {
    whatsapp: { type: String, default: "911234567890" },
    phone: { type: String, default: "+91-120-2326600" },
    applyLink: { type: String, default: "https://ishan-ascend.vercel.app/admissions" }
  }
}, { timestamps: true });

module.exports = {
  LandingPage1: mongoose.model('LandingPage1', landingPageSchema),
  LandingPage2: mongoose.model('LandingPage2', landingPageSchema)
};
