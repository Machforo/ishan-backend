const mongoose = require('mongoose');
require('dotenv').config();
const { HospitalAboutUs, HospitalHomePage } = require('./models/hospitalModels');

async function fix() {
  try {
    console.log("Connecting to Database...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected.");

    // Check HospitalAboutUs
    const aboutUsDocs = await HospitalAboutUs.find();
    console.log(`Found ${aboutUsDocs.length} HospitalAboutUs documents.`);
    for (const doc of aboutUsDocs) {
      let modified = false;
      if (doc.subtitle && doc.subtitle.includes("cae.")) {
        doc.subtitle = doc.subtitle.replace("cae.", "care.");
        modified = true;
        console.log("Fixing typo in HospitalAboutUs subtitle:", doc.subtitle);
      }
      if (doc.title && doc.title.includes("cae.")) {
        doc.title = doc.title.replace("cae.", "care.");
        modified = true;
      }
      if (doc.ourStory && doc.ourStory.description && doc.ourStory.description.includes("cae.")) {
        doc.ourStory.description = doc.ourStory.description.replace("cae.", "care.");
        modified = true;
      }
      if (modified) {
        await doc.save();
        console.log("Saved HospitalAboutUs document.");
      }
    }

    // Check HospitalHomePage
    const homeDocs = await HospitalHomePage.find();
    console.log(`Found ${homeDocs.length} HospitalHomePage documents.`);
    for (const doc of homeDocs) {
      let modified = false;
      if (doc.experienceText && doc.experienceText.includes("cae.")) {
        doc.experienceText = doc.experienceText.replace("cae.", "care.");
        modified = true;
        console.log("Fixing typo in HospitalHomePage experienceText");
      }
      // Banners
      if (doc.banners) {
        doc.banners.forEach(banner => {
          if (banner.subheading && banner.subheading.includes("cae.")) {
            banner.subheading = banner.subheading.replace("cae.", "care.");
            modified = true;
            console.log("Fixing typo in banner subheading");
          }
          if (banner.heading && banner.heading.includes("cae.")) {
            banner.heading = banner.heading.replace("cae.", "care.");
            modified = true;
          }
        });
      }
      if (modified) {
        await doc.save();
        console.log("Saved HospitalHomePage document.");
      }
    }

    console.log("Finished searching and fixing.");
    process.exit(0);
  } catch (err) {
    console.error("Error in fix:", err);
    process.exit(1);
  }
}

fix();
