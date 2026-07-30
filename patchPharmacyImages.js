/**
 * patchPharmacyImages.js
 * Replaces broken Unsplash hotlink URLs in the Pharmacy MongoDB collections
 * with reliable picsum.photos CDN URLs that work without API keys.
 * Run: node patchPharmacyImages.js
 */

const mongoose = require('mongoose');
require('dotenv').config();

const { 
  PharmacyContact, 
  PharmacyMandatoryDisclosure, 
  PharmacyCodeOfConduct, 
  PharmacyFacility, 
  PharmacyDownload, 
  PharmacyPastPaper, 
  PharmacyGuestLecture, 
  PharmacyIndustrialVisit, 
  PharmacyStudentPortal, 
  PharmacyFeePayment, 
  PharmacyPlacement, 
  PharmacyCareer, 
  PharmacyAdmission, 
  PharmacyCourse,
  PharmacyAboutUs
} = require('./models/pharmacyModels');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms';

// picsum.photos format: https://picsum.photos/seed/{seed}/{width}/{height}
const IMG = {
  banner: 'https://picsum.photos/seed/pharmacy-banner/1200/400',
  gal1: 'https://picsum.photos/seed/pharmacy-gal1/600/400',
  gal2: 'https://picsum.photos/seed/pharmacy-gal2/600/400',
  gal3: 'https://picsum.photos/seed/pharmacy-gal3/600/400',
};

async function patch() {
  await mongoose.connect(MONGODB_URI);
  console.log('✅ Connected to MongoDB');

  const updateSet = {
    $set: {
      bannerImage: IMG.banner,
      images: [{ url: IMG.gal1 }, { url: IMG.gal2 }, { url: IMG.gal3 }]
    }
  };

  // Singletons & Collections
  await PharmacyContact.updateMany({}, updateSet);
  await PharmacyMandatoryDisclosure.updateMany({}, updateSet);
  await PharmacyCodeOfConduct.updateMany({}, updateSet);
  await PharmacyFacility.updateMany({}, updateSet);
  await PharmacyDownload.updateMany({}, updateSet);
  await PharmacyPastPaper.updateMany({}, updateSet);
  await PharmacyGuestLecture.updateMany({}, updateSet);
  await PharmacyIndustrialVisit.updateMany({}, updateSet);
  await PharmacyStudentPortal.updateMany({}, updateSet);
  await PharmacyFeePayment.updateMany({}, updateSet);
  await PharmacyPlacement.updateMany({}, updateSet);
  await PharmacyCareer.updateMany({}, updateSet);
  await PharmacyAdmission.updateMany({}, updateSet);
  await PharmacyCourse.updateMany({}, updateSet);
  await PharmacyAboutUs.updateMany({}, updateSet);

  console.log('✅ Patched: Pharmacy images');

  console.log('\n🎉 All Pharmacy image URLs patched successfully!');
  await mongoose.disconnect();
  process.exit(0);
}

patch().catch(err => {
  console.error('❌ Patch failed:', err);
  process.exit(1);
});
