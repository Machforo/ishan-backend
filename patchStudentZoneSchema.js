const fs = require('fs');

let content = fs.readFileSync('models/iimtModels.js', 'utf8');

const schemaDefinition = `
// --- IIMT Student Zone ---
const iimtStudentZoneSchema = new mongoose.Schema({
  downloads: {
    pageTitle: String,
    pageSubtitle: String,
    files: [{ name: String, fileType: String, category: String, size: String, link: String }]
  },
  pastPapers: {
    pageTitle: String,
    pageSubtitle: String,
    papers: [{ name: String, program: String, year: String, size: String, link: String }]
  },
  codeOfConduct: {
    pageTitle: String,
    pageSubtitle: String,
    content: String
  },
  antiRagging: {
    pageTitle: String,
    pageSubtitle: String,
    helplinePhone: String,
    content: String
  },
  grievanceRedressal: {
    pageTitle: String,
    pageSubtitle: String,
    content: String
  },
  privacyPolicy: {
    pageTitle: String,
    pageSubtitle: String,
    content: String
  }
}, { timestamps: true });

// --- IIMT Admissions ---`;

content = content.replace('// --- IIMT Admissions ---', schemaDefinition);

const exportDefinition = `
  IimtStudentZone: mongoose.model('IimtStudentZone', iimtStudentZoneSchema, 'iimt_studentzone'),
  IimtLead:`;

content = content.replace('  IimtLead:', exportDefinition);

fs.writeFileSync('models/iimtModels.js', content);
console.log("Student Zone schema added.");
