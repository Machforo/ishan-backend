const fs = require('fs');
const path = require('path');
const routesDir = path.join(__dirname, 'routes');

const routeFiles = ['legal.js', 'pharmacy.js', 'ayurveda.js', 'hospital.js', 'iimt.js', 'landingPage1.js', 'landingPage2.js'];

for (const file of routeFiles) {
  const filePath = path.join(routesDir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace URL logic in GET
  content = content.replace(
    /const item = await GlobalGallery\.findOne\(\{ portal: '(.*?)', urlPath: req\.query\.url \}\);/,
    `let url = req.query.url || '';
        if (!url.startsWith('/')) url = '/' + url;
        if (url.length > 1 && url.endsWith('/')) url = url.slice(0, -1);
        
        // Also check against the exact query just in case it was saved differently
        const item = await GlobalGallery.findOne({ 
            portal: '$1', 
            $or: [{ urlPath: url }, { urlPath: req.query.url }, { urlPath: url.substring(1) }] 
        });`
  );

  // Replace URL logic in POST
  content = content.replace(
    /const item = new GlobalGallery\(\{ \.\.\.req\.body, portal: '(.*?)' \}\);/,
    `let urlPath = req.body.urlPath || '';
        if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
        if (urlPath.length > 1 && urlPath.endsWith('/')) urlPath = urlPath.slice(0, -1);
        req.body.urlPath = urlPath;
        const item = new GlobalGallery({ ...req.body, portal: '$1' });`
  );

  // Replace URL logic in PUT
  content = content.replace(
    /router\.put\('\/page-galleries\/:id', async \(req, res\) => \{\s*try \{\s*const item = await GlobalGallery\.findByIdAndUpdate/,
    `router.put('/page-galleries/:id', async (req, res) => {
    try {
        if (req.body.urlPath) {
            let urlPath = req.body.urlPath;
            if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
            if (urlPath.length > 1 && urlPath.endsWith('/')) urlPath = urlPath.slice(0, -1);
            req.body.urlPath = urlPath;
        }
        const item = await GlobalGallery.findByIdAndUpdate`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Patched', file);
}
