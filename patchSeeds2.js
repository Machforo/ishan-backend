const fs = require('fs');

let content = fs.readFileSync('temp_seed_campus.js', 'utf8');

content = content.replace(
  /skills: \[\s*"Communication Skills & Public Speaking",\s*"Resume Building & Interview Prep",\s*"Leadership & Team Management",\s*"Business Etiquette & Grooming",\s*"Presentation Skills",\s*"Time Management & Goal Setting",\s*"Critical Thinking & Problem Solving",\s*"Emotional Intelligence"\s*\]/,
  'skills: [{text: "Communication Skills & Public Speaking"}, {text: "Resume Building & Interview Prep"}, {text: "Leadership & Team Management"}, {text: "Business Etiquette & Grooming"}, {text: "Presentation Skills"}, {text: "Time Management & Goal Setting"}, {text: "Critical Thinking & Problem Solving"}, {text: "Emotional Intelligence"}]'
);

content = content.replace(
  /participationPoints: \[\s*"Inter-college competitions",\s*"Campus debate society",\s*"Faculty-led workshops",\s*"Alumni mentoring sessions"\s*\]/,
  'participationPoints: [{text: "Inter-college competitions"}, {text: "Campus debate society"}, {text: "Faculty-led workshops"}, {text: "Alumni mentoring sessions"}]'
);

content = content.replace(
  /whyVisitsMatter: \[\s*"Direct interaction with industry experts",\s*"Understanding corporate work culture",\s*"Practical exposure to theoretical concepts",\s*"Networking opportunities for future placements"\s*\]/,
  'whyVisitsMatter: [{text: "Direct interaction with industry experts"}, {text: "Understanding corporate work culture"}, {text: "Practical exposure to theoretical concepts"}, {text: "Networking opportunities for future placements"}]'
);

fs.writeFileSync('temp_seed_campus.js', content);
console.log("Updated learning schema array seeds");
