const mongoose = require('mongoose');
require('dotenv').config();
const { LandingPage1, LandingPage2 } = require('./models/LandingPageModels');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms';

const commonData = {
  logo: "https://www.ishan.ac/icons/ishan-logo.svg",
  newsFlash: [
    { text: "Admissions Open for Academic Year 2024-25" },
    { text: "Ishan Institute of Law ranked among top law colleges in UP" }
  ],
  hero: {
    banners: [
      {
        id: 1,
        image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?w=1920",
        tag: "MANAGEMENT & TECHNOLOGY",
        title: "Pioneering the Future of Global Business",
        subtitle: "30+ Years of Excellence in Management Education",
        ctaText: "Apply Now",
        ctaLink: "#contact"
      },
      {
        id: 2,
        image: "https://images.pexels.com/photos/159844/science-lab-test-tube-laboratory-159844.jpeg?w=1920",
        tag: "PHARMACY",
        title: "Innovation in Pharmaceutical Sciences",
        subtitle: "Shape the healthcare industry with our industry-aligned curriculum.",
        ctaText: "Learn More",
        ctaLink: "#programmes"
      }
    ]
  },
  highlights: [{ text: "30+ Years Legacy" }, { text: "100% Placement Support" }],
  collegeSection: {
    heading: "Our 5 Specialist Colleges",
    subheading: "Integrated learning environment with focused expertise."
  },
  colleges: [
    {
      id: 1,
      name: "Iimt Ishan Institute",
      short: "IIMT",
      desc: "Leader in management and technology education since 1994.",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?w=800",
      accreditation: "AICTE APPROVED",
      ctaText: "Explore IIMT",
      ctaLink: "https://ishan-ascend.vercel.app/"
    },
    {
      id: 2,
      name: "Ishan Institute of Law",
      short: "IIL",
      desc: "Premier legal education with focus on clinical legal practices.",
      image: "https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?w=800",
      accreditation: "BCI APPROVED",
      ctaText: "Explore Law",
      ctaLink: "https://apex-legal-orpin.vercel.app/"
    }
  ],
  aboutContent: {
    title: "The first multi-disciplinary institution of Greater Noida",
    description: "Founded in 1994, Ishan Group of Institutions has been a beacon of academic excellence. We empower students with practical knowledge and industry insights."
  },
  aboutImages: [
    { url: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?w=1200" },
    { url: "https://images.pexels.com/photos/159844/science-lab-test-tube-laboratory-159844.jpeg?w=1200" }
  ],
  campusLife: {
    nationalitiesCount: 15,
    sections: [
      {
        id: 1,
        title: "Life at Ishan",
        image: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?w=1200",
        description: "A vibrant campus culture that fosters growth and creativity.",
        gallery: [
          { url: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?w=800" },
          { url: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?w=800" }
        ]
      }
    ]
  },
  researchSection: {
    heading: "Research & Innovation",
    subheading: "Pushing boundaries in law, management, and medicine.",
    ctaText: "Research Portal",
    ctaLink: "#research"
  },
  researchCards: [
    { id: 1, title: "Modern Legal Research", tag: "LAW", image: "https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?w=800" }
  ],
  placementStats: [
    { num: "500+", label: "Recruiters" },
    { num: "98%", label: "Placement Rate" }
  ],
  recruiters: [
    { name: "Infosys" },
    { name: "TCS" },
    { name: "HCL" }
  ],
  testimonials: [
    {
      id: 1,
      name: "Ankit Verma",
      designation: "Legal Consultant",
      quote: "Ishan shaped my career in law.",
      course: "BA LL.B",
      batch: "2018-23",
      image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?w=600"
    }
  ],
  news: [
    {
      id: 1,
      date: "25 Oct 2024",
      title: "Annual Sports Meet 2024",
      description: "Join us for a day of athletic excellence and team spirit.",
      image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?w=800"
    }
  ],
  socialPosts: [
    { id: 1, likes: 450, image: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?w=800", caption: "Campus vibes!" }
  ],
  contactInfo: {
    location: "Greater Noida, UP, 201310",
    admissionNumber: "+91-120-2326600",
    email: "admissions@ishan.ac",
    officeHours: "Mon-Sat: 9 AM - 5 PM"
  },
  footerLinks: {
    quickLinks: [{ text: "Privacy Policy" }],
    rankings: [{ text: "NAAC Accreditation" }],
    group: [{ text: "About Ishan" }]
  }
};

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB for seeding...");

    await LandingPage1.deleteMany({});
    await LandingPage2.deleteMany({});

    await LandingPage1.create(commonData);
    await LandingPage2.create(commonData);

    console.log("Landing Pages seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
}

seed();
