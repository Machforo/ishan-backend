const fs = require('fs');
let content = fs.readFileSync('models/iimtModels.js', 'utf8');

const schema = `
// --- IIMT Learning & Activities ---
const iimtLearningSchema = new mongoose.Schema({
  eventsCalendar: {
    pageTitle: String,
    pageSubtitle: String,
    subheading: String,
    heading: String,
    description: String,
    ctaText1: String,
    ctaText2: String,
    registerText: String,
    events: [{
      name: String,
      date: String,
      venue: String,
      category: String,
      description: String
    }]
  },
  skillDevelopment: {
    pageTitle: String,
    pageSubtitle: String,
    description: String,
    skills: [String]
  },
  debatesGD: {
    pageTitle: String,
    pageSubtitle: String,
    subheading: String,
    heading: String,
    description: String,
    participationLabel: String,
    participationPoints: [String],
    activities: [{
      title: String,
      description: String,
      icon: String
    }],
    highlightsHeading: String,
    pastHighlights: String,
    highlightsFooter: String
  },
  industrialVisits: {
    pageTitle: String,
    pageSubtitle: String,
    subheading: String,
    heading: String,
    description: String,
    sectors: [{
      label: String,
      icon: String
    }],
    whyVisitsMatterHeading: String,
    whyVisitsMatter: [String],
    recentVisitsHeading: String,
    visits: [{
      company: String,
      sector: String,
      program: String,
      year: String,
      outcome: String
    }]
  },
  guestLectures: {
    pageTitle: String,
    pageSubtitle: String,
    subheading: String,
    heading: String,
    description: String,
    whatToExpectTitle: String,
    whatToExpectDesc: String,
    nationalSeminarsHeading: String,
    nationalSeminars: String,
    events: [{
      speaker: String,
      designation: String,
      topic: String,
      date: String,
      takeaways: String
    }]
  }
}, { timestamps: true });
`;

if (!content.includes('IIMT Learning & Activities')) {
  content = content.replace('// --- IIMT Gallery ---', schema + '\n// --- IIMT Gallery ---');
  content = content.replace('IimtGallery: mongoose.model', "IimtLearning: mongoose.model('IimtLearning', iimtLearningSchema, 'iimt_learning'),\n  IimtGallery: mongoose.model");
  fs.writeFileSync('models/iimtModels.js', content);
  console.log("Learning schema added.");
}
