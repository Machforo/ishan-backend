require('dotenv').config();
const mongoose = require('mongoose');

const models = {
  AboutUs: require('./models/AboutUs'),
  CollegesPage: require('./models/CollegesPage'),
  AdmissionsPage: require('./models/AdmissionsPage'),
  PlacementsPage: require('./models/PlacementsPage'),
  CampusLifePage: require('./models/CampusLifePage'),
  ResearchPage: require('./models/ResearchPage'),
  NewsEventPage: require('./models/NewsEventPage'),
  CareersPage: require('./models/CareersPage'),
  DownloadsPage: require('./models/DownloadsPage'),
  ContactPage: require('./models/ContactPage'),
  EnquirePage: require('./models/EnquirePage'),
  HomePage: require('./models/HomePage')
};

const defaultData = {
  AboutUs: {
    aboutIshan: { 
      title: "About Ishan Educational Institutions", 
      description: "Greater Noida's first multi-disciplinary institution — shaping future leaders for over three decades.\n\nIshan Group of Institutions was established in 1994 as Greater Noida's first educational institution, at a time when the city was still taking shape. Founded with the vision of providing quality, affordable, and industry-relevant education, Ishan has grown from a single institute into a multi-disciplinary group of five colleges spanning Law, Pharmacy, Management, Ayurveda, and Education.\n\nOver three decades, Ishan has remained committed to academic excellence, practical learning, and holistic student development. Today, with over 10,000 alumni placed across India and abroad, Ishan stands as a testament to the power of purpose-driven education.", 
      image: "https://www.ishan.ac/campus/Campus_1.jpeg" 
    },
    chairmanMessage: { 
      title: "Chairman's Message", 
      name: "Dr. D.K. Garg", 
      message: "At Ishan, we believe in the transformative power of education. Our goal is to create not just successful professionals, but responsible global citizens who contribute meaningfully to society. We invite you to be a part of our legacy and shape your future with us.", 
      image: "https://www.ishan.ac/images/regular-bodies/BCI.jpg" 
    },
    missionVision: { 
      mission: "To cultivate an environment of academic excellence, research, and innovation that empowers the youth to become global leaders.", 
      vision: "To be a global leading educational conglomerate." 
    },
    awards: [
      { title: "Excellence in Education", description: "Ranked #1 in specific educational practices in Greater Noida", year: "2023", image: "https://www.ishan.ac/images/regular-bodies/AICTE.png" }
    ],
    approvals: [
      { name: "UGC", fullTitle: "University Grants Commission", description: "Statutory body for maintenance of standards in higher education.", image: "https://www.ishan.ac/images/regular-bodies/UGC.png", link: "#" },
      { name: "AICTE", fullTitle: "All India Council for Technical Education", description: "Approval for technical and management programs including BBA, BCA, MBA, PGDM.", image: "https://www.ishan.ac/images/regular-bodies/AICTE.png", link: "#" },
      { name: "BCI", fullTitle: "Bar Council of India", description: "Approval for BA LLB (Hons), BBA LLB (Hons), LLB, and LLM programs.", image: "https://www.ishan.ac/images/regular-bodies/BCI.jpg", link: "#" },
      { name: "PCI", fullTitle: "Pharmacy Council of India", description: "Approval for B.Pharm, D.Pharm, and M.Pharm programs.", image: "https://www.ishan.ac/images/regular-bodies/PCI.png", link: "#" },
      { name: "NCISM", fullTitle: "National Commission for Indian System of Medicine", description: "Recognition for BAMS and MD (Ayurveda) programs.", image: "https://www.ishan.ac/images/regular-bodies/NCISM.jpg", link: "#" },
      { name: "NCTE", fullTitle: "National Council for Teacher Education", description: "Approval for B.Ed. program.", image: "https://www.ishan.ac/images/regular-bodies/NCTE.png", link: "#" },
      { name: "CCS University", fullTitle: "Chaudhary Charan Singh University", description: "University affiliation for undergraduate and postgraduate degree programs.", image: "https://www.ishan.ac/images/regular-bodies/CCU.png", link: "#" },
      { name: "AKTU", fullTitle: "Dr. A.P.J. Abdul Kalam Technical University", description: "University affiliation for technical and pharmacy programs.", image: "https://www.ishan.ac/images/regular-bodies/AKTU.png", link: "#" },
      { name: "MGGAU", fullTitle: "Mahayogi Guru Gorakhnath AYUSH University", description: "University affiliation for Ayurveda programs.", image: "https://www.ishan.ac/images/regular-bodies/MGGAU.jpg", link: "#" },
      { name: "BTE", fullTitle: "Board of Technical Education, UP", description: "Approval for diploma-level programs.", image: "https://www.ishan.ac/images/regular-bodies/BTE.png", link: "#" }
    ],
    milestones: [
      { year: "1994", event: "Ishan Group founded — Greater Noida's first educational institution" },
      { year: "1999", event: "Ishan Institute of Management & Technology (IIMT) established" },
      { year: "2003", event: "Ishan Ayurvedic Medical College launched with NCISM recognition" },
      { year: "2013", event: "Ishan Institute of Law inaugurated with BCI approval" },
      { year: "2016", event: "Ishan Institute of Pharmacy established with PCI approval" }
    ]
  },
  CollegesPage: {
    header: { title: "Our Prestige Colleges", subtitle: "Explore Ishan Institutions", image: "/src/assets/hero-campus.jpg" },
    collegesList: [
      { name: "Ishan Institute of Management & Technology", overview: "Greater Noida's first management institute established in 1994, offering PGDM, MBA, BBA, BCA, and B.Com programs.", image: "https://www.ishan.ac/campus/Campus_2.jpeg", programsOffered: ["MBA", "PGDM", "BBA", "BCA", "B.Com"], link: "iimt.ishan.ac" },
      { name: "Ishan Institute of Law", overview: "Premier institution for legal studies approved by BCI, offering LL.B and BA LL.B programs.", image: "https://www.ishan.ac/campus/Campus_2.jpeg", programsOffered: ["LL.B", "BA LL.B"], link: "law.ishan.ac" },
      { name: "Ishan Institute of Pharmacy", overview: "Top-tier pharmaceutical sciences approved by PCI, offering B.Pharm and D.Pharm programs.", image: "https://www.ishan.ac/campus/Campus_3.jpeg", programsOffered: ["B.Pharm", "D.Pharm"], link: "pharmacy.ishan.ac" },
      { name: "Ishan Ayurvedic Medical College and Research Centre", overview: "Dedicated to the ancient science of Ayurveda approved by NCISM, offering BAMS program.", image: "https://www.ishan.ac/campus/Campus_8.jpeg", programsOffered: ["BAMS"], link: "ayurveda.ishan.ac" },
      { name: "Ishan Institute of Education", overview: "Dedicated to nurturing future educators through B.Ed programs.", image: "https://www.ishan.ac/campus/Campus_1.jpeg", programsOffered: ["B.Ed"], link: "education.ishan.ac" }
    ]
  },
  AdmissionsPage: {
    overview: { 
      title: "Admissions Overview", 
      content: "Join our vibrant academic community. Admissions are open for the upcoming academic year across Law, Pharmacy, Ayurveda, and Management dimensions.", 
      image: "https://www.ishan.ac/campus/Campus_8.jpeg" 
    },
    programs: [
      { name: "B.Com. (NEP)", level: "UG", college: "IIMT", duration: "3 Years", affiliation: "CCS University" },
      { name: "B.Com. (Hons)", level: "UG", college: "IIMT", duration: "3 Years", affiliation: "CCS University" },
      { name: "BBA", level: "UG", college: "IIMT", duration: "3 Years", affiliation: "CCS University" },
      { name: "BCA", level: "UG", college: "IIMT", duration: "3 Years", affiliation: "CCS University" },
      { name: "B.Ed.", level: "UG", college: "IIMT", duration: "2 Years", affiliation: "CCS University" },
      { name: "PGDM", level: "PG", college: "IIMT", duration: "2 Years", affiliation: "AICTE" },
      { name: "MBA", level: "PG", college: "IIMT", duration: "2 Years", affiliation: "CCS University" },
      { name: "BA LLB (Hons)", level: "UG", college: "Law", duration: "5 Years", affiliation: "BCI / CCS University" },
      { name: "BBA LLB (Hons)", level: "UG", college: "Law", duration: "5 Years", affiliation: "BCI / CCS University" },
      { name: "LLB", level: "UG", college: "Law", duration: "3 Years", affiliation: "BCI / CCS University" },
      { name: "LLM", level: "PG", college: "Law", duration: "1 Year", affiliation: "CCS University" },
      { name: "B.Pharm", level: "UG", college: "Pharmacy", duration: "4 Years", affiliation: "PCI / AKTU" },
      { name: "D.Pharm", level: "Diploma", college: "Pharmacy", duration: "2 Years", affiliation: "PCI / BTE" },
      { name: "M.Pharm", level: "PG", college: "Pharmacy", duration: "2 Years", affiliation: "PCI / AKTU" },
      { name: "BAMS", level: "UG", college: "Ayurveda", duration: "5.5 Years", affiliation: "NCISM / MGGAU" },
      { name: "MD (Ayurveda)", level: "PG", college: "Ayurveda", duration: "3 Years", affiliation: "NCISM / MGGAU" }
    ],
    scholarships: [
      { category: "Defence (Serving)", concession: "5% Waiver", description: "Children of Serving Personnel (1st year)" },
      { category: "Defence (Retired)", concession: "5% Waiver", description: "Children of Retired Defence (1st year)" },
      { category: "Sports (National)", concession: "50%–80% Concession", description: "National level achievement" },
      { category: "Sports (State)", concession: "10%–25% Concession", description: "State level achievement" },
      { category: "Academic Merit (Rank)", concession: "Up to 100%", description: "Board/University Rank Holders" },
      { category: "Academic Merit (>90%)", concession: "25%", description: "Class 12 score > 90%" },
      { category: "Academic Merit (>85%)", concession: "20%", description: "Class 12 score > 85%" },
      { category: "Sibling Scholarship", concession: "5% Waiver", description: "Sibling already enrolled (1st year)" },
      { category: "Special (Gold/Silver)", concession: "Up to 25%", description: "Gold/Silver medal holders" },
      { category: "Special (Arts)", concession: "Up to 25%", description: "Certified performing arts" }
    ],
    steps: [
      { step: "01", icon: "ClipboardList", title: "Online Enquiry", desc: "Fill the online enquiry form or visit our campus. Our counsellors will guide you through the process." },
      { step: "02", icon: "FileCheck", title: "Registration & Documentation", desc: "Submit your academic documents and identity proof for verification." },
      { step: "03", icon: "Calendar", title: "Counseling & Interview", desc: "Attend the personal interview or counseling session to finalize your program." },
      { step: "04", icon: "Phone", title: "Admission Confirmed", desc: "Complete the fee payment and collect your admission letter. Welcome to Ishan!" }
    ],
    importantDates: [
      { label: "Application Opens", date: "January 2026" },
      { label: "Counselling Begins", date: "April 2026" },
      { label: "Session Starts", date: "August 2026" }
    ]
  },
  PlacementsPage: {
    overview: { 
      title: "Placements Overview", 
      content: "Industry-ready graduates, top recruiters — proven outcomes. At Ishan, our dedicated Training and Placement (T&P) Cell works tirelessly to bridge the gap between academia and industry through resume building, aptitude tests, and mock interviews from Semester 3.", 
      statistics: [
        { label: "Highest Package", value: "8.5 LPA" },
        { label: "Average Package", value: "4.2 LPA" },
        { label: "Placement Rate", value: "85%+" },
        { label: "Recruiting Companies", value: "100+" }
      ]
    },
    recruiters: [
      { name: "Sopra Steria", logo: "https://www.ishan.ac/images/company/Sopra.png" },
      { name: "ORIENT", logo: "https://www.ishan.ac/images/company/Orient.png" },
      { name: "TATA", logo: "https://www.ishan.ac/images/company/TATA.png" },
      { name: "HARITA", logo: "https://www.ishan.ac/images/company/HARITA.png" },
      { name: "TATA POWER", logo: "https://www.ishan.ac/images/company/tata-power.png" },
      { name: "Amdocs", logo: "https://www.ishan.ac/images/company/Amdocs.png" },
      { name: "KPMG", logo: "https://www.ishan.ac/images/company/KPMG.png" },
      { name: "IndusInd", logo: "https://www.ishan.ac/images/company/Induslnd.png" },
      { name: "Genpact", logo: "https://www.ishan.ac/images/company/Genpact.png" },
      { name: "SDS", logo: "https://www.ishan.ac/images/company/SDS.png" },
      { name: "ULTRATECH", logo: "https://www.ishan.ac/images/company/Ultratech.png" },
      { name: "IBM", logo: "https://www.ishan.ac/images/company/IBM.png" },
      { name: "Ebix", logo: "https://www.ishan.ac/images/company/Ebix.png" },
      { name: "Dixon", logo: "https://www.ishan.ac/images/company/Dixon.png" },
      { name: "SBI", logo: "https://www.ishan.ac/images/company/SBI.png" },
      { name: "Radisys", logo: "https://www.ishan.ac/images/company/Radisys.png" },
      { name: "INFOTECH", logo: "https://www.ishan.ac/images/company/Infotech.png" },
      { name: "Orishj", logo: "https://www.ishan.ac/images/company/Orishj.png" }
    ],
    alumni: [
      { name: "Tapas Dasmohapatra", batch: "PGDM 2006", role: "Leadership Coach & Co-Founder", company: "POSSIBLERS", quote: "My journey at Ishan played a pivotal role in shaping my professional mindset, leadership approach, and personal values.", image: "https://www.ishan.ac/testimonial/alumni/A1.jpg" },
      { name: "Rahul Sharma", batch: "2018", company: "Tata Power", role: "Project Manager", quote: "The exposure at Ishan helped me develop a professional mindset early on.", image: "https://www.ishan.ac/images/alumni/alumni_1.jpg" }
    ],
    processSteps: [
      { step: "01", title: "Pre-Placement Training", desc: "Resume building, aptitude tests, mock interviews, and soft skills training from semester 3 onwards." },
      { step: "02", title: "Industry Internships", desc: "Mandatory summer internships with partner companies to gain real-world experience." },
      { step: "03", title: "Campus Drives", desc: "On-campus recruitment drives with 100+ companies across IT, pharma, and legal sectors." },
      { step: "04", title: "Final Placement", desc: "Offer letters, joining formalities, and post-placement support until students are settled." }
    ]
  },
  CampusLifePage: {
    gallery: [
      { title: "Academic Block", url: "/src/assets/hero-campus.jpg" },
      { title: "Convocation 2024", url: "https://www.ishan.ac/campus/facilities.jpg" },
      { title: "Cultural Fest 'Aura'", url: "https://www.ishan.ac/campus/Campus_2.jpeg" }
    ],
    facilities: [
      { name: "Digital Library", description: "Rich collection of academic resources and study spaces.", icon: "BookOpen", image: "https://www.ishan.ac/campus/Campus_2.jpeg" },
      { name: "Sports Complex", description: "Cricket ground, basketball court, and indoor gym.", icon: "Dumbbell" },
      { name: "Modern Hostels", description: "Separate hostels for boys and girls with security.", icon: "Home" }
    ]
  },
  ResearchPage: {
    journals: [
      { title: "Ishan Management Studies Journal", volume: "Vol 1", issue: "Issue 2", link: "#" },
      { title: "Ishan Pharmacy Research Journal", volume: "Vol 3", issue: "Issue 1", link: "#" },
      { title: "Ishan Law Review", volume: "Vol 5", issue: "Issue 1", link: "#" }
    ],
    areas: [
      { name: "Ayurvedic Medicine", description: "Pharmacological developments and clinical research." },
      { name: "Sustainable Business", description: "Researching resilient and ethical business models." }
    ],
    numbers: [
      { label: "Research Papers", value: "250+" },
      { label: "Patents Filed", value: "50+" },
      { label: "Journals", value: "3" }
    ]
  },
  NewsEventPage: {
    news: [
      { title: "Vyapar Niti: The Art of Business and Innovation", date: "March 2026", content: "A dynamic 10-session flagship workshop bringing the startup ecosystem into the classroom.", image: "https://www.ishan.ac/happen/Vyaparniti-2.jpg", link: "#" },
      { title: "Majestic Malaysia: International Study Tour", date: "February 2026", content: "A fully sponsored global learning experience in Kuala Lumpur.", image: "https://www.ishan.ac/happen/Malaysia.jpg", link: "#" }
    ],
    events: [
      { title: "Spardha 2026: Chasing Victory", date: "January 2026", location: "Sports Complex", description: "The flagship three-day Inter-College Sports Fest.", image: "https://www.ishan.ac/happen/Sparsdha.png" },
      { title: "Kshitiz 2025: Cultural Fest", date: "December 2025", location: "Main Auditorium", description: "An inter-college cultural extravaganza.", image: "https://www.ishan.ac/happen/Kshitiz.jpg" }
    ]
  },
  CareersPage: {
    jobs: [
      { title: "Assistant Professor", department: "Management", type: "Full-Time", location: "Greater Noida", requirements: "MBA + NET/Ph.D. with 3+ years experience.", description: "Looking for academic leaders." },
      { title: "Legal Consultant", department: "Ishan Law Hub", type: "Part-Time", location: "Remote/Campus", requirements: "LLM with bar enrollment.", description: "Provide legal advisory." }
    ]
  },
  DownloadsPage: {
    files: [
      { title: "Admissions Brochure 2026", category: "Admissions", url: "/documents/brochure.pdf" },
      { title: "Academic Calendar", category: "Academics", url: "/documents/calendar.pdf" }
    ]
  },
  ContactPage: {
    mainContact: { 
      address: "Knowledge Park-1, Greater Noida, Uttar Pradesh - 201310", 
      phone: "+91 99999 99999", 
      email: "info@ishan.ac", 
      mapEmbed: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0543789490216!2d77.4939223!3d28.4779051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea0d0e1fe657%3A0xc3f6a297ee45f061!2sIshan%20Institute%20of%20Law!5e0!3m2!1sen!2sus!4v1714574921966!5m2!1sen!2sus' width='100%' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>" 
    },
    collegeContacts: [
      { collegeName: "Ishan Institute of Law", phone: "9818148866", email: "law@ishan.ac", address: "Knowledge Park 1, Greater Noida" },
      { collegeName: "Ishan Institute of Pharmacy", phone: "8448737750", email: "pharmacy@ishan.ac", address: "Knowledge Park 1, Greater Noida" }
    ]
  },
  EnquirePage: {
    header: { title: "Enquire Now", subtitle: "Get personalized guidance from our counsellors." },
    programs: [{ name: "B.Com. (NEP)" }, { name: "BBA" }, { name: "LLB" }, { name: "B.Pharm" }, { name: "BAMS" }],
    colleges: [{ name: "Ishan Institute of Law" }, { name: "Ishan Institute of Pharmacy" }]
  },
  HomePage: {
    hero: {
      banners: [
        { title: "Greater Noida's First,\nStill Leading Ahead", subtitle: "Ishan Group of Institutions is Greater Noida's first institute.", image: "/hero-campus.jpg" },
        { title: "Shaping Leaders\nSince 1994", subtitle: "Programs in Law, Pharmacy, Management, Ayurveda & Education.", image: "/hero-graduation.jpg" },
        { title: "Where Knowledge\nMeets Excellence", subtitle: "A legacy of leadership and career-focused learning.", image: "/hero-library.jpg" }
      ]
    },
    stats: [
      { number: "1st", label: "In Greater Noida" },
      { number: "31+", label: "Years of Excellence" },
      { number: "10,000+", label: "Alumni Placed" },
      { number: "100%", label: "Placement Assistance" }
    ],
    dignitaries: [
      { name: "Murli Manohar Joshi", role: "Education Minister, Government of India", quote: "Appreciating Dr. Garg's continuous efforts to achieve goals, wishing him good luck.", image: "https://www.ishan.ac/dignitaries/MurliManohar.png" },
      { name: "Prof. Prem Vrat", role: "Vice Chancellor, UPTU, Lucknow", quote: "This wonderful institute has the potential to rise to our country's great occasion.", image: "https://www.ishan.ac/dignitaries/PremVrat.png" },
      { name: "Sh. Shripad Yesso Naik", role: "Minister of State (I/C) Ayurveda", quote: "Excellent infrastructure and faculty. Great effort by Dr. Garg. All the best wishes.", image: "https://www.ishan.ac/dignitaries/Sh.Shripad.png" },
      { name: "V. Namgyel", role: "Ambassador of Bhutan Royal Bhutanese Embassy, New Delhi", quote: "It has been a most happy privilege to visit the Ishan Institute of Management here.", image: "https://www.ishan.ac/dignitaries/V.Namgyel.png" },
      { name: "Sh. Rajat Sharma", role: "Chairman, India TV", quote: "Ishan education is rooted in deep Indian values and principles for bright students.", image: "/dignitaries/Rajat.png" },
      { name: "Dr. A.P.J. Abdul Kalam", role: "Former President of India", quote: "Ishan encourages innovation, excellence, and youth empowerment for future students.", image: "/dignitaries/A.P.J..png" },
      { name: "Amar Jit Chopra", role: "Ex. President of the ICAI", quote: "I wish the institute success and strength to continue producing great true leaders.", image: "/dignitaries/AmarJit.png" },
      { name: "Dato Paduka Haji Sidek bin Ali", role: "High Commissioner of Nation of Brunei", quote: "May staff and students continue contributing to IIMT, the community and the nation.", image: "/dignitaries/DatoPaduka.png" },
      { name: "Dr. Pramod Batra", role: "Management Guru", quote: "Ishan offers facilities to support students in advanced management research fields.", image: "https://www.ishan.ac/dignitaries/Dr.Pramod.png" },
      { name: "H. E. Freddy Svane", role: "Ambassador of Denmark", quote: "Dear Ishan family, you are shaping India. India is the future. Respect your values.", image: "https://www.ishan.ac/dignitaries/H.E.Freddy.png" },
      { name: "H.E. Ram Naik", role: "Ex Governor of Uttar Pradesh", quote: "The institute consistently encourages value-based education and strong disciplines.", image: "https://www.ishan.ac/dignitaries/H.E.Ram.png" },
      { name: "Smt. Menka Gandhi", role: "Member of the Lok Sabha", quote: "The institute imparts holistic development to students. I wish you all the success.", image: "https://www.ishan.ac/dignitaries/MenkaGandhi.png" }
    ],
    programs: {
      title: "Explore Our Programs",
      subtitle: "Industry-aligned curriculum across diverse disciplines.",
      list: [
        { name: "B.Com. (NEP)", level: "UG", college: "IIMT", duration: "3 Years", affiliation: "CCS University" },
        { name: "B.Com. (Hons)", level: "UG", college: "IIMT", duration: "3 Years", affiliation: "CCS University" },
        { name: "BBA", level: "UG", college: "IIMT", duration: "3 Years", affiliation: "CCS University" },
        { name: "BCA", level: "UG", college: "IIMT", duration: "3 Years", affiliation: "CCS University" },
        { name: "B.Ed.", level: "UG", college: "IIMT", duration: "2 Years", affiliation: "CCS University" },
        { name: "PGDM", level: "PG", college: "IIMT", duration: "2 Years", affiliation: "AICTE" },
        { name: "MBA", level: "PG", college: "IIMT", duration: "2 Years", affiliation: "CCS University" },
        { name: "BA LLB (Hons)", level: "UG", college: "Law", duration: "5 Years", affiliation: "BCI / CCS University" },
        { name: "BBA LLB (Hons)", level: "UG", college: "Law", duration: "5 Years", affiliation: "BCI / CCS University" },
        { name: "LLB", level: "UG", college: "Law", duration: "3 Years", affiliation: "BCI / CCS University" },
        { name: "LLM", level: "PG", college: "Law", duration: "1 Year", affiliation: "CCS University" },
        { name: "B.Pharm", level: "UG", college: "Pharmacy", duration: "4 Years", affiliation: "PCI / AKTU" },
        { name: "D.Pharm", level: "Diploma", college: "Pharmacy", duration: "2 Years", affiliation: "PCI / BTE" },
        { name: "M.Pharm", level: "PG", college: "Pharmacy", duration: "2 Years", affiliation: "PCI / AKTU" },
        { name: "BAMS", level: "UG", college: "Ayurveda", duration: "5.5 Years", affiliation: "NCISM / MGGAU" },
        { name: "MD (Ayurveda)", level: "PG", college: "Ayurveda", duration: "3 Years", affiliation: "NCISM / MGGAU" }
      ]
    },
    whyIshan: {
      title: "Why Top Students Trust Ishan",
      features: [
        { title: "Recognized Excellence", description: "Approved by UGC, PCI, BCI, and CCIM/NCISM, affiliated with CCS University — ensuring high academic and regulatory standards.", icon: "Award" },
        { title: "Practical Learning Culture", description: "From herbal gardens and legal aid clinics to advanced labs and simulation learning — real-world skills beyond textbooks.", icon: "BookOpen" },
        { title: "Diverse Academic Streams", description: "Programs in Law, Pharmacy, Ayurveda, and Management designed to match modern career paths.", icon: "Layout" },
        { title: "Vibrant Campus Life", description: "Safe hostels, active student clubs, sports events, moot courts, and cultural activities.", icon: "Users" },
        { title: "Strong Placement Network", description: "100+ recruiters, industry tie-ups, internship pipelines, and a growing alumni base.", icon: "Briefcase" },
        { title: "Scholarships & Merit Support", description: "Merit awards, financial aid, and special concessions for deserving, sports, and defense-background students.", icon: "Heart" },
        { title: "Research & Publications", description: "Journals with ISSN, conferences, seminars, and research platforms encouraging innovation.", icon: "FlaskConical" },
        { title: "Industry & Professional Exposure", description: "Court visits, hospital postings, industrial tours, live projects, and internship programs.", icon: "Globe" }
      ]
    },
    whatsHappening: {
      title: "News and Updates",
      events: [
        { title: "Vyapar Niti: The Art of Business and Innovation", date: "March 2026", category: "Workshop", description: "A dynamic 10-session flagship workshop bringing the startup ecosystem into the classroom.", image: "https://www.ishan.ac/happen/Vyaparniti-2.jpg" },
        { title: "Majestic Malaysia: International Study Tour", date: "February 2026", category: "International", description: "A fully sponsored global learning experience in Kuala Lumpur blending academic exposure.", image: "https://www.ishan.ac/happen/Malaysia.jpg" },
        { title: "Spardha 2026: Chasing Victory", date: "January 2026", category: "Sports", description: "The flagship three-day Inter-College Sports Fest with participation from over 50 colleges.", image: "https://www.ishan.ac/happen/Sparsdha.png" },
        { title: "Kshitiz 2025: Cultural Fest", date: "December 2025", category: "Cultural", description: "An inter-college cultural extravaganza celebrating youth, creativity, and talent.", image: "https://www.ishan.ac/happen/Kshitiz.jpg" },
        { title: "National Moot Court Competition 2025", date: "November 2025", category: "Law", description: "Ishan Institute of Law hosted the 5th National Moot Court Competition.", image: "https://www.ishan.ac/happen/Moot.jpg" },
        { title: "Pharmacy Innovation Summit", date: "October 2025", category: "Pharmacy", description: "A two-day summit on pharmaceutical innovation, drug discovery, and regulatory affairs.", image: "https://www.ishan.ac/happen/Pharmacy.jpg" }
      ]
    },
    scholarships: {
      title: "Academic Scholarships",
      subtitle: "Helping You Thrive",
      description: "Scholarship decisions are based on 10+2 scores or CLAT/LSAT percentile.",
      list: [
        { category: "Defence (Serving)", concession: "5% Waiver", description: "Children of Serving Personnel (1st year)" },
        { category: "Sports (National)", concession: "50%–80% Concession", description: "National level achievement" },
        { category: "Academic Merit (Rank)", concession: "Up to 100%", description: "Board/University Rank Holders" },
        { category: "Academic Merit (>90%)", concession: "25%", description: "Class 12 score > 90%" },
        { category: "Special (Gold/Silver)", concession: "Up to 25%", description: "Gold/Silver medal holders" }
      ]
    },
    recruiters: {
      title: "Our Key Recruiters",
      logos: [
        { name: "Sopra Steria", url: "https://www.ishan.ac/images/company/Sopra.png" },
        { name: "ORIENT", url: "https://www.ishan.ac/images/company/Orient.png" },
        { name: "TATA", url: "https://www.ishan.ac/images/company/TATA.png" },
        { name: "HARITA", url: "https://www.ishan.ac/images/company/HARITA.png" },
        { name: "TATA POWER", url: "https://www.ishan.ac/images/company/tata-power.png" },
        { name: "Amdocs", url: "https://www.ishan.ac/images/company/Amdocs.png" },
        { name: "KPMG", url: "https://www.ishan.ac/images/company/KPMG.png" },
        { name: "IndusInd", url: "https://www.ishan.ac/images/company/Induslnd.png" },
        { name: "Genpact", url: "https://www.ishan.ac/images/company/Genpact.png" },
        { name: "SDS", url: "https://www.ishan.ac/images/company/SDS.png" },
        { name: "ULTRATECH", url: "https://www.ishan.ac/images/company/Ultratech.png" },
        { name: "IBM", url: "https://www.ishan.ac/images/company/IBM.png" },
        { name: "Ebix", url: "https://www.ishan.ac/images/company/Ebix.png" },
        { name: "Dixon", url: "https://www.ishan.ac/images/company/Dixon.png" },
        { name: "SBI", url: "https://www.ishan.ac/images/company/SBI.png" },
        { name: "Radisys", url: "https://www.ishan.ac/images/company/Radisys.png" },
        { name: "INFOTECH", url: "https://www.ishan.ac/images/company/Infotech.png" },
        { name: "Orishj", url: "https://www.ishan.ac/images/company/Orishj.png" }
      ]
    },
    testimonials: {
      title: "Voices That Matter",
      list: [
        { name: "Tapas Dasmohapatra", batch: "PGDM 2006", role: "Leadership Coach & Co-Founder", company: "POSSIBLERS", category: "Alumni Stories", quote: "My journey at Ishan played a pivotal role in shaping my professional mindset.", image: "https://www.ishan.ac/testimonial/alumni/A1.jpg" },
        { name: "Shailly Bhagel", batch: "BAMS 2030", role: "Student", company: "Ishan Ayurveda", category: "Student Stories", quote: "My experience at Ishan has been inspiring and enriching.", image: "https://www.ishan.ac/testimonial/alumni/A1.jpg" }
      ]
    },
    regulatoryBodies: {
      title: "Approvals & Affiliations",
      list: [
        { name: "UGC", fullTitle: "University Grants Commission", description: "Statutory body for maintenance of standards in higher education.", image: "https://www.ishan.ac/images/regular-bodies/UGC.png" },
        { name: "AICTE", fullTitle: "All India Council for Technical Education", description: "Approval for technical and management programs.", image: "https://www.ishan.ac/images/regular-bodies/AICTE.png" },
        { name: "BCI", fullTitle: "Bar Council of India", description: "Approval for Law programs.", image: "https://www.ishan.ac/images/regular-bodies/BCI.jpg" },
        { name: "PCI", fullTitle: "Pharmacy Council of India", description: "Approval for Pharmacy programs.", image: "https://www.ishan.ac/images/regular-bodies/PCI.png" },
        { name: "NCISM", fullTitle: "National Commission for Indian System of Medicine", description: "Recognition for Ayurveda programs.", image: "https://www.ishan.ac/images/regular-bodies/NCISM.jpg" }
      ]
    },
    enquiryCta: { title: "Ready to Shape Your Future?", subtitle: "Join Greater Noida's most prestigious educational group.", buttonText: "Apply Now" }
  }
};

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB.");

    for (const [modelName, Model] of Object.entries(models)) {
      if (defaultData[modelName]) {
        try {
          console.log(`Seeding ${modelName}...`);
          await Model.deleteMany({});
          const doc = new Model(defaultData[modelName]);
          await doc.save();
          console.log(`Seeded ${modelName} successfully.`);
        } catch (modelErr) {
          console.error(`ERROR seeding ${modelName}:`, modelErr);
          throw modelErr;
        }
      } else {
        console.log(`No data for ${modelName}, skipping.`);
      }
    }

    console.log("--- SEEDING OPERATION COMPLETE ---");
    process.exit(0);
  } catch (err) {
    console.error("SEED ERROR:", err);
    process.exit(1);
  }
}

seed();
