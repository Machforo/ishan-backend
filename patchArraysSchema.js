const fs = require('fs');

let content = fs.readFileSync('models/iimtModels.js', 'utf8');

// Update to array of objects for single string arrays
content = content.replace(/rules: \[String\]/, 'rules: [{ text: String }]');
content = content.replace(/amenities: \[String\]/, 'amenities: [{ text: String }]');
content = content.replace(/skills: \[String\]/, 'skills: [{ text: String }]');
content = content.replace(/participationPoints: \[String\]/, 'participationPoints: [{ text: String }]');
content = content.replace(/whyVisitsMatter: \[String\]/, 'whyVisitsMatter: [{ text: String }]');

fs.writeFileSync('models/iimtModels.js', content);
console.log("Updated simple arrays to objects");
