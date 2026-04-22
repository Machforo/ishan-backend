const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { 
  LegalHomePage, LegalFaculty, LegalProgram, LegalInfrastructure 
} = require('../models/legalModels');

const seedLegal = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms');
    console.log('Connected to MongoDB for Legal seeding...');

    await LegalHomePage.deleteMany({});
    await LegalFaculty.deleteMany({});
    await LegalProgram.deleteMany({});
    await LegalInfrastructure.deleteMany({});

    // 1. HomePage
    await LegalHomePage.create({
      banners: [
        { heading: "Empowering Legal Minds", subheading: "BA LL.B and LL.B Admissions 2026", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600", ctaText: "Apply Now" }
      ],
      stats: [
        { label: "Moot Court Awards", value: "25+", icon: "Gavel" },
        { label: "Placements Rate", value: "95%", icon: "Briefcase" }
      ],
      aboutSnippet: { title: "Excel in Law", content: "Ishan Institute of Law is committed to creating legal professionals with a heart for justice.", image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800" }
    });

    // 2. Faculty
    await LegalFaculty.create([
      { name: "Prof. S.K. Singh", designation: "Dean", department: "Constitutional Law", qualification: "LL.D, Ph.D", experience: "25 Years", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400", specialization: ["Constitutional Law", "Administrative Law"] },
      { name: "Dr. Pallavi Roy", designation: "Asst. Professor", department: "Criminal Law", qualification: "Ph.D, UGC NET", experience: "8 Years", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400", specialization: ["IPC", "Cyber Law"] }
    ]);

    // 3. Programs
    await LegalProgram.create([
      { name: "BA LL.B (5 Year Integrated)", overview: "An integrated dual degree program focusing on social sciences and law.", curriculum: "10 Semesters covering family law, constitutional law, etc.", eligibility: "10+2 with 45%", duration: "5 Years", slug: "ba-llb" },
      { name: "LL.B (3 Year Graduate)", overview: "A professional degree for graduates across any stream.", curriculum: "6 Semesters of core legal education.", eligibility: "Graduation with 45%", duration: "3 Years", slug: "llb" }
    ]);

    // 4. Infrastructure
    await LegalInfrastructure.create({
      library: { image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1200", content: "Extensive collection of AIR, SCC journals and international legal databases.", totalBooks: "15,000+" },
      mootCourt: { image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=801", description: "State-of-the-art Moot Court hall for practical litigation training." },
      hostel: { image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=801", content: "Dedicated living spaces with high-speed internet and security." }
    });

    console.log('Legal data seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding Legal:', err);
    process.exit(1);
  }
};

seedLegal();
