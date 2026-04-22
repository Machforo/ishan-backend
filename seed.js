const mongoose = require('mongoose');
const Contact = require('./models/Contact');
require('dotenv').config();

const initialContacts = [
  { college: "Main Campus / Central Office", phone: "+91 99999 99999", email: "info@ishan.ac", whatsapp: "+91 99999 99999", address: "Knowledge Park-1, Greater Noida, Uttar Pradesh — 201310", timings: "Mon–Sat: 9:00 AM – 5:00 PM", orderIndex: 1 },
  { college: "Institute of Management & Technology", phone: "+91 99999 99998", email: "iimt@ishan.ac", whatsapp: "+91 99999 99998", orderIndex: 2 },
  { college: "Institute of Law", phone: "+91 99999 99997", email: "law@ishan.ac", whatsapp: "+91 99999 99997", orderIndex: 3 },
  { college: "Institute of Pharmacy", phone: "+91 99999 99996", email: "pharmacy@ishan.ac", whatsapp: "+91 99999 99996", orderIndex: 4 },
  { college: "Ayurvedic Medical College", phone: "+91 99999 99995", email: "ayurveda@ishan.ac", whatsapp: "+91 99999 99995", orderIndex: 5 },
];

async function seedData() {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms';
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    // Clear existing contacts
    await Contact.deleteMany({});
    console.log('Cleared existing contacts');

    // Insert new contacts
    await Contact.insertMany(initialContacts);
    console.log('Successfully seeded initial contacts');

  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    mongoose.connection.close();
  }
}

seedData();
