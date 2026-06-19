const mongoose = require('mongoose');
require('dotenv').config();
const {
  AyurvedaHomePage, AyurvedaAboutUs, AyurvedaCourse, AyurvedaAdmissions,
  AyurvedaAcademics, AyurvedaFaculty, AyurvedaVisitingFaculty, AyurvedaDepartment, AyurvedaHospital, AyurvedaStudentCorner,
  AyurvedaResearch, AyurvedaFacilities, AyurvedaDigitalServices, AyurvedaContact,
  AyurvedaFAQ, AyurvedaNews, AyurvedaBlog, AyurvedaTestimonial, AyurvedaSiteConfig,
  AyurvedaMandatoryDisclosure, AyurvedaCodeOfConduct
} = require('./models/ayurvedaModels');

const seedAyurveda = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // 1. AyurvedaHomePage
    let homePage = await AyurvedaHomePage.findOne();
    if (!homePage) {
      homePage = new AyurvedaHomePage({});
    }
    homePage.banners = [
      {
        heading: "Reviving Ancient Wisdom\nfor Modern Wellness",
        subheading: "Join Ishan Ayurvedic Medical College to master the authentic science of Ayurveda and build a fulfilling career in healthcare.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&q=80",
        ctaText: "Apply for BAMS",
        ctaLink: "/admissions",
        cta2Text: "Campus Tour",
        cta2Link: "/infrastructure"
      },
      {
        heading: "State-of-the-Art\nClinical Training",
        subheading: "Learn through hands-on experience in our fully equipped 100-bed hospital and 10 specialized Ayurvedic laboratories.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1920&q=80",
        ctaText: "Explore Campus",
        ctaLink: "/campus",
        cta2Text: "Campus Tour",
        cta2Link: "/infrastructure"
      }
    ];
    homePage.stats = [
      { label: "BAMS Intake", value: "60 Seats" },
      { label: "Teaching Bed Hospital", value: "100 Beds" },
      { label: "Expert Faculty", value: "50+" },
      { label: "Daily OPD Patients", value: "300+" }
    ];
    homePage.institutionalProfile = {
      heading: "Ishan Ayurvedic Medical College",
      subheading: "A Center of Excellence in Traditional Medicine",
      description: "Established as a premier institution in Greater Noida, IAMC offers the highly sought-after BAMS program. Approved by NCISM, our college seamlessly integrates textual knowledge from ancient Samhitas with rigorous clinical practice.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      ctaText: "Discover Our Heritage",
      ctaLink: "/about"
    };
    homePage.whyChooseUs = [
      { heading: "Clinical Excellence", description: "Hands-on training in our fully functional 100-bed Ayurvedic hospital.", icon: "activity" },
      { heading: "Expert Faculty", description: "Learn from esteemed Vaidyas and practitioners with decades of experience.", icon: "user-check" },
      { heading: "Modern Labs", description: "10 specialized laboratories combining traditional methods with modern analysis.", icon: "flask-conical" },
      { heading: "Herbal Garden", description: "Extensive campus garden with over 200 species of medicinal plants.", icon: "leaf" }
    ];
    homePage.whySection = {
      heading: "What Makes Ishan Ayurveda the NCR's Premier Choice",
      description: "Choosing a BAMS college is choosing your entire clinical career. IAMC's unique combination of NCISM approval, an in-campus teaching hospital, 14 specialised departments, and a living herbal garden makes it unrivalled in the National Capital Region.",
      ctaText: "Schedule a Campus Tour",
      ctaLink: "/why-choose-us"
    };
    homePage.lifeAtIshan = [
      { image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=1200&q=80" },
      { image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800" },
      { image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800" },
      { image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800" },
      { image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800" }
    ];
    await homePage.save();

    // 2. AyurvedaAcademics
    let academics = await AyurvedaAcademics.findOne();
    if (!academics) {
      academics = new AyurvedaAcademics({});
    }
    academics.departments = [
      { name: "Samhita Siddhant", description: "Basic Principles and Philosophies of Ayurveda" },
      { name: "Rachana Sharir", description: "Human Anatomy and Marma Science" },
      { name: "Kriya Sharir", description: "Human Physiology and Tridosha Theory" },
      { name: "Dravyaguna", description: "Materia Medica and Pharmacology" },
      { name: "Rasashastra", description: "Iatrochemistry and Formulation" },
      { name: "Roga Nidan", description: "Pathology and Diagnostic Methods" },
      { name: "Swasthavritta", description: "Preventive and Social Medicine" },
      { name: "Prasuti & Stri Roga", description: "Obstetrics and Gynecology" },
      { name: "Kaumarbhritya", description: "Pediatrics" },
      { name: "Kayachikitsa", description: "Internal Medicine" },
      { name: "Shalya Tantra", description: "General Surgery" },
      { name: "Shalakya Tantra", description: "ENT and Ophthalmology" },
      { name: "Panchkarma", description: "Detoxification and Bio-purification" }
    ];
    academics.bamsProgram = {
      overview: "Bachelor of Ayurvedic Medicine and Surgery (BAMS) is a five-and-a-half-year degree programme including a one-year compulsory rotatory internship. NCISM recognised across India and in several foreign countries, BAMS is the only AYUSH medical degree that confers the title 'Vaidya' and confers full practitioner registration eligibility.\n\nAt IAMC, BAMS students train across 14 specialised Ayurvedic departments, rotate through the in-campus teaching hospital OPDs, and develop in the living Herbal Garden. Research-active faculty of experienced Vaidyas guide both classical scholarship and clinical competence.",
      duration: "5.5 Years (4.5 Academic + 1 Year Internship)",
      intake: "60",
      eligibility: [
        { text: "10+2 Biology (PCB) — minimum 50% marks" },
        { text: "NEET-UG qualified (mandatory)" },
        { text: "Indian national" },
        { text: "Admission via AYUSH central or UP state counselling" }
      ],
      outcomes: [
        { text: "Government AYUSH Hospital Vaidya" },
        { text: "Private Ayurvedic Practice" },
        { text: "Panchkarma Clinic" },
        { text: "BAMS MD (AIAPGET)" },
        { text: "Ayurvedic Research" },
        { text: "Wellness & Tourism" }
      ]
    };
    academics.scopeOfBams = {
      description: "With 50,000+ AYUSH health centres, a National AYUSH Mission, WHO recognition of traditional medicine, and growing global wellness demand - BAMS is no longer a niche qualification. It is a gateway to a broad and expanding professional landscape.",
      sectors: [
        { icon: "Building2", title: "Government AYUSH Service", desc: "BAMS graduates are eligible for government AYUSH hospitals, dispensaries, and NHM AYUSH posts across all states. Over 50,000 AYUSH health centres under the National AYUSH Mission need qualified Vaidyas - a vast and growing public sector opportunity." },
        { icon: "TrendingUp", title: "Private Clinical Practice", desc: "Setting up an Ayurvedic clinic, Panchkarma centre, or Wellness Centre - demand for qualified Vaidyas is growing rapidly in urban India. BAMS graduates can open independent practice immediately after registration with state councils." },
        { icon: "BookOpen", title: "Advanced Study - BAMS MD", desc: "AIAPGET entrance examination opens doors to MD Ayurveda in all 14 specialisations, PhD research, international WHO fellowships, and academic positions. IAMC's research culture prepares students for competitive postgraduate entrance." },
        { icon: "Globe", title: "Global Wellness Sector", desc: "Ayurvedic wellness tourism, international wellness resorts, and AYUSH regulations growing in UAE, UK, Germany, and Southeast Asia. Global demand for classically trained Vaidyas continues to expand with India's AYUSH soft power." }
      ]
    };
    academics.syllabus = {
      description: "BAMS curriculum follows the NCISM-prescribed syllabus divided into phases. It balances classical Ayurvedic texts with modern science subjects; clinical training begins in Phase 2 and each phase builds progressively toward clinical competence in all 14 specialised departments.",
      phases: [
        { phase: "Phase I", years: "Year 1 - 1.5", subjects: "Padartha Vigyana & Ayurveda Siddhanta, Rachana Sharir, Kriya Sharir, Sanskrit & Samhita (Parichaya), Maulik Siddhanta", pdf: "#" },
        { phase: "Phase II", years: "Year 1.5 - 3", subjects: "Dravyaguna Vigyana, Rasa Shastra & Bhaishajya Kalpana, Rog Nidan & Vikriti Vigyana, Charak Samhita (Purvardha), Swasthavritta", pdf: "#" },
        { phase: "Phase III", years: "Year 3 - 4.5", subjects: "Kayachikitsa, Panchkarma, Shalya Tantra, Shalakya Tantra, Prasuti & Stri Roga, Kaumarabhritya, Agada Tantra, Charak Samhita (Uttarardha)", pdf: "#" },
        { phase: "Final Year + Internship", years: "Year 4.5 - 5.5", subjects: "All Clinical Departments (Rotation), Research Dissertation, Compulsory Rotatory Internship (12 months)", pdf: "#" }
      ]
    };
    await academics.save();

    // 2.5 AyurvedaAdmissions
    let admissions = await AyurvedaAdmissions.findOne();
    if (!admissions) {
      admissions = new AyurvedaAdmissions({});
    }
    admissions.admissionProcess = {
      description: "BAMS admission is regulated — all students must appear for NEET-UG and obtain a seat through AYUSH counselling. IAMC's admissions team guides students through central and UP state counselling processes, stray vacancy rounds, and document verification.",
      steps: [
        { step: "01", title: "Register for NEET-UG", desc: "All BAMS admissions in India require a valid NEET-UG score. Register and appear for NEET-UG conducted by NTA. 10+2 Biology (PCB) with minimum 50% marks required." },
        { step: "02", title: "Appear for NEET-UG", desc: "Appear for the NEET-UG examination. Your NEET score and rank determine eligibility for AYUSH counselling." },
        { step: "03", title: "AYUSH Counselling Registration", desc: "Register for AYUSH central counselling (AACCC) or UP state AYUSH counselling based on your preference and rank." },
        { step: "04", title: "Merit-Based Allotment", desc: "Seat allotment based on NEET rank, category, and preference. IAMC seats available through both central and state AYUSH counselling." },
        { step: "05", title: "IAMC Document Verification & Fee", desc: "Report to IAMC with all original documents for verification. Complete fee payment to confirm your seat and begin your BAMS journey." }
      ],
      documents: [
        { text: "10+2 Marksheet & Certificate" },
        { text: "NEET-UG Scorecard" },
        { text: "AYUSH Counselling Allotment Letter" },
        { text: "Category Certificate (SC/ST/OBC if applicable)" },
        { text: "Domicile Certificate" },
        { text: "Passport-size Photographs" },
        { text: "Aadhaar Card / Government ID" }
      ],
      helpContact: "8448797700",
      whatsappContact: "918448797700"
    };
    admissions.scholarships = {
      description: "Multiple scholarship programmes are available to BAMS students at IAMC. Our admissions team assists eligible students in applying.",
      schemes: [
        { name: "UP Government Scholarship", typeStr: "Government", eligibility: "SC/ST/OBC/General EWS students domiciled in UP. Applied through URISE portal.", benefit: "Tuition fee waiver/reimbursement as per UP scholarship norms." },
        { name: "National Scholarship Portal (NSP)", typeStr: "Government", eligibility: "Central sector scholarship for students with NEET rank and family income below Rs 8 lakh.", benefit: "Up to Rs 12,000 per annum." },
        { name: "IAMC Merit Scholarship", typeStr: "Institutional", eligibility: "BAMS students with high NEET rank (top 10%) and consistent academic performance from Year 1.", benefit: "Partial fee waiver - 10% to 25% of tuition fee." },
        { name: "AYUSH Ministry Fellowships", typeStr: "Government", eligibility: "Post-BAMS researchers and internship students for research in classical Ayurveda.", benefit: "Monthly stipend as per AYUSH ministry guidelines." }
      ],
      howToApply: [
        { text: "Register on URISE portal for UP government scholarships" },
        { text: "Register on NSP portal for central government scholarships" },
        { text: "Contact IAMC admissions cell for institutional scholarship application" },
        { text: "Ensure all documents including income certificate are current" }
      ]
    };
    admissions.feeStructure = {
      instructions: "Pay tuition fees, hostel charges, and examination fees online through the Ishan Fee Payment Portal. Select Ishan Ayurveda as your institution, choose your program (BAMS), and complete payment via net banking, UPI, or card. Download your receipt immediately after payment.",
      link: "https://fee.ishan.ac"
    };
    await admissions.save();

    // 3. AyurvedaAboutUs
    let aboutUs = await AyurvedaAboutUs.findOne();
    if (!aboutUs) {
      aboutUs = new AyurvedaAboutUs({});
    }
    aboutUs.ourStory = {
      subtitle: "Our Story",
      title: "Reviving the Classical Science of Life in the National Capital Region",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      description: "Ishan Ayurvedic Medical College and Research Centre (IAMC), located in Knowledge Park, Greater Noida, is the only private AYUSH medical college in the National Capital Region. NCISM-approved and affiliated to its university, IAMC offers the five-and-a-half-year BAMS degree programme.\n\nThe college encompasses 14 Ayurvedic academic departments, an in-campus Ayurvedic teaching hospital, a herbal garden of over 200 medicinal plant species, a comprehensive library, auditorium, hostel facilities, and a faculty of experienced Vaidyas. Our approach integrates classical Ayurvedic education with clinical exposure — students rotate through hospital OPDs from Year 1, connecting ancient wisdom to living practice."
    };
    aboutUs.principalMessage = {
      name: "Dr. Vijay Kumar Sharma",
      designation: "Principal",
      experience: "MD (Kayachikitsa) · 22 Years Experience",
      message: "Dear future Vaidyas and well-wishers of Ayurveda,\n\nIt is my privilege to welcome you to Ishan Ayurvedic Medical College and Research Centre — a home for those who wish to pursue the ancient science of Ayurveda with academic rigour and clinical commitment.\n\nWe are proud to be the only private AYUSH medical college in the National Capital Region with NCISM approval. Our 14 Ayurvedic departments, living Herbal Garden of over 200 medicinal species, and dedicated faculty of BAMS MD-qualified Vaidyas create an environment in which classical learning and clinical practice are inseparable.\n\nI invite you to visit our campus, meet our faculty, and experience the IAMC difference. The BAMS degree from IAMC is not just a qualification — it is the beginning of a life dedicated to healing, scholarship, and service.\n\nWith warm regards and blessings,\nDr. Vijay Kumar Sharma\nPrincipal, IAMC",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop"
    };
    aboutUs.missionVision = {
      vision: "To be India's most respected institution for classical Ayurvedic medical education — producing competent, compassionate Vaidyas who elevate Ayurveda's standing in global healthcare through rigorous scholarship, clinical excellence, and evidence-based practice.",
      mission: "To provide NCISM-standard BAMS education that combines mastery of classical Ayurvedic texts with modern clinical training — preparing graduates to practise, research, teach, and lead in all domains of Ayurvedic healthcare in India and globally.",
      values: [
        { value: "Classical Scholarship" }, 
        { value: "Clinical Excellence" }, 
        { value: "Compassionate Care" }, 
        { value: "Evidence-Based Practice" }, 
        { value: "Ethical Conduct" }, 
        { value: "Community Health" }
      ]
    };
    aboutUs.approvalsSection = {
      subtitle: "Regulatory Standing",
      title: "Approved by India's Apex AYUSH Regulatory Body",
      description: "IAMC's BAMS degree is NCISM-approved — the only approval that confers full practitioner registration eligibility in all states of India. Without NCISM approval, an Ayurvedic degree is not recognised for medical practice. IAMC graduates are registered as Vaidyas and eligible for government AYUSH service."
    };
    aboutUs.approvals = [
      { name: "NCISM", description: "NCISM is the apex statutory body governing Ayurvedic, Unani, Siddha, and Sowa-Rigpa medical education and practice in India. IAMC's BAMS programme is NCISM-approved, ensuring the degree is recognised across India and eligible for practitioner registration.", image: "https://placehold.co/150x150/e2e8f0/1e293b?text=NCISM" },
      { name: "AYUSH", description: "Ministry of AYUSH of the Government of India oversees all AYUSH institutions. IAMC operates under AYUSH regulatory guidelines and is eligible for AYUSH national mission schemes, scholarships, and research grants.", image: "https://placehold.co/150x150/e2e8f0/1e293b?text=AYUSH" },
      { name: "UP AYUSH Directorate", description: "State-level AYUSH regulatory authority in Uttar Pradesh overseeing admissions, inspections, and affiliation. IAMC's BAMS seats are filled through UP state AYUSH counselling under the state Directorate's authority.", image: "https://pharmacy.ishan.ac/wp-content/uploads/2023/07/Scholarship-UP-150x150.jpg" }
    ];
    aboutUs.milestonesSection = {
      subtitle: "Our Journey",
      title: "Milestones of Growth"
    };
    aboutUs.milestones = [
      { year: "1994", event: "Ishan Educational Institutions founded by Dr. D.K. Garg." },
      { year: "2017", event: "Establishment of Ishan Ayurvedic Medical College and Research Centre." },
      { year: "2018", event: "Inauguration of the 100-bed Ayurvedic Teaching Hospital." },
      { year: "2023", event: "Recognized as the premier Ayurvedic institution in the NCR region." }
    ];
    aboutUs.keyDifferentiatorsSection = {
      title: "Key Differentiators"
    };
    aboutUs.keyDifferentiators = [
      { title: "NCISM Approved — only private AYUSH college in NCR" },
      { title: "14 Ayurvedic departments with dedicated Vaidya faculty" },
      { title: "In-campus teaching hospital with daily OPD rotation" },
      { title: "Herbal Garden of over 200 medicinal plant species" }
    ];
    await aboutUs.save();

    // 4. AyurvedaResearch (Placements)
    let research = await AyurvedaResearch.findOne();
    if (!research) {
      research = new AyurvedaResearch({});
    }
    research.placements = {
      summary: "Our BAMS graduates work in top-tier Ayurvedic companies, wellness centres, and government AYUSH hospitals across India.",
      companies: [
        { name: "Dabur", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Dabur_Logo.svg" },
        { name: "Patanjali", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Patanjali_Ayurved_Logo.svg" },
        { name: "Himalaya", logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Himalaya_Drug_Company_logo.png" },
        { name: "Baidyanath", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Baidyanath_Group_logo.png/220px-Baidyanath_Group_logo.png" },
        { name: "Jiva Ayurveda", logo: "https://www.jiva.com/jiva-ayurveda-logo.svg" }
      ]
    };
    await research.save();

    // 5. AyurvedaFaculty Collection
    await AyurvedaFaculty.deleteMany({});
    await AyurvedaFaculty.insertMany([
      {
        name: "Dr. Vijay Kumar Sharma",
        designation: "Principal",
        qualification: "MD (Kayachikitsa), BAMS",
        specialization: "Internal Medicine (Kayachikitsa)",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Dr. Sunita Agarwal",
        designation: "Professor & HOD",
        qualification: "MD (Rachana Sharir), BAMS",
        specialization: "Ayurvedic Anatomy (Rachana Sharir)",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Dr. Ravi Shankar Mishra",
        designation: "Professor & HOD",
        qualification: "MD (Dravyaguna), BAMS",
        specialization: "Materia Medica (Dravyaguna Vigyana)",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Dr. Priyanka Singh",
        designation: "Associate Professor & HOD",
        qualification: "MD (Prasuti & Stri Roga), BAMS",
        specialization: "OB/GYN (Prasuti & Stri Roga)",
        image: "https://images.unsplash.com/photo-1559839734-2b71f1536780?auto=format&fit=crop&w=800&q=80",
      }
    ]);

    // 5.5 AyurvedaVisitingFaculty
    const { AyurvedaVisitingFaculty } = require('./models/ayurvedaModels');
    await AyurvedaVisitingFaculty.deleteMany({});
    await AyurvedaVisitingFaculty.insertMany([
      { name: "Dr. Arun Sharma", org: "Senior Pharmacologist", specialisation: "Clinical Drug Development & Trials", impact: "Provides insights into clinical trial design, GCP guidelines, and drug evaluation methodologies." },
      { name: "Mr. Rajiv Mehta", org: "Production Head, Sun Pharma", specialisation: "Pharmaceutical Manufacturing & GMP", impact: "Trains students on large-scale manufacturing, SOPs, and Good Manufacturing Practice compliance." },
      { name: "Dr. Kavita Iyer", org: "Research Scientist, Dr. Reddy's", specialisation: "Drug Formulation & Stability Studies", impact: "Guides students on formulation R&D, stability testing protocols, and regulatory submissions." },
      { name: "Ms. Priya Nair", org: "Hospital Pharmacist, Apollo", specialisation: "Clinical Pharmacy & Patient Counselling", impact: "Mentors students in hospital pharmacy operations, medication reviews, and therapeutic counselling." },
      { name: "Dr. Sanjay Gupta", org: "Drug Regulatory Expert", specialisation: "CDSCO Regulations & Drug Licensing", impact: "Equips students with knowledge of Indian drug regulations and the licensing process under CDSCO." },
      { name: "Dr. Meena Bajaj", org: "Phytochemist, CSIR-CIMAP", specialisation: "Herbal Drug Research & Phytochemistry", impact: "Demonstrates advanced techniques in extraction and characterisation of bioactive plant compounds." },
      { name: "Mr. Rahul Singh", org: "QA Manager, Cipla", specialisation: "Quality Assurance & Quality Control", impact: "Trains students in QA/QC systems, analytical testing methods, and pharmaceutical quality standards." },
      { name: "Dr. Anita Verma", org: "Pharmacovigilance Expert", specialisation: "Drug Safety & Adverse Event Reporting", impact: "Covers post-marketing surveillance, adverse drug reaction reporting, and global pharmacovigilance systems." }
    ]);

    // 6. AyurvedaNews Collection
    await AyurvedaNews.deleteMany({});
    await AyurvedaNews.insertMany([
      {
        title: "National Ayurveda Day & Dhanvantari Jayanti Celebration",
        date: "2024-10-23",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
        description: "IAMC celebrated National Ayurveda Day with a grand event highlighting the relevance of ancient Ayurvedic practices in modern healthcare. The event featured guest lectures, an exhibition of medicinal plants, and interactive sessions.",
        link: "/news/national-ayurveda-day"
      },
      {
        title: "Free Free Medical Camp Organised by Ishan Ayurvedic Hospital",
        date: "2024-09-15",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
        description: "A free medical camp was organized in neighboring villages, providing Nadi Pariksha and classical medicine distribution to over 500 patients.",
        link: "/news/medical-camp"
      },
      {
        title: "National Seminar on Advances in Panchkarma Therapy",
        date: "2024-08-05",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        description: "Leading Vaidyas from across India gathered at IAMC for a 2-day national seminar on standardizing Panchkarma procedures.",
        link: "/news/panchkarma-seminar"
      },
      {
        title: "Herbal Garden Inaugurates New Conservatory",
        date: "2024-07-20",
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
        description: "A new greenhouse conservatory was inaugurated in the campus Herbal Garden to cultivate and preserve rare Himalayan medicinal species.",
        link: "/news/herbal-garden"
      }
    ]);

    // 7. AyurvedaTestimonial Collection
    await AyurvedaTestimonial.deleteMany({});
    await AyurvedaTestimonial.insertMany([
      {
        name: "Rahul Deshmukh",
        designation: "BAMS Graduate, 2023",
        feedback: "The clinical training and lab exposure at IAMC were instrumental in my transition to the industry. I felt industry-ready from day one of my job at Himalaya Drug Company.",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Sanya Malhotra",
        designation: "BAMS Student, 2024",
        feedback: "Access to state-of-the-art laboratories and guidance from industry-experienced faculty has truly elevated my practical skills.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Priyanka Singh",
        designation: "BAMS Student, 2025",
        feedback: "The dedicated placement cell provides structured guidance that is rare to find. The mock interviews and guest lectures from industry experts are incredibly helpful.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
      }
    ]);

    // 8. AyurvedaFAQ Collection
    await AyurvedaFAQ.deleteMany({});
    await AyurvedaFAQ.insertMany([
      {
        question: "What programme does IAMC offer?",
        answer: "IAMC offers the 5.5-year BAMS (Bachelor of Ayurvedic Medicine and Surgery) degree programme, NCISM-approved, including a one-year compulsory rotatory internship."
      },
      {
        question: "Is IAMC approved by NCISM?",
        answer: "Yes, IAMC is NCISM-approved. BAMS graduates are eligible for practitioner registration and government AYUSH service."
      },
      {
        question: "How does the institute support placements?",
        answer: "We have a dedicated placement cell that connects students with top pharmaceutical companies, hospitals, and clinical research organizations for internships and full-time roles."
      },
      {
        question: "What is the focus of practical training?",
        answer: "Practical training is emphasized through our 10 specialized laboratories, ensuring hands-on experience in drug formulation, analysis, and clinical pharmacology."
      },
      {
        question: "Are there opportunities for industrial visits?",
        answer: "Yes, we regularly organize industrial visits to leading pharmaceutical manufacturing units to give students a real-world understanding of large-scale production and quality control."
      },
      {
        question: "What is the eligibility for BAMS admission?",
        answer: "Candidates must have passed 10+2 with Physics, Chemistry, and Biology/Mathematics with at least 50% marks (45% for SC/ST) from a recognized board."
      }
    ]);

    // 9. AyurvedaContact Singleton
    let contact = await AyurvedaContact.findOne();
    if (!contact) {
      contact = new AyurvedaContact({});
    }
    contact.mainContact = {
      address: "Knowledge Park-III, Greater Noida, Uttar Pradesh 201308",
      phone: "8448797700",
      email: "info@ishan.ac",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.971367018335!2d77.4812328!3d28.4653609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1063625f385%3A0xc3f65e23be3d489b!2sIshan%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1718873600000!5m2!1sen!2sin"
    };
    contact.socialLinks = [
      { platform: "Facebook", href: "https://facebook.com/ishanayurveda" },
      { platform: "Instagram", href: "https://instagram.com/ishanayurveda" },
      { platform: "Youtube", href: "https://youtube.com/@ishanayurveda" },
      { platform: "Linkedin", href: "https://linkedin.com/company/ishan-ayurveda" },
      { platform: "Twitter", href: "https://twitter.com/ishan_ayurveda" }
    ];
    await contact.save();

    // 10. AyurvedaSiteConfig Singleton
    let siteConfig = await AyurvedaSiteConfig.findOne();
    if (!siteConfig) {
      siteConfig = new AyurvedaSiteConfig({});
    }
    siteConfig.navbar = {
      logo: {
        text: "ISHAN",
        subtext: "Ayurvedic Medical College",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBPP1F_Pp9ioq_SfiDL6mn5No4JbZSE9X9A&s"
      },
      topBar: {
        phone: "8448797700",
        email: "info@ishan.ac",
        utilityLinks: [
          { label: "Fee Payment", href: "/fee-payment" },
          { label: "Student Portal", href: "/student-portal" },
          { label: "News", href: "/news-events" }
        ]
      },
      ctaButton: {
        label: "Apply Now",
        href: "/admissions"
      },
      navLinks: [
        {
          label: "About Us",
          featured: {
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
            title: "Excellence in Ayurveda",
            desc: "NCISM-approved, the only private AYUSH medical college in NCR — rooted in classical tradition, oriented to modern clinical practice.",
            href: "/about"
          },
          columns: [
            {
              heading: "Institution",
              icon: "Building2",
              links: [
                { label: "About IAMC", href: "/about" },
                { label: "Principal's Message", href: "/principal-message" },
                { label: "Mission & Vision", href: "/mission-vision" },
                { label: "Why Choose Us", href: "/why-choose-us" },
                { label: "Approvals & Affiliations", href: "/approvals" }
              ]
            },
            {
              heading: "Regulatory",
              icon: "Shield",
              links: [
                { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
                { label: "Code of Conduct", href: "/code-of-conduct" },
                { label: "FAQs", href: "/faqs" }
              ]
            }
          ]
        },
        {
          label: "BAMS Programme",
          featured: {
            img: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=800&auto=format&fit=crop",
            title: "Bachelor of Ayurvedic Medicine & Surgery",
            desc: "5.5-year NCISM-recognised degree with in-campus hospital clinical training and 14 specialised Ayurvedic departments.",
            href: "/courses/bams"
          },
          columns: [
            {
              heading: "Programme",
              icon: "GraduationCap",
              links: [
                { label: "About BAMS", href: "/courses/bams" },
                { label: "Scope of BAMS", href: "/scope-of-bams" },
                { label: "Syllabus — Year Wise", href: "/syllabus" }
              ]
            },
            {
              heading: "Admissions",
              icon: "ArrowRight",
              links: [
                { label: "Admission Process", href: "/admissions" },
                { label: "Scholarships", href: "/scholarships" },
                { label: "Fee Structure", href: "/fee-payment" }
              ]
            },
            {
              heading: "Faculty",
              icon: "Users",
              links: [
                { label: "Faculty Directory", href: "/faculty" },
                { label: "Visiting Faculty", href: "/visiting-faculty" }
              ]
            }
          ]
        },
        {
          label: "14 Departments",
          featured: {
            img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
            title: "14 Ayurvedic Departments",
            desc: "Every branch of Ayurvedic medicine covered — from Siddhanta to Surgery — with dedicated faculty and clinical exposure.",
            href: "/kayachikitsa"
          },
          columns: [
            {
              heading: "Foundational",
              icon: "BookOpen",
              links: [
                { label: "Ayurvedic Siddhanta", href: "/ayurvedic-siddhanta" },
                { label: "Rachana Sharir (Anatomy)", href: "/rachana-sharir" },
                { label: "Kriya Sharir (Physiology)", href: "/kriya-sharir" },
                { label: "Dravyaguna Vigyana", href: "/dravyaguna-vigyana" },
                { label: "Rasa Shastra & Bhaishajya Kalpana", href: "/rasa-shastra" },
                { label: "Samhita & Sanskrit", href: "/samhita-sanskrit" },
                { label: "Agada Tantra (Toxicology)", href: "/agada-tantra" }
              ]
            },
            {
              heading: "Clinical",
              icon: "Heart",
              links: [
                { label: "Kayachikitsa (Internal Medicine)", href: "/kayachikitsa" },
                { label: "Panchkarma", href: "/panchkarma" },
                { label: "Shalya Tantra (Surgery)", href: "/shalya-tantra" },
                { label: "Shalakya Tantra (ENT & Ophth.)", href: "/shalakya-tantra" },
                { label: "Prasuti & Stri Roga (OB/GYN)", href: "/prasuti-stri-roga" },
                { label: "Kaumarabhritya (Paediatrics)", href: "/kaumarabhritya" },
                { label: "Swasthavritta & Yoga", href: "/swasthavritta-yoga" }
              ]
            }
          ]
        },
        {
          label: "Campus & Life",
          featured: {
            img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
            title: "Vibrant Campus Life",
            desc: "Global Ayurvedic Summits, Yoga Day, Shishyopanyan Sanshkar, medical camps and a living herbal garden.",
            href: "/news-events"
          },
          columns: [
            {
              heading: "Facilities",
              icon: "Building2",
              links: [
                { label: "Infrastructure", href: "/infrastructure" },
                { label: "Herbal Garden", href: "/herbal-garden" },
                { label: "Hostel", href: "/hostel" },
                { label: "Auditorium & Sports", href: "/auditorium-sports" }
              ]
            },
            {
              heading: "Events & Gallery",
              icon: "Camera",
              links: [
                { label: "News & Events", href: "/news-events" },
                { label: "Events Calendar", href: "/events-calendar" },
                { label: "Photo Gallery", href: "/photo-gallery" },
                { label: "Video Gallery", href: "/video-gallery" },
                { label: "Press Coverage", href: "/press-coverage" }
              ]
            },
            {
              heading: "Student Hub",
              icon: "FileText",
              links: [
                { label: "Downloads", href: "/downloads" },
                { label: "Past Exam Papers", href: "/past-papers" },
                { label: "Student Portal", href: "/student-portal" },
                { label: "Fee Payment", href: "/fee-payment" }
              ]
            }
          ]
        },
        {
          label: "Connect",
          featured: {
            img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
            title: "Research & Placements",
            desc: "Clinical research, Ayurvedic journal, alumni Vaidyas, and government AYUSH placement guidance.",
            href: "/placements"
          },
          columns: [
            {
              heading: "Research",
              icon: "Microscope",
              links: [
                { label: "Research Journal", href: "/research-journal" },
                { label: "Publications", href: "/publications" },
                { label: "Research Projects", href: "/research-projects" },
                { label: "Alumni Network", href: "/alumni-network" },
                { label: "Placements", href: "/placements" }
              ]
            },
            {
              heading: "Get in Touch",
              icon: "Phone",
              links: [
                { label: "Contact Us", href: "/contact" },
                { label: "Careers", href: "/careers" },
                { label: "Feedback", href: "/feedback" }
              ]
            }
          ]
        }
      ]
    };
    siteConfig.footer = {
      brandDescription: "NCISM Approved | Only Private AYUSH College in NCR | Excellence in classical Ayurvedic education with in-campus teaching hospital.",
      quickLinks: [
        { label: "About IAMC", href: "/about" },
        { label: "BAMS Programme", href: "/courses/bams" },
        { label: "Admissions", href: "/admissions" },
        { label: "14 Departments", href: "/kayachikitsa" },
        { label: "Contact", href: "/contact" }
      ],
      departmentLinks: [
        { label: "Kayachikitsa (Internal Medicine)", href: "/kayachikitsa" },
        { label: "Panchkarma", href: "/panchkarma" },
        { label: "Shalya Tantra (Surgery)", href: "/shalya-tantra" },
        { label: "Dravyaguna Vigyana", href: "/dravyaguna-vigyana" },
        { label: "Swasthavritta & Yoga", href: "/swasthavritta-yoga" }
      ],
      socialLinks: [
        { platform: "Facebook", href: "https://facebook.com/ishanayurveda" },
        { platform: "Instagram", href: "https://instagram.com/ishanayurveda" },
        { platform: "Youtube", href: "https://youtube.com/@ishanayurveda" },
        { platform: "Linkedin", href: "https://linkedin.com/company/ishan-ayurveda" },
        { platform: "Twitter", href: "https://twitter.com/ishan_ayurveda" }
      ],
      contact: {
        address: "Knowledge Park-III, Greater Noida, Uttar Pradesh 201308",
        phone: "8448797700",
        email: "info@ishan.ac"
      },
      bottomLinks: [
        { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
        { label: "Anti-Ragging", href: "/anti-ragging" },
        { label: "Grievance", href: "/grievance-redressal" },
        { label: "Code of Conduct", href: "/code-of-conduct" }
      ],
      copyrightText: "Ishan Ayurvedic Medical College & Research Centre. All rights reserved."
    };
    await siteConfig.save();

    // 8. AyurvedaFAQ
    await AyurvedaFAQ.deleteMany({});
    await AyurvedaFAQ.insertMany([
      { question: "Is the BAMS degree approved by NCISM?", answer: "Yes, Ishan Ayurvedic Medical College is approved by the National Commission for Indian System of Medicine (NCISM), ensuring the BAMS degree is fully recognized across India." },
      { question: "Do you have an in-campus hospital?", answer: "Yes, we have a fully functional 100-bed Ayurvedic hospital on campus with daily OPDs, IPD, Panchkarma center, and operation theater." },
      { question: "Are hostel facilities available?", answer: "Yes, we provide separate hostel facilities for boys and girls with modern amenities, nutritious food, and 24/7 security." }
    ]);

    // 9. AyurvedaMandatoryDisclosure
    let mandatory = await AyurvedaMandatoryDisclosure.findOne();
    if (!mandatory) {
      mandatory = new AyurvedaMandatoryDisclosure({});
    }
    mandatory.statement = "The information provided below is submitted as required by the National Commission for Indian System of Medicine (NCISM) and the Ministry of AYUSH, and is updated annually to ensure full transparency. Any discrepancies found in the reported data should be immediately brought to the notice of the Principal at Ishan Ayurvedic Medical College and Research Centre, Knowledge Park, Greater Noida.\n\nNCISM mandates public disclosure for the benefit of current and prospective students, healthcare practitioners, and regulatory authorities. It serves as a comprehensive record of the institution's facilities, hospital standards, and Vaidya faculty expertise, ensuring accountability in Ayurvedic medical education.";
    mandatory.disclosureItems = [
      { category: "Institution Details", items: "Name: Ishan Ayurvedic Medical College and Research Centre\nAddress: Knowledge Park-III, Greater Noida\nYear of Establishment: 2017\nStatus: Private Self-Financing\nType: Co-educational Professional Medical Institution" },
      { category: "Academic Information", items: "Programs Offered: BAMS (Bachelor of Ayurvedic Medicine & Surgery)\nNCISM Approval Status — Current\nAnnual Intake: 60 Seats\nFaculty-Student Ratio\nStudent Success & Registration Rate" },
      { category: "Regulatory Information", items: "NCISM Approval Letters\nCCIM/AYUSH Ministry Notifications\nUniversity Affiliation Documents\nAnti-Ragging Committee Constitution\nGrievance Redressal Mechanism" },
      { category: "Infrastructure & Hospital", items: "100-Bed In-Campus Ayurvedic Teaching Hospital\n14 Specialized Ayurvedic Departments\nMedical Library — Classical Texts, Journals & Digital Resources\nMachine Room & Herbal Garden (200+ Species)\nMedical Camps & Outreach Programs" },
      { category: "Faculty & Staff", items: "List of Core Faculty with NCISM-mandated Qualifications (MD/MS Ayurveda)\nVisiting Clinical Experts Profile\nHospital Administrative Staff Details" }
    ];
    await mandatory.save();

    // 10. AyurvedaCodeOfConduct
    let codeOfConduct = await AyurvedaCodeOfConduct.findOne();
    if (!codeOfConduct) {
      codeOfConduct = new AyurvedaCodeOfConduct({});
    }
    codeOfConduct.title = "Code of Conduct";
    codeOfConduct.subtitle = "Student rules, dress code, and academic integrity guidelines for BAMS students";
    codeOfConduct.image = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80";
    codeOfConduct.rules = [
      { category: "1. Professional Conduct", items: "Ayurvedic students are expected to maintain the highest standards of decorum and dignity, reflecting the noble nature of the Vaidya profession. Respectful behavior towards faculty, staff, and fellow students is mandatory. Any form of misconduct will result in immediate disciplinary action." },
      { category: "2. Dress Code (Clinical Uniform)", items: "As per NCISM standards, students must adhere to the prescribed professional dress code, including a clean White Apron/Lab Coat. Clean and formal attire is mandatory during academic hours, laboratory sessions, and hospital clinical postings." },
      { category: "3. Attendance (NCISM Regulations)", items: "A strict minimum of 75% attendance in theory and 80% in practicals/clinicals is mandatory for each subject as per National Commission for Indian System of Medicine (NCISM) regulations. Students falling below this threshold will not be permitted to appear for university examinations." },
      { category: "4. Academic Integrity & Clinical Ethics", items: "Plagiarism, cheating, or any form of academic dishonesty is strictly prohibited. Falsifying clinical data, patient records, or research results will lead to immediate disqualification and potential expulsion, as these acts are contrary to the ethics of the medical profession." },
      { category: "5. Hospital & Campus Decorum", items: "Students must maintain strict safety protocols, absolute silence, and decorum in the Hospital OPD/IPD, Laboratories, and Library. Use of mobile phones is strictly prohibited in these clinical and academic areas. Respect for patients and hospital equipment is expected from every student." },
      { category: "6. Zero Tolerance for Ragging", items: "As per UGC and NCISM regulations, ragging in any form is a criminal offense. IAMC maintains zero tolerance towards ragging. Offenders will face immediate expulsion, FIR registration, and criminal prosecution." }
    ];
    await codeOfConduct.save();

    // --- Seed Departments from JSON ---
    const fs = require('fs');
    const path = require('path');
    const seedPath = path.join(__dirname, 'departments_seed.json');
    if (fs.existsSync(seedPath)) {
      const deptsData = JSON.parse(fs.readFileSync(seedPath, 'utf8'));
      for (const d of deptsData) {
        let dept = await AyurvedaDepartment.findOne({ slug: d.slug });
        if (!dept) {
          dept = new AyurvedaDepartment(d);
        } else {
          dept.name = d.name;
          dept.type = d.type;
          dept.subtitle = d.subtitle;
          dept.description = d.description;
          dept.image = d.image;
          dept.highlights = d.highlights;
        }
        await dept.save();
      }
      console.log("Seeded " + deptsData.length + " departments.");
    }

    console.log("Ayurveda DB Seeded Successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding Ayurveda DB:", error);
    process.exit(1);
  }
};

seedAyurveda();
