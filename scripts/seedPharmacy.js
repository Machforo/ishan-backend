const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { 
  PharmacyHomePage, PharmacyFaculty, PharmacyProgram, PharmacyResearch 
} = require('../models/pharmacyModels');

const seedPharmacy = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms');
    console.log('Connected to MongoDB for Pharmacy seeding...');

    await PharmacyHomePage.deleteMany({});
    await PharmacyFaculty.deleteMany({});
    await PharmacyProgram.deleteMany({});
    await PharmacyResearch.deleteMany({});

    // 1. HomePage
    await PharmacyHomePage.create({
      banners: [
        { heading: "Advancing Pharmaceutical Sciences", subheading: "B.Pharm and D.Pharm Admissions 2026", image: "https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?auto=format&fit=crop&q=80&w=1600", ctaText: "Discover Programs" }
      ],
      stats: [
        { label: "Modern Labs", value: "15+", icon: "Beaker" },
        { label: "Industrial Collabs", value: "30+", icon: "Globe" }
      ],
      aboutSnippet: { title: "About Pharmacy Institute", content: "Creating pharmacists of the future through research-driven education and industrial training.", image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=80&w=800" }
    });

    // 2. Faculty
    await PharmacyFaculty.create([
      { name: "Dr. Rajesh Gupta", designation: "Principal", department: "Pharmaceutics", qualification: "Ph.D", experience: "20 Years", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
      { name: "Ms. Anjali Verma", designation: "Asst. Professor", department: "Pharmacology", qualification: "M.Pharm", experience: "5 Years", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400" }
    ]);

    // 3. Programs
    await PharmacyProgram.create([
      { name: "B.Pharm (Bachelor of Pharmacy)", overview: "A 4-year undergraduate course in the field of pharmacy education.", curriculum: "Covering Medicinal Chemistry, Pharmacology, etc.", eligibility: "10+2 with PCB/PCM (45%)", duration: "4 Years", slug: "b-pharm" },
      { name: "D.Pharm (Diploma in Pharmacy)", overview: "A 2-year foundational diploma program.", curriculum: "Basics of Pharmacy & Pharmaceutical Chemistry.", eligibility: "10+2 with PCB/PCM", duration: "2 Years", slug: "d-pharm" }
    ]);

    // 4. Research
    await PharmacyResearch.create({
      overview: "Our research cell focuses on drug delivery systems and herbal drug standardization.",
      projects: [
        { title: "Liposomal Drug Delivery", description: "Enhancing bioavailability of poorly soluble drugs.", status: "Ongoing" },
        { title: "Herbal Antioxidants", description: "Extraction and characterization of natural antioxidants.", status: "Completed" }
      ],
      publications: [
        { title: "Journal of Pharmaceutics Vol 12", author: "Dr. Gupta", journal: "Pharm Tech", year: "2024" }
      ]
    });

    console.log('Pharmacy data seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding Pharmacy:', err);
    process.exit(1);
  }
};

seedPharmacy();
