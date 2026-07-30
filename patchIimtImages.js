/**
 * patchIimtImages.js
 * Replaces broken Unsplash hotlink URLs in the IIMT MongoDB collections
 * with reliable picsum.photos CDN URLs that work without API keys.
 * Run: node patchIimtImages.js
 */

const mongoose = require('mongoose');
require('dotenv').config();

const { IimtAboutUs, IimtCourse, IimtCampusLife, IimtAdmissions, IimtLearning, IimtHomePage, IimtContactUs, IimtStudentZone, IimtFeePayment } = require('./models/iimtModels');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms';

// picsum.photos format: https://picsum.photos/seed/{seed}/{width}/{height}
// Using descriptive seeds so images are consistent & thematic
const IMG = {
  // Wide banners (1200x400)
  campusBanner: 'https://picsum.photos/seed/campus-iimt/1200/400',
  missionBanner: 'https://picsum.photos/seed/mission-edu/1200/400',
  whyBanner: 'https://picsum.photos/seed/why-choose/1200/400',
  greenBanner: 'https://picsum.photos/seed/green-campus/1200/400',
  disclosureBanner: 'https://picsum.photos/seed/disclosure-docs/1200/400',
  researchBanner: 'https://picsum.photos/seed/research-journal/1200/400',
  bestPracticeBanner: 'https://picsum.photos/seed/best-practice/1200/400',
  bbaBanner: 'https://picsum.photos/seed/bba-business/1200/400',
  bcomBanner: 'https://picsum.photos/seed/bcom-commerce/1200/400',
  bcaBanner: 'https://picsum.photos/seed/bca-computer/1200/400',
  mcomBanner: 'https://picsum.photos/seed/mcom-postgrad/1200/400',
  bedBanner: 'https://picsum.photos/seed/bed-education/1200/400',
  medBanner: 'https://picsum.photos/seed/med-master/1200/400',
  infraBanner: 'https://picsum.photos/seed/infra-campus/1200/400',
  itlabBanner: 'https://picsum.photos/seed/it-lab-computers/1200/400',
  libraryBanner: 'https://picsum.photos/seed/library-books/1200/400',
  auditoriumBanner: 'https://picsum.photos/seed/auditorium-hall/1200/400',
  hostelBanner: 'https://picsum.photos/seed/hostel-campus/1200/400',
  sportsBanner: 'https://picsum.photos/seed/sports-ground/1200/400',
  culturalBanner: 'https://picsum.photos/seed/cultural-fest/1200/400',
  scholarshipBanner: 'https://picsum.photos/seed/scholarship-award/1200/400',
  faqsBanner: 'https://picsum.photos/seed/faq-help/1200/400',
  storyBanner: 'https://picsum.photos/seed/our-story/1200/400',

  // Portraits (400x400)
  director: 'https://picsum.photos/seed/director-portrait/400/400',
  directorCandid: 'https://picsum.photos/seed/director-candid/400/400',
  faculty1: 'https://picsum.photos/seed/faculty-prof1/400/400',
  faculty2: 'https://picsum.photos/seed/faculty-prof2/400/400',
  faculty3: 'https://picsum.photos/seed/faculty-prof3/400/400',
  faculty4: 'https://picsum.photos/seed/faculty-prof4/400/400',
  faculty5: 'https://picsum.photos/seed/faculty-prof5/400/400',
  visitFaculty1: 'https://picsum.photos/seed/visit-faculty1/400/400',
  visitFaculty2: 'https://picsum.photos/seed/visit-faculty2/400/400',
  visitFaculty3: 'https://picsum.photos/seed/visit-faculty3/400/400',
  student1: 'https://picsum.photos/seed/student-male1/400/400',
  student2: 'https://picsum.photos/seed/student-female1/400/400',
  student3: 'https://picsum.photos/seed/student-male2/400/400',
  parent1: 'https://picsum.photos/seed/parent-male1/400/400',
  parent2: 'https://picsum.photos/seed/parent-female1/400/400',

  // Editorial / activity photos (600x400)
  campus1: 'https://picsum.photos/seed/campus-edit1/600/400',
  campus2: 'https://picsum.photos/seed/campus-edit2/600/400',
  campus3: 'https://picsum.photos/seed/campus-edit3/600/400',
  lecture1: 'https://picsum.photos/seed/lecture-class/600/400',
  lecture2: 'https://picsum.photos/seed/seminar-hall/600/400',
  lecture3: 'https://picsum.photos/seed/students-study/600/400',
  lab1: 'https://picsum.photos/seed/computer-lab1/600/400',
  lab2: 'https://picsum.photos/seed/computer-lab2/600/400',
  lab3: 'https://picsum.photos/seed/it-lab-work/600/400',
  green1: 'https://picsum.photos/seed/nature-green1/600/400',
  green2: 'https://picsum.photos/seed/nature-green2/600/400',
  green3: 'https://picsum.photos/seed/eco-campus/600/400',
  sports1: 'https://picsum.photos/seed/sports-field/600/400',
  sports2: 'https://picsum.photos/seed/sports-court/600/400',
  sports3: 'https://picsum.photos/seed/athletics/600/400',
  hostel1: 'https://picsum.photos/seed/hostel-room/600/400',
  hostel2: 'https://picsum.photos/seed/hostel-dining/600/400',
  cultural1: 'https://picsum.photos/seed/cultural-dance/600/400',
  cultural2: 'https://picsum.photos/seed/cultural-music/600/400',
  cultural3: 'https://picsum.photos/seed/stage-event/600/400',
  teach1: 'https://picsum.photos/seed/teacher-class/600/400',
  teach2: 'https://picsum.photos/seed/mentor-student/600/400',
  scholarship1: 'https://picsum.photos/seed/scholarship-handover/600/400',
  scholarship2: 'https://picsum.photos/seed/award-ceremony/600/400',
};

async function patch() {
  await mongoose.connect(MONGODB_URI);
  console.log('✅ Connected to MongoDB');

  // ─── 1. HOMEPAGE ─────────────────────────────────────────────────────────────
  await IimtHomePage.updateOne({}, {
    $set: {
      'banners.0.image': IMG.campusBanner,
      'banners.1.image': IMG.bbaBanner,
      'banners.2.image': IMG.campus1,
      'lifeAtIimt.images': [
        { url: IMG.campus1 }, { url: IMG.lecture1 }, { url: IMG.lab1 },
        { url: IMG.sports1 }, { url: IMG.cultural1 }, { url: IMG.hostel1 },
        { url: IMG.green1 }, { url: IMG.lecture2 }
      ],
      'successStories.students.0.photo': IMG.student1,
      'successStories.students.1.photo': IMG.student2,
      'successStories.students.2.photo': IMG.student3,
      'successStories.parents.0.photo': IMG.parent1,
      'successStories.parents.1.photo': IMG.parent2,
    }
  });
  console.log('✅ Patched: Homepage images');

  // ─── 2. ABOUT US ─────────────────────────────────────────────────────────────
  await IimtAboutUs.updateOne({}, {
    $set: {
      'ourStory.image': IMG.campusBanner,
      'ourStory.bannerImage': IMG.storyBanner,
      'ourStory.editorialPhotos': [
        { url: IMG.campus1 }, { url: IMG.campus2 }, { url: IMG.campus3 }
      ],
      'ourStory.timelineInfographic': IMG.campusBanner,
      'directorMessage.image': IMG.director,
      'directorMessage.candidImage': IMG.directorCandid,
      'missionVision.bannerImage': IMG.missionBanner,
      'missionVision.editorialPhotos': [
        { url: IMG.lecture1 }, { url: IMG.lecture2 }, { url: IMG.campus1 }
      ],
      'whyIimt.bannerImage': IMG.whyBanner,
      'whyIimt.images': [
        { url: IMG.campus1 }, { url: IMG.lab1 }, { url: IMG.lecture1 }
      ],
      'bestPractices.0.image': IMG.lecture1,
      'bestPractices.1.image': IMG.lecture2,
      'bestPractices.2.image': IMG.campus2,
      'bestPractices.3.image': IMG.campus3,
      'bestPractices.4.image': IMG.lab1,
      'bestPracticesBanner': IMG.bestPracticeBanner,
      'greenInitiatives.bannerImage': IMG.greenBanner,
      'greenInitiatives.images': [
        { url: IMG.green1 }, { url: IMG.green2 }, { url: IMG.green3 }
      ],
      'campusCredibilityPhoto': IMG.campus1,
      'mandatoryDisclosure.bannerImage': IMG.disclosureBanner,
      'researchJournal.bannerImage': IMG.researchBanner,
    }
  });
  console.log('✅ Patched: About Us images');

  // ─── 3. COURSES ──────────────────────────────────────────────────────────────
  const coursePatches = [
    { slug: 'bba', banner: IMG.bbaBanner, act: [IMG.lecture1, IMG.campus1, IMG.lab1], place: IMG.student1, teach: IMG.teach1 },
    { slug: 'bcom', banner: IMG.bcomBanner, act: [IMG.lecture2, IMG.campus2, IMG.campus3], place: IMG.student2, teach: IMG.teach2 },
    { slug: 'bca', banner: IMG.bcaBanner, act: [IMG.lab1, IMG.lab2, IMG.lab3], place: IMG.student3, teach: IMG.teach1 },
    { slug: 'mcom', banner: IMG.mcomBanner, act: [IMG.lecture1, IMG.campus1, IMG.lecture3], place: IMG.student1, teach: IMG.teach2 },
    { slug: 'bed', banner: IMG.bedBanner, act: [IMG.teach1, IMG.teach2, IMG.lecture2], place: IMG.student2, teach: IMG.teach1 },
    { slug: 'med', banner: IMG.medBanner, act: [IMG.teach2, IMG.teach1, IMG.lecture1], place: IMG.student3, teach: IMG.teach2 },
  ];

  for (const c of coursePatches) {
    await IimtCourse.updateOne({ slug: c.slug }, {
      $set: {
        bannerImage: c.banner,
        studentActivityImages: c.act.map(url => ({ url })),
        placementOutcomeImage: c.place,
        facultyTeachingImage: c.teach,
        images: c.act.map(url => ({ url })),
      }
    });
  }
  console.log('✅ Patched: Course images');

  // ─── 4. CAMPUS LIFE ──────────────────────────────────────────────────────────
  await IimtCampusLife.updateOne({}, {
    $set: {
      'infrastructure.bannerImage': IMG.infraBanner,
      'infrastructure.images': [
        { url: IMG.campus1 }, { url: IMG.campus2 }, { url: IMG.campus3 }
      ],
      'itLabs.equipmentWideImage': IMG.itlabBanner,
      'itLabs.bannerImage': IMG.itlabBanner,
      'itLabs.images': [
        { url: IMG.lab1 }, { url: IMG.lab2 }, { url: IMG.lab3 }
      ],
      'library.bannerImage': IMG.libraryBanner,
      'library.images': [
        { url: IMG.campus1 }, { url: IMG.campus2 }, { url: IMG.lecture1 }
      ],
      'auditorium.bannerImage': IMG.auditoriumBanner,
      'auditorium.images': [
        { url: IMG.campus2 }, { url: IMG.cultural1 }, { url: IMG.lecture2 }
      ],
      'sports.bannerImage': IMG.sportsBanner,
      'sports.images': [
        { url: IMG.sports1 }, { url: IMG.sports2 }, { url: IMG.sports3 }
      ],
      'hostel.bannerImage': IMG.hostelBanner,
      'hostel.images': [
        { url: IMG.hostel1 }, { url: IMG.hostel2 }, { url: IMG.campus3 }
      ],
      'culturalActivities.bannerImage': IMG.culturalBanner,
      'culturalActivities.images': [
        { url: IMG.cultural1 }, { url: IMG.cultural2 }, { url: IMG.cultural3 }
      ],
      // Faculty images
      'faculty.0.image': IMG.faculty1,
      'faculty.1.image': IMG.faculty2,
      'faculty.2.image': IMG.faculty3,
      'faculty.3.image': IMG.faculty4,
      'faculty.4.image': IMG.faculty5,
      // Visiting faculty images
      'visitingFaculty.0.image': IMG.visitFaculty1,
      'visitingFaculty.1.image': IMG.visitFaculty2,
      'visitingFaculty.2.image': IMG.visitFaculty3,
    }
  });
  console.log('✅ Patched: Campus Life images');

  // ─── 5. ADMISSIONS ───────────────────────────────────────────────────────────
  await IimtAdmissions.updateOne({}, {
    $set: {
      'howToApply.bannerImage': IMG.bbaBanner,
      'howToApply.images': [
        { url: IMG.campus1 }, { url: IMG.campus2 }, { url: IMG.lecture1 }
      ],
      'scholarshipsBanner': IMG.scholarshipBanner,
      'scholarshipsHandoverImages': [
        { url: IMG.scholarship1 }, { url: IMG.scholarship2 }, { url: IMG.lecture2 }
      ],
      'faqsBanner': IMG.faqsBanner,
    }
  });
  console.log('✅ Patched: Admissions images');

  // ─── 6. LEARNING ─────────────────────────────────────────────────────────────
  await IimtLearning.updateOne({}, {
    $set: {
      'skillDevelopment.bannerImage': IMG.campusBanner,
      'skillDevelopment.images': [
        { url: IMG.lab1 }, { url: IMG.lab2 }, { url: IMG.lecture1 }
      ],
      'debatesGD.bannerImage': IMG.culturalBanner,
      'debatesGD.images': [
        { url: IMG.lecture2 }, { url: IMG.cultural1 }, { url: IMG.student1 }
      ],
      'calendarEvents.0.image': IMG.event1 || IMG.campus1,
      'calendarEvents.1.image': IMG.event2 || IMG.cultural2,
      'calendarEvents.2.image': IMG.event3 || IMG.lecture1,
      'calendarEvents.3.image': IMG.event1 || IMG.lab1,
      'industrialVisits.visits.0.image': IMG.campus2,
      'industrialVisits.visits.1.image': IMG.campus3,
      'industrialVisits.visits.2.image': IMG.lab2,
      'industrialVisits.visits.3.image': IMG.lab3,
      'guestLectures.events.0.image': IMG.lecture1,
      'guestLectures.events.1.image': IMG.lecture2,
      'guestLectures.events.2.image': IMG.lecture3,
    }
  });
  console.log('✅ Patched: Learning images');

  // ─── 7. CONTACT US ───────────────────────────────────────────────────────────
  await IimtContactUs.updateOne({}, {
    $set: {
      'mainContact.bannerImage': IMG.infraBanner,
      'mainContact.images': [
        { url: IMG.campus1 }, { url: IMG.campus2 }, { url: IMG.campus3 }
      ],
      'feedback.bannerImage': IMG.whyBanner,
      'feedback.images': [
        { url: IMG.lab1 }, { url: IMG.lab2 }, { url: IMG.lecture1 }
      ],
      'careers.bannerImage': IMG.bestPracticeBanner,
      'careers.images': [
        { url: IMG.lecture2 }, { url: IMG.teach1 }, { url: IMG.teach2 }
      ],
    }
  });
  console.log('✅ Patched: Contact Us images');

  // ─── 8. STUDENT ZONE ─────────────────────────────────────────────────────────
  await IimtStudentZone.updateOne({}, {
    $set: {
      'downloads.bannerImage': IMG.bcaBanner,
      'pastPapers.bannerImage': IMG.bcomBanner,
      'codeOfConduct.bannerImage': IMG.disclosureBanner,
      'antiRagging.bannerImage': IMG.greenBanner,
      'grievanceRedressal.bannerImage': IMG.missionBanner,
      'privacyPolicy.bannerImage': IMG.researchBanner,
    }
  });
  console.log('✅ Patched: Student Zone images');

  // ─── 9. FEE PAYMENT ──────────────────────────────────────────────────────────
  await IimtFeePayment.updateOne({}, {
    $set: {
      'content.bannerImage': IMG.bbaBanner
    }
  });
  console.log('✅ Patched: Fee Payment images');

  console.log('\n🎉 All IIMT image URLs patched successfully!');
  await mongoose.disconnect();
  process.exit(0);
}

patch().catch(err => {
  console.error('❌ Patch failed:', err);
  process.exit(1);
});
