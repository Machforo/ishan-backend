const fs = require('fs');

let content = fs.readFileSync('models/iimtModels.js', 'utf8');

// Update pastPapers
const oldPastPapers = `  pastPapers: {
    pageTitle: String,
    pageSubtitle: String,
    papers: [{ name: String, program: String, year: String, size: String, link: String }]
  },`;
const newPastPapers = `  pastPapers: {
    pageTitle: String,
    pageSubtitle: String,
    subheading: String,
    heading: String,
    description: String,
    footerText: String,
    papers: [{ name: String, program: String, year: String, size: String, link: String, semester: String }]
  },`;

content = content.replace(oldPastPapers, newPastPapers);

// Update IimtContactUs
const oldContact = `// --- IIMT Contact Us ---
const iimtContactUsSchema = new mongoose.Schema({
  mainContact: {
    address: String,
    phone: String,
    email: String,
    mapEmbed: String
  },
  collegeContacts: [{
    collegeName: String,
    phone: String,
    email: String,
    address: String
  }]
}, { timestamps: true });`;

const newContact = `// --- IIMT Contact Us ---
const iimtContactUsSchema = new mongoose.Schema({
  mainContact: {
    address: String,
    phone: String,
    email: String,
    mapEmbed: String
  },
  collegeContacts: [{
    collegeName: String,
    phone: String,
    email: String,
    address: String
  }],
  feedback: {
    pageTitle: String,
    pageSubtitle: String,
    description: String
  },
  careers: {
    pageTitle: String,
    pageSubtitle: String,
    description: String,
    email: String,
    jobs: [{ title: String, qualification: String, dept: String, type: String }]
  }
}, { timestamps: true });`;

content = content.replace(oldContact, newContact);

fs.writeFileSync('models/iimtModels.js', content);
console.log("Contact and Past Papers schemas updated.");
