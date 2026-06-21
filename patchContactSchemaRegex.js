const fs = require('fs');

let content = fs.readFileSync('models/iimtModels.js', 'utf8');

const regex = /const iimtContactUsSchema = new mongoose\.Schema\(\{\s*mainContact: \{[\s\S]*?collegeContacts: \[\{[\s\S]*?\}\]\s*\}, \{ timestamps: true \}\);/;

const newSchema = `const iimtContactUsSchema = new mongoose.Schema({
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

if (regex.test(content)) {
  content = content.replace(regex, newSchema);
  fs.writeFileSync('models/iimtModels.js', content);
  console.log("Contact schema successfully updated.");
} else {
  console.log("Could not find schema to replace.");
}
