const mongoose = require('mongoose');
require('dotenv').config();

const { HospitalHomePage, HospitalAboutUs } = require('./models/hospitalModels');
const { AyurvedaHomePage, AyurvedaAboutUs } = require('./models/ayurvedaModels');

const targetImage = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&q=80";
const placehold = "https://placehold.co/800x600?text=Ayurveda+Image";

const clearIfMatch = (val) => {
  if (val === targetImage || val === placehold || (typeof val === 'string' && val.includes('placehold.co'))) return "";
  return val;
};

const run = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  // Hospital Home
  const hHome = await HospitalHomePage.findOne();
  if (hHome) {
    if (hHome.panchkarmaImage === targetImage) hHome.panchkarmaImage = "";
    if (hHome.institutionalProfile && hHome.institutionalProfile.image === targetImage) {
      hHome.institutionalProfile.image = "";
    }
    if (hHome.banners) {
      hHome.banners.forEach(b => { if (b.image === targetImage) b.image = ""; });
    }
    if (hHome.gallery) {
      hHome.gallery.forEach(g => { if (g.image === targetImage) g.image = ""; });
    }
    await hHome.save();
    console.log("Restored Hospital Home Page");
  }

  // Hospital About
  const hAbout = await HospitalAboutUs.findOne();
  if (hAbout && hAbout.ourStory && hAbout.ourStory.image === targetImage) {
    hAbout.ourStory.image = "";
    await hAbout.save();
    console.log("Restored Hospital About Us");
  }

  // Ayurveda Home
  const aHome = await AyurvedaHomePage.findOne();
  if (aHome) {
    if (aHome.whySection) aHome.whySection.campusImage = clearIfMatch(aHome.whySection.campusImage);
    if (aHome.institutionalProfile) aHome.institutionalProfile.image = clearIfMatch(aHome.institutionalProfile.image);
    if (aHome.banners) aHome.banners.forEach(b => b.image = clearIfMatch(b.image));
    if (aHome.aboutSnippet) aHome.aboutSnippet.image = clearIfMatch(aHome.aboutSnippet.image);
    if (aHome.lifeAtIshan) aHome.lifeAtIshan.forEach(l => l.image = clearIfMatch(l.image));
    await aHome.save();
    console.log("Restored Ayurveda Home Page");
  }

  // Ayurveda About
  const aAbout = await AyurvedaAboutUs.findOne();
  if (aAbout) {
    if (aAbout.ourStory) aAbout.ourStory.bannerImage = clearIfMatch(aAbout.ourStory.bannerImage);
    if (aAbout.missionVision) aAbout.missionVision.bannerImage = clearIfMatch(aAbout.missionVision.bannerImage);
    await aAbout.save();
    console.log("Restored Ayurveda About Us");
  }

  console.log("Done");
  process.exit(0);
};

run();
