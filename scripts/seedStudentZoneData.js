require('dotenv').config();
const mongoose = require('mongoose');
const { AyurvedaDigitalServices } = require('../models/ayurvedaModels');

async function seedStudentZone() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  let digital = await AyurvedaDigitalServices.findOne();
  if (!digital) {
    digital = new AyurvedaDigitalServices();
  }

  digital.downloadsSection = {
    title: "Downloads",
    subtitle: "Timetables, syllabi, forms, and notices for current students",
    description: "Access mandatory forms, academic calendars, syllabus documents, and guidelines. All documents are in PDF format for easy accessibility across devices. For any specific document not listed here, please contact the administrative office.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1000&q=80"
  };

  digital.downloads = [
    { title: "BAMS Syllabus 2024-25", fileUrl: "#" },
    { title: "Academic Calendar 2024-25", fileUrl: "#" },
    { title: "Clinical Posting Guidelines", fileUrl: "#" },
    { title: "Internship Completion Certificate Format", fileUrl: "#" },
    { title: "Scholarship Application Form", fileUrl: "#" },
    { title: "Anti-Ragging Undertaking (CCIM Format)", fileUrl: "#" }
  ];

  digital.pastPapersSection = {
    tag: "Exam Resources",
    title: "Prepare with Confidence",
    subtitle: "Access previous years' question papers for comprehensive exam preparation.",
    description: "Access previous years' Mahayogi Guru Gorakhnath AYUSH University question papers for BAMS. These are invaluable resources for understanding exam patterns, critical topics, and frequently asked questions in Ayurvedic classical texts and modern science.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80"
  };

  digital.pastPapers = [
    { title: "Rachana Sharir - Paper I", year: "2023", fileUrl: "#" },
    { title: "Kriya Sharir - Paper I", year: "2023", fileUrl: "#" },
    { title: "Padartha Vigyan", year: "2023", fileUrl: "#" },
    { title: "Sanskrit", year: "2022", fileUrl: "#" },
    { title: "Samhita Adhyayan - I", year: "2022", fileUrl: "#" }
  ];

  digital.studentPortal = {
    title: "Student Portal",
    subtitle: "Access timetables, attendance, and university results",
    description: "Current BAMS students can access their academic profiles, attendance records, clinical postings, and library resources through the unified student portal. University examination results are available via the official Mahayogi Guru Gorakhnath AYUSH University portal.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80",
    link: ""
  };

  digital.feePayment = {
    title: "Fee Structure",
    subtitle: "Pay your fees online securely through our portal",
    description: "Pay tuition fees, hostel charges, and examination fees online through the Ishan Fee Payment Portal. Select Ishan Ayurveda as your institution, choose your program (BAMS), and complete payment via net banking, UPI, or card. Download your receipt immediately after payment.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
    instructions: "Pay tuition fees, hostel charges, and examination fees online through the Ishan Fee Payment Portal. Select Ishan Ayurveda as your institution, choose your program (BAMS), and complete payment via net banking, UPI, or card. Download your receipt immediately after payment.",
    link: "https://fee.ishan.ac"
  };

  await digital.save();
  console.log("Successfully seeded AyurvedaDigitalServices!");
  process.exit(0);
}

seedStudentZone().catch(console.error);
