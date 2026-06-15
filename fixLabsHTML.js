const fs = require('fs');
const path = require('path');

const labs = [
  "PharmaceuticalChemistry.tsx",
  "Pharmaceutics.tsx",
  "Pharmacognosy.tsx",
  "PharmacyPractice.tsx",
  "HumanAnatomy.tsx",
  "Pharmacology.tsx",
  "HerbalGarden.tsx",
  "MachineRoom.tsx",
  "MuseumComputerLab.tsx"
];

const frontendDir = path.join(__dirname, '..', 'ishan-pharmacy-vision', 'src', 'pages');

for (const file of labs) {
  const filePath = path.join(frontendDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace <p>{current.overviewContent}</p> with a div using dangerouslySetInnerHTML
    content = content.replace(
      /<p className="text-foreground\/70 leading-relaxed whitespace-pre-wrap">\s*\{current\.overviewContent\}\s*<\/p>/g,
      '<div className="text-foreground/70 leading-relaxed whitespace-pre-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: current.overviewContent }} />'
    );

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed HTML rendering in ${file}`);
  }
}
