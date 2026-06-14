const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Need to match exactly what's in .env of backend
const MONGO_URI = "mongodb+srv://atharv:atharv%401436@ishanac.ve0gyjo.mongodb.net/ishan-cms?appName=Ishanac";

// Path mappings from frontend directories to backend prefixes
const PREFIX_MAP = {
  'ishan-ascend': 'Iimt',
  'ishan-healing-haven': 'Hospital',
  'vedic-wellness-portal': 'Ayurveda',
  'apex-legal': 'Legal',
  'ishan-pharmacy-vision': 'Pharmacy'
};

async function runSeeder() {
  await mongoose.connect(MONGO_URI);
  console.log("Connected to DB...");

  // Load models dynamically
  const iimtModels = require('./models/iimtModels');
  const hospitalModels = require('./models/hospitalModels');
  const ayurvedaModels = require('./models/ayurvedaModels');
  const legalModels = require('./models/legalModels');
  const pharmacyModels = require('./models/pharmacyModels');
  
  const modelsMap = {
    'Iimt': iimtModels,
    'Hospital': hospitalModels,
    'Ayurveda': ayurvedaModels,
    'Legal': legalModels,
    'Pharmacy': pharmacyModels
  };

  const dirs = Object.keys(PREFIX_MAP);

  for (const d of dirs) {
    const src = path.join(__dirname, '..', d, 'src');
    const prefix = PREFIX_MAP[d];
    const siteModels = modelsMap[prefix];

    async function walk(dir) {
      if (!fs.existsSync(dir)) return;
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
          await walk(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
          const content = fs.readFileSync(fullPath, 'utf8');
          
          // 1. Try to guess the endpoint from useXData("endpoint")
          const hookMatch = content.match(/use\w+Data\(['"](\w+)['"]\)/);
          let endpoint = hookMatch ? hookMatch[1] : null;

          // Extract all constants
          const regex = /const\s+default([A-Z]\w+)\s*=\s*(\[[\s\S]*?\])\s*;/g;
          let match;
          while ((match = regex.exec(content)) !== null) {
            const varName = match[1]; // e.g. "News", "Faculty"
            const arrayString = match[2];
            
            try {
              // Hacky eval: we need to mock imported icons/components so eval doesn't throw
              const mockContext = new Proxy({}, { get: () => 'MockIcon' });
              let parsedData = [];
              with(mockContext) {
                parsedData = eval('(' + arrayString + ')');
              }
              
              if (!parsedData || parsedData.length === 0) continue;

              // Heuristics to find the right model
              let modelName = '';
              let isCollection = false;
              let fieldName = '';

              if (varName.includes('News') || varName.includes('Events')) {
                modelName = prefix + 'NewsEvent';
                isCollection = true;
              } else if (varName.includes('Faculty') || varName.includes('Doctors') || varName.includes('Staff')) {
                modelName = prefix + 'CampusLife'; // Faculty belongs here mostly, or aboutus
                if (prefix === 'Hospital') modelName = 'HospitalDoctor';
                fieldName = 'faculty';
              } else if (varName.includes('Stats') || varName.includes('Numbers') || varName.includes('Counters')) {
                modelName = prefix + 'HomePage';
                fieldName = 'numbers';
              } else if (varName.includes('Gallery') || varName.includes('Photos')) {
                modelName = prefix + 'Gallery';
                fieldName = 'photos';
              } else if (varName.includes('Testimonials')) {
                modelName = prefix + 'HomePage'; // Or a separate Testimonial model
                fieldName = 'successStories';
              } else if (varName.includes('Recruiters') || varName.includes('Placements')) {
                modelName = prefix + 'Placements';
                fieldName = 'partners';
              } else if (varName.includes('Scholarships')) {
                modelName = prefix + 'Admissions';
                fieldName = 'scholarships';
              } else if (varName.includes('Specs') || varName.includes('Infrastructure')) {
                modelName = prefix + 'CampusLife';
                fieldName = 'itLabs.specs';
              } else if (varName.includes('Accreditations') || varName.includes('Approvals')) {
                modelName = prefix + 'AboutUs';
                fieldName = 'approvalsAffiliations';
              }

              if (modelName && siteModels[modelName]) {
                const Model = siteModels[modelName];
                if (isCollection) {
                   // Insert multiple documents
                   await Model.insertMany(parsedData).catch(e => console.log('Duplicate or error inserting', modelName));
                   console.log(`Seeded ${parsedData.length} items to ${modelName} collection.`);
                } else if (fieldName) {
                   // Update singleton
                   let doc = await Model.findOne();
                   if (!doc) doc = new Model();
                   
                   // Handle nested fields like itLabs.specs
                   if (fieldName.includes('.')) {
                     const parts = fieldName.split('.');
                     if (!doc[parts[0]]) doc[parts[0]] = {};
                     doc[parts[0]][parts[1]] = parsedData;
                   } else {
                     doc[fieldName] = parsedData;
                   }
                   await doc.save();
                   console.log(`Seeded ${parsedData.length} items to ${modelName}.${fieldName} singleton.`);
                }
              }

            } catch (e) {
              // Ignore eval errors caused by complex JSX
            }
          }
        }
      }
    }
    await walk(src);
  }

  console.log("Seeding process completed!");
  process.exit(0);
}

runSeeder().catch(console.error);
