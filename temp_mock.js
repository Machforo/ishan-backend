// Mock data for Ishan Educational Institutions landing page

const ISHAN_LOGO =
  "https://www.ishan.ac/icons/ishan-logo.svg";

const heroSlides = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/16767715/pexels-photo-16767715.jpeg?w=1920",
    tag: "ISHAN INSTITUTE OF MANAGEMENT & TECHNOLOGY",
    title: "ADMISSIONS OPEN 2026-27",
    subtitle: "AICTE approved PGDM, MBA, BBA & BCom programs",
    programs: ["PGDM", "MBA", "BBA", "B.COM"],
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1920",
    tag: "ISHAN INSTITUTE OF LAW",
    title: "Shaping India's Next Generation of Legal Minds",
    subtitle: "BCI-approved BA LL.B • BBA LL.B • LL.M, Admissions Open 2026-27",
    specialisations: [
      "Constitutional Law",
      "Corporate Law",
      "Criminal Law",
      "Cyber Law",
      "Intellectual Property",
      "International Law",
      "Environmental Law",
      "Taxation",
    ],
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1583373834259-46cc92173cb7?w=1920",
    tag: "ISHAN INSTITUTE OF PHARMACY",
    title: "Building India's Future Pharma Leaders",
    subtitle: "PCI approved B.Pharm, D.Pharm & M.Pharm programs",
    programs: ["B.Pharm", "D.Pharm", "M.Pharm"],
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/18012459/pexels-photo-18012459.jpeg?w=1920",
    tag: "ISHAN INSTITUTE OF AYURVEDIC MEDICAL SCIENCES",
    title: "Heal. Serve. Lead.",
    subtitle: "NCISM approved BAMS programme, Ayurveda for modern healthcare",
    programs: ["BAMS (Bachelor of Ayurvedic Medicine & Surgery)"],
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/31040302/pexels-photo-31040302.jpeg?w=1920",
    tag: "PLACEMENTS @ ISHAN",
    title: "30 Years. 50,000+ Alumni. 500+ Recruiters.",
    subtitle: "Since 1994, shaping professionals across India and the world",
    stats: [
      { num: "500", label: "recruiters" },
      { num: "98", label: "% placement rate" },
      { num: "50", label: "k+ alumni" },
      { num: "30", label: "+ years legacy" },
    ],
  },
];

const programCategories = [
  { id: "ug", label: "Undergraduate" },
  { id: "pg", label: "Postgraduate" },
  { id: "diploma", label: "Diploma" },
  { id: "doctoral", label: "Doctoral" },
];

const programs = {
  ug: [
    { name: "BA LL.B (Hons.), 5 Year Integrated", school: "Ishan Institute of Law" },
    { name: "BBA LL.B (Hons.), 5 Year Integrated", school: "Ishan Institute of Law" },
    { name: "LL.B (Hons.), 3 Year", school: "Ishan Institute of Law" },
    { name: "BBA (Bachelor of Business Administration)", school: "Ishan Institute of Management" },
    { name: "B.Com (Hons.)", school: "Ishan Institute of Management" },
    { name: "BCA (Bachelor of Computer Applications)", school: "Ishan Institute of Management" },
    { name: "B.Pharm (Bachelor of Pharmacy)", school: "Ishan Institute of Pharmacy" },
    { name: "BAMS, Bachelor of Ayurvedic Medicine & Surgery", school: "Ishan Ayurvedic Medical Sciences" },
    { name: "B.Ed (Bachelor of Education)", school: "Ishan Institute of Education" },
    { name: "B.El.Ed (Elementary Education)", school: "Ishan Institute of Education" },
    { name: "B.Sc Nursing", school: "Ishan Institute of Medical Sciences" },
    { name: "BPT (Bachelor of Physiotherapy)", school: "Ishan Institute of Medical Sciences" },
  ],
  pg: [
    { name: "PGDM (Post Graduate Diploma in Management)", school: "Ishan Institute of Management" },
    { name: "MBA (Master of Business Administration)", school: "Ishan Institute of Management" },
    { name: "M.Com (Master of Commerce)", school: "Ishan Institute of Management" },
    { name: "LL.M (Master of Laws)", school: "Ishan Institute of Law" },
    { name: "M.Pharm, Pharmaceutics", school: "Ishan Institute of Pharmacy" },
    { name: "M.Pharm, Pharmacology", school: "Ishan Institute of Pharmacy" },
    { name: "MD Ayurveda", school: "Ishan Ayurvedic Medical Sciences" },
    { name: "M.Ed (Master of Education)", school: "Ishan Institute of Education" },
    { name: "MCA (Master of Computer Applications)", school: "Ishan Institute of Management" },
    { name: "M.Sc Nursing", school: "Ishan Institute of Medical Sciences" },
  ],
  diploma: [
    { name: "D.Pharm (Diploma in Pharmacy)", school: "Ishan Institute of Pharmacy" },
    { name: "Diploma in Elementary Education (D.El.Ed)", school: "Ishan Institute of Education" },
    { name: "Diploma in Business Management", school: "Ishan Institute of Management" },
    { name: "Panchakarma Therapist Diploma", school: "Ishan Ayurvedic Medical Sciences" },
  ],
  doctoral: [
    { name: "Ph.D in Management", school: "Ishan Institute of Management" },
    { name: "Ph.D in Law", school: "Ishan Institute of Law" },
    { name: "Ph.D in Pharmaceutical Sciences", school: "Ishan Institute of Pharmacy" },
    { name: "Ph.D in Ayurveda", school: "Ishan Ayurvedic Medical Sciences" },
    { name: "Ph.D in Education", school: "Ishan Institute of Education" },
  ],
};

const colleges = [
  {
    id: 1,
    name: "Ishan Institute of Law",
    short: "IIL",
    desc: "BCI-approved law school offering 3-year LL.B, 5-year integrated BA/BBA LL.B and LL.M programs.",
    image: "https://images.pexels.com/photos/18012459/pexels-photo-18012459.jpeg?w=800",
    programs: "BA LL.B • BBA LL.B • LL.B • LL.M",
    accreditation: "BCI",
  },
  {
    id: 2,
    name: "Ishan Institute of Management & Technology",
    short: "IIMT",
    desc: "AICTE-approved B-school offering PGDM, MBA, BBA, B.Com and BCA. Flagship since 1995.",
    image: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=800",
    programs: "PGDM • MBA • BBA • B.Com • BCA • MCA",
    accreditation: "AICTE • NAAC",
  },
  {
    id: 3,
    name: "Ishan Institute of Pharmacy",
    short: "IIP",
    desc: "PCI-approved pharmacy college training next-generation pharma professionals.",
    image: "https://images.unsplash.com/photo-1637589316488-6d4c41b335cd?w=800",
    programs: "B.Pharm • D.Pharm • M.Pharm",
    accreditation: "PCI",
  },
  {
    id: 4,
    name: "Ishan Ayurvedic Medical Sciences",
    short: "IAMS",
    desc: "NCISM-approved Ayurvedic medical college with attached hospital and Panchakarma centre.",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800",
    programs: "BAMS • MD Ayurveda",
    accreditation: "NCISM",
  },
  {
    id: 5,
    name: "Ishan Institute of Education",
    short: "IIE",
    desc: "NCTE-recognised institute for B.Ed, M.Ed and Elementary Education teacher training.",
    image: "https://images.unsplash.com/photo-1737825101103-c35677e6bd45?w=800",
    programs: "B.Ed • M.Ed • B.El.Ed • D.El.Ed",
    accreditation: "NCTE",
  },
];

const campusLife = [
  {
    id: 1,
    title: "Events & Celebrations",
    image: "https://images.pexels.com/photos/31968811/pexels-photo-31968811.jpeg?w=800",
    gallery: [
      "https://images.pexels.com/photos/31968811/pexels-photo-31968811.jpeg?w=1200",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200",
      "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=1200",
      "https://images.unsplash.com/photo-1607013407627-6ee814329547?w=1200",
      "https://images.pexels.com/photos/18012459/pexels-photo-18012459.jpeg?w=1200",
      "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=1200",
    ],
    description:
      "From annual fests to cultural nights, TEDx talks and convocation ceremonies, campus life at Ishan is vibrant, inclusive and unforgettable.",
  },
  {
    id: 2,
    title: "Clubs & Societies",
    image: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=1200",
      "https://images.unsplash.com/photo-1637589316488-6d4c41b335cd?w=1200",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200",
      "https://images.pexels.com/photos/12497061/pexels-photo-12497061.jpeg?w=1200",
      "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=1200",
      "https://images.pexels.com/photos/16767715/pexels-photo-16767715.jpeg?w=1200",
    ],
    description:
      "Debate society, moot court club, pharma innovators, entrepreneurship cell, cultural troupes, 30+ active student-run clubs.",
  },
  {
    id: 3,
    title: "Sports & Fitness",
    image: "https://images.unsplash.com/photo-1737825101103-c35677e6bd45?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1737825101103-c35677e6bd45?w=1200",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200",
      "https://images.pexels.com/photos/31040302/pexels-photo-31040302.jpeg?w=1200",
      "https://images.pexels.com/photos/31968811/pexels-photo-31968811.jpeg?w=1200",
      "https://images.unsplash.com/photo-1607013407627-6ee814329547?w=1200",
      "https://images.unsplash.com/photo-1623461487986-9400110de28e?w=1200",
    ],
    description:
      "Cricket ground, basketball court, lawn tennis, badminton, table tennis, modern gym, yoga pavilion, athletics at Ishan nurtures champions.",
  },
];

const campusLinks = [
  "Sports & Athletics",
  "Hostel & Accommodation",
  "Dining & Cafeteria",
  "Clubs & Societies",
  "Campus Tour (Virtual)",
];

const facilityLinks = ["Campus Facilities", "Academic Facilities"];

const researchCards = [
  {
    id: 1,
    tag: "Ishan Management Journal",
    title: "Emerging markets, sustainable finance & digital transformation",
    image: "https://images.unsplash.com/photo-1637589316488-6d4c41b335cd?w=800",
  },
  {
    id: 2,
    tag: "Ishan Law Review",
    title: "Contemporary issues in constitutional and cyber law",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800",
  },
];

const researchLinks = [
  "Ishan Management Journal",
  "Ishan Law Review",
  "Pharmaceutical Research",
  "Ayurveda Publications",
  "Funded Projects",
  "Faculty Publications",
];

const placementStats = [
  { num: "500", label: "recruiters\non campus" },
  { num: "98", label: "% placement\nrate" },
  { num: "50", label: "k+ alumni\nacross sectors" },
  { num: "30", label: "+ years\nacademic legacy" },
];

const recruiters = [
  "Infosys",
  "TCS",
  "Wipro",
  "HCL",
  "Cognizant",
  "Accenture",
  "Deloitte",
  "KPMG",
  "Cipla",
  "Sun Pharma",
  "Dr Reddy's",
  "AIIMS",
  "Apollo Hospitals",
  "Max Hospitals",
];

const testimonials = [
  {
    id: 1,
    quote:
      "Ishan shaped my legal career. The moot courts, internships and faculty mentoring gave me confidence to practice at the Supreme Court.",
    name: "Ankit Verma",
    course: "BA LL.B",
    batch: "2018-23",
    image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?w=600",
  },
  {
    id: 2,
    quote:
      "From PGDM classroom to corporate boardroom, Ishan's placement team opened doors I didn't know existed.",
    name: "Priya Sharma",
    course: "PGDM",
    batch: "2020-22",
    image: "https://images.unsplash.com/photo-1623461487986-9400110de28e?w=600",
  },
  {
    id: 3,
    quote:
      "The BAMS programme at Ishan balanced ancient wisdom with modern clinical practice. Truly transformative education.",
    name: "Dr. Rahul Mishra",
    course: "BAMS",
    batch: "2017-22",
    image: "https://images.pexels.com/photos/12497061/pexels-photo-12497061.jpeg?w=600",
  },
];

const universityAchievements = [
  { id: 1, title: "Since 1994", desc: "30+ years of educational excellence" },
  { id: 2, title: "NAAC Accredited", desc: "Quality assured institution" },
  { id: 3, title: "50,000+ Alumni", desc: "Global professional network" },
  { id: 4, title: "BCI • AICTE • PCI", desc: "Regulator-approved programs" },
  { id: 5, title: "5 Colleges", desc: "Under one multi-disciplinary group" },
];

const aboutImages = [
  "https://images.pexels.com/photos/12091126/pexels-photo-12091126.jpeg?w=1200",
  "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=1200",
  "https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=1200",
];

const news = [
  {
    id: 1,
    date: "15 Feb, 2026",
    title: "Ishan Institute of Law Hosts National Moot Court Competition 2026",
    image: "https://images.pexels.com/photos/31968811/pexels-photo-31968811.jpeg?w=800",
  },
  {
    id: 2,
    date: "22 Mar, 2026",
    title: "Annual Management Conclave: Industry leaders converge at IIMT",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
  },
  {
    id: 3,
    date: "10 Apr, 2026",
    title: "Ishan Pharmacy Students Win National Research Paper Competition",
    image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=800",
  },
  {
    id: 4,
    date: "05 May, 2026",
    title: "BAMS Free Medical Camp Serves 1000+ Villagers in Greater Noida",
    image: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=800",
  },
];

const socialPosts = [
  { id: 1, likes: 412, image: "https://images.unsplash.com/photo-1637589316488-6d4c41b335cd?w=400", caption: "Guest lecture by Senior Advocate on constitutional law..." },
  { id: 2, likes: 1280, image: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=400", caption: "Annual Sports Day 2026 highlights, energy, spirit, glory..." },
  { id: 3, likes: 680, image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400", caption: "Ayurveda awareness camp in collaboration with local community..." },
  { id: 4, likes: 220, image: "https://images.unsplash.com/photo-1737825101103-c35677e6bd45?w=400", caption: "Research paper presentation at National Pharma Conference..." },
  { id: 5, likes: 1540, image: "https://images.pexels.com/photos/18012459/pexels-photo-18012459.jpeg?w=400", caption: "Convocation 2025, celebrating 1200+ graduating students..." },
  { id: 6, likes: 340, image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?w=400", caption: "Industry visit to corporate HQ for PGDM batch 2024..." },
  { id: 7, likes: 560, image: "https://images.pexels.com/photos/31968811/pexels-photo-31968811.jpeg?w=400", caption: "Teachers Day celebration at IIE, honoring our mentors..." },
  { id: 8, likes: 190, image: "https://images.pexels.com/photos/16767715/pexels-photo-16767715.jpeg?w=400", caption: "Open House for Admissions 2026-27, register today..." },
];

const navMenu = [
  {
    title: "About",
    items: [
      "About Ishan",
      "Chairman's Message",
      "Mission, Vision & Values",
      "Awards & Rankings",
      "Approvals & Affiliations",
      "Group Timeline (Since 1994)",
    ],
  },
  {
    title: "Colleges",
    items: [
      "Ishan Institute of Law",
      "Ishan Institute of Management & Technology",
      "Ishan Institute of Pharmacy",
      "Ishan Ayurvedic Medical Sciences",
      "Ishan Institute of Education",
      "All Colleges, Gateway",
    ],
  },
  {
    title: "Admissions",
    items: [
      "Admissions Overview",
      "All UG + PG Programs",
      "Scholarships",
      "International / NRI Admissions",
      "Fee Structure",
      "How to Apply",
    ],
  },
  {
    title: "Placements",
    items: [
      "Placements Overview",
      "Our Recruiters",
      "Alumni Network",
      "Careers @ Ishan",
      "Training & Development",
    ],
  },
  {
    title: "Research",
    items: [
      "Research Hub",
      "Ishan Management Journal",
      "Ishan Law Review",
      "Pharmaceutical Research",
      "Funded Projects",
      "Publications",
    ],
  },
  {
    title: "Campus",
    items: [
      "Campus Life",
      "Hostel & Accommodation",
      "Sports & Fitness",
      "Libraries",
      "Events Calendar",
      "Social Media Hub",
    ],
  },
  {
    title: "News",
    items: ["News & Updates", "Events Calendar", "Gallery"],
  },
  {
    title: "Contact",
    items: [
      "Contact Us",
      "Mandatory Disclosures",
      "Anti-Ragging Zone",
      "Grievance Redressal",
      "Downloads Hub",
    ],
  },
];

const footerLinks = {
  quickLinks: [
    "Anti-Ragging Zone",
    "Grievance Redressal",
    "PoSH Policy",
    "Privacy Policy",
    "Mandatory Disclosures",
    "Downloads Hub",
    "Careers @ Ishan",
    "Sitemap",
  ],
  rankings: [
    "NAAC Accreditation",
    "BCI Approval",
    "AICTE Approval",
    "PCI Approval",
    "NCISM Approval",
    "NCTE Recognition",
    "Chronicle India Ranking",
  ],
  group: ["About Ishan", "5 Colleges", "Chairman's Message", "Media Room"],
};


const contactInfo = {
  location: "Greater Noida, UP",
  admissionNumber: "+91-120-2326600",
  email: "admissions@ishan.ac",
  officeHours: "9:00 AM - 5:00 PM"
};

const floatingWidgets = {
  whatsapp: "911234567890",
  phone: "+91-120-2326600",
  applyLink: "https://ishan-ascend.vercel.app/admissions"
};

const aboutContent = {
  title: "The first multi-disciplinary institution of Greater Noida, shaping professionals since 1994",
  description: "From a single management institute to five thriving colleges across Law, Management, Pharmacy, Ayurveda and Education, Ishan has grown into one of North India's most respected names in higher education, with 50,000+ alumni in leadership roles worldwide."
};

const collegeSection = {
  heading: "Our 5 Colleges",
  subheading: "Specialist faculties. One campus."
};

const programmeSection = {
  heading: "Discover your future-ready programme",
  subheading: "Explore programmes across Law, Management, Pharmacy, Ayurveda and Education, approved by BCI, AICTE, PCI, NCISM and NCTE."
};

const researchSection = {
  heading: "Research Hub",
  subheading: "Driving innovation and academic excellence.",
  ctaText: "Know More",
  ctaLink: "#research"
};

module.exports = { ISHAN_LOGO, heroSlides, programCategories, programs, colleges, campusLife, campusLifeStats, campusLinks, facilityLinks, researchCards, researchLinks, placementStats, recruiters, testimonials, universityAchievements, aboutImages, news, socialPosts, navMenu, footerLinks, contactInfo, aboutContent, collegeSection, programmeSection, researchSection, floatingWidgets, highlights, newsFlash };