const fs = require('fs');

let content = fs.readFileSync('models/iimtModels.js', 'utf8');

// Update infrastructure
content = content.replace(
  'infrastructure: { image: String, content: String },',
  'infrastructure: { image: String, content: String, facilities: [{ icon: String, title: String, desc: String, link: String }] },'
);

// Update itLabs
if (!content.includes('content: String')) {
  // Let's not assume itLabs needs content, wait... The user said IT Labs isn't seeded? ITLab.tsx only uses specs and rules. Wait, ITLab.tsx actually doesn't crash.
}

// Update library
content = content.replace(
  '  library: {\n    image: String,\n    totalBooks: String,\n    digitalAccess: String,\n    eJournals: String,\n    seating: String\n  },',
  '  library: {\n    image: String,\n    content: String,\n    specs: [{ label: String, value: String }]\n  },'
);

// Update auditorium
content = content.replace(
  '  auditorium: {\n    image: String,\n    seating: String,\n    avStatus: String,\n    events: String\n  },',
  '  auditorium: {\n    image: String,\n    content: String,\n    specs: [{ label: String, value: String }]\n  },'
);

// Update sports
content = content.replace(
  '  sports: [{ image: String, title: String, link: String }],',
  '  sports: {\n    content: String,\n    specs: [{ label: String, value: String }]\n  },'
);

// Update hostel
content = content.replace(
  '  hostel: { image: String, content: String },',
  '  hostel: {\n    image: String,\n    content: String,\n    amenities: [String],\n    specs: [{ label: String, value: String }]\n  },'
);

// Update culturalActivities
content = content.replace(
  '  culturalActivities: {\n    images: [{ url: String }],\n    highlights: [String]\n  },',
  '  culturalActivities: {\n    content: String,\n    specs: [{ label: String, value: String }]\n  },'
);

// Update faculty to include visitingFaculty
content = content.replace(
  '  faculty: [{\n    name: String,\n    designation: String,\n    dept: String,\n    qualification: String,\n    specialisation: String,\n    image: String\n  }]\n}, { timestamps: true });\n\n// --- IIMT Admissions ---',
  '  faculty: [{\n    name: String,\n    designation: String,\n    dept: String,\n    qualification: String,\n    specialisation: String,\n    image: String\n  }],\n  visitingFaculty: [{\n    name: String,\n    org: String,\n    specialisation: String,\n    dept: String\n  }]\n}, { timestamps: true });\n\n// --- IIMT Admissions ---'
);

fs.writeFileSync('models/iimtModels.js', content);
console.log("Patched successfully");
