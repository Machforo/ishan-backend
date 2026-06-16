require('dotenv').config();
const mongoose = require('mongoose');
const { LegalDownload, LegalPastPaper, LegalCodeOfConduct, LegalStudentPortal, LegalPlacement, LegalResearchJournal, LegalPublication, LegalAlumni, LegalContact, LegalCareer } = require('./models/legalModels');

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected");

  await LegalContact.deleteMany({});
  await LegalContact.create({
    address: "Knowledge Park-III, Greater Noida, Uttar Pradesh 201308",
    phone: "8448797700",
    email: "admissions@ishan.ac",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2!2d77.49!3d28.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIshan+Institute+of+Law!5e0!3m2!1sen!2sin!4v1"
  });

  await LegalCareer.deleteMany({});
  await LegalCareer.insertMany([
    { title: "Professor / Associate Professor — Law", department: "Law", type: "Full-time", location: "Greater Noida", description: "10+ Years", requirements: "LLM with PhD", status: "Active" },
    { title: "Assistant Professor — Law", department: "Law", type: "Full-time", location: "Greater Noida", description: "0–5 Years", requirements: "LLM with UGC NET / PhD", status: "Active" },
    { title: "Clinical Instructor — Moot Court", department: "Clinical Education", type: "Full-time", location: "Greater Noida", description: "3+ Years Litigation", requirements: "LLM", status: "Active" },
    { title: "Academic Coordinator", department: "Academic Office", type: "Full-time", location: "Greater Noida", description: "5+ Years Administration", requirements: "Graduate", status: "Active" }
  ]);

  await LegalDownload.deleteMany({});
  await LegalDownload.create({
    title: "Downloads",
    subtitle: "Timetables, syllabi, forms, and notices for current students",
    overview: "Access mandatory forms, academic calendars, and syllabus documents. All documents are in PDF format for easy accessibility across devices. For any specific document not listed here, please contact the academic office.",
    image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-7.jpg",
    files: [
      { name: "BA LLB (Hons) Syllabus 2024-25", fileType: "PDF", category: "Syllabus", size: "2.4 MB" },
      { name: "LLB Syllabus 2024-25", fileType: "PDF", category: "Syllabus", size: "1.8 MB" },
      { name: "Academic Calendar 2024-25", fileType: "PDF", category: "Calendar", size: "850 KB" },
      { name: "Moot Court Competition Guidelines", fileType: "PDF", category: "Clinical", size: "1.2 MB" },
      { name: "Court Visit Diary Proforma", fileType: "PDF", category: "Clinical", size: "450 KB" },
      { name: "Internship Completion Certificate Format", fileType: "PDF", category: "Forms", size: "280 KB" },
      { name: "Scholarship Application Form", fileType: "PDF", category: "Forms", size: "350 KB" },
      { name: "Anti-Ragging Undertaking (BCI Format)", fileType: "PDF", category: "Forms", size: "210 KB" }
    ]
  });

  await LegalPastPaper.deleteMany({});
  await LegalPastPaper.create({
    title: "Past Exam Papers",
    subtitle: "University examination archives to aid student preparation",
    overview: "Browse through previous university examination papers to understand question patterns, weightage of topics, and examination trends. Papers are categorized by program and subject for easy access.",
    image: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-11.jpg",
    files: [
      { name: "Constitutional Law — I", fileType: "PDF", category: "BA LLB | 2023 | Sem 1", size: "450 KB" },
      { name: "Law of Contract", fileType: "PDF", category: "BA LLB | 2023 | Sem 1", size: "380 KB" },
      { name: "Law of Crimes (IPC)", fileType: "PDF", category: "LLB | 2022 | Sem 3", size: "510 KB" },
      { name: "Family Law — II", fileType: "PDF", category: "LLB | 2022 | Sem 3", size: "420 KB" }
    ]
  });

  await LegalStudentPortal.deleteMany({});
  await LegalStudentPortal.create({
    title: "Student Portal Login",
    instructions: "Enter your university roll number and password to access your dashboard. The portal provides real-time access to attendance records, internal assessment marks, fee receipts, and digital library resources.",
    link: "https://erp.ishan.ac",
    image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-13.jpg"
  });

  await LegalPlacement.deleteMany({});
  await LegalPlacement.create({
    placementNumbers: [
      { number: "92%", label: "Placement Rate" },
      { number: "12 LPA", label: "Highest Package" },
      { number: "40+", label: "Recruiting Partners" },
      { number: "100%", label: "Internship Support" }
    ],
    recruitingPartners: [
      { name: "Khaitan & Co" },
      { name: "Cyril Amarchand Mangaldas" },
      { name: "AZB & Partners" },
      { name: "Luthra & Luthra" }
    ],
    successStories: [
      { name: "Aarav Sharma", company: "Khaitan & Co", role: "Associate", batch: "Batch 2023" },
      { name: "Priya Singh", company: "Delhi High Court", role: "Judicial Clerk", batch: "Batch 2022" },
      { name: "Rahul Verma", company: "L&T Legal", role: "Corporate Counsel", batch: "Batch 2023" }
    ],
    placementProcess: [
      { step: "1", title: "Pre-Placement Talks", desc: "Firms present their profiles and roles to final year students." },
      { step: "2", title: "Resume Shortlisting", desc: "Student profiles are shared and screened by HRs." },
      { step: "3", title: "Aptitude & GD", desc: "Screening rounds focusing on legal aptitude." },
      { step: "4", title: "Final Interviews", desc: "Technical and HR rounds leading to job offers." }
    ]
  });

  await LegalCodeOfConduct.deleteMany({});
  await LegalCodeOfConduct.create({
    title: "Code of Conduct",
    subtitle: "Student rules, dress code, and academic integrity guidelines",
    content: `<h2>1. Professional Conduct</h2><p>Law students are expected to maintain the highest standards of decorum and dignity, reflecting the noble nature of the legal profession. Respectful behavior towards faculty, staff, and fellow students is mandatory. Any form of misconduct, including bullying, verbal abuse, or physical altercation, will result in immediate disciplinary action.</p><h2>2. Dress Code (Lawyer's Uniform)</h2><p>As per BCI standards, students must adhere to the prescribed professional dress code: White Shirt, Black Trousers/Skirt, and Black Coat. A black tie or band may be required for specific formal events. Clean and formal attire is mandatory during academic hours, moot courts, and court visits.</p><h2>3. Attendance (BCI Regulations)</h2><p>A strict minimum of 75% attendance is mandatory for each subject as per Bar Council of India (BCI) and CCS University regulations. Students falling below this threshold will not be permitted to appear for university examinations. Medical leave must be supported by valid documentation submitted within 48 hours.</p><h2>4. Academic Integrity & Research Ethics</h2><p>Plagiarism, cheating, or any form of academic dishonesty is strictly prohibited, especially in legal research and memorial drafting. Students found engaging in unfair means will face immediate disqualification and potential expulsion, as these acts are contrary to the ethics of the legal profession.</p><h2>5. Moot Court & Library Decorum</h2><p>Students must maintain absolute silence and decorum in the Moot Court Hall and the Legal Library. Use of mobile phones is strictly prohibited in these areas. Respect for library resources and research terminals is expected from every student.</p><h2>6. Zero Tolerance for Ragging</h2><p>As per UGC regulations and Supreme Court directives, ragging in any form is a criminal offense. Ishan Law maintains zero tolerance towards ragging. Offenders will face immediate expulsion, FIR registration, and criminal prosecution.</p>`,
    image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg"
  });

  await LegalResearchJournal.deleteMany({});
  await LegalResearchJournal.create({
    title: "Ishan Law Review",
    subtitle: "A peer-reviewed legal journal dedicated to contemporary legal scholarship",
    content: "<p>Ishan Law Review is the flagship peer-reviewed research journal published by the Ishan Law Institute. Dedicated to fostering high-quality legal scholarship, the journal publishes original research papers, case comments, and book reviews on contemporary legal issues, constitutional developments, and international law. Published bi-annually, it serves as a platform for academicians, legal practitioners, and students to contribute to the evolving legal discourse in India and abroad.</p>",
    image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg",
    stats: [
      { label: "Journal Name", value: "Ishan Law Review" },
      { label: "Frequency", value: "Bi-annual" },
      { label: "Format", value: "Peer-Reviewed" },
      { label: "Focus", value: "Contemporary Legal Issues" }
    ],
    guidelinesLink: "#"
  });

  await LegalAlumni.deleteMany({});
  await LegalAlumni.insertMany([
    { name: "Arjun Verma", batch: "Batch of 2020", currentRole: "Corporate Associate, AZB & Partners", quote: "Ishan Law provided me with the perfect launchpad for a corporate law career. The emphasis on commercial law and practical drafting was invaluable.", image: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-1.jpg" },
    { name: "Meera Das", batch: "Batch of 2018", currentRole: "Civil Judge (Junior Division)", quote: "The rigorous mooting culture and guidance from retired judges at Ishan helped me crack the judicial services examination on my first attempt.", image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-3.jpg" }
  ]);

  await LegalPublication.deleteMany({});
  await LegalPublication.insertMany([
    { title: "The Evolution of Cyber Law in the Context of Data Privacy in India", authors: "Dr. Alok Nath, Prof. S. Sharma", journal: "Journal of Cyber Law and Policy", year: "2023", impactFactor: "2.5", link: "#" },
    { title: "Analyzing the Efficacy of Alternate Dispute Resolution Mechanisms in Commercial Contracts", authors: "Prof. Neha Gupta", journal: "Indian Journal of Arbitration", year: "2022", impactFactor: "1.8", link: "#" }
  ]);

  console.log("Done");
  process.exit(0);
}
seed();
