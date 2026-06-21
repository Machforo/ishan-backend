const fs = require('fs');

let content = fs.readFileSync('models/iimtModels.js', 'utf8');

content = content.replace(
  /infrastructure: \{ image: String, content: String \},/g,
  'infrastructure: { image: String, content: String, facilities: [{ icon: String, title: String, desc: String, link: String }] },'
);

content = content.replace(
  /library: \{[\s\S]*?seating: String\r?\n\s*\}/,
  'library: {\n    image: String,\n    content: String,\n    specs: [{ label: String, value: String }]\n  }'
);

content = content.replace(
  /auditorium: \{[\s\S]*?events: String\r?\n\s*\}/,
  'auditorium: {\n    image: String,\n    content: String,\n    specs: [{ label: String, value: String }]\n  }'
);

content = content.replace(
  /sports: \[\{ image: String, title: String, link: String \}\],/g,
  'sports: {\n    content: String,\n    specs: [{ label: String, value: String }]\n  },'
);

content = content.replace(
  /hostel: \{ image: String, content: String \},/g,
  'hostel: {\n    image: String,\n    content: String,\n    amenities: [String],\n    specs: [{ label: String, value: String }]\n  },'
);

content = content.replace(
  /culturalActivities: \{[\s\S]*?highlights: \[String\]\r?\n\s*\}/,
  'culturalActivities: {\n    content: String,\n    specs: [{ label: String, value: String }]\n  }'
);

content = content.replace(
  /faculty: \[\{[\s\S]*?image: String\r?\n\s*\}\]\r?\n\}, \{ timestamps: true \}\);/,
  'faculty: [{\n    name: String,\n    designation: String,\n    dept: String,\n    qualification: String,\n    specialisation: String,\n    image: String\n  }],\n  visitingFaculty: [{\n    name: String,\n    org: String,\n    specialisation: String,\n    dept: String\n  }]\n}, { timestamps: true });'
);

fs.writeFileSync('models/iimtModels.js', content);
console.log("iimtModels.js successfully patched");
