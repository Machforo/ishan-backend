const mongoose = require('mongoose');
require('dotenv').config();
const { IimtContactUs } = require('./models/iimtModels');

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    await IimtContactUs.deleteMany({});

    await IimtContactUs.create({
      mainContact: {
        address: "Knowledge Park-III, Greater Noida, UP 201308",
        phone: "8448797700",
        email: "info@ishan.ac",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.441014195152!2d77.4877717!3d28.4963836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea0f7b133501%3A0x6b696f8c0e271a!2sIshan%20Institute%20of%20Management%20and%20Technology!5e0!3m2!1sen!2sin!4v1709664539655!5m2!1sen!2sin"
      },
      collegeContacts: [
        {
          collegeName: "Ishan Institute of Management & Technology",
          phone: "8448797700",
          email: "management@ishan.ac",
          address: "Block A, Main Campus"
        },
        {
          collegeName: "Ishan Institute of Law",
          phone: "8448797700",
          email: "law@ishan.ac",
          address: "Block B, Main Campus"
        },
        {
          collegeName: "Ishan Institute of Pharmacy",
          phone: "8448797700",
          email: "pharmacy@ishan.ac",
          address: "Block C, Main Campus"
        },
        {
          collegeName: "Ishan Ayurvedic Medical College",
          phone: "8448797700",
          email: "ayurveda@ishan.ac",
          address: "Medical Campus"
        }
      ],
      feedback: {
        pageTitle: "Feedback",
        pageSubtitle: "Help us improve — share your experience as a student, parent, or visitor",
        description: "Your feedback is invaluable in helping us continuously improve our academic programs, campus facilities, and student support services. All feedback is reviewed by the administration and appropriate action is taken within 7 working days."
      },
      careers: {
        pageTitle: "Careers at IIMT",
        pageSubtitle: "Join our team of dedicated educators and professionals",
        description: "Ishan Institute of Management & Technology is always looking for passionate educators and professionals to join our growing team. We offer competitive compensation, a supportive work environment, and opportunities for professional development.",
        email: "hr@ishan.ac",
        jobs: [
          { title: "Assistant Professor — Management", qualification: "MBA with PhD/NET", dept: "Management", type: "Full-time" },
          { title: "Assistant Professor — Commerce", qualification: "M.Com with PhD/NET", dept: "Commerce", type: "Full-time" },
          { title: "Lab Technician — IT", qualification: "BCA/B.Tech with lab experience", dept: "IT", type: "Full-time" },
          { title: "Administrative Assistant", qualification: "Graduate with computer skills", dept: "Admin", type: "Full-time" }
        ]
      }
    });

    console.log("✅ Seeded: Contact Us, Feedback, Careers");
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
    mongoose.disconnect();
  }
}

seed();
