require('dotenv').config();
const mongoose = require('mongoose');
const { IimtCampusLife } = require('./models/iimtModels');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB');

    let campusLife = await IimtCampusLife.findOne();
    if (!campusLife) {
      campusLife = new IimtCampusLife({});
    }

    campusLife.infrastructure = {
      ...campusLife.infrastructure,
      content: `IIMT's campus is strategically located in Knowledge Park III, Greater Noida, offering a secure, green, and aesthetically designed environment conducive to academic focus. The campus is built on a foundation of sustainability and modern design, providing a premium learning experience for our students.

Our facilities include smart classrooms with modern AV systems, state-of-the-art IT labs, a comprehensive library, and a professional 500-seat auditorium for institutional events. We also offer dedicated sports areas and secure hostel accommodations, ensuring a well-rounded campus life.

The campus is highly accessible, situated in close proximity to the Pari Chowk Metro Station and well-connected by major transport links across Delhi NCR, making it a convenient choice for day scholars and residents alike.`,
      facilities: [
        { icon: "Monitor", title: "Smart Classrooms", desc: "Air-conditioned classrooms equipped with projectors, interactive whiteboards, and modern AV systems for engaging lectures.", link: "/infrastructure" },
        { icon: "Monitor", title: "IT Labs", desc: "State-of-the-art computer labs with latest hardware, licensed software, and high-speed internet. 1:1 student-to-computer ratio.", link: "/it-lab" },
        { icon: "BookOpen", title: "Library", desc: "15,000+ books, national & international journals, INFLIBNET N-LIST access, dedicated reading room open 8 AM – 6 PM.", link: "/library" },
        { icon: "Building2", title: "Auditorium", desc: "500+ seat auditorium with professional AV equipment, used for convocations, seminars, cultural events, and guest lectures.", link: "/auditorium" },
        { icon: "Cctv", title: "Hostel", desc: "Separate boys and girls hostels with mess, CCTV surveillance, warden supervision, and proximity to campus.", link: "/hostel" },
        { icon: "Wifi", title: "Wi-Fi Campus", desc: "Full campus Wi-Fi connectivity for students and faculty — accessible in classrooms, library, and common areas.", link: "" },
      ]
    };

    await campusLife.save();
    console.log('Successfully seeded Infrastructure data!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedData();
