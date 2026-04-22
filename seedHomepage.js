const mongoose = require('mongoose');
require('dotenv').config();
const HomePage = require('./models/HomePage');

const defaultData = {
  hero: {
    banners: [
      { title: "Greater Noida's First,\nStill Leading Ahead", subtitle: "Ishan Group of Institutions is Greater Noida's first institute, setting the standard for excellence in education for over three decades.", image: "https://www.ishan.ac/images/slider/campus_view_3.JPG" },
      { title: "Where Knowledge\nMeets Excellence", subtitle: "With a legacy of leadership, innovation, and career-focused learning, we prepare students to thrive in a competitive world.", image: "https://www.ishan.ac/images/slider/ishan-slider2-3.JPG" },
      { title: "Shaping Leaders\nSince 1994", subtitle: "Programs in Law, Pharmacy, Management, Ayurveda & Education — empowering 10,000+ alumni across 50+ countries.", image: "https://www.ishan.ac/images/slider/ishan-slider3-1.JPG" }
    ]
  },
  stats: [
    { number: "1st", label: "In Greater Noida" },
    { number: "31+", label: "Years of Excellence" },
    { number: "10000+", label: "Alumni Placed" },
    { number: "100%", label: "Placement Assistance" }
  ],
  dignitaries: [
    { name: "Sh. Rajat Sharma", title: "Chairman, India TV", quote: "Ishan education is rooted in deep Indian values and principles for bright students.", image: "https://www.ishan.ac/dignitaries/Rajat.png" },
    { name: "Dr. A.P.J. Abdul Kalam", title: "Former President of India", quote: "Ishan encourages innovation, excellence, and youth empowerment for future students.", image: "https://www.ishan.ac/dignitaries/A.P.J..png" },
    { name: "Amar Jit Chopra", title: "Ex. President of the ICAI", quote: "I wish the institute success and strength to continue producing great true leaders.", image: "https://www.ishan.ac/dignitaries/AmarJit.png" },
    { name: "Dato Paduka Haji Sidek bin Ali", title: "High Commissioner of Brunei", quote: "May staff and students continue contributing to IIMT, the community and the nation.", image: "https://www.ishan.ac/dignitaries/DatoPaduka.png" },
    { name: "Dr. Pramod Batra", title: "Management Guru", quote: "Ishan offers facilities to support students in advanced management research fields.", image: "https://www.ishan.ac/dignitaries/Pramod.png" },
    { name: "H. E. Freddy Svane", title: "Ambassador of Denmark", quote: "Dear Ishan family, you are shaping India. India is the future. Respect your values.", image: "https://www.ishan.ac/dignitaries/Freddy.png" },
    { name: "H.E. Ram Naik", title: "Ex Governor of Uttar Pradesh", quote: "The institute consistently encourages value-based education and strong disciplines.", image: "https://www.ishan.ac/dignitaries/RamNaik.png" },
    { name: "Smt. Menka Gandhi", title: "Member of the Lok Sabha", quote: "The institute imparts holistic development to students. I wish you all the success.", image: "https://www.ishan.ac/dignitaries/Menka.png" },
    { name: "Murli Manohar Joshi", title: "Education Minister, Government of India", quote: "Appreciating Dr. Garg's continuous efforts to achieve goals, wishing him good luck.", image: "https://www.ishan.ac/dignitaries/Murli.png" },
    { name: "Prof. Prem Vrat", title: "Vice Chancellor, UPTU, Lucknow", quote: "This wonderful institute has the potential to rise to our country's great occasion.", image: "https://www.ishan.ac/dignitaries/PremVrat.png" },
    { name: "Sh. Shripad Yesso Naik", title: "Minister of State (I/C) Ayurveda", quote: "Excellent infrastructure and faculty. Great effort by Dr. Garg. All the best wishes.", image: "https://www.ishan.ac/dignitaries/Shripad.png" },
    { name: "V. Namgyel", title: "Ambassador of Bhutan Royal Bhutanese Embassy, New Delhi", quote: "It has been a most happy privilege to visit the Ishan Institute of Management here.", image: "https://www.ishan.ac/dignitaries/Namgyel.png" }
  ],
  programs: {
    title: "Explore Our Programs",
    subtitle: "Choose from programs in business, management, technology, law, pharmacy and healthcare. Academic programs at Ishan are thoughtfully structured to empower students with knowledge, skills and professional competence.",
    list: []
  },
  whyIshan: {
    title: "Why Top Students Trust Ishan",
    features: [
      { title: "Recognized Excellence", description: "Approved by UGC, PCI, BCI, and CCIM/NCISM, affiliated with CCS University — ensuring high academic and regulatory standards.", icon: "Award" },
      { title: "Practical Learning Culture", description: "From herbal gardens and legal aid clinics to advanced labs and simulation learning — real-world skills beyond textbooks.", icon: "BookOpen" },
      { title: "Diverse Academic Streams", description: "Programs in Law, Pharmacy, Ayurveda, and Management designed to match modern career paths.", icon: "Building2" },
      { title: "Vibrant Campus Life", description: "Safe hostels, active student clubs, sports events, moot courts, and cultural activities.", icon: "Users" },
      { title: "Strong Placement Network", description: "100+ recruiters, industry tie-ups, internship pipelines, and a growing alumni base.", icon: "Briefcase" },
      { title: "Scholarships & Merit Support", description: "Merit awards, financial aid, and special concessions for deserving, sports, and defense-background students.", icon: "Heart" },
      { title: "Research & Publications", description: "Journals with ISSN, conferences, seminars, and research platforms encouraging innovation.", icon: "FlaskConical" },
      { title: "Industry & Professional Exposure", description: "Court visits, hospital postings, industrial tours, live projects, and internship programs.", icon: "Globe" },
    ]
  },
  whatsHappening: {
    title: "What's Happening",
    events: [
      { title: "Vyapar Niti: The Art of Business and Innovation", description: "A dynamic 10-session flagship workshop bringing the startup ecosystem into the classroom.", image: "https://www.ishan.ac/happen/Vyaparniti-2.jpg", link: "#" },
      { title: "Majestic Malaysia: International Study Tour", description: "A fully sponsored global learning experience in Kuala Lumpur blending academic exposure, industrial visits, cultural discovery, and experiential travel.", image: "https://www.ishan.ac/happen/International-trip.png", link: "#" },
      { title: "Spardha 2026: Chasing Victory", description: "The flagship three-day Inter-College Sports Fest with participation from over 50 colleges and more than 2,000 student athletes.", image: "https://www.ishan.ac/happen/Sparsdha.png", link: "#" },
      { title: "Kshitiz 2025: Cultural Fest", description: "An inter-college cultural extravaganza celebrating youth, creativity, and talent with dynamic competitions in dance, singing, skits, and more.", image: "https://www.ishan.ac/happen/Kshitiz.jpg", link: "#" }
    ]
  },
  campusLife: {
    title: "Where Learning, Living & Laughter Come Together",
    subtitle: "Experience the Ishan Campus",
    images: [
      { name: "Academic Facilities", url: "https://www.ishan.ac/campus/facilities.jpg" },
      { name: "Library", url: "https://www.ishan.ac/campus/Campus_2.jpeg" },
      { name: "Auditorium & Events", url: "https://www.ishan.ac/campus/Campus_1.jpeg" },
      { name: "Sports & Recreation", url: "https://www.ishan.ac/campus/Campus_8.jpeg" },
      { name: "Herbal Garden & Labs", url: "https://www.ishan.ac/campus/Campus_9.jpeg" },
      { name: "Hostel Facilities", url: "https://www.ishan.ac/campus/Campus_3.jpeg" }
    ]
  },
  scholarships: {
    title: "Academic Scholarships",
    description: "The Institute ensures that students are not left behind due to financial constraints. Scholarship decisions are based on 10+2 scores or CLAT/LSAT percentile.",
    list: []
  },
  recruiters: {
    title: "Our Key Recruiters",
    logos: [
      { name: "Sopra", url: "https://www.ishan.ac/images/company/Sopra.png" },
      { name: "ORIENT", url: "https://www.ishan.ac/images/company/ORIENT.png" },
      { name: "TATA", url: "https://www.ishan.ac/images/company/TATA.png" },
      { name: "HARITA", url: "https://www.ishan.ac/images/company/HARITA.png" },
      { name: "TATA POWER", url: "https://www.ishan.ac/images/company/tata-power.png" },
      { name: "Amdocs", url: "https://www.ishan.ac/images/company/Amdocs.png" },
      { name: "KPMG", url: "https://www.ishan.ac/images/company/KPMG.png" },
      { name: "IndusInd", url: "https://www.ishan.ac/images/company/Induslnd.png" },
      { name: "Genpact", url: "https://www.ishan.ac/images/company/Genpact.png" },
      { name: "SDS", url: "https://www.ishan.ac/images/company/SDS.png" },
      { name: "ULTRATECH", url: "https://www.ishan.ac/images/company/ultra-tech.png" },
      { name: "IBM", url: "https://www.ishan.ac/images/company/IBM.png" },
      { name: "Ebix", url: "https://www.ishan.ac/images/company/Ebix.png" },
      { name: "Dixon", url: "https://www.ishan.ac/images/company/Dixon.png" },
      { name: "SBI", url: "https://www.ishan.ac/images/company/SBI.png" },
      { name: "Radisys", url: "https://www.ishan.ac/images/company/Radisys.png" },
      { name: "INFOTECH", url: "https://www.ishan.ac/images/company/infotech.png" },
      { name: "Orishj", url: "https://www.ishan.ac/images/company/orishj.png" }
    ]
  },
  testimonials: {
    title: "Voices That Matter",
    list: [
      { name: "Tapas Dasmohapatra", course: "PGDM Batch of 2006", quote: "My journey at Ishan played a pivotal role in shaping my professional mindset, leadership approach, and personal values.", image: "https://www.ishan.ac/testimonial/alumni/A1.jpg" },
      { name: "Shailly Bhagel", course: "BAMS Batch of 2030", quote: "My experience at Ishan has been inspiring and enriching. The disciplined yet welcoming environment ensures meaningful learning every day.", image: "https://www.ishan.ac/testimonial/student/C1.jpg" }
    ]
  },
  regulatoryBodies: {
    title: "Regulatory Bodies",
    logos: [
      { name: "NCISM", url: "https://www.ishan.ac/images/regular-bodies/NCISM.jpg" },
      { name: "PCI", url: "https://www.ishan.ac/images/regular-bodies/PCI.png" },
      { name: "BCI", url: "https://www.ishan.ac/images/regular-bodies/BCI.jpg" },
      { name: "AICTE", url: "https://www.ishan.ac/images/regular-bodies/AICTE.png" },
      { name: "MGGAU", url: "https://www.ishan.ac/images/regular-bodies/MAGGAU.png" },
      { name: "AKTU", url: "https://www.ishan.ac/images/regular-bodies/AKTU.png" },
      { name: "CCS University", url: "https://www.ishan.ac/images/regular-bodies/CCS.jpg" },
      { name: "BTE", url: "https://www.ishan.ac/images/regular-bodies/BTE.jpg" }
    ]
  },
  enquiryCta: {
    title: "Ready to Shape Your Future?",
    subtitle: "Join 10,000+ successful alumni. Get personalized guidance from our counsellors — your dream career starts here.",
    buttonText: "Enquire Now"
  }
};

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB.");

    await HomePage.deleteMany({});
    const page = new HomePage(defaultData);
    await page.save();

    console.log("Successfully seeded Homepage configuration.");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
