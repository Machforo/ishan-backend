const mongoose = require('mongoose');
require('dotenv').config();
const {
  HospitalHomePage, HospitalDoctor, HospitalDepartment, HospitalServices,
  HospitalTestimonial, HospitalAboutUs, HospitalPanchkarma
} = require('./models/hospitalModels');

const targetImage = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&q=80";

const updateHospitalImages = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB for Hospital Image Overwriting...");

    // 1. Home Page
    let homePage = await HospitalHomePage.findOne();
    if (homePage) {
      if (homePage.panchkarmaImage) homePage.panchkarmaImage = targetImage;
      if (homePage.institutionalProfile) homePage.institutionalProfile.image = targetImage;
      if (homePage.banners && homePage.banners.length > 0) {
        homePage.banners.forEach(b => b.image = targetImage);
      }
      if (homePage.gallery && homePage.gallery.length > 0) {
        homePage.gallery.forEach(g => g.image = targetImage);
      }
      await homePage.save();
      console.log("Updated Hospital Home Page");
    }

    // 2. About Us
    let aboutUs = await HospitalAboutUs.findOne();
    if (aboutUs) {
      if (aboutUs.ourStory) aboutUs.ourStory.image = targetImage;
      await aboutUs.save();
      console.log("Updated Hospital About Us");
    }

    // 3. Departments
    let departments = await HospitalDepartment.find({});
    for (const dept of departments) {
      dept.image = targetImage;
      await dept.save();
    }
    console.log(`Updated ${departments.length} Hospital Departments`);

    // 4. Panchkarma
    let panchkarma = await HospitalPanchkarma.find({});
    for (const p of panchkarma) {
      p.image = targetImage;
      await p.save();
    }
    console.log(`Updated ${panchkarma.length} Hospital Panchkarma`);

    // 5. Doctors
    let doctors = await HospitalDoctor.find({});
    for (const doc of doctors) {
      doc.image = targetImage;
      await doc.save();
    }
    console.log(`Updated ${doctors.length} Hospital Doctors`);
    
    console.log("Hospital Image Overwriting Completed Successfully.");
    process.exit(0);
  } catch (err) {
    console.error("Error overwriting hospital images:", err);
    process.exit(1);
  }
};

updateHospitalImages();
