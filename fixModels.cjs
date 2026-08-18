const fs = require('fs');

// Update models/pharmacyModels.js
let modelsContent = fs.readFileSync('models/pharmacyModels.js', 'utf8');
modelsContent = modelsContent.replace(
  'const placementSchema = new mongoose.Schema({',
  'const placementSchema = new mongoose.Schema({\n  placementNumbers: [{ value: String, label: String, icon: String }],\n  recruitingPartners: [{ name: String, logo: String }],\n  successStories: [{ name: String, company: String, role: String, batch: String, image: String }],\n  placementProcess: [{ step: String, title: String, desc: String }],\n  bannerImage: String,\n  images: [{ url: String }],\n  pageGallery: { title: String, images: [{ url: String }] }\n}, { timestamps: true });\n\nconst oldPlacementSchema = new mongoose.Schema({'
);

modelsContent = modelsContent.replace(
  'const careerSchema = new mongoose.Schema({',
  'const careerSchema = new mongoose.Schema({\n  title: String,\n  department: String,\n  location: String,\n  type: String,\n  description: String,\n  requirements: String,\n  status: String,\n  bannerImage: String,\n  images: [{ url: String }],\n  pageGallery: { title: String, images: [{ url: String }] }\n}, { timestamps: true });\n\nconst oldCareerSchema = new mongoose.Schema({'
);

fs.writeFileSync('models/pharmacyModels.js', modelsContent);

// Update src/config/siteConfigs.ts in ishan-admin
let configContent = fs.readFileSync('../ishan-admin/src/config/siteConfigs.ts', 'utf8');

// fix alumni network fields
configContent = configContent.replace(
  `{ key: 'name', type: 'text', label: 'Name' }, { key: 'batch', type: 'text', label: 'Batch' }, { key: 'currentRole', type: 'text', label: 'Current Role / Company' }, { key: 'quote', type: 'textarea', label: 'Quote' }, { key: 'image', type: 'image', label: 'Photo' }`,
  `{ key: 'name', type: 'text', label: 'Name' }, { key: 'batch', type: 'text', label: 'Batch' }, { key: 'role', type: 'text', label: 'Current Role' }, { key: 'company', type: 'text', label: 'Company' }, { key: 'message', type: 'textarea', label: 'Quote' }, { key: 'image', type: 'image', label: 'Photo' }`
);

// fix contact fields
configContent = configContent.replace(
  `{ key: 'address', type: 'text', label: 'Address' }, { key: 'phones', type: 'array', label: 'Phone Numbers', fields: ['number', 'department'] }, { key: 'emails', type: 'array', label: 'Emails', fields: ['address', 'department'] }, { key: 'workingHours', type: 'text', label: 'Working Hours' }, { key: 'mapUrl', type: 'text', label: 'Map iframe URL' }, { key: 'bannerImage', type: 'image', label: 'Banner Image' }, { key: 'images', type: 'array', label: 'Gallery Images', fields: [{ key: 'url', type: 'image', label: 'Image URL' }] }`,
  `{ key: 'address', type: 'text', label: 'Address' }, { key: 'phone', type: 'text', label: 'Phone Number' }, { key: 'email', type: 'text', label: 'Email' }, { key: 'workingHours', type: 'text', label: 'Working Hours' }, { key: 'mapEmbed', type: 'text', label: 'Map iframe URL' }, { key: 'bannerImage', type: 'image', label: 'Banner Image' }, { key: 'images', type: 'array', label: 'Gallery Images', fields: [{ key: 'url', type: 'image', label: 'Image URL' }] }`
);

// fix placements schema to use value instead of number
configContent = configContent.replace(
  `{ key: 'placementNumbers', type: 'array', label: 'Placement Numbers', fields: ['number', 'label'] }`,
  `{ key: 'placementNumbers', type: 'array', label: 'Placement Numbers', fields: ['value', 'label'] }`
);

fs.writeFileSync('../ishan-admin/src/config/siteConfigs.ts', configContent);
