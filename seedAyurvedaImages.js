const mongoose = require('mongoose');
require('dotenv').config();
const {
  AyurvedaHomePage, AyurvedaAboutUs, AyurvedaCourse, AyurvedaAdmissions,
  AyurvedaAcademics, AyurvedaFaculty, AyurvedaVisitingFaculty, AyurvedaDepartment, AyurvedaHospital, AyurvedaStudentCorner,
  AyurvedaResearch, AyurvedaFacilities, AyurvedaDigitalServices, AyurvedaContact,
  AyurvedaFAQ, AyurvedaNews, AyurvedaBlog, AyurvedaTestimonial, AyurvedaSiteConfig,
  AyurvedaMandatoryDisclosure, AyurvedaCodeOfConduct
} = require('./models/ayurvedaModels');

const dummyImage = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&q=80";
const dummyImageSmall = dummyImage;
const dummyImageWide = dummyImage;

const makeGallery = (count, text = "Image") => {
  return Array.from({ length: count }).map((_, i) => ({
    image: dummyImage,
    caption: `${text} ${i + 1}`
  }));
};

const seedAyurvedaImages = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB for Image Seeding...");

    // 1. Home Page
    let homePage = await AyurvedaHomePage.findOne();
    if (homePage) {
      if (homePage.whySection) {
        homePage.whySection.campusImage = homePage.whySection.campusImage || dummyImageWide;
      }
      if (!homePage.accreditations || homePage.accreditations.length === 0) {
        homePage.accreditations = [
          { image: dummyImageSmall, name: "NCISM" },
          { image: dummyImageSmall, name: "AYUSH" },
          { image: dummyImageSmall, name: "UP Government" }
        ];
      }
      await homePage.save();
      console.log("Updated Home Page");
    }

    // 2. About Us
    let aboutUs = await AyurvedaAboutUs.findOne();
    if (aboutUs) {
      if (aboutUs.ourStory) {
        aboutUs.ourStory.bannerImage = aboutUs.ourStory.bannerImage || dummyImageWide;
        if (!aboutUs.ourStory.editorialPhotos || aboutUs.ourStory.editorialPhotos.length === 0) {
          aboutUs.ourStory.editorialPhotos = makeGallery(3, "Campus Editorial");
        }
      }
      if (aboutUs.groupHistory) {
        aboutUs.groupHistory.timelineInfographic = aboutUs.groupHistory.timelineInfographic || dummyImageWide;
      }
      if (aboutUs.chairmanMessage) {
        aboutUs.chairmanMessage.candidImage = aboutUs.chairmanMessage.candidImage || dummyImage;
      }
      if (aboutUs.principalMessage) {
        aboutUs.principalMessage.candidImage = aboutUs.principalMessage.candidImage || dummyImage;
      }
      if (aboutUs.missionVision) {
        aboutUs.missionVision.bannerImage = aboutUs.missionVision.bannerImage || dummyImageWide;
        if (!aboutUs.missionVision.editorialPhotos || aboutUs.missionVision.editorialPhotos.length === 0) {
          aboutUs.missionVision.editorialPhotos = makeGallery(2, "Vision Editorial");
        }
      }
      if (aboutUs.approvalsSection) {
        aboutUs.approvalsSection.campusCredibilityPhoto = aboutUs.approvalsSection.campusCredibilityPhoto || dummyImage;
      }
      await aboutUs.save();
      console.log("Updated About Us");
    }

    // 3. Admissions
    let admissions = await AyurvedaAdmissions.findOne();
    if (admissions) {
      if (admissions.admissionProcess) {
        admissions.admissionProcess.bannerImage = admissions.admissionProcess.bannerImage || dummyImageWide;
        admissions.admissionProcess.counsellorImage = admissions.admissionProcess.counsellorImage || dummyImage;
        if (!admissions.admissionProcess.orientationPhotos || admissions.admissionProcess.orientationPhotos.length === 0) {
          admissions.admissionProcess.orientationPhotos = makeGallery(3, "Orientation");
        }
      }
      if (admissions.scholarships) {
        admissions.scholarships.bannerImage = admissions.scholarships.bannerImage || dummyImageWide;
        if (!admissions.scholarships.certificateHandoverImages || admissions.scholarships.certificateHandoverImages.length === 0) {
          admissions.scholarships.certificateHandoverImages = makeGallery(2, "Certificate Handover");
        }
      }
      await admissions.save();
      console.log("Updated Admissions");
    }

    // 4. Academics
    let academics = await AyurvedaAcademics.findOne();
    if (academics) {
      if (academics.bamsProgram) {
        academics.bamsProgram.bannerImage = academics.bamsProgram.bannerImage || dummyImageWide;
        academics.bamsProgram.careerOutcomeImage = academics.bamsProgram.careerOutcomeImage || dummyImage;
        academics.bamsProgram.facultyTeachingImage = academics.bamsProgram.facultyTeachingImage || dummyImage;
        if (!academics.bamsProgram.studentActivityImages || academics.bamsProgram.studentActivityImages.length === 0) {
          academics.bamsProgram.studentActivityImages = makeGallery(3, "Student Activity");
        }
      }
      if (academics.scopeOfBams) {
        academics.scopeOfBams.bannerImage = academics.scopeOfBams.bannerImage || dummyImageWide;
        if (!academics.scopeOfBams.editorialImages || academics.scopeOfBams.editorialImages.length === 0) {
          academics.scopeOfBams.editorialImages = makeGallery(3, "Scope Editorial");
        }
      }
      await academics.save();
      console.log("Updated Academics");
    }

    // 5. Research
    let research = await AyurvedaResearch.findOne();
    if (research) {
      if (research.researchJournal) {
        if (!research.researchJournal.boardHeadshots || research.researchJournal.boardHeadshots.length === 0) {
          research.researchJournal.boardHeadshots = [
            { image: dummyImageSmall, name: "Dr. A. Sharma" },
            { image: dummyImageSmall, name: "Dr. B. Singh" }
          ];
        }
        if (!research.researchJournal.researchActivityImages || research.researchJournal.researchActivityImages.length === 0) {
          research.researchJournal.researchActivityImages = makeGallery(3, "Research Activity");
        }
      }
      if (research.placements) {
        research.placements.statsInfographic = research.placements.statsInfographic || dummyImageWide;
        research.placements.placementCeremonyImages = makeGallery(10, "Placement Ceremony");
      }
      if (research.careers) {
        research.careers.facultyTeamPhoto = research.careers.facultyTeamPhoto || dummyImageWide;
        if (!research.careers.campusWorkplaceImages || research.careers.campusWorkplaceImages.length === 0) {
          research.careers.campusWorkplaceImages = makeGallery(3, "Campus Workplace");
        }
      }
      await research.save();
      console.log("Updated Research");
    }

    // 6. Facilities
    let facilities = await AyurvedaFacilities.findOne();
    if (facilities) {
      if (facilities.herbalGarden) {
        facilities.herbalGarden.wideAngleImage = facilities.herbalGarden.wideAngleImage || dummyImageWide;
        if (!facilities.herbalGarden.plantCloseups || facilities.herbalGarden.plantCloseups.length === 0) {
          facilities.herbalGarden.plantCloseups = makeGallery(4, "Plant Closeup");
        }
        if (!facilities.herbalGarden.studentsLearningImages || facilities.herbalGarden.studentsLearningImages.length === 0) {
          facilities.herbalGarden.studentsLearningImages = makeGallery(3, "Students Learning");
        }
      }
      if (facilities.hostel) {
        if (!facilities.hostel.roomInteriors || facilities.hostel.roomInteriors.length === 0) {
          facilities.hostel.roomInteriors = makeGallery(3, "Room Interior");
          facilities.hostel.washroomImages = makeGallery(2, "Washroom");
          facilities.hostel.diningHallImages = makeGallery(3, "Dining Hall");
          facilities.hostel.commonRoomImages = makeGallery(2, "Common Room");
          facilities.hostel.securityCctvImages = makeGallery(2, "Security");
        }
      }
      const generalFacilities = ['infrastructure', 'auditorium', 'sports'];
      for (const fac of generalFacilities) {
        if (facilities[fac]) {
          facilities[fac].heroWideAngle = facilities[fac].heroWideAngle || dummyImageWide;
          facilities[fac].eventPhoto = facilities[fac].eventPhoto || dummyImage;
          facilities[fac].entranceImage = facilities[fac].entranceImage || dummyImage;
          if (!facilities[fac].interiorDetails || facilities[fac].interiorDetails.length === 0) {
            facilities[fac].interiorDetails = makeGallery(3, `${fac} Interior`);
          }
        }
      }
      await facilities.save();
      console.log("Updated Facilities");
    }

    // 7. Departments
    let departments = await AyurvedaDepartment.find({});
    for (const dept of departments) {
      if (!dept.name || !dept.slug) continue;
      dept.equipmentWideImage = dept.equipmentWideImage || dummyImageWide;
      dept.safetySignageImage = dept.safetySignageImage || dummyImageSmall;
      dept.equipmentCloseups = makeGallery(5, "Equipment Closeup");
      dept.studentsWorkingImages = makeGallery(4, "Students Working");
      await dept.save();
    }
    console.log(`Updated ${departments.length} Departments`);

    // 8. Contact
    let contact = await AyurvedaContact.findOne();
    if (contact) {
      if (contact.mainContact) {
        contact.mainContact.receptionInterior = contact.mainContact.receptionInterior || dummyImage;
        if (!contact.mainContact.buildingExteriors || contact.mainContact.buildingExteriors.length === 0) {
          contact.mainContact.buildingExteriors = makeGallery(2, "Building Exterior");
        }
      }
      await contact.save();
      console.log("Updated Contact");
    }

    // 9. Mandatory Disclosure
    let mandatory = await AyurvedaMandatoryDisclosure.findOne();
    if (mandatory) {
      mandatory.image = mandatory.image || dummyImage;
      await mandatory.save();
      console.log("Updated Mandatory Disclosure");
    }

    console.log("Image Seeding Completed Successfully.");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding images:", err);
    process.exit(1);
  }
};

seedAyurvedaImages();
