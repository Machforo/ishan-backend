const fs = require('fs');
const path = require('path');
const routesDir = path.join(__dirname, 'routes');

const routeFiles = [
  { file: 'legal.js', portal: 'legal' },
  { file: 'pharmacy.js', portal: 'pharmacy' },
  { file: 'ayurveda.js', portal: 'ayurveda' },
  { file: 'hospital.js', portal: 'hospital' },
  { file: 'iimt.js', portal: 'iimt' },
  { file: 'landingPage1.js', portal: 'landingPage1' },
  { file: 'landingPage2.js', portal: 'landingPage2' }
];

for (const { file, portal } of routeFiles) {
  const filePath = path.join(routesDir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if GlobalGallery is already injected
  if (content.includes("const GlobalGallery = require('../models/GlobalGallery');")) {
      console.log(`Already injected in ${file}`);
      continue;
  }

  const customRoutes = `
// --- Global URL-Based Page Galleries ---
const GlobalGallery = require('../models/GlobalGallery');

router.get('/page-galleries/by-url', async (req, res) => {
    try {
        const item = await GlobalGallery.findOne({ portal: '${portal}', urlPath: req.query.url });
        res.json(item || {});
    } catch(e) {
        res.status(500).json({error: e.message});
    }
});

router.get('/page-galleries', async (req, res) => {
    try {
        const items = await GlobalGallery.find({ portal: '${portal}' });
        res.json(items);
    } catch(e) { res.status(500).json({error: e.message}); }
});

router.post('/page-galleries', async (req, res) => {
    try {
        const item = new GlobalGallery({ ...req.body, portal: '${portal}' });
        await item.save();
        res.status(201).json(item);
    } catch(e) { res.status(500).json({error: e.message}); }
});

router.put('/page-galleries/:id', async (req, res) => {
    try {
        const item = await GlobalGallery.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(item);
    } catch(e) { res.status(500).json({error: e.message}); }
});

router.delete('/page-galleries/:id', async (req, res) => {
    try {
        await GlobalGallery.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted' });
    } catch(e) { res.status(500).json({error: e.message}); }
});
`;

  // Inject before module.exports = router;
  content = content.replace(/module\.exports = router;/, customRoutes + '\nmodule.exports = router;');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Injected GlobalGallery routes in ${file}`);
}
