const fs = require('fs');

const files = ['temp_seed_campus.js', 'temp_seed_campus_extras.js'];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    
    // Replace array of strings with array of objects
    content = content.replace(
      /rules: \[\s*"Students must carry their ID card to access the lab",\s*"No food or beverages inside the lab area",\s*"Personal USB drives require prior scanning approval",\s*"Report any hardware\/software issues to the lab attendant immediately",\s*"Save work regularly — the institute is not responsible for data loss"\s*\]/,
      'rules: [{ text: "Students must carry their ID card to access the lab" }, { text: "No food or beverages inside the lab area" }, { text: "Personal USB drives require prior scanning approval" }, { text: "Report any hardware/software issues to the lab attendant immediately" }, { text: "Save work regularly — the institute is not responsible for data loss" }]'
    );

    content = content.replace(
      /'hostel.amenities': \[\s*"Separate boys and girls blocks", "Furnished rooms \(2\/3 sharing\)", "Attached washrooms",\s*"Vegetarian mess facility", "CCTV surveillance 24\/7", "Wi-Fi connectivity",\s*"Common room with TV", "RO water purifier", "Laundry facility",\s*"First aid and medical support", "Warden supervision round the clock", "200m from main campus"\s*\]/,
      `'hostel.amenities': [{ text: "Separate boys and girls blocks" }, { text: "Furnished rooms (2/3 sharing)" }, { text: "Attached washrooms" }, { text: "Vegetarian mess facility" }, { text: "CCTV surveillance 24/7" }, { text: "Wi-Fi connectivity" }, { text: "Common room with TV" }, { text: "RO water purifier" }, { text: "Laundry facility" }, { text: "First aid and medical support" }, { text: "Warden supervision round the clock" }, { text: "200m from main campus" }]`
    );
    
    fs.writeFileSync(f, content);
  }
});
console.log("Seed scripts updated to use text objects for arrays");
