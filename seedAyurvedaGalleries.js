const mongoose = require('mongoose');
require('dotenv').config();

const { 
  AyurvedaAboutUs,
  AyurvedaAdmissions,
  AyurvedaAcademics
} = require('./models/ayurvedaModels');

const sampleImages = [
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
];

function getSampleGallery(count = 4) {
  return sampleImages.slice(0, count).map((img, i) => ({ image: img, caption: `Campus Activity ${i+1}` }));
}

async function seedGalleries() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB for gallery seeding...");

    // 1. About Us
    let about = await AyurvedaAboutUs.findOne({});
    if (!about) about = new AyurvedaAboutUs({});
    
    if (!about.ourStory) about.ourStory = {};
    if (!about.ourStory.editorialPhotos || about.ourStory.editorialPhotos.length === 0) {
      about.ourStory.editorialPhotos = getSampleGallery(4);
    }
    
    if (!about.missionVision) about.missionVision = {};
    if (!about.missionVision.editorialPhotos || about.missionVision.editorialPhotos.length === 0) {
      about.missionVision.editorialPhotos = getSampleGallery(3);
    }
    await about.save();

    // 2. Admissions
    let adm = await AyurvedaAdmissions.findOne({});
    if (!adm) adm = new AyurvedaAdmissions({});
    
    if (!adm.admissionProcess) adm.admissionProcess = {};
    if (!adm.admissionProcess.orientationPhotos || adm.admissionProcess.orientationPhotos.length === 0) {
      adm.admissionProcess.orientationPhotos = getSampleGallery(5);
    }
    
    if (!adm.scholarships) adm.scholarships = {};
    if (!adm.scholarships.certificateHandoverImages || adm.scholarships.certificateHandoverImages.length === 0) {
      adm.scholarships.certificateHandoverImages = getSampleGallery(4);
    }
    await adm.save();

    // 3. Academics
    let acad = await AyurvedaAcademics.findOne({});
    if (!acad) acad = new AyurvedaAcademics({});
    
    if (!acad.bamsProgram) acad.bamsProgram = {};
    if (!acad.bamsProgram.studentActivityImages || acad.bamsProgram.studentActivityImages.length === 0) {
      acad.bamsProgram.studentActivityImages = getSampleGallery(6);
    }
    
    if (!acad.scopeOfBams) acad.scopeOfBams = {};
    if (!acad.scopeOfBams.editorialImages || acad.scopeOfBams.editorialImages.length === 0) {
      acad.scopeOfBams.editorialImages = getSampleGallery(4);
    }
    await acad.save();

    console.log("Successfully seeded Ayurveda Galleries!");
    process.exit(0);

  } catch (error) {
    console.error("Error seeding galleries:", error);
    process.exit(1);
  }
}

seedGalleries();
