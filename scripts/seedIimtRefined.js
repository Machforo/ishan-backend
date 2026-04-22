const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const { 
  IimtHomePage, 
  IimtAboutUs, 
  IimtCourse, 
  IimtCampusLife, 
  IimtAdmissions, 
  IimtPlacements, 
  IimtGallery, 
  IimtNewsEvent, 
  IimtFeePayment, 
  IimtStudentPortal, 
  IimtContactUs 
} = require('../models/iimtModels');

dotenv.config({ path: path.join(__dirname, '../.env') });

const images = {
  hero: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop",
  campus: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
  lab: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2066&auto=format&fit=crop",
  logo: "https://ui-avatars.com/api/?name=IIMT&background=1a337e&color=fff",
  person: "https://ui-avatars.com/api/?name=Director&background=1a337e&color=fff"
};

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for IIMT seeding...');

    // Clear existing
    await Promise.all([
      IimtHomePage.deleteMany({}),
      IimtAboutUs.deleteMany({}),
      IimtCourse.deleteMany({}),
      IimtCampusLife.deleteMany({}),
      IimtAdmissions.deleteMany({}),
      IimtPlacements.deleteMany({}),
      IimtGallery.deleteMany({}),
      IimtNewsEvent.deleteMany({}),
      IimtFeePayment.deleteMany({}),
      IimtStudentPortal.deleteMany({}),
      IimtContactUs.deleteMany({})
    ]);

    // 1. Homepage
    await IimtHomePage.create({
      banners: [
        { 
          heading: "Legacy of Excellence, Future of Innovation", 
          subheading: "Join North India's Premier Management Institution with 30 Years of Academic Distinction.",
          image: images.hero,
          cta1: "Apply Now 2026",
          cta2: "Download Brochure"
        }
      ],
      numbers: [
        { label: "Placements", value: "95%" },
        { label: "Avg Package", value: "6.5 LPA" },
        { label: "Alumni Network", value: "15,000+" },
        { label: "Faculty Hub", value: "250+" }
      ],
      partnerships: [
        { name: "Microsoft", image: images.logo },
        { name: "Oracle", image: images.logo },
        { name: "Intel", image: images.logo }
      ],
      aboutIimt: { 
        heading: "Nurturing Global Leaders Since 1994", 
        description: "IIMT Greater Noida is a beacon of excellence in management and technology education, dedicated to creating industry-ready professionals.",
        image: images.campus 
      },
      standApart: {
        description: "What makes IIMT unique is our blend of traditional values and modern technological approach.",
        points: ["Industry-aligned Curriculum", "AI-integrated Learning", "Global Exposure Tours"],
        cta: "Explore Our Methodology"
      },
      lifeAtIimt: {
        heading: "Experience the Vibrant Campus Life",
        images: [images.hero, images.campus, images.lab]
      },
      successStories: {
        students: [
          { name: "Amit Kumar", photo: images.person, feedback: "IIMT transformed my perspective on management." }
        ],
        parents: [
          { name: "Mr. Sharma", photo: images.person, feedback: "My son secured a great placement through IIMT." }
        ]
      }
    });

    // 2. About Us
    await IimtAboutUs.create({
      ourStory: { image: images.campus, description: "Our story began in 1994 with a small classroom and a large vision." },
      ourJourney: [{ year: "1994", event: "Foundation Stone Laid" }, { year: "2024", event: "Ranked Top 10 in North India" }],
      keyDifferentiators: [{ title: "Excellence", description: "Unmatched academic rigor." }],
      directorMessage: { name: "Dr. S.K. Gupta", designation: "Director", message: "Welcome to IIMT...", image: images.person },
      missionVision: { 
        vision: "To be a global center of excellence.", 
        mission: "To provide quality education at affordable costs.", 
        coreValues: ["Integrity", "Dedication", "Innovation"] 
      },
      approvalsAffiliations: [{ 
        name: "AKTU", image: images.logo, subheading: "Affiliated University", description: "Dr. APJ Abdul Kalam Technical University" 
      }],
      whyIimt: { content: "IIMT offers a unique ecosystem for holistic development." },
      bestPractices: [{ title: "Flipped Classroom", content: "Interactive learning sessions." }],
      greenInitiatives: { content: "Solar powered campus and waste management." }
    });

    // 3. Courses
    await IimtCourse.create([
      { 
        programName: "BBA (Bachelor of Business Administration)", 
        overview: "3-Year undergraduate program focusing on management.",
        homepageSummary: "The most sought-after management degree in Delhi NCR.",
        curriculumStructure: "Six semesters including marketing, finance...",
        careerScope: "Project Managers, Consultants, HR Executive.",
        quickFacts: "120 Seats | UGC Approved | Industry Internships",
        careerOutcome: "Avg. Salary 4.5 LPA | 100% Placement Assistance",
        slug: "bba"
      },
      { 
        programName: "BCA (Bachelor of Computer Applications)", 
        overview: "Professional degree preparing students for the IT world.",
        homepageSummary: "Code the future with our advanced BCA program.",
        curriculumStructure: "Python, Java, Cloud Computing...",
        careerScope: "Software Engineers, System Admin.",
        quickFacts: "60 Seats | Tech Partnerships with Oracle",
        careerOutcome: "Placements with Top IT Firms like TCS, Wipro",
        slug: "bca"
      }
    ]);

    // 4. Campus Life
    await IimtCampusLife.create({
      infrastructure: { image: images.campus, content: "Wi-Fi enabled lush green campus spanning 10 acres." },
      itLabs: {
        specs: { computers: "500+ High-end PCs", internetSpeed: "1 Gbps Leased Line", software: "Adobe Suite, SAP, Oracle", timings: "8 AM - 8 PM" },
        rules: ["No food inside", "ID card mandatory", "Silence please"]
      },
      library: { image: images.lab, totalBooks: "50,000+", digitalAccess: "DELNET & IEEE", eJournals: "1,500+", seating: "200 Students" },
      auditorium: { image: images.hero, seating: "500+", avStatus: "High-end Dolby Atmos", events: "Convocation, Cultural Fests" },
      sports: [{ image: images.campus, title: "Indoor Sports Complex", link: "#" }],
      hostel: { image: images.campus, content: "Separate hostels for girls and boys with mess facility." },
      culturalActivities: {
        images: [images.hero],
        highlights: ["Annual Fest - Zest", "International Yoga Day"]
      }
    });

    // 5. Admissions
    await IimtAdmissions.create({
      howToApply: {
        highlight: "Admission 2026 Open!",
        admissionProcess: [{ step: "Step 1", desc: "Fill Application Form Online" }, { step: "Step 2", desc: "Appear for Personal Interview" }],
        documentChecklist: ["10th Marksheet", "12th Marksheet", "ID Proof"],
        helpContact: "Call +91-XXXXXXXXXX"
      },
      scholarships: [{ category: "Merit Based", description: "Up to 100% tuition fee waiver for 90%+ in 12th." }],
      faqs: [{ question: "Is IIMT UGC approved?", answer: "Yes, fully recognized." }]
    });

    // 6. Placements
    await IimtPlacements.create({
      stats: [{ label: "Highest Package", value: "18 LPA", description: "Offered by Amazon" }],
      process: [{ step: "1", desc: "Pre-placement talk" }],
      partners: [{ name: "Amazon", logo: images.logo }],
      studentSuccess: [{ name: "Anish Garg", company: "Google", feedback: "IIMT helped me crack Google.", photo: images.person }]
    });

    // 7. Gallery
    await IimtGallery.create({
      photos: [{ title: "Convocation 2024", url: images.campus }],
      videos: [{ title: "Campus Tour", url: "#" }],
      pressCoverage: [{ title: "IIMT wins award", url: "#", date: "2024-05-15" }]
    });

    // 8. News & Events
    await IimtNewsEvent.create({
      events: [{ title: "Annual Tech Fest", date: new Date(), description: "Join us for a week of tech excitement.", image: images.lab }]
    });

    // 9. Fee Payment
    await IimtFeePayment.create({ title: "Secure Fee Portal", description: "Pay your semester fees securely online.", cta: "Pay Fee", link: "#" });

    // 10. Student Portal
    await IimtStudentPortal.create({ title: "IIMT Student ERP", description: "Access attendance, marks, and resources.", cta: "Login to ERP", link: "#" });

    // 11. Contact Us
    await IimtContactUs.create({
      details: { address: "Knowledge Park III, Greater Noida", phone: "0120-XXXXXXX", email: "info@ishan.ac", mapEmbed: "https://google.com/map/..." }
    });

    console.log('IIMT Refined Seeding Completed!');
    process.exit(0);

  } catch (err) {
    console.error('Seeding Error:', err);
    process.exit(1);
  }
};

seed();
