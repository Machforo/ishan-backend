const fs = require('fs');

let content = fs.readFileSync('routes/iimt.js', 'utf8');

const routeStr = "  { path: '/learning', model: models.IimtLearning },\n  { path: '/studentzone', model: models.IimtStudentZone },";

content = content.replace("  { path: '/learning', model: models.IimtLearning },", routeStr);

fs.writeFileSync('routes/iimt.js', content);
console.log("Student Zone route added.");
