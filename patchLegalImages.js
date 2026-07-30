require('dotenv').config();
const mongoose = require('mongoose');
const {
  LegalAboutUs, LegalProgram, LegalPlacement, LegalAdmission,
  LegalProgramsOverview, LegalMootCourt, LegalAidCell, LegalSkillDevelopment,
  LegalDebatesGD, LegalCulturalActivities, LegalIndustrialVisit,
  LegalResearchJournal, LegalInfrastructure, LegalGuestLecturesPage
} = require('./models/legalModels');

// All images from law.ishan.ac — the law school's own CDN, no hotlinking issues
const LAW_CDN = 'https://law.ishan.ac';

const patch = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('✅ Connected to MongoDB');

  // ── 1. About Us ─────────────────────────────────────────────────────────────
  await LegalAboutUs.findOneAndUpdate({}, {
    $set: {
      bannerImage: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-8.jpg`,
      editorialPhotos: [
        { url: `${LAW_CDN}/all-law/gallery-photos/academics/academics-11.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-3.jpg` },
        { url: `${LAW_CDN}/static/gallery/infra/infra-16.jpg` }
      ],
      'principalMessage.candidImage': `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-2.jpg`,
      'missionVision.bannerImage': `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-5.jpg`,
      approvalsPageBanner: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-7.jpg`,
      'WhyIshanLaw.bannerImage': `${LAW_CDN}/all-law/gallery-photos/academics/academics-1.jpg`,
      'WhyIshanLaw.images': [
        { url: `${LAW_CDN}/all-law/gallery-photos/academics/academics-11.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-3.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-4.jpg` }
      ],
      bestPracticesBanner: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-6.jpg`,
      bestPractices: [
        {
          title: 'Integrated Clinical Legal Education',
          content: 'Starting from the first year, students are exposed to real-world legal proceedings through structured court visits, legal aid clinics, and moot court sessions that form the core of our pedagogy.',
          image: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-1.jpg`
        },
        {
          title: 'Moot Court as a Core Pedagogy',
          content: 'Beyond theoretical lectures, we utilize our high-tech Moot Court Hall for mandatory simulation exercises where students argue complex constitutional and commercial cases before senior advocates.',
          image: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-3.jpg`
        },
        {
          title: 'Community Legal Aid & Social Advocacy',
          content: 'Our Legal Aid Cell actively organizes awareness camps in neighboring villages and urban slums, providing free legal counseling and literacy programs to underserved communities.',
          image: `${LAW_CDN}/all-law/gallery-photos/outreach/outreach-12.jpeg`
        }
      ],
      'greenInitiatives.bannerImage': `${LAW_CDN}/static/gallery/infra/infra-16.jpg`,
      'greenInitiatives.images': [
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-6.jpg` },
        { url: `${LAW_CDN}/static/gallery/infra/infra-16.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/outreach/outreach-12.jpeg` }
      ],
      faqsBanner: `${LAW_CDN}/all-law/gallery-photos/academics/academics-11.jpg`
    }
  }, { upsert: false });
  console.log('✅ Patched: About Us images');

  // ── 2. Programs (BA LLB, LLB, LLM) ─────────────────────────────────────────
  const programImages = {
    'ba-llb': {
      bannerImage: `${LAW_CDN}/all-law/gallery-photos/academics/academics-1.jpg`,
      studentActivityImages: [
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-1.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-3.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-4.jpg` }
      ],
      placementOutcomeImage: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-8.jpg`,
      facultyTeachingImage: `${LAW_CDN}/all-law/gallery-photos/academics/academics-11.jpg`,
      images: [
        { url: `${LAW_CDN}/all-law/gallery-photos/academics/academics-1.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-5.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-7.jpg` }
      ]
    },
    'llb': {
      bannerImage: `${LAW_CDN}/all-law/gallery-photos/academics/academics-11.jpg`,
      studentActivityImages: [
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-2.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-6.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/outreach/outreach-12.jpeg` }
      ],
      placementOutcomeImage: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-7.jpg`,
      facultyTeachingImage: `${LAW_CDN}/all-law/gallery-photos/academics/academics-1.jpg`,
      images: [
        { url: `${LAW_CDN}/all-law/gallery-photos/academics/academics-11.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-8.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-4.jpg` }
      ]
    },
    'llm': {
      bannerImage: `${LAW_CDN}/all-law/gallery-photos/academics/academics-1.jpg`,
      studentActivityImages: [
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-3.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-5.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/academics/academics-11.jpg` }
      ],
      placementOutcomeImage: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-6.jpg`,
      facultyTeachingImage: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-2.jpg`,
      images: [
        { url: `${LAW_CDN}/all-law/gallery-photos/academics/academics-1.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-1.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-7.jpg` }
      ]
    }
  };

  for (const [slug, imgs] of Object.entries(programImages)) {
    await LegalProgram.findOneAndUpdate({ slug }, { $set: imgs });
    console.log(`✅ Patched: Program ${slug}`);
  }

  // ── 3. Admissions ───────────────────────────────────────────────────────────
  await LegalAdmission.findOneAndUpdate({}, {
    $set: {
      bannerImage: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-4.jpg`,
      orientationPhotos: [
        { url: `${LAW_CDN}/all-law/gallery-photos/academics/academics-11.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-3.jpg` }
      ],
      scholarshipsBanner: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-8.jpg`,
      scholarshipsHandoverPhotos: [
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-6.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-7.jpg` }
      ]
    }
  });
  console.log('✅ Patched: Admissions images');

  // ── 4. Placements ───────────────────────────────────────────────────────────
  await LegalPlacement.findOneAndUpdate({}, {
    $set: {
      bannerImage: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-7.jpg`,
      ceremonyPhoto: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-8.jpg`
    }
  });
  console.log('✅ Patched: Placements images');

  // ── 5. Programs Overview ─────────────────────────────────────────────────────
  await LegalProgramsOverview.findOneAndUpdate({}, {
    $set: {
      bannerImage: `${LAW_CDN}/all-law/gallery-photos/academics/academics-1.jpg`,
      editorialPhotos: [
        { url: `${LAW_CDN}/all-law/gallery-photos/academics/academics-11.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-3.jpg` },
        { url: `${LAW_CDN}/static/gallery/infra/infra-16.jpg` }
      ]
    }
  });
  console.log('✅ Patched: Programs Overview images');

  // ── 6. Generic Pages (MootCourt, LegalAid, SkillDev, DebatesGD, Cultural) ──
  const genericUpdates = [
    { Model: LegalMootCourt, label: 'Moot Court', img: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-1.jpg`, imgs: [
      { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-3.jpg` },
      { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-5.jpg` },
      { url: `${LAW_CDN}/all-law/gallery-photos/academics/academics-11.jpg` }
    ]},
    { Model: LegalAidCell, label: 'Legal Aid Cell', img: `${LAW_CDN}/all-law/gallery-photos/outreach/outreach-12.jpeg`, imgs: [
      { url: `${LAW_CDN}/all-law/gallery-photos/outreach/outreach-12.jpeg` },
      { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-4.jpg` },
      { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-6.jpg` }
    ]},
    { Model: LegalSkillDevelopment, label: 'Skill Development', img: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-4.jpg`, imgs: [
      { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-2.jpg` },
      { url: `${LAW_CDN}/all-law/gallery-photos/academics/academics-1.jpg` },
      { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-8.jpg` }
    ]},
    { Model: LegalDebatesGD, label: 'Debates & GD', img: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-3.jpg`, imgs: [
      { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-1.jpg` },
      { url: `${LAW_CDN}/all-law/gallery-photos/events/events-8.jpeg` },
      { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-7.jpg` }
    ]},
    { Model: LegalCulturalActivities, label: 'Cultural Activities', img: `${LAW_CDN}/all-law/gallery-photos/events/events-8.jpeg`, imgs: [
      { url: `${LAW_CDN}/all-law/gallery-photos/events/events-8.jpeg` },
      { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-6.jpg` },
      { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-5.jpg` }
    ]}
  ];

  for (const { Model, label, img, imgs } of genericUpdates) {
    await Model.findOneAndUpdate({}, { $set: { bannerImage: img, images: imgs } });
    console.log(`✅ Patched: ${label}`);
  }

  // ── 7. Court / Jail Visits ──────────────────────────────────────────────────
  await LegalIndustrialVisit.findOneAndUpdate({}, {
    $set: {
      bannerImage: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-6.jpg`,
      visitPhotos: [
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-2.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-4.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/outreach/outreach-12.jpeg` }
      ]
    }
  });
  console.log('✅ Patched: Court & Jail Visits');

  // ── 8. Research Journal ─────────────────────────────────────────────────────
  await LegalResearchJournal.findOneAndUpdate({}, {
    $set: {
      bannerImage: `${LAW_CDN}/all-law/gallery-photos/academics/academics-1.jpg`,
      journalCoverImage: `${LAW_CDN}/all-law/gallery-photos/academics/academics-11.jpg`,
      editorialBoardPhotos: [
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-1.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-5.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-7.jpg` }
      ]
    }
  });
  console.log('✅ Patched: Research Journal images');

  // ── 9. Infrastructure singleton ─────────────────────────────────────────────
  await LegalInfrastructure.findOneAndUpdate({}, {
    $set: {
      'library.bannerImage': `${LAW_CDN}/static/gallery/infra/infra-16.jpg`,
      'library.images': [
        { url: `${LAW_CDN}/static/gallery/infra/infra-16.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/academics/academics-11.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-8.jpg` }
      ],
      'hostel.bannerImage': `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-4.jpg`,
      'hostel.images': [
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-3.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-6.jpg` },
        { url: `${LAW_CDN}/all-law/gallery-photos/outreach/outreach-12.jpeg` }
      ],
      infrastructure: {
        bannerImage: `${LAW_CDN}/static/gallery/infra/infra-16.jpg`,
        images: [
          { url: `${LAW_CDN}/static/gallery/infra/infra-16.jpg` },
          { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-2.jpg` },
          { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-8.jpg` },
          { url: `${LAW_CDN}/all-law/gallery-photos/academics/academics-11.jpg` }
        ]
      },
      auditorium: {
        bannerImage: `${LAW_CDN}/all-law/gallery-photos/events/events-8.jpeg`,
        images: [
          { url: `${LAW_CDN}/all-law/gallery-photos/events/events-8.jpeg` },
          { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-7.jpg` },
          { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-5.jpg` }
        ]
      },
      sports: {
        bannerImage: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-6.jpg`,
        images: [
          { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-4.jpg` },
          { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-3.jpg` }
        ]
      },
      itLab: {
        bannerImage: `${LAW_CDN}/all-law/gallery-photos/academics/academics-1.jpg`,
        images: [
          { url: `${LAW_CDN}/all-law/gallery-photos/academics/academics-11.jpg` },
          { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-2.jpg` },
          { url: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-8.jpg` }
        ]
      },
      newsEventsBanner: `${LAW_CDN}/all-law/gallery-photos/events/events-8.jpeg`,
      alumniNetworkBanner: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-7.jpg`,
      alumniMeetPhoto: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-8.jpg`
    }
  }, { upsert: true });
  console.log('✅ Patched: Infrastructure images');

  // ── 10. Guest Lectures Page ─────────────────────────────────────────────────
  await LegalGuestLecturesPage.findOneAndUpdate({}, {
    $set: { image: `${LAW_CDN}/all-law/gallery-photos/key-highlights/key-highlights-5.jpg` }
  }, { upsert: true });
  console.log('✅ Patched: Guest Lectures Page');

  console.log('\n🎉 All Law image URLs patched successfully!');
  process.exit(0);
};

patch().catch(err => { console.error(err); process.exit(1); });
