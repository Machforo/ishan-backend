const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { 
  AyurvedaHomePage, AyurvedaAboutUs, AyurvedaCourse, AyurvedaHospital, AyurvedaFacilities 
} = require('../models/ayurvedaModels');

const seedAyurveda = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms');
    console.log('Connected to MongoDB for Ayurveda seeding...');

    // Clear existing
    await AyurvedaHomePage.deleteMany({});
    await AyurvedaAboutUs.deleteMany({});
    await AyurvedaCourse.deleteMany({});
    await AyurvedaHospital.deleteMany({});
    await AyurvedaFacilities.deleteMany({});

    // 1. HomePage
    await AyurvedaHomePage.create({
      banners: [
        { heading: "Unlock Ancient Wisdom", subheading: "BAMS Admissions Open 2026", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1600", ctaText: "Apply Now", ctaLink: "/admissions" },
        { heading: "Holistic Healing", subheading: "Explore our Panchkarma Center", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1601", ctaText: "View Hospital", ctaLink: "/hospital" }
      ],
      stats: [
        { label: "Years of Excellence", value: "20+", icon: "Award" },
        { label: "Successful Alumni", value: "5000+", icon: "Users" },
        { label: "Herbal Species", value: "300+", icon: "Leaf" }
      ],
      aboutSnippet: { title: "Pioneering Ayurvedic Education", description: "Ishan Ayurvedic Medical College and Research Centre is dedicated to the propagation of authentic Ayurveda.", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b1cb?auto=format&fit=crop&q=80&w=800", ctaText: "Read Story" }
    });

    // 2. Courses
    await AyurvedaCourse.create([
      { name: "BAMS (Bachelor of Ayurvedic Medicine & Surgery)", duration: "5.5 Years", eligibility: "10+2 with PCB (50%) + NEET Qualified", overview: "The primary undergraduate program for aspiring Ayurvedic doctors.", careerScope: "Private practice, Government medical officer, Research, Teaching.", slug: "bams" }
    ]);

    // 3. About Us
    await AyurvedaAboutUs.create({
      ourStory: { image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800", description: "Established with a vision to integrate traditional Ayurveda with modern science." },
      chairmanMessage: { name: "Dr. D.K. Garg", message: "Our mission is to produce world-class Ayurvedic clinicians.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
      missionVision: { vision: "To be a global leader in Ayurvedic education.", mission: "Providing quality treatment and rigorous academic training.", values: ["Authenticity", "Innovation", "Compassion"] }
    });

    // 4. Hospital
    await AyurvedaHospital.create({
      overview: { image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200", content: "A fully equipped 100-bed hospital providing authentic Ayurvedic treatments." },
      panchkarma: [
        { title: "Shirodhara", description: "Continuous flow of oil on forehead for stress relief.", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" },
        { title: "Abhyanga", description: "Full body oil massage for detoxification.", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=401" }
      ],
      departments: [{ name: "Kayachikitsa", description: "Internal Medicine" }, { name: "Shalya Tantra", description: "General Surgery" }]
    });

    // 5. Facilities
    await AyurvedaFacilities.create({
      herbalGarden: { image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1200", description: "Spread over 1 acre with rare therapeutic plants.", speciesCount: "350+" },
      hostel: { image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800", content: "Safe and comfortable separate hostels for boys and girls." },
      infrastructure: { image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800", content: "Wi-Fi enabled campus with state-of-the-art anatomy labs." },
      auditorium: { image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800", seating: "500+" }
    });

    console.log('Ayurveda data seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding Ayurveda:', err);
    process.exit(1);
  }
};

seedAyurveda();
