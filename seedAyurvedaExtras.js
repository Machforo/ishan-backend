const mongoose = require('mongoose');
require('dotenv').config();
const {
  AyurvedaFacilities, AyurvedaDigitalServices,
  AyurvedaPhotoGallery, AyurvedaVideoGallery, AyurvedaPressCoverage,
  AyurvedaEvent, AyurvedaNews
} = require('./models/ayurvedaModels');

const seedExtras = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // 1. Facilities
    let facilities = await AyurvedaFacilities.findOne();
    if (!facilities) facilities = new AyurvedaFacilities({});
    facilities.infrastructure = {
      content: "Ishan Ayurvedic Medical College provides a serene and technologically advanced campus designed specifically for Ayurvedic education. The infrastructure blends modern amenities with traditional aesthetics, offering spacious lecture halls, well-equipped laboratories, a vast library, and dedicated spaces for clinical practice.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
      features: [
        { icon: "Building2", title: "Smart Classrooms", desc: "Air-conditioned, digital-enabled lecture halls for interactive learning." },
        { icon: "FlaskConical", title: "10 Specialized Labs", desc: "Fully equipped laboratories for Anatomy, Physiology, Pathology, and more." },
        { icon: "Wifi", title: "Wi-Fi Campus", desc: "High-speed internet access across the academic and hospital blocks." },
        { icon: "Shield", title: "24/7 Security", desc: "Secure, CCTV-monitored campus with restricted access." }
      ]
    };
    facilities.herbalGarden = {
      description: "Our expansive Herbal Garden is a living laboratory where students study Pharmacognosy (Dravyaguna). It houses over 200 species of medicinal plants, herbs, and shrubs used in classical Ayurvedic formulations. Students actively participate in cultivating, identifying, and harvesting these medicinal resources.",
      speciesCount: "200+",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
      plants: [
        { sanskrit: "Ashwagandha", latin: "Withania somnifera", part: "Roots, Leaves", use: "Rejuvenative, Stress relief" },
        { sanskrit: "Tulsi", latin: "Ocimum sanctum", part: "Leaves, Seeds", use: "Immunomodulator, Respiratory issues" },
        { sanskrit: "Guduchi", latin: "Tinospora cordifolia", part: "Stem", use: "Fever, Immunity" },
        { sanskrit: "Brahmi", latin: "Bacopa monnieri", part: "Whole plant", use: "Cognitive enhancer" }
      ]
    };
    facilities.hostel = {
      content: "We offer separate, secure, and comfortable hostel facilities for boys and girls. The hostels are designed to provide a home-away-from-home environment, featuring spacious rooms, hygienic mess facilities serving nutritious vegetarian food, recreation rooms, and 24/7 power backup and security.",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
    };
    facilities.auditorium = {
      seating: "500",
      image: "https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&fit=crop&w=1200&q=80"
    };
    facilities.sports = {
      content: "Physical well-being is integral to Ayurveda. Our campus includes extensive sports facilities for cricket, football, volleyball, and basketball, along with indoor games. We also have dedicated spaces for daily Yoga and meditation practices.",
      image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=80"
    };
    await facilities.save();

    // 2. Digital Services
    let digital = await AyurvedaDigitalServices.findOne();
    if (!digital) digital = new AyurvedaDigitalServices({});
    digital.studentPortal = {
      title: "ERP Login",
      link: "https://erp.ishan.ac/"
    };
    digital.feePayment = {
      title: "Online Fee Payment",
      link: "https://fee.ishan.ac/"
    };
    digital.downloads = [
      { title: "BAMS Academic Calendar 2024-25", fileUrl: "#" },
      { title: "Anti-Ragging Undertaking Form", fileUrl: "#" },
      { title: "Library Membership Form", fileUrl: "#" }
    ];
    digital.pastPapers = [
      { title: "BAMS First Year Anatomy (Rachana Sharir)", year: "2023", fileUrl: "#" },
      { title: "BAMS First Year Physiology (Kriya Sharir)", year: "2023", fileUrl: "#" },
      { title: "BAMS First Year Ayurveda Siddhanta", year: "2023", fileUrl: "#" }
    ];
    await digital.save();

    // 3. Photo Gallery
    await AyurvedaPhotoGallery.deleteMany({});
    const photos = [
      { title: "Hospital Inauguration", category: "Campus", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" },
      { title: "Herbal Garden Visit", category: "Academic", image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80" },
      { title: "Dhanvantari Jayanti", category: "Events", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" },
      { title: "Medical Camp", category: "Clinical", image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80" }
    ];
    await AyurvedaPhotoGallery.insertMany(photos);

    // 4. Video Gallery
    await AyurvedaVideoGallery.deleteMany({});
    const videos = [
      { title: "Campus Tour of Ishan Ayurveda", category: "Campus", videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "Panchkarma Therapy Demonstration", category: "Clinical", videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "BAMS Orientation Program", category: "Events", videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
    ];
    await AyurvedaVideoGallery.insertMany(videos);

    // 5. Press Coverage
    await AyurvedaPressCoverage.deleteMany({});
    const press = [
      { title: "Ishan Ayurvedic Medical College organizes free health camp", date: "2024-03-15", source: "Dainik Jagran", link: "#", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80" },
      { title: "Students of Ishan Ayurveda excel in university examinations", date: "2024-02-02", source: "Amar Ujala", link: "#", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80" }
    ];
    await AyurvedaPressCoverage.insertMany(press);

    // 6. Events
    await AyurvedaEvent.deleteMany({});
    const events = [
      { title: "National Seminar on Charak Samhita", date: "2024-11-15", location: "Main Auditorium, IAMC", description: "A comprehensive seminar on the practical applications of Charak Samhita.", image: "https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&fit=crop&w=800&q=80" },
      { title: "Free Health & Wellness Camp", date: "2024-12-05", location: "IAMC Hospital Campus", description: "Free consultation and Ayurvedic medicine distribution for the local community.", image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80" }
    ];
    await AyurvedaEvent.insertMany(events);

    // 7. News
    await AyurvedaNews.deleteMany({});
    const news = [
      { title: "BAMS Admissions 2024-25 Open", date: "2024-08-01", category: "Admissions", description: "Admissions for the upcoming academic session are now open for NEET-UG qualified candidates.", link: "/admissions", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" },
      { title: "New Panchkarma Unit Inaugurated", date: "2024-09-10", category: "Hospital", description: "Our hospital has expanded its Panchkarma unit to accommodate more therapies and patients.", link: "/hospital", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" }
    ];
    await AyurvedaNews.insertMany(news);

    console.log("Seeded Facilities, Digital Services, Galleries, Press, Events, and News successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding extras:", error);
    process.exit(1);
  }
};

seedExtras();
