const fs = require('fs');
const path = require('path');
const modelsDir = path.join(__dirname, 'models');
const files = fs.readdirSync(modelsDir);
let modifiedCount = 0;

for (const file of files) {
  if (file.endsWith('.js') && file !== 'Lead.js' && file !== 'JobApplication.js' && file !== 'User.js') {
    const filePath = path.join(modelsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add pageGallery to all schemas
    if (!content.includes('pageGallery: [{ url: String }]')) {
        let newContent = content.replace(/(\r?\n)\}, \{ timestamps: true \}\);/g, ',\n  pageGallery: [{ url: String }]$1}, { timestamps: true });');

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            modifiedCount++;
            console.log('Modified', file);
        }
    }
  }
}
console.log('Done, modified', modifiedCount, 'files.');
