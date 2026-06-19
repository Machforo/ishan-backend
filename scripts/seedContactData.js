require('dotenv').config();
const mongoose = require('mongoose');
const { AyurvedaContact } = require('../models/ayurvedaModels');

async function seedContact() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  let contact = await AyurvedaContact.findOne();
  if (!contact) contact = new AyurvedaContact();

  contact.mainContact = {
    address: "Ishan Ayurvedic Medical College, Knowledge Park-III, Greater Noida, Uttar Pradesh 201308",
    phone: "8448797700",
    email: "admissions@ishan.ac",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.971367018335!2d77.4812328!3d28.4653609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1063625f385%3A0xc3f65e23be3d489b!2sIshan%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1718873600000!5m2!1sen!2sin"
  };

  contact.socialLinks = [
    { platform: "Facebook", href: "https://facebook.com/ishanayurveda" },
    { platform: "Instagram", href: "https://instagram.com/ishanayurveda" },
    { platform: "Youtube", href: "https://youtube.com/@ishanayurveda" },
    { platform: "Linkedin", href: "https://linkedin.com/company/ishan-ayurveda" },
    { platform: "Twitter", href: "https://twitter.com/ishan_ayurveda" }
  ];

  contact.collegeContacts = [
    {
      collegeName: "Admissions Office",
      phone: "8448797700",
      email: "admissions@ishan.ac",
      address: "Knowledge Park-III, Greater Noida, UP 201308"
    },
    {
      collegeName: "Teaching Hospital (OPD)",
      phone: "0120-2323233",
      email: "hospital.ayurveda@ishan.ac",
      address: "Knowledge Park-III, Greater Noida, UP 201308"
    },
    {
      collegeName: "Principal's Office",
      phone: "8448797700",
      email: "principal.ayurveda@ishan.ac",
      address: "Knowledge Park-III, Greater Noida, UP 201308"
    }
  ];

  await contact.save();
  console.log("Successfully seeded AyurvedaContact!");
  process.exit(0);
}

seedContact().catch(console.error);
