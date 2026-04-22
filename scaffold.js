const fs = require('fs');
const path = require('path');

const models = {
  AboutUs: `{
  aboutIshan: { title: { type: String, default: "About Ishan" }, description: { type: String, default: "" }, image: { type: String, default: "" } },
  chairmanMessage: { title: { type: String, default: "Chairman's Message" }, message: { type: String, default: "" }, name: { type: String, default: "" }, image: { type: String, default: "" } },
  missionVision: { mission: { type: String, default: "" }, vision: { type: String, default: "" } },
  awards: [{ title: String, description: String, image: String, year: String }],
  approvals: [{ name: String, image: String, link: String }]
}`,
  CollegesPage: `{
  header: { title: { type: String, default: "Our Colleges" }, subtitle: { type: String, default: "Explore Ishan Institutions" }, image: { type: String, default: "" } },
  collegesList: [{ name: String, overview: String, image: String, programsOffered: [String], link: String }]
}`,
  AdmissionsPage: `{
  overview: { title: { type: String, default: "Admissions Overview" }, content: { type: String, default: "" }, image: { type: String, default: "" } },
  programs: [{ name: String, level: String, duration: String, affiliation: String }],
  scholarships: [{ category: String, concession: String }],
  international: { title: { type: String, default: "International Admissions" }, content: { type: String, default: "" } }
}`,
  PlacementsPage: `{
  overview: { title: { type: String, default: "Placement Overview" }, content: { type: String, default: "" }, statistics: [{ label: String, value: String }] },
  recruiters: [{ name: String, logo: String }],
  alumni: [{ name: String, batch: String, company: String, role: String, quote: String, image: String }]
}`,
  CampusLifePage: `{
  gallery: [{ title: String, url: String }],
  facilities: [{ name: String, description: String, icon: String, image: String }]
}`,
  ResearchPage: `{
  journals: [{ title: String, volume: String, issue: String, link: String }],
  areas: [{ name: String, description: String }],
  numbers: [{ label: String, value: String }]
}`,
  NewsEventPage: `{
  news: [{ title: String, date: String, content: String, image: String, link: String }],
  events: [{ title: String, date: String, location: String, description: String, image: String }]
}`,
  CareersPage: `{
  jobs: [{ title: String, department: String, type: String, location: String, requirements: String, description: String }]
}`,
  DownloadsPage: `{
  files: [{ title: String, category: String, url: String }]
}`,
  ContactPage: `{
  mainContact: { address: String, phone: String, email: String, mapEmbed: String },
  collegeContacts: [{ collegeName: String, phone: String, email: String, address: String }]
}`
};

const controllersDir = path.join(__dirname, 'controllers');
const routesDir = path.join(__dirname, 'routes');
const modelsDir = path.join(__dirname, 'models');

let serverRequires = [];
let serverRoutes = [];

Object.keys(models).forEach(name => {
  const schemaFields = models[name];
  const routeName = name.toLowerCase().replace('page', '');
  
  // Create Model
  const modelTemplate = `const mongoose = require('mongoose');
const schema = new mongoose.Schema(${schemaFields}, { timestamps: true });
module.exports = mongoose.model('${name}', schema);
`;
  fs.writeFileSync(path.join(modelsDir, `${name}.js`), modelTemplate);

  // Create Controller
  const controllerTemplate = `const Model = require('../models/${name}');

exports.get = async (req, res) => {
  try {
    let doc = await Model.findOne();
    if (!doc) {
      doc = await Model.create({});
    }
    res.json(doc);
  } catch(err) { res.status(500).json({ error: err.message }); }
};

exports.update = async (req, res) => {
  try {
    let doc = await Model.findOne();
    if (!doc) doc = new Model();
    Object.assign(doc, req.body);
    await doc.save();
    res.json(doc);
  } catch(err) { res.status(500).json({ error: err.message }); }
};
`;
  fs.writeFileSync(path.join(controllersDir, `${routeName}Controller.js`), controllerTemplate);

  // Create Route
  const routeTemplate = `const express = require('express');
const router = express.Router();
const controller = require('../controllers/${routeName}Controller');
const auth = require('../middleware/auth');

router.get('/', controller.get);
router.put('/', auth, controller.update);

module.exports = router;
`;
  fs.writeFileSync(path.join(routesDir, `${routeName}.js`), routeTemplate);

  serverRequires.push(`const ${routeName}Routes = require('./routes/${routeName}');`);
  serverRoutes.push(`app.use('/api/${routeName}', ${routeName}Routes);`);
});

// Now read server.js and inject routes
const serverJsPath = path.join(__dirname, 'server.js');
let serverJs = fs.readFileSync(serverJsPath, 'utf8');

// Inject requires just before "const app = express();" if not already there
if (!serverJs.includes('const aboutusRoutes')) {
  serverJs = serverJs.replace("const app = express();", serverRequires.join('\\n') + "\\n\\nconst app = express();");
  serverJs = serverJs.replace("app.use('/api/homepage', homepageRoutes);", "app.use('/api/homepage', homepageRoutes);\\n" + serverRoutes.map(r => "  " + r).join('\\n'));
  fs.writeFileSync(serverJsPath, serverJs);
}

console.log("Scaffolded all models, controllers, and routes successfully!");
