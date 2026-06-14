require('dotenv').config();
const mongoose = require('mongoose');
const { LandingPage1 } = require('../models/LandingPageModels');

const navMenu = [
  { title: 'About', items: [{ name: 'About Ishan' }, { name: "Chairman's Message" }, { name: 'Mission, Vision & Values' }, { name: 'Awards & Rankings' }, { name: 'Approvals & Affiliations' }] },
  { title: 'Colleges', items: [{ name: 'Ishan Institute of Law' }, { name: 'Ishan Institute of Management & Technology' }, { name: 'Ishan Institute of Pharmacy' }, { name: 'Ishan Ayurvedic Medical Sciences' }, { name: 'Ishan Institute of Education' }] },
  { title: 'Admissions', items: [{ name: 'Admissions Overview' }, { name: 'All UG + PG Programs' }, { name: 'Scholarships' }, { name: 'International / NRI Admissions' }, { name: 'Fee Structure' }, { name: 'How to Apply' }] },
  { title: 'Placements', items: [{ name: 'Placements Overview' }, { name: 'Our Recruiters' }, { name: 'Alumni Network' }, { name: 'Careers @ Ishan' }, { name: 'Training & Development' }] },
  { title: 'Research', items: [{ name: 'Research Hub' }, { name: 'Ishan Management Journal' }, { name: 'Ishan Law Review' }, { name: 'Pharmaceutical Research' }, { name: 'Funded Projects' }] },
  { title: 'Campus', items: [{ name: 'Campus Life' }, { name: 'Hostel & Accommodation' }, { name: 'Sports & Fitness' }, { name: 'Libraries' }, { name: 'Events Calendar' }] },
  { title: 'News', items: [{ name: 'News & Updates' }, { name: 'Events Calendar' }, { name: 'Gallery' }] },
  { title: 'Contact', items: [{ name: 'Contact Us' }, { name: 'Mandatory Disclosures' }, { name: 'Anti-Ragging Zone' }, { name: 'Grievance Redressal' }, { name: 'Downloads Hub' }] }
];

const footerLinks = {
  quickLinks: [{ text: 'Anti-Ragging Zone' }, { text: 'Grievance Redressal' }, { text: 'PoSH Policy' }, { text: 'Privacy Policy' }, { text: 'Mandatory Disclosures' }, { text: 'Downloads Hub' }, { text: 'Careers @ Ishan' }, { text: 'Sitemap' }],
  rankings: [{ text: 'NAAC Accreditation' }, { text: 'BCI Approval' }, { text: 'AICTE Approval' }, { text: 'PCI Approval' }, { text: 'NCISM Approval' }, { text: 'NCTE Recognition' }, { text: 'Chronicle India Ranking' }],
  group: [{ text: 'About Ishan' }, { text: '5 Colleges' }, { text: "Chairman's Message" }, { text: 'Media Room' }]
};

const footerLabels = {
  about: 'About Ishan',
  admissions: 'Admissions',
  quickLinks: 'Quick Links',
  approvals: 'Approvals & Rankings',
  group: 'Ishan Group',
  copyright: '© 2026 Ishan Educational Institutions. All Rights Reserved.',
  privacy: 'Privacy Policy',
  terms: 'Terms of Use',
  sitemap: 'Sitemap'
};

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  let doc = await LandingPage1.findOne();
  if (!doc) {
    doc = new LandingPage1({});
    await doc.save();
    console.log('Created new LandingPage1 document');
  }

  await LandingPage1.updateOne(
    { _id: doc._id },
    { $set: { navMenu, footerLinks, footerLabels } }
  );

  const updated = await LandingPage1.findOne().lean();
  console.log('✅ LandingPage1 navMenu seeded:', updated.navMenu.length, 'entries');
  console.log('   First entry:', JSON.stringify(updated.navMenu[0]));
  console.log('✅ footerLinks.quickLinks:', updated.footerLinks.quickLinks.length, 'items');
  console.log('✅ footerLabels.about:', updated.footerLabels?.about);
  await mongoose.disconnect();
}

run().catch(err => { console.error(err); process.exit(1); });
