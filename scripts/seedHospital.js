const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { 
  HospitalHomePage, HospitalDoctor, HospitalDepartment, HospitalServices 
} = require('../models/hospitalModels');

const seedHospital = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms');
    console.log('Connected to MongoDB for Hospital seeding...');

    await HospitalHomePage.deleteMany({});
    await HospitalDoctor.deleteMany({});
    await HospitalDepartment.deleteMany({});
    await HospitalServices.deleteMany({});

    // 1. HomePage
    await HospitalHomePage.create({
      banners: [
        { heading: "Traditional Healing, Modern Care", subheading: "Authentic Ayurveda treatments for all chronic ailments.", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1600", ctaText: "Book Appointment" }
      ],
      stats: [
        { label: "Successful Treatments", value: "25000+", description: "Patients healed since 2016" },
        { label: "Beds Available", value: "100", description: "IPD facility with 24/7 care" }
      ],
      aboutHospital: { title: "About Ishan Hospital", content: "Our hospital specializes in Shirodhara, Panchkarma, and specialized treatments for skin, joints, and digestive health.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" }
    });

    // 2. Doctors
    await HospitalDoctor.create([
      { name: "Dr. Arvind Kumar", designation: "Chief Physician", department: "Kayachikitsa", qualification: "MD (Ayurveda)", experience: "15 Years", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b1cb?auto=format&fit=crop&q=80&w=400", opdTimings: "10:00 AM - 04:00 PM", specialization: ["Diabetes", "Obesity"] },
      { name: "Dr. Meena Sharma", designation: "Sr. Consultant", department: "Shalya Tantra", qualification: "MS (Ayurveda)", experience: "10 Years", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400", opdTimings: "11:00 AM - 05:00 PM", specialization: ["Piles", "Fistula"] }
    ]);

    // 3. Departments
    await HospitalDepartment.create([
      { name: "Kayachikitsa", description: "Internal medicine department focusing on metabolic and systemic disorders.", image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800", treatments: ["Diabetes Management", "Jaundice", "Arthritis"], slug: "kayachikitsa" },
      { name: "Panchkarma", description: "Detoxification and rejuvenation therapy.", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=801", treatments: ["Shirodhara", "Vamana", "Virechana"], slug: "panchkarma" }
    ]);

    // 4. Services
    await HospitalServices.create({
      title: "Patient Centric Services",
      description: "We provide personalized treatment plans merging lifestyle advice with medicine.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=801",
      features: ["24/7 Pharmacy", "Clean IPD Rooms", "Daily Yoga Sessions", "Ayurvedic Diet Plan"]
    });

    console.log('Hospital data seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding Hospital:', err);
    process.exit(1);
  }
};

seedHospital();
