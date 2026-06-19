require('dotenv').config();
const mongoose = require('mongoose');
const { AyurvedaResearch } = require('../models/ayurvedaModels');

async function seedResearch() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  await AyurvedaResearch.deleteMany({});
  let research = new AyurvedaResearch();

  research.researchJournal = {
    title: "Ishan Ayurveda Research Journal",
    subtitle: "Peer-reviewed Ayurvedic research journal publishing clinical studies, case reports, and classical text re-examination",
    description: "IAMC's peer-reviewed Ayurvedic research journal provides a platform for faculty, scholars, students, and Ayurvedic practitioners to publish clinical studies, case reports, literature reviews, and experimental research — bridging classical and contemporary Ayurvedic science. The journal covers clinical studies, pharmacognosy, Panchkarma outcomes, classical text re-examination, drug standardisation, community health, and integrative medicine.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
    guidelinesLink: "#",
    stats: [
      { label: "Journal Name", value: "Ishan Ayurveda Journal" },
      { label: "Frequency", value: "Bi-annual" },
      { label: "Format", value: "Peer-Reviewed" },
      { label: "Focus", value: "Ayurvedic & Integrative Medicine" }
    ]
  };

  research.publications = {
    title: "Research Publications",
    subtitle: "Peer-reviewed research contributions by Ishan Ayurveda faculty and students",
    description: "The faculty and students of Ishan Ayurvedic Medical College are actively engaged in Ayurvedic research, regularly publishing in national and international peer-reviewed journals. Our research spans Panchakarma outcomes, pharmacognosy, Dravyaguna, and integrative medicine.",
    items: [
      { title: "Clinical Efficacy of Panchakarma in Management of Rheumatoid Arthritis", authors: "Dr. R. Sharma, Dr. P. Mishra", journal: "Journal of Ayurveda and Integrative Medicine", year: "2024", doi: "#" },
      { title: "Phytochemical Analysis of Ashwagandha Root for Immunomodulatory Activity", authors: "Prof. A. Kumar, Dr. S. Verma", journal: "Ancient Science of Life", year: "2023", doi: "#" },
      { title: "Standardisation of Triphala Churna: A Quality Control Study", authors: "Dr. N. Gupta, Dr. V. Singh", journal: "International Journal of Ayurveda Research", year: "2023", doi: "#" },
      { title: "Ayurvedic Management of Type-2 Diabetes Mellitus: A Clinical Study", authors: "Dr. R. Sharma, Dr. A. Patel", journal: "Journal of Research in Ayurveda", year: "2022", doi: "#" }
    ]
  };

  research.researchProjects = {
    title: "Research Projects",
    subtitle: "Active Ayurvedic research initiatives led by IAMC faculty",
    description: "Our faculty leads several funded and institutional research projects focusing on Ayurvedic drug development, clinical validation, and integrative medicine approaches.",
    stats: [
      { value: "10+", label: "Active Projects" },
      { value: "12", label: "Research Faculty" },
      { value: "40+", label: "Publications" },
      { value: "4", label: "Funded Projects" }
    ],
    items: [
      { title: "Clinical Validation of Panchakarma Protocols for Metabolic Syndrome", pi: "Dr. R. Sharma", department: "Kayachikitsa", status: "Ongoing", funding: "CCIM Research Grant" },
      { title: "Pharmacognostical Studies of Regional Medicinal Plants (Western UP)", pi: "Dr. P. Mishra", department: "Dravyaguna", status: "Ongoing", funding: "Institutional Funding" },
      { title: "Development of Ayurvedic Formulations for Respiratory Disorders", pi: "Dr. A. Kumar", department: "Rasashastra", status: "Completed", funding: "DST-AYUSH" },
      { title: "In-Silico Docking Study of Classical Ayurvedic Compounds Against COVID-19", pi: "Dr. S. Verma", department: "Agadtantra", status: "Completed", funding: "Institutional Funding" }
    ]
  };

  research.alumni = {
    title: "Alumni Network",
    subtitle: "Celebrating the success of Ishan Ayurveda graduates across hospitals and wellness centers",
    stats: [
      { value: "1000+", label: "Alumni Network" },
      { value: "50+", label: "Hospitals & Clinics" },
      { value: "₹4.5 LPA", label: "Average Package" },
      { value: "92%", label: "Placement Rate" }
    ],
    items: [
      { name: "Dr. Priya Sharma", batch: "BAMS 2018", company: "Patanjali Ayurved", role: "Senior Medical Officer", image: "" },
      { name: "Dr. Rohit Gupta", batch: "BAMS 2019", company: "Dabur India", role: "Clinical Researcher", image: "" },
      { name: "Dr. Ankita Singh", batch: "BAMS 2018", company: "Jiva Ayurveda", role: "Ayurvedic Physician", image: "" },
      { name: "Dr. Mohit Verma", batch: "BAMS 2020", company: "Government Hospital", role: "Medical Officer", image: "" },
      { name: "Dr. Neha Jain", batch: "BAMS 2019", company: "Kama Ayurveda", role: "Consultant", image: "" },
      { name: "Dr. Aditya Kumar", batch: "BAMS 2021", company: "AIIMS (AYUSH Dept)", role: "Research Fellow", image: "" }
    ]
  };

  research.placements = {
    title: "Career Outcomes",
    subtitle: "Consistent record of placements in top-tier Ayurvedic hospitals, wellness centers, and research institutions",
    summary: "IAMC graduates are placed across leading Ayurvedic hospitals, wellness chains, government health departments, and research institutions. Our dedicated placement cell ensures every BAMS graduate has the skills and connections to launch a successful career.",
    placementNumbers: [
      { number: "92%", label: "Placement Rate" },
      { number: "₹6 LPA", label: "Highest Package" },
      { number: "40+", label: "Recruiting Partners" },
      { number: "100%", label: "Internship Support" }
    ],
    companies: [
      { name: "Patanjali Ayurved", logo: "" },
      { name: "Dabur India", logo: "" },
      { name: "Jiva Ayurveda", logo: "" },
      { name: "Kama Ayurveda", logo: "" },
      { name: "Apollo Wellness", logo: "" }
    ],
    successStories: [
      { name: "Dr. Priya Sharma", company: "Patanjali Ayurved", role: "Senior Medical Officer", batch: "BAMS 2018", quote: "IAMC gave me the clinical foundation I needed to excel in Ayurvedic practice.", image: "" },
      { name: "Dr. Aditya Kumar", company: "AIIMS (AYUSH Dept)", role: "Research Fellow", batch: "BAMS 2021", quote: "The research culture at IAMC helped me secure a prestigious research position.", image: "" }
    ],
    placementProcess: [
      { step: "1", title: "Pre-Placement Training", desc: "Clinical training, patient interaction, hospital management, and medical camps" },
      { step: "2", title: "Profile Building", desc: "Registration with the placement cell and creating a professional profile" },
      { step: "3", title: "Recruitment Drives", desc: "Hospital and wellness center recruitment drives on campus" },
      { step: "4", title: "Assessment", desc: "Technical assessment, clinical case discussions, and personal interviews" },
      { step: "5", title: "Offer & Onboarding", desc: "Offer letter issuance and medical officer onboarding support" }
    ]
  };

  research.careers = {
    title: "Careers at Ishan Ayurveda",
    subtitle: "Join a community of Ayurvedic educators and healthcare professionals dedicated to excellence",
    description: "Ishan Ayurvedic Medical College invites qualified Ayurvedic educators, hospital practitioners, and administrative professionals to join our institution — contributing to producing the next generation of India's BAMS doctors. We offer a highly professional environment, strong research support, and competitive compensation.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
    applyEmail: "careers@ishan.ac",
    openings: [
      { title: "Professor / Associate Professor — Kayachikitsa", qualification: "MD (Kayachikitsa) with PhD", experience: "10+ Years", dept: "Kayachikitsa", jobType: "Full-time" },
      { title: "Assistant Professor — Dravyaguna", qualification: "MD (Dravyaguna) with UGC NET / PhD", experience: "0–5 Years", dept: "Dravyaguna", jobType: "Full-time" },
      { title: "Clinical Instructor — Panchakarma", qualification: "BAMS / MD with Panchakarma training", experience: "3+ Years", dept: "Panchakarma", jobType: "Full-time" },
      { title: "Academic Coordinator", qualification: "Graduate", experience: "5+ Years Administration", dept: "Academic Office", jobType: "Full-time" }
    ]
  };

  research.feedback = {
    title: "Feedback",
    subtitle: "Help us improve — share your experience as a student, parent, or visitor",
    description: "Ishan Ayurvedic Medical College values feedback from students, parents, and visitors. Your assessment of academic quality, faculty, facilities, and administrative support helps us improve. All responses are carefully reviewed by the Quality Assurance Cell and reach the Principal's office directly. Your inputs remain private and confidential.",
    image: "https://images.unsplash.com/photo-1559523161-0fc0d8b814f4?auto=format&fit=crop&w=1000&q=80",
    programmes: [
      { label: "BAMS" },
      { label: "MD (Ayurveda)" },
      { label: "None" }
    ]
  };

  await research.save();
  console.log("Successfully seeded AyurvedaResearch!");
  process.exit(0);
}

seedResearch().catch(console.error);
