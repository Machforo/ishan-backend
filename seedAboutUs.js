const mongoose = require('mongoose');
require('dotenv').config();
const { PharmacyAboutUs } = require('./models/pharmacyModels');

const seedData = {
  principalMessage: {
    name: "Dr. Sandeep Singh",
    designation: "Principal, Ishan Institute of Pharmacy",
    message: `Welcome to Ishan Institute of Pharmacy, where we transform healthcare aspirants into practice-ready professionals. In an era where the pharmaceutical landscape is rapidly evolving, our mission is to produce pharmacists and industry leaders who are not only masters of theoretical knowledge but also deeply committed to ethical healthcare practices.\n\nWhat distinguishes Ishan Pharmacy is our unwavering focus on practical and clinical training. We believe that pharmacy is a life-saving discipline, best mastered through rigorous hands-on experience. Our curriculum is purposefully structured to integrate academic scholarship with laboratory experiments from the very first semester. Whether it is formulating drugs in our advanced Pharmaceutics Lab or learning clinical applications, our students learn by doing.\n\nWe provide our scholars with premier resources, including 10 specialized laboratories, a comprehensive medical library, a dedicated herbal garden, and mentorship from a faculty composed of distinguished industry practitioners and researchers. Our dedicated Placement Cell further ensures that students aspiring for careers in manufacturing, research, or clinical practice receive specialized guidance from day one.\n\nI invite you to join our community and embark on a journey that will build a formidable foundation for your career in healthcare. At Ishan Pharmacy, we don't just teach pharmacy; we prepare you to practice it with excellence and integrity.`,
    image: ""
  },
  missionVision: {
    vision: `To be a global center of excellence in pharmaceutical education, recognized for producing ethical healthcare professionals, research innovators, and industry leaders who serve the cause of public health with integrity.`,
    mission: `To provide practice-oriented pharmaceutical education that integrates rigorous academic scholarship with laboratory training and clinical exposure.\nTo foster critical thinking, ethical reasoning, and a profound understanding of patient care among our students.\nTo serve the community through active health awareness camps and medical aid programs, bridging the gap between healthcare and society.\nTo prepare students for diverse pharmaceutical careers in manufacturing, research, clinical practice, and public health through expert mentorship.`,
    coreValues: `Excellence\nIntegrity\nCompassion\nInnovation`
  },
  approvals: [
    { title: "PCI", description: "The primary regulator of pharmacy education in India, ensuring curriculum relevance and professional standards." },
    { title: "AKTU", description: "Provides academic affiliation for our degree programs (B.Pharm), conducts standardized examinations, and awards the final professional degree." },
    { title: "BTE UP", description: "Provides academic affiliation for our diploma programs (D.Pharm) and conducts standardized board examinations." }
  ],
  milestones: [
    { year: "2017", event: "Establishment of Ishan Institute of Pharmacy with PCI Approval." },
    { year: "2019", event: "Inauguration of Advanced Pharmaceutical Labs." },
    { year: "2021", event: "Partnership with top hospitals for Clinical Training." },
    { year: "2023", event: "Launch of Dedicated Placement & Training Cell." }
  ],
  keyDifferentiators: [
    { title: "PCI Approved Professional Programs" },
    { title: "AKTU & BTE UP Affiliation" },
    { title: "10 Specialized Laboratories" },
    { title: "Dedicated Herbal Garden & Machine Room" },
    { title: "Regular Industrial Visits" },
    { title: "Clinical Training in Top Hospitals" },
    { title: "Dedicated Placement & Training Cell" },
    { title: "Experienced Faculty from Industry & Academia" }
  ]
};

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms')
  .then(async () => {
    console.log('Connected to MongoDB');

    let doc = await PharmacyAboutUs.findOne();
    if (!doc) {
      doc = new PharmacyAboutUs(seedData);
    } else {
      doc.principalMessage = seedData.principalMessage;
      doc.missionVision = seedData.missionVision;
      doc.approvals = seedData.approvals;
      doc.milestones = seedData.milestones;
      doc.keyDifferentiators = seedData.keyDifferentiators;
    }
    await doc.save();

    console.log('Seeded About Us sections successfully');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
