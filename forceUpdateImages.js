const mongoose = require('mongoose');
require('dotenv').config();
const {
  AyurvedaHomePage, AyurvedaAboutUs, AyurvedaCourse, AyurvedaAdmissions,
  AyurvedaAcademics, AyurvedaResearch, AyurvedaFacilities, AyurvedaDepartment,
  AyurvedaContact, AyurvedaMandatoryDisclosure
} = require('./models/ayurvedaModels');

const targetImage = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&q=80";

const makeGallery = (count, text = "Image") => {
  return Array.from({ length: count }).map((_, i) => ({
    image: targetImage,
    caption: `${text} ${i + 1}`
  }));
};

const updateImages = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB for Image Overwriting...");

    // 1. Home Page
    let homePage = await AyurvedaHomePage.findOne();
    if (homePage) {
      if (homePage.whySection) homePage.whySection.campusImage = targetImage;
      if (homePage.accreditations) {
        homePage.accreditations.forEach(a => a.image = targetImage);
      }
      await homePage.save();
      console.log("Updated Home Page");
    }

    // 2. About Us
    let aboutUs = await AyurvedaAboutUs.findOne();
    if (aboutUs) {
      if (aboutUs.ourStory) {
        aboutUs.ourStory.bannerImage = targetImage;
        aboutUs.ourStory.editorialPhotos = makeGallery(3, "Campus Editorial");
      }
      if (aboutUs.groupHistory) aboutUs.groupHistory.timelineInfographic = targetImage;
      if (aboutUs.chairmanMessage) aboutUs.chairmanMessage.candidImage = targetImage;
      if (aboutUs.principalMessage) aboutUs.principalMessage.candidImage = targetImage;
      if (aboutUs.missionVision) {
        aboutUs.missionVision.bannerImage = targetImage;
        aboutUs.missionVision.editorialPhotos = makeGallery(2, "Vision Editorial");
      }
      if (aboutUs.approvalsSection) aboutUs.approvalsSection.campusCredibilityPhoto = targetImage;
      await aboutUs.save();
      console.log("Updated About Us");
    }

    // 3. Admissions
    let admissions = await AyurvedaAdmissions.findOne();
    if (admissions) {
      if (admissions.admissionProcess) {
        admissions.admissionProcess.bannerImage = targetImage;
        admissions.admissionProcess.counsellorImage = targetImage;
        admissions.admissionProcess.orientationPhotos = makeGallery(3, "Orientation");
      }
      if (admissions.scholarships) {
        admissions.scholarships.bannerImage = targetImage;
        admissions.scholarships.certificateHandoverImages = makeGallery(2, "Certificate Handover");
      }
      await admissions.save();
      console.log("Updated Admissions");
    }

    // 4. Academics
    let academics = await AyurvedaAcademics.findOne();
    if (academics) {
      if (academics.bamsProgram) {
        academics.bamsProgram.bannerImage = targetImage;
        academics.bamsProgram.careerOutcomeImage = targetImage;
        academics.bamsProgram.facultyTeachingImage = targetImage;
        academics.bamsProgram.studentActivityImages = makeGallery(3, "Student Activity");
      }
      if (academics.scopeOfBams) {
        academics.scopeOfBams.bannerImage = targetImage;
        academics.scopeOfBams.editorialImages = makeGallery(3, "Scope Editorial");
      }
      await academics.save();
      console.log("Updated Academics");
    }

    // 5. Research
    let research = await AyurvedaResearch.findOne();
    if (research) {
      if (research.researchJournal) {
        research.researchJournal.boardHeadshots = [
          { image: targetImage, name: "Dr. A. Sharma" },
          { image: targetImage, name: "Dr. B. Singh" }
        ];
        research.researchJournal.researchActivityImages = makeGallery(3, "Research Activity");
      }
      if (research.placements) {
        research.placements.statsInfographic = targetImage;
        research.placements.placementCeremonyImages = makeGallery(10, "Placement Ceremony");
      }
      if (research.careers) {
        research.careers.facultyTeamPhoto = targetImage;
        research.careers.campusWorkplaceImages = makeGallery(3, "Campus Workplace");
      }
      await research.save();
      console.log("Updated Research");
    }

    // 6. Facilities
    let facilities = await AyurvedaFacilities.findOne();
    if (facilities) {
      if (facilities.herbalGarden) {
        facilities.herbalGarden.wideAngleImage = targetImage;
        facilities.herbalGarden.plantCloseups = makeGallery(4, "Plant Closeup");
        facilities.herbalGarden.studentsLearningImages = makeGallery(3, "Students Learning");
      }
      if (facilities.hostel) {
        facilities.hostel.roomInteriors = makeGallery(3, "Room Interior");
        facilities.hostel.washroomImages = makeGallery(2, "Washroom");
        facilities.hostel.diningHallImages = makeGallery(3, "Dining Hall");
        facilities.hostel.commonRoomImages = makeGallery(2, "Common Room");
        facilities.hostel.securityCctvImages = makeGallery(2, "Security");
      }
      const generalFacilities = ['infrastructure', 'auditorium', 'sports'];
      for (const fac of generalFacilities) {
        if (facilities[fac]) {
          facilities[fac].heroWideAngle = targetImage;
          facilities[fac].eventPhoto = targetImage;
          facilities[fac].entranceImage = targetImage;
          facilities[fac].interiorDetails = makeGallery(3, `${fac} Interior`);
        }
      }
      await facilities.save();
      console.log("Updated Facilities");
    }

    // 7. Departments
    let departments = await AyurvedaDepartment.find({});
    for (const dept of departments) {
      if (!dept.name || !dept.slug) continue;
      dept.equipmentWideImage = targetImage;
      dept.safetySignageImage = targetImage;
      dept.equipmentCloseups = makeGallery(5, "Equipment Closeup");
      dept.studentsWorkingImages = makeGallery(4, "Students Working");
      await dept.save();
    }
    console.log(`Updated ${departments.length} Departments`);

    // 8. Contact
    let contact = await AyurvedaContact.findOne();
    if (contact) {
      if (contact.mainContact) {
        contact.mainContact.receptionInterior = targetImage;
        contact.mainContact.buildingExteriors = makeGallery(2, "Building Exterior");
      }
      await contact.save();
      console.log("Updated Contact");
    }

    // 9. Mandatory Disclosure
    let mandatory = await AyurvedaMandatoryDisclosure.findOne();
    if (mandatory) {
      mandatory.image = targetImage;
      await mandatory.save();
      console.log("Updated Mandatory Disclosure");
    }

    console.log("Image Overwriting Completed Successfully.");
    process.exit(0);
  } catch (err) {
    console.error("Error overwriting images:", err);
    process.exit(1);
  }
};

updateImages();
