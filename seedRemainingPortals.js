const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGODB_URI || "mongodb+srv://atharv:atharv%401436@ishanac.ve0gyjo.mongodb.net/ishan-cms?appName=Ishanac";

const ayurvedaModels = require('./models/ayurvedaModels');
const hospitalModels = require('./models/hospitalModels');
const pharmacyModels = require('./models/pharmacyModels');
const legalModels = require('./models/legalModels');

async function seed() {
  await mongoose.connect(MONGO_URI);
  console.log("Connected to MongoDB...");

  // ==========================================
  // 1. AYURVEDA SEEDING (Vedic Wellness)
  // ==========================================
  console.log("Seeding Ayurveda (Vedic Wellness)...");

  await ayurvedaModels.AyurvedaHomePage.deleteMany({});
  await ayurvedaModels.AyurvedaHomePage.create({
    banners: [{
      heading: "Authentic Ayurvedic Education & Healing",
      subheading: "Approved by NCISM & Affiliated with Mahayogi Guru Gorakhnath AYUSH University",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
      ctaText: "Explore BAMS",
      ctaLink: "/courses/bams"
    }],
    stats: [
      { value: "14", label: "AYURVEDIC DEPARTMENTS", icon: "Award" },
      { value: "25000+", label: "HOSPITAL PATIENTS / YEAR", icon: "Users" },
      { value: "200+", label: "MEDICINAL PLANT SPECIES", icon: "Leaf" },
      { value: "50+", label: "VAIDYA FACULTY", icon: "Heart" }
    ],
    aboutSnippet: {
      title: "About IAMC",
      description: "Ishan Ayurvedic Medical College and Research Centre was established with the vision of promoting holistic health through authentic Ayurvedic teachings and practice. As a premier teaching hospital in Greater Noida, we combine traditional wisdom with modern clinical standards.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
      ctaText: "Read Our Story"
    },
    institutionalProfile: {
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80",
      heading: "Institutional Profile",
      subheading: "Nurturing the Future of Ayurveda",
      description: "IAMC provides a state-of-the-art campus featuring modern lecture halls, fully-equipped labs, a rich library, and a spacious herbal garden cultivating over 200 species of medicinal plants.",
      ctaText: "Learn More",
      ctaLink: "/aboutus"
    },
    whyChooseUs: [
      { icon: "Award", heading: "NCISM Approved", description: "Recognised teaching hospital under the National Commission for Indian System of Medicine." },
      { icon: "Heart", heading: "Affordable Care", description: "Quality Ayurvedic treatments at subsidised rates, making holistic healthcare accessible to all." },
      { icon: "Users", heading: "Expert Vaidyas", description: "Team of MD Ayurveda specialists with decades of clinical and academic experience." },
      { icon: "Leaf", heading: "Authentic Panchkarma", description: "Classical five-fold purification therapies administered per Charaka Samhita protocols." }
    ],
    highlights: [
      { title: "Herbal Garden", description: "In-house garden for practical identification and research.", icon: "Leaf" },
      { title: "Clinical Postings", description: "Hands-on experience in our active 100-bed teaching hospital.", icon: "Stethoscope" }
    ],
    lifeAtIshan: [
      { image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" },
      { image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80" }
    ]
  });

  await ayurvedaModels.AyurvedaAboutUs.deleteMany({});
  await ayurvedaModels.AyurvedaAboutUs.create({
    ourStory: {
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      description: "Established as part of the Ishan Group, Ishan Ayurvedic Medical College is dedicated to reviving and disseminating the ancient knowledge of Ayurveda. We combine top-tier academic training with intensive clinical practice."
    },
    groupHistory: { content: "Ishan Group of Institutions has been a beacon of learning in Greater Noida since 1994, expanding into multiple specialized colleges." },
    chairmanMessage: { name: "Dr. D.K. Garg", message: "Our mission is to empower students with authentic knowledge of Ayurveda to serve humanity.", image: "" },
    principalMessage: { name: "Dr. Anita Sharma", message: "Ayurveda is not just a medicine system, it is a way of life.", image: "" },
    missionVision: {
      vision: "To become a world-renowned center of excellence in Ayurvedic education and holistic patient care.",
      mission: "To impart quality, values-based education and authentic clinical training in Ayurveda.",
      values: ["Integrity", "Compassion", "Scientific Inquiry", "Traditional Authenticity"]
    },
    approvals: [
      { name: "NCISM", image: "", description: "Approved by National Commission for Indian System of Medicine" },
      { name: "AYUSH Ministry", image: "", description: "Recognised by Ministry of AYUSH, Government of India" }
    ]
  });

  await ayurvedaModels.AyurvedaCourse.deleteMany({});
  await ayurvedaModels.AyurvedaCourse.create({
    name: "BAMS (Bachelor of Ayurvedic Medicine and Surgery)",
    duration: "5.5 Years (including 1 Year compulsory internship)",
    eligibility: "NEET Qualified & 10+2 with PCB minimum 50% marks",
    overview: "BAMS is a professional degree in Indian medicine that covers the study of integrated traditional Ayurveda and modern medicine.",
    syllabus: ["Kriya Sharir", "Rachana Sharir", "Dravyaguna Vigyana", "Rasa Shastra", "Kayachikitsa", "Panchkarma", "Shalya Tantra", "Shalakya Tantra"],
    careerScope: "Practice as Ayurvedic Physician, Medical Officer in government/private hospitals, Clinical Researcher, or academician.",
    slug: "bams"
  });

  await ayurvedaModels.AyurvedaAdmissions.deleteMany({});
  await ayurvedaModels.AyurvedaAdmissions.create({
    admissionsHome: { title: "BAMS Admissions", content: "Admissions to BAMS at IAMC are conducted through merit in NEET-UG and state/national counselling procedures." },
    eligibilityIntake: { eligibility: "10+2 with Physics, Chemistry, Biology and English with aggregate 50% marks, plus NEET-UG qualified status.", intake: "100 seats" },
    neetCounselling: { guide: "Candidates must participate in AYUSH NEET UG counselling conducted by the state authority.", link: "https://aaccc.gov.in" },
    scholarships: [
      { category: "Merit-based", description: "Tuition fee waivers for outstanding NEET scores." },
      { category: "UP Government Scholarship", description: "Financial aid for reserved categories (SC/ST/OBC) and EWS candidates." }
    ]
  });

  await ayurvedaModels.AyurvedaAcademics.deleteMany({});
  await ayurvedaModels.AyurvedaAcademics.create({
    departments: [
      { name: "Kayachikitsa", description: "Department of General Medicine focusing on internal medicine and holistic treatments." },
      { name: "Panchkarma", description: "Department of purification and detoxification therapies." },
      { name: "Shalya Tantra", description: "Department of Ayurvedic surgery and Ksharasutra procedures." },
      { name: "Dravyaguna Vigyana", description: "Department of pharmacology and pharmacognosy of medicinal plants." }
    ]
  });

  await ayurvedaModels.AyurvedaHospital.deleteMany({});
  await ayurvedaModels.AyurvedaHospital.create({
    overview: {
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80",
      content: "The IAMC Teaching Hospital is a fully functioning, 100-bed hospital serving the Greater Noida region with classical treatments and modern diagnostic backup."
    },
    panchkarma: [
      { title: "Vamana", description: "Therapeutic emesis for Kapha-dominated disorders.", image: "" },
      { title: "Virechana", description: "Therapeutic purgation for Pitta-dominated disorders.", image: "" },
      { title: "Basti", description: "Medicated enema therapy for Vata-dominated disorders.", image: "" }
    ],
    departments: [
      { name: "Kayachikitsa OPD", description: "General health consultations." },
      { name: "Panchkarma Therapy", description: "Purification treatments." }
    ],
    diagnostics: [
      { title: "Pathology Lab", description: "Routine blood, urine, and biochemical analysis." },
      { title: "X-Ray & ECG", description: "Basic radiology and cardiology support." }
    ],
    services: [
      { title: "24/7 Casualty", description: "Emergency response and management." },
      { title: "IPD Rooms", description: "Comfortable semi-private and general wards." }
    ]
  });

  await ayurvedaModels.AyurvedaStudentCorner.deleteMany({});
  await ayurvedaModels.AyurvedaStudentCorner.create({
    antiRagging: { content: "IAMC maintains a zero-tolerance policy towards ragging. Anti-ragging squads perform continuous checks." },
    grievanceRedressal: { content: "Students can submit complaints and grievances to the Grievance Redressal Committee for swift action." },
    poshPolicy: { content: "Prevention of Sexual Harassment cell ensures a safe, respectful learning and working environment." },
    codeOfConduct: { content: "Students must maintain discipline, dress code, and minimum 75% attendance in both lectures and practicals." },
    privacyPolicy: { content: "All personal student data is handled securely in accordance with local regulations." }
  });

  await ayurvedaModels.AyurvedaResearch.deleteMany({});
  await ayurvedaModels.AyurvedaResearch.create({
    academicJournal: { title: "Ishan Journal of Ayurveda", issn: "ISSN 2345-6789", content: "A peer-reviewed journal publishing quarterly research papers in Ayurvedic clinical studies." },
    facultyPublications: [
      { title: "Clinical efficacy of Ksharasutra in Fistula-in-Ano", author: "Dr. Suresh Yadav", journal: "Ishan Journal of Ayurveda", year: "2024" }
    ],
    projects: [
      { title: "Standardization of Panchkarma protocols for arthritis", body: "Department of Panchkarma", status: "Ongoing" }
    ],
    placements: {
      summary: "Our BAMS graduates find placements in top Ayurvedic companies, clinical research centers, and hospital chains.",
      companies: [{ name: "Dabur", logo: "" }, { name: "Himalaya", logo: "" }, { name: "Patanjali", logo: "" }]
    },
    alumni: [
      { name: "Vaidya Ritu Sharma", batch: "BAMS 2018", testimonial: "IAMC provided me with the clinical foundation that helped me set up my own successful practice.", image: "" }
    ]
  });

  await ayurvedaModels.AyurvedaFacilities.deleteMany({});
  await ayurvedaModels.AyurvedaFacilities.create({
    herbalGarden: { image: "", description: "Cultivates over 200 species of classical medicinal herbs used for hands-on botany training.", speciesCount: "200+" },
    hostel: { image: "", content: "Separate, secure hostels for boys and girls with study rooms and mess facilities." },
    infrastructure: { image: "", content: "Smart classrooms, air-conditioned seminar halls, and highly equipped labs." },
    auditorium: { image: "", seating: "500 seats" },
    sports: { image: "", content: "Indoor and outdoor sports facilities including volleyball and badminton courts." }
  });

  await ayurvedaModels.AyurvedaDigitalServices.deleteMany({});
  await ayurvedaModels.AyurvedaDigitalServices.create({
    studentPortal: { title: "Student Portal Login", link: "https://portal.ishan.ac" },
    feePayment: { title: "Online Fee Payment", link: "https://fee.ishan.ac" },
    downloads: [{ title: "BAMS Syllabus PDF", fileUrl: "/downloads/syllabus.pdf" }],
    examinationPortal: { title: "CCS/AYUSH University Exam Portal", link: "https://exam.ishan.ac" }
  });

  await ayurvedaModels.AyurvedaContact.deleteMany({});
  await ayurvedaModels.AyurvedaContact.create({
    mainContact: {
      address: "Knowledge Park-III, Greater Noida, Uttar Pradesh 201308",
      phone: "8448797700",
      email: "admissions@ishan.ac",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2!2d77.49!3d28.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIshan+Ayurvedic+Medical+College!5e0!3m2!1sen!2sin!4v1"
    },
    collegeContacts: []
  });

  // Collections for Ayurveda
  await ayurvedaModels.AyurvedaFaculty.deleteMany({});
  await ayurvedaModels.AyurvedaFaculty.create([
    { name: "Dr. Anita Sharma", designation: "Principal & Professor", qualification: "MD (Ayurveda)", experience: "15+ years", specialization: "Kayachikitsa", image: "" },
    { name: "Dr. Rajesh Kumar", designation: "Associate Professor", qualification: "MD (Panchkarma)", experience: "12+ years", specialization: "Panchkarma", image: "" },
    { name: "Dr. Priya Verma", designation: "Assistant Professor", qualification: "MS (Ayurveda)", experience: "10+ years", specialization: "Prasuti Tantra", image: "" },
    { name: "Dr. Suresh Yadav", designation: "Professor", qualification: "MS (Ayurveda)", experience: "18+ years", specialization: "Shalya Tantra", image: "" }
  ]);

  await ayurvedaModels.AyurvedaFAQ.deleteMany({});
  await ayurvedaModels.AyurvedaFAQ.create([
    { question: "Is Ishan Ayurvedic Medical College approved by the government?", answer: "Yes, IAMC is approved by the National Commission for Indian System of Medicine (NCISM) and Ministry of AYUSH, Government of India.", category: "Admissions" },
    { question: "What is the qualification required for BAMS?", answer: "Candidates must be NEET-UG qualified and have passed 10+2 with Physics, Chemistry, Biology and English with at least 50% marks.", category: "Admissions" }
  ]);

  await ayurvedaModels.AyurvedaNews.deleteMany({});
  await ayurvedaModels.AyurvedaNews.create([
    {
      title: "National Ayurveda Day & Dhanvantari Jayanti Celebration",
      date: "October 28, 2025",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      description: "Ishan Ayurvedic Medical College celebrated National Ayurveda Day with a mega health camp and shloka recitation competition. Distinguished Vaidyas shared insights on the global acceptance of Ayurveda.",
      link: ""
    },
    {
      title: "Workshop on Clinical Application of Panchkarma",
      date: "February 12, 2025",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
      description: "A three-day hands-on workshop was conducted for BAMS students on the practical procedures of Vamana and Virechana, led by senior practitioners from the IAMC Teaching Hospital.",
      link: ""
    }
  ]);

  await ayurvedaModels.AyurvedaBlog.deleteMany({});
  await ayurvedaModels.AyurvedaBlog.create([
    { title: "Daily Ayurvedic Rituals for High Energy", date: new Date(), author: "Dr. Anita Sharma", image: "", content: "Ayurveda teaches Dinacharya...", slug: "daily-ayurvedic-rituals" }
  ]);

  await ayurvedaModels.AyurvedaTestimonial.deleteMany({});
  await ayurvedaModels.AyurvedaTestimonial.create([
    { name: "Rahul Sharma", designation: "Student (BAMS)", feedback: "The teaching hospital provides unbeatable hands-on experience.", image: "" }
  ]);

  console.log("Ayurveda seeded successfully!");


  // ==========================================
  // 2. HOSPITAL SEEDING (Healing Haven)
  // ==========================================
  console.log("Seeding Hospital (Healing Haven)...");

  await hospitalModels.HospitalHomePage.deleteMany({});
  await hospitalModels.HospitalHomePage.create({
    banners: [{
      heading: "Classical Ayurvedic Healing",
      subheading: "Experienced MD Vaidyas & authentic Panchkarma therapies under one roof.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
      ctaText: "Book Appointment"
    }],
    stats: [
      { label: "Patients Treated Yearly", value: "25000+", description: "Trusted by thousands" },
      { label: "OPD Departments", value: "9", description: "Covering all major specialities" },
      { label: "Years of Excellence", value: "30", description: "Decades of authentic healing" },
      { label: "Panchkarma Therapies", value: "15", description: "Classical & proven treatments" }
    ],
    aboutHospital: {
      title: "Welcome to Ishan Ayurvedic Hospital",
      content: "Ishan Ayurvedic Hospital is a leading provider of natural healthcare in the Delhi NCR region. As the teaching hospital of Ishan Ayurvedic Medical College, we provide NCISM-approved, affordable care backed by traditional principles.",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80"
    }
  });

  await hospitalModels.HospitalAboutUs.deleteMany({});
  await hospitalModels.HospitalAboutUs.create({
    ourStory: {
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      description: "Ishan Ayurvedic Hospital is committed to bringing the ancient science of Ayurveda to the modern world..."
    },
    missionVision: {
      vision: "To render accessible, safe, and authentic Ayurvedic treatments to all segments of society.",
      mission: "To integrate classical therapeutic regimens with modern diagnostic standards.",
      values: ["Authenticity", "Empathy", "Integrity", "Excellence"]
    }
  });

  await hospitalModels.HospitalServices.deleteMany({});
  await hospitalModels.HospitalServices.create({
    title: "Our Holistic Healthcare Services",
    description: "We offer complete diagnostic and therapeutic services based on classical Ayurveda.",
    image: "",
    features: ["Personalised Consultations", "Authentic Panchkarma", "Therapeutic Yoga", "In-house Ayurvedic Dispensary"]
  });

  await hospitalModels.HospitalDoctor.deleteMany({});
  await hospitalModels.HospitalDoctor.create([
    {
      name: "Dr. Anita Sharma",
      designation: "Senior Consultant",
      department: "Kayachikitsa (General Medicine)",
      qualification: "MD (Ayurveda)",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&h=400",
      opdTimings: "Mon, Wed, Fri (9:00 AM - 2:00 PM)",
      specialization: ["Arthritis", "Diabetes Management", "Gastrointestinal Disorders"]
    },
    {
      name: "Dr. Rajesh Kumar",
      designation: "Panchkarma Specialist",
      department: "Panchkarma",
      qualification: "MD (Ayurveda)",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&h=400",
      opdTimings: "Mon–Sat (9:00 AM - 4:00 PM)",
      specialization: ["Detoxification", "Stress Management", "Rejuvenation"]
    }
  ]);

  await hospitalModels.HospitalDepartment.deleteMany({});
  await hospitalModels.HospitalDepartment.create([
    { name: "Kayachikitsa", description: "General medicine department treating chronic disorders.", image: "", treatments: ["Basti", "Shaman Chikitisa"], slug: "kayachikitsa" },
    { name: "Panchkarma", description: "Therapies for systemic detoxification and health restoration.", image: "", treatments: ["Vamana", "Virechana", "Nasya", "Basti", "Raktamokshana"], slug: "panchkarma" }
  ]);

  await hospitalModels.HospitalTestimonial.deleteMany({});
  await hospitalModels.HospitalTestimonial.create([
    {
      name: "Rajiv Mehta",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
      designation: "Patient",
      feedback: "The Basti therapy at Ishan Hospital gave me incredible relief from chronic back pain. High quality care.",
      type: "Ayurveda"
    }
  ]);

  console.log("Hospital seeded successfully!");


  // ==========================================
  // 3. PHARMACY SEEDING (Pharmacy Vision)
  // ==========================================
  console.log("Seeding Pharmacy (Pharmacy Vision)...");

  await pharmacyModels.PharmacyHomePage.deleteMany({});
  await pharmacyModels.PharmacyHomePage.create({
    banners: [{
      heading: "Nurturing Future Leaders in Pharmacy",
      subheading: "Approved by PCI & Affiliated with AKTU and BTE UP",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80",
      ctaText: "Admissions Open"
    }],
    stats: [
      { label: "PLACEMENTS", value: "95%" },
      { label: "SPECIALIZED LABS", value: "10" },
      { label: "ALUMNI NETWORK", value: "10,000+" },
      { label: "FACULTY HUB", value: "150+" }
    ],
    aboutSnippet: {
      title: "About Ishan Pharmacy",
      content: "Ishan Institute of Pharmacy offers state-of-the-art facilities, 10 specialized labs, and strong placement tie-ups. We provide D.Pharm and B.Pharm programs designed to prepare students for core industrial and clinical pharmacy roles.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe668df9731?auto=format&fit=crop&w=800&q=80"
    }
  });

  await pharmacyModels.PharmacyResearch.deleteMany({});
  await pharmacyModels.PharmacyResearch.create({
    overview: "Ishan Pharmacy encourages innovative research in drug formulation, pharmacognosy, and clinical trial studies.",
    projects: [{ title: "Phytochemical screening of local medicinal plants", description: "Studying local flora for antibacterial agents.", status: "Ongoing" }],
    publications: [{ title: "Formulation of herbal cosmetic gel", author: "Dr. Sandeep Singh", journal: "Indian Journal of Pharmacy", year: "2023" }]
  });

  await pharmacyModels.PharmacyContact.deleteMany({});
  await pharmacyModels.PharmacyContact.create({
    address: "Knowledge Park-III, Greater Noida, Uttar Pradesh 201308",
    phone: "8448797700",
    email: "admissions@ishan.ac",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2!2d77.49!3d28.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIshan+Institute+of+Pharmacy!5e0!3m2!1sen!2sin!4v1"
  });

  await pharmacyModels.PharmacyFaculty.deleteMany({});
  await pharmacyModels.PharmacyFaculty.create([
    { name: "Dr. Sandeep Singh", designation: "Principal & Professor", department: "Pharmaceutics", qualification: "PhD (Pharmacy)", experience: "15+ years", image: "" },
    { name: "Prof. Rajesh Khanna", designation: "Professor", department: "Pharmacology", qualification: "M.Pharm, UGC NET", experience: "12+ years", image: "" }
  ]);

  await pharmacyModels.PharmacyProgram.deleteMany({});
  await pharmacyModels.PharmacyProgram.create([
    { name: "B.Pharm (Bachelor of Pharmacy)", overview: "4-year undergraduate degree program affiliated with AKTU.", curriculum: "Pharmaceutics, Chemistry, Pharmacology, Pharmacognosy.", eligibility: "10+2 with PCM/PCB minimum 50% marks.", duration: "4 Years", slug: "bpharm" },
    { name: "D.Pharm (Diploma in Pharmacy)", overview: "2-year diploma program affiliated with BTE UP.", curriculum: "Basic pharmaceutical sciences and dispensing.", eligibility: "10+2 with PCM/PCB minimum 50% marks.", duration: "2 Years", slug: "dpharm" }
  ]);

  await pharmacyModels.PharmacyTestimonial.deleteMany({});
  await pharmacyModels.PharmacyTestimonial.create([
    {
      name: "Rahul Deshmukh",
      image: "",
      designation: "B.Pharm Graduate",
      feedback: "The labs and industrial visits at Ishan prepared me perfectly for my role at Sun Pharma.",
      type: "Alumni"
    }
  ]);

  await pharmacyModels.PharmacyNews.deleteMany({});
  await pharmacyModels.PharmacyNews.create([
    {
      title: "National Pharmacy Week Celebration",
      date: "November 22, 2025",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
      description: "Ishan Institute of Pharmacy celebrated National Pharmacy Week with a series of expert talks and student competitions focusing on the pharmacist's role in global health.",
      link: ""
    }
  ]);

  console.log("Pharmacy seeded successfully!");


  // ==========================================
  // 4. LEGAL SEEDING (Apex Legal)
  // ==========================================
  console.log("Seeding Legal (Apex Legal)...");

  await legalModels.LegalHomePage.deleteMany({});
  await legalModels.LegalHomePage.create({
    banners: [{
      heading: "Fostering Legal Excellence & Advocacy",
      subheading: "Approved by BCI & Affiliated with CCS University, Meerut",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
      ctaText: "Explore Courses"
    }],
    stats: [
      { label: "PLACEMENTS", value: "95%" },
      { label: "AVG PACKAGE", value: "6.5 LPA" },
      { label: "ALUMNI NETWORK", value: "15,000+" },
      { label: "FACULTY HUB", value: "250+" }
    ],
    aboutSnippet: {
      title: "About Ishan Law Institute",
      content: "Ishan Law Institute is a premier destination for legal studies, approved by the Bar Council of India. We emphasize clinical legal education through moot courts, legal aid camps, and regular court visits.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
    }
  });

  await legalModels.LegalInfrastructure.deleteMany({});
  await legalModels.LegalInfrastructure.create({
    library: { image: "", content: "Equipped with thousands of physical books, journals, and digital legal databases like Manupatra and SCC Online.", totalBooks: "15,000+" },
    mootCourt: { image: "", description: "A high-tech replica of a courtroom designed for student advocacy practice." },
    hostel: { image: "", content: "Safe and spacious residential campus with Wi-Fi and cafeteria services." }
  });

  await legalModels.LegalContact.deleteMany({});
  await legalModels.LegalContact.create({
    mainContact: {
      address: "Knowledge Park-III, Greater Noida, Uttar Pradesh 201308",
      phone: "8448797700",
      email: "admissions@ishan.ac",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2!2d77.49!3d28.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIshan+Institute+of+Law!5e0!3m2!1sen!2sin!4v1"
    },
    collegeContacts: []
  });

  await legalModels.LegalFaculty.deleteMany({});
  await legalModels.LegalFaculty.create([
    { name: "Dr. Sandeep Singh", designation: "Principal", department: "Law", qualification: "PhD, LLM", experience: "15+ years", specialization: ["Constitutional Law"] },
    { name: "Prof. Rajesh Khanna", designation: "Professor", department: "Law", qualification: "LLM, UGC NET", experience: "12+ years", specialization: ["Criminal Law"] }
  ]);

  await legalModels.LegalProgram.deleteMany({});
  await legalModels.LegalProgram.create([
    { name: "BA LLB (Hons)", overview: "5-year integrated professional law program.", curriculum: "Arts subjects integrated with core law modules.", eligibility: "10+2 with minimum 45% marks.", duration: "5 Years", slug: "ba-llb" },
    { name: "LLB (3 Years)", overview: "3-year professional law program for graduates.", curriculum: "Core legal education, drafting, pleading, and advocacy.", eligibility: "Graduation with minimum 45% marks.", duration: "3 Years", slug: "llb" }
  ]);

  await legalModels.LegalTestimonial.deleteMany({});
  await legalModels.LegalTestimonial.create([
    {
      name: "Sanya Malhotra",
      image: "",
      designation: "BA LLB Graduate",
      feedback: "The court visits and moot court sessions were instrumental in teaching me the reality of litigation.",
      type: "Alumni"
    }
  ]);

  await legalModels.LegalNews.deleteMany({});
  await legalModels.LegalNews.create([
    {
      title: "National Moot Court Competition 2025: Grand Finale",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      description: "Ishan Law hosted its flagship National Moot Court Competition, where teams from top law schools across India debated complex constitutional issues.",
      link: ""
    }
  ]);

  console.log("Legal seeded successfully!");

  console.log("ALL SEEDING COMPLETED!");
  process.exit(0);
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
