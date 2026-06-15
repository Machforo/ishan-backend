const mongoose = require('mongoose');
require('dotenv').config();
const { PharmacyFAQ, PharmacyMandatoryDisclosure, PharmacyCodeOfConduct } = require('./models/pharmacyModels');

const defaultDisclosureItems = [
  { category: "Institution Details", items: "Name: Ishan Institute of Pharmacy\nAddress: Knowledge Park-III, Greater Noida\nYear of Establishment: 2017\nStatus: Private Self-Financing\nType: Co-educational Professional Institution" },
  { category: "Academic Information", items: "Programs Offered: D.Pharm, B.Pharm\nPCI Approval Status — Current\nAnnual Intake per Program\nFaculty-Student Ratio\nStudent Success Rate" },
  { category: "Regulatory Information", items: "PCI Approval Letters\nAKTU and BTE UP Affiliation Documents\nAnti-Ragging Committee Constitution\nGrievance Redressal Mechanism" },
  { category: "Infrastructure", items: "10 Specialized Pharmaceutical Laboratories\nMedical Library — Titles, Journals & Digital Resources\nMachine Room & Herbal Garden\nHealth Camp & Community Reach" },
  { category: "Faculty & Staff", items: "List of Core Faculty with PCI-mandated Qualifications\nVisiting Industry Experts Profile\nAdministrative Staff Details" },
];

const defaultRules = [
  { category: "1. Professional Conduct", items: "Pharmacy students are expected to maintain the highest standards of decorum and dignity, reflecting the noble nature of the healthcare profession. Respectful behavior towards faculty, staff, and fellow students is mandatory. Any form of misconduct, including bullying, verbal abuse, or physical altercation, will result in immediate disciplinary action." },
  { category: "2. Dress Code (Pharmacist's Uniform)", items: "As per PCI standards, students must adhere to the prescribed professional dress code, including a clean White Apron/Lab Coat. Clean and formal attire is mandatory during academic hours, laboratory sessions, and hospital visits." },
  { category: "3. Attendance (PCI Regulations)", items: "A strict minimum of 80% attendance in theory and practicals is mandatory for each subject as per Pharmacy Council of India (PCI) and University/Board regulations. Students falling below this threshold will not be permitted to appear for final examinations. Medical leave must be supported by valid documentation." },
  { category: "4. Academic Integrity & Laboratory Ethics", items: "Plagiarism, cheating, or any form of academic or practical dishonesty is strictly prohibited. Falsifying laboratory data or research results will lead to immediate disqualification and potential expulsion, as these acts are contrary to the ethics of the medical and pharmaceutical professions." },
  { category: "5. Laboratory & Library Decorum", items: "Students must maintain strict safety protocols, absolute silence, and decorum in the Laboratories and the Medical Library. Use of mobile phones is strictly prohibited in these areas. Respect for laboratory equipment, chemicals, and research terminals is expected from every student." },
  { category: "6. Zero Tolerance for Ragging", items: "As per UGC and PCI regulations, ragging in any form is a criminal offense. Ishan Pharmacy maintains zero tolerance towards ragging. Offenders will face immediate expulsion, FIR registration, and criminal prosecution." },
];

const defaultFAQs = [
  { question: "Is Ishan Institute of Pharmacy approved by PCI?", answer: "Yes, Ishan Institute of Pharmacy is fully approved by the Pharmacy Council of India (PCI), New Delhi." },
  { question: "What courses are offered?", answer: "We currently offer D.Pharm (Diploma in Pharmacy) and B.Pharm (Bachelor of Pharmacy) programs." },
  { question: "What is the admission procedure?", answer: "Admissions are based on merit and entrance examinations as per university and state government guidelines. You can apply through our website or visit the campus." },
  { question: "Does the college provide placement assistance?", answer: "Yes, we have a dedicated placement cell that partners with leading pharmaceutical companies and hospitals to ensure robust career opportunities for our students." },
  { question: "Are hostel facilities available?", answer: "Yes, we provide separate, secure, and well-equipped hostel facilities for both boys and girls within the campus." }
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');

    const statement = `The information provided below is submitted as required by the Pharmacy Council of India (PCI) and is updated annually to ensure full transparency. Any discrepancies found in the reported data should be immediately brought to the notice of the Registrar at Ishan Institute of Pharmacy, Knowledge Park, Greater Noida.\n\nPCI mandates public disclosure for the benefit of current and prospective students, healthcare practitioners, and regulatory authorities. It serves as a comprehensive record of the institution's facilities, laboratory standards, and faculty expertise, ensuring accountability in pharmaceutical education.`;

    await PharmacyMandatoryDisclosure.findOneAndUpdate({}, { statement, disclosureItems: defaultDisclosureItems }, { upsert: true, new: true });
    console.log('Seeded Mandatory Disclosure');

    await PharmacyCodeOfConduct.findOneAndUpdate({}, { intro: "Students must strictly adhere to the following rules and regulations.", rules: defaultRules }, { upsert: true, new: true });
    console.log('Seeded Code of Conduct');

    // Seed FAQs only if empty
    const faqCount = await PharmacyFAQ.countDocuments();
    if (faqCount === 0) {
      await PharmacyFAQ.insertMany(defaultFAQs);
      console.log('Seeded FAQs');
    } else {
      console.log('FAQs already exist, skipping');
    }

    console.log('Seeding complete!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
