const mongoose = require('mongoose');
require('dotenv').config();

const { HospitalDepartment, HospitalPanchkarma } = require('./models/hospitalModels');
const { 
  AyurvedaFAQ, 
  AyurvedaTestimonial, 
  AyurvedaNews,
  AyurvedaCourse,
  AyurvedaHomePage,
  AyurvedaFaculty
} = require('./models/ayurvedaModels');

const sampleImages = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532938911079-1b06ac7ce122?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800&auto=format&fit=crop"
];

const highlights = [
  { title: "NCISM Approved — nationally valid BAMS degree" },
  { title: "14 Ayurvedic Departments with dedicated Vaidya faculty" },
  { title: "In-Campus Teaching Hospital for daily OPD exposure" },
  { title: "Only Private AYUSH College in NCR — Greater Noida" }
];

const faqs = [
  { question: "Is the BAMS degree at Ishan valid across India?", answer: "Yes, the BAMS degree awarded by IAMC is approved by NCISM (National Commission for Indian System of Medicine), making it valid for practice and higher education across India." },
  { question: "Is there a hospital attached to the college?", answer: "Yes, IAMC features a fully functional, in-campus Ayurvedic Teaching Hospital with 14 active OPDs, providing our students with extensive clinical exposure from their first year." },
  { question: "What are the hostel facilities like?", answer: "We provide separate, secure hostels for boys and girls within the campus. The hostels feature modern amenities, nutritious vegetarian meals, and a disciplined yet comfortable environment." },
  { question: "Do you have a herbal garden?", answer: "Our campus boasts a vast herbal garden cultivating over 200 species of medicinal plants. It serves as a live laboratory for Dravyaguna (Ayurvedic pharmacology) students." }
];

const testimonials = [
  { name: "Dr. Anjali Sharma", designation: "BAMS Batch 2018", feedback: "The clinical exposure at Ishan is unmatched. Working in the in-campus hospital gave me the confidence to start my own practice immediately after graduating.", type: "Student" },
  { name: "Rajesh Kumar", designation: "Parent of 2nd Year Student", feedback: "We chose Ishan for our daughter because of their strict discipline and excellent faculty. The campus is safe, and the focus is purely on academics and traditional Ayurvedic values.", type: "Parent" },
  { name: "Dr. Vivek Singh", designation: "BAMS Batch 2019", feedback: "The teachers here don't just teach from books; they share their actual clinical experiences. The hands-on training in Panchkarma has been the highlight of my education.", type: "Student" }
];

const faculty = [
  { name: "Dr. B.P. Sharma", designation: "Principal & Professor", qualification: "MD (Ayurveda), Ph.D.", specialization: "Kayachikitsa", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop" },
  { name: "Dr. Sunita Verma", designation: "HOD, Prasuti Tantra", qualification: "MS (Ayurveda)", specialization: "Prasuti & Stri Roga", image: "https://images.unsplash.com/photo-1594824436951-7f1267da4c64?q=80&w=400&auto=format&fit=crop" },
  { name: "Dr. Rajesh Gupta", designation: "Associate Professor", qualification: "MD (Ayurveda)", specialization: "Panchkarma", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop" },
  { name: "Dr. Neha Singh", designation: "Assistant Professor", qualification: "MD (Ayurveda)", specialization: "Kaumarbhritya", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop" }
];

const courses = [
  {
    name: "Bachelor of Ayurvedic Medicine & Surgery (BAMS)",
    duration: "5.5 Years (Including 1 Year Internship)",
    eligibility: "10+2 with PCB (Min 50%) & NEET Qualified",
    overview: "Our flagship BAMS programme offers an in-depth study of classical Ayurvedic texts combined with modern medical sciences. Students gain hands-on clinical experience in our 14 departments.",
    careerScope: "Private Practice, Government Medical Officer, Research Scientist, Academician, Healthcare Administrator.",
    slug: "bams"
  },
  {
    name: "Diploma in Ayurvedic Pharmacy",
    duration: "2 Years",
    eligibility: "10+2 in any stream",
    overview: "A specialised programme focusing on the preparation, dispensing, and quality control of Ayurvedic medicines. Training takes place in our fully equipped Rasa Shastra lab.",
    careerScope: "Ayurvedic Pharmacist, Manufacturing Chemist, Quality Control Officer, Entrepreneur.",
    slug: "pharmacy"
  },
  {
    name: "Panchkarma Technician Course",
    duration: "1 Year",
    eligibility: "10th Pass",
    overview: "A practical, skill-based course training students in the five detoxification procedures of Ayurveda. Extensive hands-on practice in our hospital's Panchkarma wing.",
    careerScope: "Panchkarma Therapist, Spa Manager, Wellness Consultant.",
    slug: "panchkarma-tech"
  }
];

const news = [
  { title: "National Seminar on Recent Advances in Ayurveda", description: "Ishan Ayurvedic Medical College hosted a two-day national seminar...", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop" },
  { title: "Free Health Camp Serves 500+ Local Residents", description: "Our hospital organized a mega health camp offering free consultations...", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" },
  { title: "New Herbal Garden Section Inaugurated", description: "A new section dedicated to rare medicinal plants was inaugurated...", image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop" }
];

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB...");

    // 1. Seed Hospital Galleries
    const depts = await HospitalDepartment.find({});
    for (let d of depts) {
      if (!d.gallery || d.gallery.length === 0) {
        d.gallery = sampleImages.slice(0, 5).map((img, i) => ({ image: img, caption: `Facility View ${i+1}` }));
        await d.save();
      }
    }
    
    const panchs = await HospitalPanchkarma.find({});
    for (let p of panchs) {
      if (!p.gallery || p.gallery.length === 0) {
        p.gallery = sampleImages.slice(1, 6).map((img, i) => ({ image: img, caption: `Therapy In Progress ${i+1}` }));
        await p.save();
      }
    }
    console.log("Seeded Hospital galleries...");

    // 2. Seed Ayurveda Highlights
    let home = await AyurvedaHomePage.findOne({});
    if (!home) {
      home = new AyurvedaHomePage({});
    }
    if (!home.whySection) home.whySection = {};
    if (!home.whySection.points || home.whySection.points.length === 0) {
      home.whySection.points = highlights.map(h => ({ heading: h.title, description: "" }));
      await home.save();
    }
    
    // 3. Seed Ayurveda FAQs
    const faqCount = await AyurvedaFAQ.countDocuments();
    if (faqCount === 0) {
      for (let f of faqs) {
        await AyurvedaFAQ.create(f);
      }
    }

    // 4. Seed Ayurveda Testimonials
    const testCount = await AyurvedaTestimonial.countDocuments();
    if (testCount === 0) {
      for (let t of testimonials) {
        await AyurvedaTestimonial.create(t);
      }
    }

    // 5. Seed Ayurveda Faculty
    const facCount = await AyurvedaFaculty.countDocuments();
    if (facCount === 0) {
      for (let f of faculty) {
        await AyurvedaFaculty.create(f);
      }
    }

    // 6. Seed Ayurveda Courses
    const courseCount = await AyurvedaCourse.countDocuments();
    if (courseCount === 0) {
      for (let c of courses) {
        await AyurvedaCourse.create(c);
      }
    }

    // 7. Seed Ayurveda News
    const newsCount = await AyurvedaNews.countDocuments();
    if (newsCount === 0) {
      for (let n of news) {
        await AyurvedaNews.create(n);
      }
    }

    console.log("Successfully seeded Ayurveda Collections!");
    process.exit(0);

  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
}

seedData();
