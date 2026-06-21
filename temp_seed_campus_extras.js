require('dotenv').config();
const mongoose = require('mongoose');
const { IimtCampusLife } = require('./models/iimtModels');

mongoose.connect(process.env.MONGODB_URI).then(async () => {
  console.log('Connected to MongoDB.');

  const updateFields = {
    'library.specs': [
      { label: "Total Books", value: "15,000+" },
      { label: "Journals", value: "50+ subscriptions" },
      { label: "Reading Room", value: "100+ seats" },
      { label: "Timings", value: "8 AM – 6 PM" },
      { label: "Digital Access", value: "INFLIBNET N-LIST" },
      { label: "Borrowing Limit", value: "3 books / 14 days" },
      { label: "E-Journals", value: "6,000+ via N-LIST" },
      { label: "Archive", value: "Past papers & dissertations" },
    ],
    'auditorium.specs': [
      { label: "Seating", value: "500+ seats" },
      { label: "AV Equipment", value: "Professional setup" },
      { label: "Events Hosted", value: "Convocations, Seminars, Kshitiz" }
    ],
    'sports.specs': [
      { label: "Outdoor", value: "Cricket Ground, Basketball Court" },
      { label: "Indoor", value: "Table Tennis, Badminton, Chess" },
      { label: "Annual Event", value: "Sports Meet" },
      { label: "Teams", value: "Inter-College Tournaments" }
    ],
    'hostel.specs': [
      { label: "Boys Hostel Fee", value: "₹60,000 / year" },
      { label: "Girls Hostel Fee", value: "₹65,000 / year" },
      { label: "Mess Charges", value: "Included in hostel fee" }
    ],
    'hostel.amenities': [{ text: "Separate boys and girls blocks" }, { text: "Furnished rooms (2/3 sharing)" }, { text: "Attached washrooms" }, { text: "Vegetarian mess facility" }, { text: "CCTV surveillance 24/7" }, { text: "Wi-Fi connectivity" }, { text: "Common room with TV" }, { text: "RO water purifier" }, { text: "Laundry facility" }, { text: "First aid and medical support" }, { text: "Warden supervision round the clock" }, { text: "200m from main campus" }],
    'culturalActivities.specs': [
      { label: "Flagship Event", value: "Kshitiz Fest" },
      { label: "Activities", value: "Music, Dance, Drama, Arts" },
      { label: "Clubs", value: "Literary, Cultural, Tech" }
    ]
  };

  await IimtCampusLife.updateOne({}, { $set: updateFields });
  console.log('✅ Seeded: Campus Life Extras (specs and amenities)');

  mongoose.disconnect();
}).catch(console.error);
