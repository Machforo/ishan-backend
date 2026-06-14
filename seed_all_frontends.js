const mongoose = require('mongoose');
const models = require('./models/iimtModels'); // Import other models as well (ayurveda, hospital, etc.)
require('dotenv').config();

const MONGO_URI = process.env.MONGODB_URI;

async function seedData() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB...");

    // ----------------------------------------------------
    // IIMT SEEDING (Faculty & Footer)
    // ----------------------------------------------------
    console.log("Seeding IIMT Data...");

    // 1. Seed Faculty Data into Campus Life
    let iimtCampusLife = await models.IimtCampusLife.findOne();
    if (!iimtCampusLife) iimtCampusLife = new models.IimtCampusLife();

    if (!iimtCampusLife.faculty || iimtCampusLife.faculty.length === 0) {
      iimtCampusLife.faculty = [
        { name: "Dr. Ramesh Kumar", designation: "Professor & HoD", dept: "Management", qualification: "PhD, MBA", specialisation: "Strategic Management" },
        { name: "Dr. Sunita Sharma", designation: "Associate Professor", dept: "Commerce", qualification: "PhD, M.Com", specialisation: "Financial Accounting" },
        { name: "Prof. Anil Verma", designation: "Assistant Professor", dept: "IT", qualification: "MCA, M.Tech", specialisation: "Data Structures" },
      ];
      await iimtCampusLife.save();
      console.log("IIMT Faculty seeded successfully.");
    }

    // 2. Seed Footer Data into Homepage
    let iimtHomePage = await models.IimtHomePage.findOne();
    if (!iimtHomePage) iimtHomePage = new models.IimtHomePage();

    if (!iimtHomePage.footer || !iimtHomePage.footer.contact) {
      iimtHomePage.footer = {
        quickLinks: [
          { label: "About IIMT", href: "/about" },
          { label: "Programs", href: "/education-overview" },
          { label: "Admissions", href: "/admissions" },
          { label: "Placements", href: "/placements" },
          { label: "Contact", href: "/contact" },
        ],
        programs: [
          { label: "BBA", href: "/courses/bba" },
          { label: "BCA", href: "/courses/bca" },
          { label: "B.Com", href: "/courses/bcom" },
          { label: "B.Ed", href: "/courses/bed" },
        ],
        socialLinks: [
          { platform: "Facebook", href: "https://www.facebook.com/ishanedu" },
          { platform: "Instagram", href: "https://www.instagram.com/ishanfamily" },
          { platform: "YouTube", href: "https://www.youtube.com/@ishanedu" },
          { platform: "LinkedIn", href: "https://www.linkedin.com/company/ishanfamily" }
        ],
        contact: {
          address: "Knowledge Park-III, Greater Noida, UP 201308",
          phone: "8448797700",
          email: "info@ishan.ac"
        }
      };
      await iimtHomePage.save();
      console.log("IIMT Footer seeded successfully.");
    }

    // ----------------------------------------------------
    // TODO: Add similar seeding blocks for Ayurveda, Hospital, Pharmacy, and Legal here.
    // ----------------------------------------------------
    
    console.log("Seeding Complete!");
    process.exit(0);
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  }
}

seedData();
