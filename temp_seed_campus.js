require('dotenv').config();
const mongoose = require('mongoose');
const { IimtCampusLife, IimtLearning, IimtGallery, IimtNewsEvent } = require('./models/iimtModels');

mongoose.connect(process.env.MONGODB_URI).then(async () => {
  console.log('Connected to MongoDB.');

  // 1. Seed Campus Life
  await IimtCampusLife.deleteMany({});
  await IimtCampusLife.create({
    infrastructure: {
      content: "IIMT's campus is strategically located in Knowledge Park III, Greater Noida, offering a secure, green, and aesthetically designed environment conducive to academic focus. The campus is built on a foundation of sustainability and modern design, providing a premium learning experience for our students.\n\nOur facilities include smart classrooms with modern AV systems, state-of-the-art IT labs, a comprehensive library, and a professional 500-seat auditorium for institutional events. We also offer dedicated sports areas and secure hostel accommodations, ensuring a well-rounded campus life.\n\nThe campus is highly accessible, situated in close proximity to the Pari Chowk Metro Station and well-connected by major transport links across Delhi NCR, making it a convenient choice for day scholars and residents alike.",
      facilities: [
        { icon: "Monitor", title: "Smart Classrooms", desc: "Air-conditioned classrooms equipped with projectors, interactive whiteboards, and modern AV systems for engaging lectures.", link: "/infrastructure" },
        { icon: "Monitor", title: "IT Labs", desc: "State-of-the-art computer labs with latest hardware, licensed software, and high-speed internet. 1:1 student-to-computer ratio.", link: "/it-lab" },
        { icon: "BookOpen", title: "Library", desc: "15,000+ books, national & international journals, INFLIBNET N-LIST access, dedicated reading room open 8 AM – 6 PM.", link: "/library" },
        { icon: "Building2", title: "Auditorium", desc: "500+ seat auditorium with professional AV equipment, used for convocations, seminars, cultural events, and guest lectures.", link: "/auditorium" },
        { icon: "Cctv", title: "Hostel", desc: "Separate boys and girls hostels with mess, CCTV surveillance, warden supervision, and proximity to campus.", link: "/hostel" },
        { icon: "Wifi", title: "Wi-Fi Campus", desc: "Full campus Wi-Fi connectivity for students and faculty — accessible in classrooms, library, and common areas." }
      ]
    },
    itLabs: {
      specs: {
        computers: "100+ High-Performance Systems",
        internetSpeed: "100 Mbps Dedicated Fiber",
        software: "MS Office, VS Code, Python, Tally Prime",
        timings: "09:00 AM to 05:00 PM"
      },
      rules: [{ text: "Students must carry their ID card to access the lab" }, { text: "No food or beverages inside the lab area" }, { text: "Personal USB drives require prior scanning approval" }, { text: "Report any hardware/software issues to the lab attendant immediately" }, { text: "Save work regularly — the institute is not responsible for data loss" }]
    },
    library: {
      totalBooks: "15,000+",
      digitalAccess: "INFLIBNET N-LIST",
      eJournals: "6,000+ via N-LIST",
      seating: "100+ seats"
    },
    auditorium: {
      seating: "500+ seats",
      avStatus: "Professional setup",
      events: "Convocations, Seminars, Kshitiz"
    },
    sports: [
      { title: "Outdoor: Cricket Ground, Basketball Court" },
      { title: "Indoor: Table Tennis, Badminton, Chess" },
      { title: "Annual Event: Sports Meet" },
      { title: "Teams: Inter-College Tournaments" }
    ],
    hostel: {
      content: "IIMT provides comfortable hostel accommodation for both boys and girls in separate residential blocks located within 200 metres of the main campus. The hostel offers a home-away-from-home experience with furnished rooms, nutritious mess meals, and 24/7 security — allowing students to focus on their academics in a safe environment."
    },
    culturalActivities: {
      highlights: [
        "Kshitiz Annual Fest",
        "Freshers' Welcome",
        "Farewell Party",
        "Inter-college Competitions",
        "National Day Celebrations"
      ]
    },
    faculty: [
      { name: 'Dr. Suresh Kumar', designation: 'Professor & Dean', dept: 'Management', qualification: 'Ph.D, MBA', specialisation: 'Marketing' },
      { name: 'Dr. Anita Sharma', designation: 'Associate Professor', dept: 'Commerce', qualification: 'Ph.D, M.Com', specialisation: 'Finance' },
      { name: 'Mr. Rajesh Verma', designation: 'Assistant Professor', dept: 'IT', qualification: 'MCA, M.Tech', specialisation: 'Data Science' },
      { name: 'Ms. Priya Singh', designation: 'Assistant Professor', dept: 'Education', qualification: 'M.Ed, NET', specialisation: 'Pedagogy' }
    ],
    visitingFaculty: [
      { name: "Mr. Anil Kapoor", org: "Corporate Consultant", specialisation: "Business Strategy", dept: "Management" },
      { name: "Dr. Vikram Seth", org: "Senior Developer", specialisation: "Cloud Computing", dept: "IT" }
    ]
  });
  console.log('✅ Seeded: Campus Life');

  // 2. Seed Learning & Activities
  await IimtLearning.deleteMany({});
  await IimtLearning.create({
    eventsCalendar: {
      pageTitle: "Events Calendar",
      pageSubtitle: "Stay updated with academic, cultural, and professional events at IIMT.",
      subheading: "What's Happening",
      heading: "Plan Your Campus Experience",
      description: "IIMT maintains a packed events calendar including national seminars, guest lectures, cultural festivals, sports meets, and placement drives. This helps students plan their participation and never miss an opportunity for growth.",
      ctaText1: "Export to Google Calendar",
      ctaText2: "Download iCal",
      registerText: "Register",
      events: [
        { name: "National Seminar on Digital Business", date: "May 15, 2024", venue: "Main Auditorium", category: "Academic", description: "A comprehensive seminar on how digital transformation is reshaping traditional business models." },
        { name: "Kshitiz 2024: Annual Cultural Fest", date: "June 05-07, 2024", venue: "Campus Grounds", category: "Cultural", description: "Our flagship cultural festival featuring music, dance, and arts from across the region." },
        { name: "Mega Placement Drive", date: "May 20, 2024", venue: "Placement Cell", category: "Placement", description: "Annual recruitment event with 30+ corporate partners participating." },
        { name: "Workshop on Python for Data Science", date: "May 10, 2024", venue: "IT Lab 1", category: "Workshop", description: "Hands-on skill development workshop for BCA and interested BBA students." }
      ]
    },
    skillDevelopment: {
      pageTitle: "Skill Development",
      pageSubtitle: "Soft skills, communication, and leadership training integrated into every program",
      description: "IIMT's Skill Development Cell organizes structured workshops and training sessions every semester, designed to bridge the gap between academic knowledge and professional competence. These programs are mandatory for all students and contribute to their overall personality development.",
      skills: [{text: "Communication Skills & Public Speaking"}, {text: "Resume Building & Interview Prep"}, {text: "Leadership & Team Management"}, {text: "Business Etiquette & Grooming"}, {text: "Presentation Skills"}, {text: "Time Management & Goal Setting"}, {text: "Critical Thinking & Problem Solving"}, {text: "Emotional Intelligence"}]
    },
    debatesGD: {
      pageTitle: "Debates & Group Discussions",
      pageSubtitle: "Articulating ideas, defending perspectives, and building leadership communication.",
      subheading: "Communication Culture",
      heading: "Preparing Students for Corporate Leadership",
      description: "At IIMT, we believe the ability to articulate and defend ideas is as important as academic excellence. Regular debates and GD sessions prepare students for corporate interviews, competitive exams, and future leadership roles. This culture of open dialogue helps build confidence, critical thinking, and respectful disagreement.",
      participationLabel: "Participation includes:",
      participationPoints: [{text: "Inter-college competitions"}, {text: "Campus debate society"}, {text: "Faculty-led workshops"}, {text: "Alumni mentoring sessions"}],
      activities: [
        { title: "Topic-based Debates", description: "Regular sessions on current affairs, economic policies, and ethical dilemmas.", icon: "Mic2" },
        { title: "Management Case GDs", description: "Group discussions centered around real-world business cases and decision-making.", icon: "Briefcase" },
        { title: "Mock CAT GD-PI", description: "Specialized training for students aiming for premium management admissions.", icon: "Trophy" },
        { title: "Extempore Sessions", description: "Spontaneous speaking drills to improve quick thinking and articulation.", icon: "MessageSquare" }
      ],
      highlightsHeading: "Past Event Highlights",
      pastHighlights: "Our students have consistently won accolades at regional and national debate competitions. Notable wins include the Greater Noida Inter-College Management Debate and the CCS University Zonal Cultural Meet.",
      highlightsFooter: "Open to all students. Check the Events Calendar for the next session."
    },
    industrialVisits: {
      pageTitle: "Industrial Visits",
      pageSubtitle: "Bridging the gap between classroom theory and real-world industrial practices.",
      subheading: "Industry Exposure",
      heading: "Learning Beyond the Classroom",
      description: "Regular industrial visits are integrated into the curriculum to provide practical exposure. These visits help students understand factory workflows, corporate environments, and real-time business operations.",
      sectors: [
        { label: "Manufacturing Units", icon: "Factory" },
        { label: "IT Parks", icon: "Laptop" },
        { label: "Corporate Hubs", icon: "Building" }
      ],
      whyVisitsMatterHeading: "Why Industrial Visits Matter?",
      whyVisitsMatter: [
        {text: "Direct interaction with industry experts"},
        {text: "Understanding corporate work culture"},
        {text: "Practical exposure to theoretical concepts"},
        {text: "Networking opportunities for future placements"}
      ],
      recentVisitsHeading: "Recent Industrial Visits",
      visits: [
        { company: "Mother Dairy", sector: "FMCG", program: "BBA", year: "2023", outcome: "Understanding supply chain and logistics." },
        { company: "Tech Mahindra", sector: "IT Services", program: "BCA", year: "2023", outcome: "Exposure to software development lifecycles." }
      ]
    },
    guestLectures: {
      pageTitle: "Guest Lectures",
      pageSubtitle: "Learn from industry experts and renowned academicians.",
      subheading: "Expert Insights",
      heading: "Interacting with Thought Leaders",
      description: "IIMT regularly invites corporate leaders, seasoned academicians, and subject matter experts to share their valuable insights. These interactions provide students with an updated perspective on industry expectations.",
      whatToExpectTitle: "What to Expect",
      whatToExpectDesc: "Interactive sessions, Q&A, and networking opportunities.",
      nationalSeminarsHeading: "National Seminars",
      nationalSeminars: "We host national-level seminars bringing together experts from across the country.",
      events: [
        { speaker: "Mr. Rajeev Sharma", designation: "HR Head, XYZ Corp", topic: "Navigating the Corporate World", date: "April 10, 2024", takeaways: "Tips on resume building and interviews." },
        { speaker: "Ms. Sunita Gupta", designation: "Senior Analyst, ABC Bank", topic: "Future of Digital Banking", date: "March 22, 2024", takeaways: "Understanding FinTech disruptions." }
      ]
    }
  });
  console.log('✅ Seeded: Learning & Activities');

  // 3. Seed Gallery
  await IimtGallery.deleteMany({});
  await IimtGallery.create({
    photos: [
      { title: "Campus Building", url: "https://via.placeholder.com/600x400?text=Campus+Building" },
      { title: "Library Opening", url: "https://via.placeholder.com/600x400?text=Library" },
      { title: "IT Labs Session", url: "https://via.placeholder.com/600x400?text=IT+Labs" }
    ],
    videos: [
      { title: "Campus Tour", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { title: "Kshitiz Fest 2023", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
    ],
    pressCoverage: [
      { title: "IIMT Ranked Top College in Greater Noida", date: "Jan 15, 2024", url: "https://via.placeholder.com/600x400?text=Press+1" },
      { title: "Outstanding Placement Records", date: "Feb 20, 2024", url: "https://via.placeholder.com/600x400?text=Press+2" }
    ]
  });
  console.log('✅ Seeded: Gallery');

  // 4. Seed News & Events
  await IimtNewsEvent.deleteMany({});
  await IimtNewsEvent.insertMany([
    { title: "Annual Convocation 2024 Announced", date: new Date("2024-05-15"), description: "The annual convocation ceremony for the passing out batch will be held on May 15, 2024.", image: "https://via.placeholder.com/600x400?text=Convocation" },
    { title: "New AI Lab Inauguration", date: new Date("2024-04-10"), description: "IIMT has set up a new Artificial Intelligence lab equipped with modern systems.", image: "https://via.placeholder.com/600x400?text=AI+Lab" },
    { title: "Alumni Meet 2024", date: new Date("2024-03-25"), description: "A massive alumni gathering organized at the campus.", image: "https://via.placeholder.com/600x400?text=Alumni+Meet" }
  ]);
  console.log('✅ Seeded: News & Events');

  mongoose.disconnect();
}).catch(console.error);
