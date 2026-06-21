/**
 * IIMT CMS Seed Script
 * Seeds ALL IIMT MongoDB collections with the exact static content from the frontend.
 * Run: node seedIIMT.js
 */

const mongoose = require('mongoose');
require('dotenv').config();

const {
  IimtHomePage, IimtAboutUs, IimtCourse, IimtCampusLife,
  IimtAdmissions, IimtPlacements, IimtGallery, IimtNewsEvent,
  IimtFeePayment, IimtStudentPortal, IimtContactUs, IimtAcademics, IimtLearning
} = require('./models/iimtModels');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms';

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log('✅ Connected to MongoDB');

  // ─── 1. HOMEPAGE ─────────────────────────────────────────────────────────────
  await IimtHomePage.deleteMany({});
  await IimtHomePage.create({
    header: {
      phone: "+91 8448797700",
      email: "info@ishan.ac",
      logoText: "ISHAN",
      logoSubtext: "Institute of Management & Technology",
      alertText: "⚠️ This is a temporary version of the website. Please visit the official website at",
      alertLinkText: "iimt.ishan.ac",
      alertLink: "https://iimt.ishan.ac",
      portalLinks: [
        { label: "Fee Payment", href: "/fee-payment" },
        { label: "Student Portal", href: "/student-portal" },
        { label: "News", href: "/news" }
      ],
      navLinks: [
        {
          label: "About Us",
          featured: {
            img: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
            title: "30 Years of Excellence",
            desc: "Pioneering professional education in Knowledge Park, Greater Noida since 1994.",
            href: "/about",
          },
          columns: [
            {
              heading: "Institution",
              links: [
                { label: "About IIMT", href: "/about" },
                { label: "Director's Message", href: "/director-message" },
                { label: "Mission & Vision", href: "/mission-vision" },
                { label: "Why Choose Us", href: "/why-iimt" },
                { label: "Best Practices", href: "/best-practices" },
                { label: "Green Initiatives", href: "/green-initiatives" },
                { label: "Approvals & Affiliations", href: "/approvals" },
                { label: "Mandatory Disclosure", href: "/mandatory-disclosure" }
              ]
            },
            {
              heading: "Faculty",
              links: [
                { label: "Faculty Directory", href: "/faculty" },
                { label: "Visiting Faculty", href: "/visiting-faculty" },
                { label: "Research Journal", href: "/research-journal" },
                { label: "FAQs", href: "/faqs" }
              ]
            },
            {
              heading: "Placements",
              links: [
                { label: "Placement Overview", href: "/placements" },
                { label: "Placement Testimonials", href: "/placement-testimonials" },
                { label: "Alumni Network", href: "/alumni-network" },
                { label: "Entrepreneurship Cell", href: "/e-cell" }
              ]
            }
          ]
        },
        {
          label: "Academics",
          featured: {
            img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
            title: "6 Professional Programmes",
            desc: "Undergraduate & postgraduate courses in Management, Commerce, IT and Teacher Education.",
            href: "/education-overview",
          },
          columns: [
            {
              heading: "Management & Commerce",
              links: [
                { label: "BBA", href: "/courses/bba" },
                { label: "B.Com", href: "/courses/bcom" },
                { label: "M.Com", href: "/courses/mcom" }
              ]
            },
            {
              heading: "Technology",
              links: [
                { label: "BCA", href: "/courses/bca" }
              ]
            },
            {
              heading: "Education",
              links: [
                { label: "Education Overview", href: "/education-overview" },
                { label: "B.Ed", href: "/courses/bed" },
                { label: "M.Ed", href: "/courses/med" },
                { label: "Pedagogy Labs", href: "/pedagogy-labs" }
              ]
            },
            {
              heading: "Admissions",
              links: [
                { label: "Admissions 2025-26", href: "/admissions" },
                { label: "Admissions Enquiry", href: "/admissions-enquiry" },
                { label: "Scholarships", href: "/scholarships" },
                { label: "Certificate Programs", href: "/certificate-programs" }
              ]
            }
          ]
        },
        {
          label: "Campus Life",
          featured: {
            img: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=80",
            title: "Vibrant Campus Experience",
            desc: "State-of-the-art facilities, cultural festivals, and endless opportunities to grow.",
            href: "/infrastructure",
          },
          columns: [
            {
              heading: "Learning & Activities",
              links: [
                { label: "News & Events", href: "/news-events" },
                { label: "Events Calendar", href: "/events-calendar" },
                { label: "Skill Development", href: "/skill-development" },
                { label: "Cultural & Kshitiz", href: "/cultural-activities" },
                { label: "Debates & GD", href: "/debates-gd" },
                { label: "Industrial Visits", href: "/industrial-visits" },
                { label: "Guest Lectures", href: "/guest-lectures" }
              ]
            },
            {
              heading: "Campus Facilities",
              links: [
                { label: "Infrastructure", href: "/infrastructure" },
                { label: "IT Lab", href: "/it-lab" },
                { label: "Library", href: "/library" },
                { label: "Auditorium", href: "/auditorium" },
                { label: "Hostel", href: "/hostel" },
                { label: "Sports", href: "/sports" }
              ]
            },
            {
              heading: "Gallery & Media",
              links: [
                { label: "Photo Gallery", href: "/photo-gallery" },
                { label: "Video Gallery", href: "/video-gallery" },
                { label: "Press Coverage", href: "/press-coverage" }
              ]
            }
          ]
        },
        {
          label: "Student Zone",
          featured: {
            img: "https://images.unsplash.com/photo-1541339907198-e0875dedf3f?w=800&q=80",
            title: "Everything You Need",
            desc: "Your one-stop hub for academic resources, portals, policies and student welfare.",
            href: "/student-portal",
          },
          columns: [
            {
              heading: "Resources",
              links: [
                { label: "Downloads", href: "/downloads" },
                { label: "Past Exam Papers", href: "/past-papers" },
                { label: "Fee Payment", href: "/fee-payment" },
                { label: "Student Portal", href: "/student-portal" }
              ]
            },
            {
              heading: "Policies & Welfare",
              links: [
                { label: "Code of Conduct", href: "/code-of-conduct" },
                { label: "Anti-Ragging", href: "/anti-ragging" },
                { label: "Grievance Redressal", href: "/grievance-redressal" },
                { label: "Privacy Policy", href: "/privacy-policy" }
              ]
            }
          ]
        },
        {
          label: "Contact",
          featured: {
            img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
            title: "We're Here to Help",
            desc: "Reach out to our admissions team, explore career opportunities, or share your feedback.",
            href: "/contact",
          },
          columns: [
            {
              heading: "Get in Touch",
              links: [
                { label: "Contact Us", href: "/contact" },
                { label: "Admissions Enquiry", href: "/admissions-enquiry" },
                { label: "Feedback", href: "/feedback" }
              ]
            },
            {
              heading: "Work With Us",
              links: [
                { label: "Careers at IIMT", href: "/careers" }
              ]
            }
          ]
        }
      ]
    },
    banners: [
      { heading: "Shape Your Future at IIMT", subheading: "Greater Noida's Premier Management & Technology Institute — UGC, AICTE, NCTE Approved & NAAC Accredited", image: "/assets/hero-campus.jpg", cta1: "Explore Programs", cta2: "Virtual Tour" },
      { heading: "Placements That Define Careers", subheading: "150+ recruiting partners | 90%+ placement rate | ₹8 LPA highest package", image: "/assets/hero-campus.jpg", cta1: "Explore Programs", cta2: "Virtual Tour" },
      { heading: "Admissions Open 2025-26", subheading: "BBA · B.Com · BCA · M.Com · B.Ed · M.Ed — Apply Now", image: "/assets/hero-campus.jpg", cta1: "Explore Programs", cta2: "Virtual Tour" },
    ],
    numbers: [
      { label: "Years of Excellence", value: "30+" },
      { label: "Students Enrolled", value: "5000+" },
      { label: "Placement Rate", value: "90%+" },
      { label: "Recruiting Partners", value: "150+" },
    ],
    partnerships: [
      { name: "Barclays", image: "https://www.openbanking.org.uk/wp-content/uploads/barclays.png" },
      { name: "HDFC Bank", image: "https://cdn.zeebiz.com/sites/default/files/2020/04/08/116007-hdfc.jpg?im=FitAndFill=(448,252)&format=webp&quality=medium" },
      { name: "ICICI Bank", image: "https://logos-world.net/wp-content/uploads/2021/02/ICICI-Bank-Logo.png" },
      { name: "Infosys", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png" },
      { name: "TCS", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png" },
      { name: "Wipro", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Logo.svg/1024px-Wipro_Logo.svg.png" },
    ],
    aboutIimt: {
      heading: "A Legacy of Academic Excellence in Greater Noida",
      description: "Ishan Institute of Management & Technology (IIMT), established in 1994, is the flagship institution of Ishan Educational Group. Located in the educational hub of Greater Noida, Delhi NCR, IIMT is affiliated to Chaudhary Charan Singh University, Meerut and is approved by UGC, AICTE, and NCTE. The institute holds the distinction of being accredited by NAAC, underscoring its commitment to maintaining highest standards in teaching, learning, and institutional governance.",
      image: "/assets/students-library.jpg"
    },
    standApart: {
      heading: "What Makes IIMT Stand Apart",
      description: "We are committed to providing top-quality education with excellent industrial and academic resources.",
      points: [
        { title: "NAAC Accredited", description: "Nationally recognised quality benchmark validating our commitment to academic excellence.", icon: "Award" },
        { title: "Industry Partnerships", description: "150+ recruiting companies visit annually, offering real-world exposure from Day 1.", icon: "Building2" },
        { title: "Experienced Faculty", description: "PhD holders, industry practitioners, and IIM/IIT alumni guide our academic programmes.", icon: "GraduationCap" },
        { title: "Modern Infrastructure", description: "Smart classrooms, 120+ computer labs, INFLIBNET library, and air-conditioned campus.", icon: "Monitor" },
        { title: "Certificate Programmes", description: "Earn industry certifications in Tally, GST, Digital Marketing, and Python alongside your degree.", icon: "FileCheck" },
        { title: "Strong Alumni Network", description: "10,000+ alumni across banking, IT, education, and entrepreneurship providing mentorship.", icon: "Users" },
      ],
      cta: "Enquire Now"
    },
    lifeAtIimt: {
      heading: "Experience the Holistic Campus Ecosystem",
      images: [
        { url: "https://www.burohappold.com/wp-content/uploads/2022/05/BS-CMU_02_Albert-Vecerka-Esto-1024x683.jpg" },
        { url: "https://studyus.dapodik.co.id/wp-content/uploads/2023/08/Exploring-US-University-Facilities-and-Resources-8QR-MPR.jpg" },
        { url: "https://www.kclas.ac.in/wp-content/uploads/2021/01/gallery-05.jpg" },
        { url: "https://www.sanskriti.edu.in/images/sports1.jpg" },
        { url: "https://www.accurate.in/engg/img/sports/sports.webp" },
        { url: "https://woxsen.edu.in/uploads/A20230824084254.webp" },
        { url: "https://lavasa.christuniversity.in/uploads/userfiles/IMG_1100_JPG.jpg" },
        { url: "https://www.iecaonline.com/wp-content/uploads/2018/03/College-Campus-cropped-scaled.jpg" }
      ]
    },
    successStories: {
      students: [
        { name: "Siddharth Verma", feedback: "The faculty at IIMT is exceptionally supportive. The industry exposure through guest lectures and internships has truly shaped my professional outlook.", photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80" },
        { name: "Anjali Gupta", feedback: "Transitioning from college to my first IT job was smooth thanks to the rigorous training in the labs and the dedicated placement cell.", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" },
        { name: "Rahul Singh", feedback: "The teaching pedagogy here is very practical. I particularly enjoy the multicultural environment and the emphasis on holistic growth.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" }
      ],
      parents: [
        { name: "Mr. Ramesh Sharma", feedback: "As a parent, my priority was safety and quality education. IIMT has exceeded my expectations in both. My daughter is much more confident now.", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
        { name: "Mrs. Sunita Pandey", feedback: "The regular feedback we get from the college about our child's progress is very reassuring. Truly a student-centric institution.", photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" }
      ]
    },
    footer: {
      description: "NAAC Accredited | Affiliated to CCS University, Meerut | Approved by UGC & AICTE. Pioneering professional education since 1994.",
      logoText: "IIMT Greater Noida",
      quickLinks: [
        { label: "About IIMT", href: "/about" },
        { label: "Admissions 2025-26", href: "/admissions" },
        { label: "Faculty Directory", href: "/faculty" },
        { label: "Placement Overview", href: "/placements" },
        { label: "Campus Infrastructure", href: "/infrastructure" },
        { label: "Contact Us", href: "/contact" }
      ],
      programs: [
        { label: "BBA — Business Administration", href: "/courses/bba" },
        { label: "BCA — Computer Applications", href: "/courses/bca" },
        { label: "B.Com — Bachelor of Commerce", href: "/courses/bcom" },
        { label: "M.Com — Master of Commerce", href: "/courses/mcom" },
        { label: "B.Ed — Teacher Education", href: "/courses/bed" },
        { label: "M.Ed — Master of Education", href: "/courses/med" }
      ],
      socialLinks: [
        { platform: "facebook", href: "https://facebook.com" },
        { platform: "instagram", href: "https://instagram.com" },
        { platform: "linkedin", href: "https://linkedin.com" },
        { platform: "youtube", href: "https://youtube.com" }
      ],
      legalLinks: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Anti-Ragging Policy", href: "/anti-ragging" },
        { label: "Grievance Redressal", href: "/grievance-redressal" },
        { label: "Mandatory Disclosures", href: "/mandatory-disclosure" }
      ],
      contact: {
        address: "Knowledge Park-III, Greater Noida, Uttar Pradesh 201308",
        phone: "+91 8448797700",
        email: "info@ishan.ac"
      },
      copyright: "© 1994 – 2025 Ishan Institute of Management & Technology. All rights reserved."
    }
  });
  console.log('✅ Seeded: Homepage');

  // ─── 2. ABOUT US ─────────────────────────────────────────────────────────────
  await IimtAboutUs.deleteMany({});
  await IimtAboutUs.create({
    pageHeading: "About IIMT Greater Noida",
    pageSubheading: "Transforming potential into performance through academic excellence since 1994.",
    journeyHeading: "Milestones of Growth",
    ourStory: {
      image: "/assets/students-library.jpg",
      description: "Ishan Institute of Management & Technology (IIMT), established in 1994, is the flagship institution of Ishan Educational Group — one of the most respected education conglomerates in the Delhi NCR region. Over three decades, IIMT has evolved from a single institution into a multi-programme centre of excellence, shaping the careers of thousands of graduates across business, technology, and education disciplines.\n\nAffiliated to Chaudhary Charan Singh University, Meerut, IIMT is approved by UGC, AICTE, and NCTE. The institute holds NAAC accreditation, the highest quality benchmark bestowed upon Indian institutions of higher learning."
    },
    ourJourney: [
      { year: "1994", event: "Ishan Institute of Management & Technology established as the first college under the group" },
      { year: "2002", event: "Launched BCA programme to address the growing demand for computer application professionals" },
      { year: "2008", event: "Introduced M.Com and advanced postgraduate programmes" },
      { year: "2012", event: "B.Ed and M.Ed programmes launched with full NCTE approval" },
      { year: "2018", event: "NAAC Accreditation granted — a testament to quality education" },
      { year: "2023", event: "Ishan Group crosses 10,000+ alumni and expands to 5 colleges across Greater Noida" },
    ],
    keyDifferentiators: [
      { title: "NAAC Accredited", description: "Nationally recognised quality benchmark validating our commitment to academic excellence." },
      { title: "Affiliated to CCS University, Meerut", description: "All degrees are through a UGC-recognised state university." },
      { title: "UGC, AICTE & NCTE Approved", description: "Full statutory approvals for all undergraduate and postgraduate programmes." },
      { title: "90%+ Placement Record", description: "Consistent placement performance over 15+ years." },
      { title: "Industry-Integrated Curriculum", description: "Live projects, internships, and guest lectures woven into course delivery." },
      { title: "Modern Campus", description: "Smart classrooms, air-conditioned labs, digital library, and green campus." },
      { title: "150+ Recruiting Partners", description: "Active placement cell with tie-ups across Banking, IT, Education, and FMCG." },
      { title: "Certificate Programmes", description: "Add-on certifications in Tally, GST, Digital Marketing alongside your main degree." },
    ],
    directorMessage: {
      name: "Dr. Priya Sharma",
      designation: "Director, IIMT",
      message: "At IIMT, we believe that education is not just about degrees — it is about developing individuals who are ready to lead, innovate, and contribute meaningfully to society. Our institution stands on three pillars: academic rigour, industry relevance, and character formation.\n\nOver the past three decades, we have had the privilege of guiding thousands of young minds as they embarked on their professional journeys. Many of our alumni today occupy senior positions in leading corporations, public institutions, and are running their own enterprises — a testament to the transformative power of the education we provide.\n\nAs we move forward, our focus remains on staying ahead of the curve — integrating emerging technologies, fostering entrepreneurial thinking, and building partnerships with industry leaders to ensure our students are not just employed, but empowered.",
      image: "/assets/director.jpg"
    },
    missionVision: {
      vision: "To be a nationally recognised institution of excellence that empowers students with knowledge, skills, and values to lead meaningful and impactful careers in a dynamic global environment.",
      mission: "To provide accessible, high-quality, industry-relevant education through innovation in teaching, research, and community engagement — nurturing well-rounded professionals equipped to meet real-world challenges.",
      coreValues: [{ text: "Integrity" }, { text: "Excellence" }, { text: "Innovation" }, { text: "Inclusion" }, { text: "Service" }]
    },
    approvalsAffiliations: [
      { name: "NAAC — National Assessment and Accreditation Council", image: "", subheading: "Quality accreditation benchmark.", description: "National Assessment and Accreditation Council." },
      { name: "UGC — University Grants Commission", image: "https://iimt.ishan.ac/images/accreditation/ugc-logo.gif", subheading: "Recognition under Section 2(f) of UGC Act.", description: "University Grants Commission." },
      { name: "AICTE — All India Council for Technical Education", image: "https://iimt.ishan.ac/images/accreditation/aicte-logo.png", subheading: "Approval for BBA and BCA programs.", description: "All India Council for Technical Education." },
      { name: "NCTE — National Council for Teacher Education", image: "https://iimt.ishan.ac/images/accreditation/ncte-logo.png", subheading: "Approval for B.Ed and M.Ed programs.", description: "National Council for Teacher Education." },
      { name: "CCS University, Meerut — Chaudhary Charan Singh University", image: "", subheading: "Affiliation for all degree programs.", description: "Chaudhary Charan Singh University, Meerut." },
      { name: "SCERT", image: "https://iimt.ishan.ac/images/accreditation/scert-logo.jpg", subheading: "Recognition for education programs.", description: "State Council of Educational Research & Training." },
    ],
    whyIimt: {
      content: "Choosing IIMT is choosing a future-ready education. Here is why thousands of students and parents trust us:\n\n1. NAAC Accredited quality assurance with a proven 30-year track record\n2. Affiliated to CCS University — a UGC-recognised state university\n3. 90%+ consistent placement rate with 150+ active recruiting partners\n4. Industry-integrated curriculum with live projects and internship support\n5. Expert faculty including PhD holders, IIM/IIT alumni, and industry practitioners\n6. Certificate programmes in Tally, GST, Digital Marketing, and Python\n7. INFLIBNET N-LIST digital library with 6,000+ e-journals\n8. Safe, green campus with modern infrastructure and hostel facilities\n9. Strong alumni network of 10,000+ professionals for mentorship and referrals\n10. Transparent fee structure with scholarship options for deserving students"
    },
    bestPractices: [
      { title: "Industry-Academia Interface", content: "Regular guest lectures from industry experts, corporate tie-ups, and live project modules ensure students stay connected with real-world business practices throughout their programme." },
      { title: "Mentor-Mentee Programme", content: "Each incoming student is assigned a faculty mentor who provides academic and career guidance throughout the degree. Monthly one-on-one sessions help students navigate challenges and stay on track." },
      { title: "Continuous Assessment", content: "Beyond semester exams, students are assessed through presentations, case studies, group discussions, and assignments — developing communication, analytical, and critical thinking skills." },
      { title: "Entrepreneurship Cell", content: "The E-Cell organises ideathons, startup bootcamps and mentoring sessions. Students with promising business ideas receive guidance from alumni entrepreneurs and incubation support." },
      { title: "Digital Learning Integration", content: "Smart classrooms, e-learning portals, and Moodle-based assignment tracking keep students engaged in a blended learning environment that supports both in-class and remote participation." },
    ],
    greenInitiatives: {
      content: "IIMT is committed to creating a sustainable campus that serves as a live laboratory for environmental stewardship:\n\nSolar Energy: Rooftop solar panels generate renewable energy, reducing our dependence on conventional power by over 20%.\n\nCampus Plantation: Over 1,500 trees and plants across the campus create green corridors, reduce heat islands, and improve air quality.\n\nWaste Management: A comprehensive waste segregation and recycling programme diverts over 60% of campus waste from landfills. Composting units convert organic waste into fertilizer for campus gardens.\n\nWater Conservation: Rainwater harvesting systems and efficient fixtures reduce water consumption across the campus.\n\nAwareness Programmes: Regular workshops, seminars, and competitions on environmental themes instill ecological consciousness in students. Green audits are conducted periodically to monitor and improve our environmental performance."
    },
    mandatoryDisclosure: {
      complianceStatement: "The information provided below is submitted as required by the All India Council for Technical Education (AICTE) and is updated annually to ensure full transparency. Any discrepancies found in the reported data should be immediately brought to the notice of the Admissions Office at Knowledge Park, Greater Noida.\n\nAICTE mandates public disclosure for the benefit of current and prospective students, parents, and regulatory authorities. It serves as a comprehensive record of the institution's facilities, faculty, and academic standards, ensuring accountability in the delivery of professional education.",
      downloadPdfUrl: "#",
      disclosures: [
        { category: "Institution Details", items: [{ text: "Name of Institution" }, { text: "Address" }, { text: "Year of Establishment — 1994" }, { text: "Status of Institution — Private" }, { text: "Type of Institution — Co-education" }] },
        { category: "Academic Information", items: [{ text: "Programs offered: BBA, B.Com, BCA, M.Com, B.Ed, M.Ed" }, { text: "Annual intake per program" }, { text: "Faculty-student ratio" }, { text: "Pass percentage (last 5 years)" }] },
        { category: "Financial Information", items: [{ text: "Fee structure per program" }, { text: "Scholarship details" }, { text: "Audited financial statements (annual)" }] },
        { category: "Infrastructure", items: [{ text: "Total campus area" }, { text: "Built-up area" }, { text: "Library resources" }, { text: "Computer labs and IT infrastructure" }] },
        { category: "Faculty", items: [{ text: "Permanent faculty list with qualifications" }, { text: "Visiting faculty details" }, { text: "Faculty development programs" }] }
      ]
    },
    researchJournal: {
      description: "Management Stream (ISSN: 0974-0554) is the peer-reviewed research journal published by Ishan Institute of Management & Technology. Listed in the UGC CARE list, the journal publishes original research papers in areas of management, commerce, economics, and allied social sciences. The journal is published bi-annually and invites contributions from researchers, academicians, and practitioners.",
      issn: "0974-0554",
      frequency: "Bi-annual",
      ugcCare: "Listed",
      peerReviewed: "Yes",
      websiteUrl: "https://ms.ishan.ac"
    }
  });
  console.log('✅ Seeded: About Us');

  // ─── 3. COURSES ──────────────────────────────────────────────────────────────
  await IimtCourse.deleteMany({});
  await IimtCourse.create([
    {
      programName: "BBA",
      duration: "3 Years (6 Semesters)",
      annualFee: "₹50,000 per year",
      annualIntake: "60 Seats",
      eligibility: "10+2 from any recognised board with any stream",
      overview: "The Bachelor of Business Administration (BBA) programme at IIMT is designed to develop the next generation of business leaders. The programme provides a rigorous grounding in management principles, economics, marketing, human resources, and finance — while simultaneously developing soft skills, analytical thinking, and leadership capabilities.\n\nStudents benefit from live industry projects, guest lectures by corporate professionals, and a dedicated placement programme. The CUET-based admission process ensures meritocratic selection.",
      curriculumStructure: "Semester 1-2: Business Fundamentals — Principles of Management, Business Communication, Economics, Financial Accounting, Business Mathematics\n\nSemester 3-4: Core Specialisation — Marketing Management, Human Resource Management, Financial Management, Business Law, Research Methodology\n\nSemester 5-6: Advanced & Applied — Strategic Management, Entrepreneurship, Electives (Marketing/HR/Finance), Live Project, Campus Placement Preparation",
      careerScope: "BBA graduates from IIMT are equipped for roles in Banking & Financial Services, Marketing & Sales, Human Resource Management, Retail Management, Entrepreneurship, and preparation for MBA programmes at premier institutions.\n\nRecent BBA graduates have joined HDFC Bank, ICICI Bank, Kotak Mahindra, Amazon, Byju's, and various FMCG and consulting firms.",
      slug: "bba"
    },
    {
      programName: "B.Com",
      duration: "3 Years (6 Semesters)",
      annualFee: "₹45,000 per year",
      annualIntake: "60 Seats",
      eligibility: "10+2 with Commerce from any recognised board",
      overview: "The Bachelor of Commerce (B.Com) programme at IIMT provides a comprehensive education in accounting, commerce, taxation, and financial management. The programme is uniquely enhanced with practical certifications in Tally, GST Filing, and Auditing — making graduates immediately work-ready.\n\nAffiliated to CCS University, the B.Com degree is recognised by all government and private institutions. Graduates are eligible for CA, ICWA, CS, and MBA programmes.",
      curriculumStructure: "Semester 1-2: Financial Accounting, Business Economics, Business Mathematics & Statistics, Corporate Law\n\nSemester 3-4: Cost Accounting, Income Tax, Company Law, Auditing, Banking & Insurance\n\nSemester 5-6: Advanced Accounting, GST & Indirect Taxation, Financial Management, Tally ERP Certification, Internship",
      careerScope: "B.Com graduates are hired for roles in Accounting, Banking, Taxation, Financial Analysis, and Auditing. IIMT's Tally and GST certification gives graduates an edge in CA firms, banks, and corporate finance departments.\n\nTop recruiters include Deloitte, KPMG, HDFC Bank, Axis Bank, and numerous regional firms.",
      slug: "bcom"
    },
    {
      programName: "BCA",
      duration: "3 Years (6 Semesters)",
      annualFee: "₹55,000 per year",
      annualIntake: "60 Seats",
      eligibility: "10+2 from any recognised board (PCM preferred)",
      overview: "The Bachelor of Computer Applications (BCA) programme at IIMT prepares students for careers in software development, database management, web technologies, and IT infrastructure. The programme combines strong theoretical foundations with extensive hands-on lab sessions — ensuring graduates can contribute from Day 1 in a professional environment.\n\nStudents have access to 120+ computer systems, licensed development environments, and IIMT's dedicated Python and web development lab.",
      curriculumStructure: "Semester 1-2: Fundamentals of Computing, C Programming, Web Technologies (HTML/CSS), Mathematics for Computing, Database Basics\n\nSemester 3-4: Data Structures, Java Programming, DBMS with MySQL, Networking Fundamentals, Software Engineering\n\nSemester 5-6: Python Programming, Cloud Computing, Android Development, Cyber Security Basics, Final Project",
      careerScope: "BCA graduates join as Software Developers, Web Developers, IT Support Engineers, Database Administrators, and Systems Analysts. Many BCA graduates advance to MCA or MTech programmes.\n\nRecent placement partners include Infosys, Wipro, TCS, HCL, Tech Mahindra, and various software startups.",
      slug: "bca"
    },
    {
      programName: "M.Com",
      duration: "2 Years (4 Semesters)",
      annualFee: "₹40,000 per year",
      annualIntake: "30 Seats",
      eligibility: "B.Com or equivalent graduation with minimum 50% marks",
      overview: "The Master of Commerce (M.Com) programme at IIMT is a postgraduate programme that deepens the student's understanding of advanced commerce, financial management, corporate governance, and research methods.\n\nM.Com graduates are positioned for senior roles in finance, teaching, research, and corporate planning. The programme is ideal for students pursuing NET/JRF for academic careers.",
      curriculumStructure: "Semester 1-2: Advanced Financial Accounting, Business Environment, Research Methodology, Corporate Tax Planning, Managerial Economics\n\nSemester 3-4: Securities & Capital Markets, International Finance, Dissertation / Major Project, Electives in Specialisation Area",
      careerScope: "M.Com graduates occupy roles in Corporate Finance, Investment Banking, Academic Research, and CA/ICWA offices. Many pursue UGC NET/JRF to enter academia.\n\nInstitutions like Deloitte, RBI, SEBI, and state PSUs recruit M.Com postgraduates from IIMT.",
      slug: "mcom"
    },
    {
      programName: "B.Ed",
      duration: "2 Years (4 Semesters)",
      annualFee: "₹60,000 per year",
      annualIntake: "100 Seats",
      eligibility: "Graduation in any subject with minimum 50% marks",
      overview: "The Bachelor of Education (B.Ed) programme at IIMT is approved by the National Council for Teacher Education (NCTE) and affiliated to CCS University, Meerut. This professional teacher training programme equips graduates with the pedagogical skills, subject knowledge, and teaching methodologies required to excel in secondary and senior secondary education.\n\nThe 2-year curriculum includes extensive school internship placements in affiliated schools across Greater Noida — providing real classroom experience under expert supervision.",
      curriculumStructure: "Year 1: Childhood and Growing Up, Contemporary India and Education, Learning and Teaching, Language Across the Curriculum, Understanding Disciplines & Subjects, School Internship I\n\nYear 2: Gender, School and Society, Knowledge and Curriculum, Assessment for Learning, Creating Inclusive School, Specialisation Pedagogy Subjects, School Internship II",
      careerScope: "B.Ed graduates are eligible to teach at secondary and senior secondary schools (Classes 6-12) across India. Teaching opportunities exist in CBSE, ICSE, state board schools, both private and government.\n\nRecent B.Ed graduates from IIMT have joined Delhi Public School, Ryan International, KV, and various state government schools through TET/CTET qualifying examinations.",
      slug: "bed"
    },
    {
      programName: "M.Ed",
      duration: "2 Years (4 Semesters)",
      annualFee: "₹55,000 per year",
      annualIntake: "50 Seats",
      eligibility: "B.Ed with minimum 55% marks",
      overview: "The Master of Education (M.Ed) programme at IIMT is the highest professional qualification for educators, approved by NCTE. It trains educational administrators, researchers, teacher educators, and curriculum specialists to reform and lead educational institutions.\n\nM.Ed graduates are well-positioned for senior roles in school administration, teacher training institutions (DIETs, CTEs), and educational policy bodies.",
      curriculumStructure: "Year 1: Education in Emerging Indian Society, Educational Research & Statistics, Philosophical Perspectives in Education, Psychological Perspectives in Education, Sociological Perspectives\n\nYear 2: Educational Administration & Management, Curriculum Development, ICT in Education, Specialisation Elective, Dissertation / Research Project",
      careerScope: "M.Ed graduates work as Teacher Educators, Educational Administrators, Curriculum Designers, Educational Consultants, and Researchers. They are eligible for Lecturer/Assistant Professor posts in B.Ed colleges and are NET/JRF qualified for academic research roles.",
      slug: "med"
    }
  ]);
  console.log('✅ Seeded: Courses');

  // ─── 4. CAMPUS LIFE ──────────────────────────────────────────────────────────
  await IimtCampusLife.deleteMany({});
  await IimtCampusLife.create({
    infrastructure: {
      content: "IIMT's campus in Knowledge Park-III, Greater Noida, is spread across a well-designed green area featuring smart classrooms, air-conditioned labs, a state-of-the-art library, indoor and outdoor sports facilities, hostels, and a large auditorium. The campus is fully Wi-Fi enabled with CCTV surveillance throughout.\n\nModern infrastructure includes advanced computer laboratories, smart projector-equipped classrooms, dedicated faculty research rooms, seminar halls, and a vibrant student commons area.",
      imageUrl: "/assets/hero-campus.jpg",
      specs: [
        { label: "Location", value: "Knowledge Park-III, Greater Noida" },
        { label: "Campus Area", value: "5+ Acres" },
        { label: "Connectivity", value: "100 Mbps Wi-Fi" },
        { label: "Security", value: "24/7 CCTV & Security Guard" },
      ]
    },
    itLab: {
      content: "The IT labs at IIMT are designed to provide hands-on computing experience for students across all programmes. Equipped with 120+ systems with the latest hardware and licensed software, the labs support practical sessions in programming, database management, web development, and accounting software.\n\nBCA students have dedicated access to advanced development environments including VS Code, Eclipse, IntelliJ IDEA, MySQL Workbench, and Python environments. BBA and B.Com students use the labs for Tally ERP, Excel, and Digital Marketing tools.\n\nThe lab infrastructure includes 100 Mbps dedicated internet connectivity, networked printers, UPS backup, and professional IT support. Students can access the labs from 8:30 AM to 5:30 PM, Monday to Saturday.",
      imageUrl: "/assets/hero-campus.jpg",
      specs: [
        { label: "Computers", value: "120+ desktops" },
        { label: "Internet Speed", value: "100 Mbps dedicated" },
        { label: "Software", value: "VS Code, MySQL, Tally, Python" },
        { label: "Timings", value: "8:30 AM – 5:30 PM" },
      ]
    },
    library: {
      content: "The IIMT library serves as the academic backbone of the institution, housing over 15,000 books across management, commerce, computer science, education, and general reference categories. The library subscribes to national and international journals and provides INFLIBNET N-LIST access for digital resources — giving students access to 6,000+ e-journals and e-books.\n\nA spacious reading room accommodates 100+ students simultaneously, providing a quiet, air-conditioned environment for focused study. The library also maintains a dedicated reference section, previous year question papers, and project/dissertation archives for student use.\n\nTimings: Monday to Saturday, 8:00 AM to 6:00 PM. Students can borrow up to 3 books for 14 days.",
      imageUrl: "/assets/students-library.jpg",
      specs: [
        { label: "Total Books", value: "15,000+" },
        { label: "Digital Access", value: "INFLIBNET N-LIST" },
        { label: "E-Journals", value: "6,000+" },
        { label: "Seating", value: "100+ seats" },
      ]
    },
    auditorium: {
      content: "The IIMT auditorium is a fully equipped venue with a seating capacity for 500+ delegates. Featuring professional sound systems, stage lighting, projection screens, and climate control, the auditorium serves as the primary venue for convocations, cultural events, executive talks, and institutional ceremonies.\n\nKshitiz — the annual flagship cultural festival — is hosted in the auditorium, drawing thousands of participants from IIMT and partner institutions. Regular seminars, guest lectures, and inter-college competitions also take place here.",
      imageUrl: "/assets/auditorium.jpg",
      specs: [
        { label: "Seating", value: "500+ seats" },
        { label: "AV Setup", value: "Professional Sound & Lights" },
        { label: "Events", value: "Kshitiz, Seminars, Convocation" },
      ]
    },
    sports: {
      content: "Sports and physical wellbeing are integral to the IIMT experience. The campus features dedicated outdoor facilities for cricket, football, basketball, and athletics, along with indoor facilities for table tennis, carrom, and chess.\n\nThe Annual Sports Meet brings together students from all programmes for inter-department and inter-college competitions. IIMT encourages sports participation through sports scholarships for state and national level achievers, and through the NSSO physical training module integrated into academic schedules.",
      imageUrl: "",
      specs: [
        { label: "Outdoor", value: "Cricket, Football, Basketball" },
        { label: "Indoor", value: "Table Tennis, Chess, Carrom" },
        { label: "Annual Event", value: "Sports Meet" },
      ]
    },
    hostel: {
      content: "IIMT provides separate hostel facilities for boys and girls in close proximity to the campus. Both hostels are supervised by resident wardens, equipped with 24-hour CCTV surveillance, mess facilities offering nutritious meals, Wi-Fi, study rooms, and common recreation areas.\n\nHostel admissions are allocated on a first-come-first-served basis. Students from outside the Delhi NCR region are given priority. The hostels are inspected regularly by the administration and maintain strict standards of hygiene and security.",
      imageUrl: "/assets/hero-campus.jpg",
      specs: [
        { label: "Security", value: "24/7 CCTV & Wardens" },
        { label: "Connectivity", value: "Free Wi-Fi" },
        { label: "Food", value: "Mess & Cafeteria" },
      ]
    },
    culturalActivities: {
      content: "Cultural activities at IIMT are central to student development. The flagship Kshitiz Cultural Festival — held annually — is a three-day celebration of music, dance, drama, art, and innovation. The event attracts participants from colleges across Delhi NCR and has grown into one of the most anticipated student festivals in Greater Noida.\n\nBeyond Kshitiz, IIMT organises regular events including Independence Day and Republic Day celebrations, Teacher's Day programmes, Freshers Welcomes, Farewell galas, inter-departmental competitions, and personality development workshops.",
      imageUrl: "",
      specs: [
        { label: "Flagship Event", value: "Kshitiz Fest" },
        { label: "Activities", value: "Music, Dance, Drama, Arts" },
        { label: "Clubs", value: "Literary, Cultural, Tech" },
      ]
    },
    visitingFaculty: [
      { name: "CA Rakesh Mehta", org: "Mehta & Associates", specialisation: "Advanced Accounting & Taxation", dept: "Commerce" },
      { name: "Mr. Sunil Kapoor", org: "HDFC Bank (Retd. VP)", specialisation: "Banking Operations & Risk Management", dept: "Management" },
      { name: "Ms. Deepika Nair", org: "Google India (Sr. Manager)", specialisation: "Digital Marketing & Analytics", dept: "IT" },
      { name: "Dr. Anjali Saxena", org: "DPS Greater Noida (Principal)", specialisation: "School Administration & Leadership", dept: "Education" },
      { name: "CFA Arun Bhatia", org: "Axis Capital", specialisation: "Investment Analysis & Portfolio Mgmt", dept: "Commerce" },
      { name: "Mr. Rajiv Tandon", org: "Infosys (Project Lead)", specialisation: "Software Development & Agile", dept: "IT" },
      { name: "Dr. Preeti Malhotra", org: "NCERT (Sr. Researcher)", specialisation: "Curriculum Design & Assessment", dept: "Education" },
      { name: "Mr. Harsh Vardhan", org: "Startup Founder, eVentures", specialisation: "Entrepreneurship & Business Strategy", dept: "Management" }
    ]
  });
  console.log('✅ Seeded: Campus Life');

  // ─── 5. ADMISSIONS ───────────────────────────────────────────────────────────
  await IimtAdmissions.deleteMany({});
  await IimtAdmissions.create({
    enquiryPage: {
      introText: "Choosing the right institution is a significant decision. At IIMT, we offer personal guidance to help you navigate your academic and career path. Whether you are curious about our programmes, eligibility, or campus life, our admissions team is here to provide all the information you need.",
      counsellingPoints: [
        "Eligibility Assessment",
        "Career Fit Analysis",
        "Detailed Fee Breakdown",
        "Scholarship Guidance"
      ],
      onlinePortalText: "For your convenience, our online admissions portal allows you to track your application, upload documents, and pay fees digitally, ensuring a low-friction admission experience from anywhere."
    },
    howToApply: [
      { step: "01", title: "Check Eligibility", desc: "Confirm you meet the minimum qualification: 10+2 for UG programmes, Graduation for PG/B.Ed, B.Ed for M.Ed. Minimum marks vary by programme." },
      { step: "02", title: "Appear for Entrance Exam", desc: "Apply for CUET (UG/PG) or JEECUP as applicable. For B.Ed/M.Ed, apply through UP Joint B.Ed counselling portal." },
      { step: "03", title: "UP State Counselling", desc: "Register on the UP state counselling portal, choose IIMT as your preferred institution, and lock your seat when allotted." },
      { step: "04", title: "Document Verification", desc: "Visit IIMT campus with original documents: marksheets, transfer certificate, migration certificate, category certificate (if applicable), passport-size photographs." },
      { step: "05", title: "Fee Payment & Confirmation", desc: "Pay the first-year fee through the online portal (fee.ishan.ac) or at the campus counter. Collect your admission confirmation and ID card." },
    ],
    documents: [
      { docName: "10th & 12th Marksheets (original + 2 copies)" },
      { docName: "Graduation Marksheets (for PG/B.Ed/M.Ed)" },
      { docName: "Transfer Certificate from last institution" },
      { docName: "Migration Certificate" },
      { docName: "Character Certificate" },
      { docName: "Category Certificate (SC/ST/OBC if applicable)" },
      { docName: "Aadhar Card (original + copy)" },
      { docName: "8 Passport-size Photographs" },
      { docName: "CUET / JEECUP Scorecard" },
      { docName: "Allotment Letter from counselling portal" },
    ],
    alertBanner: {
      title: "Admissions Open for 2025-26",
      content: "Applications are being accepted for all programs. Contact our admissions desk for guidance: 8448797700",
      link: "/contact",
      isActive: true
    },
    admissionContact: {
      phone: "8448797700",
      email: "admissions@ishan.ac",
      address: "Knowledge Park-III, Greater Noida"
    },
    scholarships: [
      { category: "Merit Scholarship", concession: "Up to 25% fee waiver", description: "Automatically applied for students in the top 10% of university examination results. No separate application required." },
      { category: "SC/ST/OBC Scholarship", concession: "As per UP Scholarship Portal norms", description: "Students from reserved categories can apply through scholarship.up.gov.in. IIMT assists in documentation and verification." },
      { category: "Economically Weaker Section", concession: "Partial fee concession", description: "Students with family income below ₹2.5 LPA are eligible. Submit income certificate with admission application." },
      { category: "Sibling Discount", concession: "10% fee waiver", description: "When two or more siblings are enrolled simultaneously at Ishan Group institutions. Inform admissions office during enrolment." },
      { category: "Sports Scholarship", concession: "Up to 15% fee waiver", description: "State or National level sports achievement required. Submit sports certificates during admission process." },
      { category: "Single Girl Child", concession: "5% fee concession", description: "For students who are the sole girl child in their family. Submit affidavit with admission documents." },
    ],
    faqs: [
      { question: "Is IIMT affiliated to CCS University?", answer: "Yes, IIMT is affiliated to Chaudhary Charan Singh (CCS) University, Meerut, for its degree programs." },
      { question: "What are the timings for the admissions office?", answer: "The admissions office is open from Monday to Saturday, 9:00 AM to 5:00 PM." },
      { question: "Can I apply for admission offline?", answer: "Yes, you can visit our campus in Greater Noida to apply offline." },
    ]
  });
  console.log('✅ Seeded: Admissions');

  // ─── 6. PLACEMENTS ───────────────────────────────────────────────────────────
  await IimtPlacements.deleteMany({});
  await IimtPlacements.create({
    heading: "Placements That Speak for Themselves",
    subheading: "Career Outcomes",
    partnersHeading: "Our Recruiting Partners",
    stats: [
      { label: "Placement Rate", value: "90%+", description: "Overall batch placement percentage" },
      { label: "Recruiting Partners", value: "150+", description: "Active companies in recruitment network" },
      { label: "Students Placed", value: "5000+", description: "Alumni successfully placed since establishment" },
      { label: "Highest Package", value: "₹8 LPA", description: "Top salary package secured" },
    ],
    process: [
      { step: "1", desc: "Pre-placement training: resume building, aptitude tests, group discussion, mock interviews" },
      { step: "2", desc: "Company registration and job description sharing with eligible students" },
      { step: "3", desc: "Aptitude test and/or technical assessment by the recruiter" },
      { step: "4", desc: "Group discussion and personal interview rounds" },
      { step: "5", desc: "Offer letter issuance and post-offer onboarding support" },
    ],
    partners: [
      { name: "Barclays", logo: "" }, { name: "HDFC Bank", logo: "" }, { name: "ICICI Bank", logo: "" },
      { name: "Infosys", logo: "" }, { name: "TCS", logo: "" }, { name: "Wipro", logo: "" },
      { name: "Deloitte", logo: "" }, { name: "Amazon", logo: "" }, { name: "Byju's", logo: "" },
      { name: "Kotak Mahindra", logo: "" }, { name: "Axis Bank", logo: "" }, { name: "Genpact", logo: "" },
      { name: "HCL", logo: "" }, { name: "Tech Mahindra", logo: "" }, { name: "Paytm", logo: "" },
    ],
    studentSuccess: [
      { name: "Priya Sharma", company: "HDFC Bank", feedback: "The placement cell prepared me thoroughly for the interviews. Grateful for the support!", photo: "" },
      { name: "Rohit Verma", company: "Infosys", feedback: "Got selected as a Software Engineer at Infosys. The IT lab resources and guidance were key.", photo: "" },
      { name: "Anjali Gupta", company: "Deloitte", feedback: "IIMT gave me the industry exposure and confidence to crack the Deloitte interviews.", photo: "" },
      { name: "Amit Kumar", company: "Amazon", feedback: "Excellent faculty and placement preparation. Proud to be an IIMTian!", photo: "" },
    ],
    eCell: {
      aboutTitle: "Fueling Innovation at IIMT",
      aboutDescription: "The Entrepreneurship Cell at IIMT is established to nurture business creators. We provide a platform for students to ideate, prototype, and pitch their business ideas. Mentored by experienced faculty and industry experts, the E-Cell bridges the gap between academic theory and real-world business execution.",
      offerings: [
        { title: "Business Plan Workshops", description: "Structured sessions to help students transform ideas into viable business models.", icon: "Lightbulb" },
        { title: "Startup Mentorship", description: "Direct access to industry experts and successful alumni entrepreneurs.", icon: "Users" },
        { title: "Pitch Competitions", description: "Platforms to pitch ideas to faculty and industry panels for feedback.", icon: "Trophy" },
        { title: "Incubation Support", description: "Guidance on prototyping, legal registration, and early-stage growth.", icon: "Rocket" }
      ],
      internshipTitle: "Internship Programme",
      internshipDescription: "Our mandatory 4-8 week industry internship programme provides students with essential exposure to corporate environments. The Internship Coordinator facilitates placements across BFSI, IT, Retail, and Manufacturing sectors.",
      internshipPoints: [
        "Dedicated internship placement support",
        "Corporate tie-ups for live projects",
        "Mentored experiential learning"
      ],
      internshipCtaText: "Enquire about Internships",
      internshipCtaLink: "/contact",
      alumniSpotlightTitle: "Entrepreneurial Success Stories",
      alumniSpotlightDescription: "Many IIMT graduates have successfully launched their own ventures, serving as role models for current students. From technology startups to consulting firms, our alumni network continues to inspire the next generation of creators."
    }
  });
  console.log('✅ Seeded: Placements');

  // ─── 7. GALLERY ──────────────────────────────────────────────────────────────
  await IimtGallery.deleteMany({});
  await IimtGallery.create({
    photos: [
      { title: "Campus Life — Main Block", url: "/assets/hero-campus.jpg" },
      { title: "Library — Reading Room", url: "/assets/students-library.jpg" },
      { title: "Auditorium — Main Hall", url: "/assets/auditorium.jpg" },
      { title: "Kshitiz 2025 — Cultural Night", url: "/assets/hero-campus.jpg" },
      { title: "Annual Sports Meet 2025", url: "/assets/students-library.jpg" },
      { title: "IT Lab — BCA Department", url: "/assets/hero-campus.jpg" },
      { title: "Convocation Ceremony 2024", url: "/assets/auditorium.jpg" },
      { title: "Green Campus — Main Entrance", url: "/assets/hero-campus.jpg" },
    ],
    videos: [
      { title: "Campus Tour — IIMT Greater Noida", url: "" },
      { title: "Kshitiz 2025 — Highlights", url: "" },
      { title: "Placement Success Stories 2024", url: "" },
      { title: "Convocation 2024 Ceremony", url: "" },
      { title: "Guest Lecture: Future of AI", url: "" },
      { title: "Sports Day 2025 Highlights", url: "" },
    ],
    pressCoverage: [
      { title: "IIMT Achieves 90% Placement Rate — Times of India", url: "", date: "March 2025" },
      { title: "Kshitiz 2025: Greater Noida's Biggest Student Festival — Hello Greater Noida", url: "", date: "March 2025" },
      { title: "IIMT's Digital Currency Seminar Draws 500+ Students", url: "", date: "March 2025" },
    ]
  });
  console.log('✅ Seeded: Gallery');

  // ─── 8. NEWS EVENTS ──────────────────────────────────────────────────────────
  await IimtNewsEvent.deleteMany({});
  await IimtNewsEvent.create([
    { title: "Awareness Program on Gynecological Disorder", date: "April 15, 2025", location: "IIMT Auditorium", description: "A health awareness session organized for students featuring expert medical practitioners discussing women's health issues and preventive care.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" },
    { title: "Vyaparniti: The Art of Business and Innovation", date: "April 3, 2025", location: "Seminar Hall, IIMT", description: "Annual business competition where students showcase entrepreneurial skills through business plans and case study presentations.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" },
    { title: "Ishan Cultural Fest Kshitiz-2025", date: "March 26, 2025", location: "IIMT Campus", description: "The flagship cultural festival featuring music, dance, drama, art, and inter-college competitions across three days.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" },
    { title: "Digi-Udaya: Seminar on Digital Currency", date: "March 6, 2025", location: "IIMT Auditorium", description: "Expert-led seminar exploring the future of digital currencies, blockchain technology, and their impact on financial systems.", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80" },
    { title: "Annual Sports Meet 2025", date: "February 20, 2025", location: "IIMT Sports Ground", description: "Inter-department sports competition featuring cricket, basketball, badminton, athletics and more.", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80" },
    { title: "Industrial Visit to Reserve Bank of India", date: "February 8, 2025", location: "Reserve Bank of India, New Delhi", description: "B.Com and BBA students visited the RBI facility to understand monetary policy, currency management, and central banking operations.", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80" },
    { title: "Guest Lecture: Career in Data Science", date: "January 22, 2025", location: "Seminar Hall, IIMT", description: "Mr. Amit Sharma from Infosys delivered an insightful session on career opportunities in data science and AI for BCA students.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" },
    { title: "Republic Day Celebration", date: "January 26, 2025", location: "IIMT Campus", description: "Flag hoisting ceremony followed by cultural performances celebrating India's Republic Day with the entire IIMT family.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80" }
  ]);
  console.log('✅ Seeded: News & Events');

  // ─── 9. FEE PAYMENT ──────────────────────────────────────────────────────────
  await IimtFeePayment.deleteMany({});
  await IimtFeePayment.create({
    content: {
      title: "Online Fee Payment Portal",
      instructions: "Pay your semester or annual fee securely through the Ishan Group online payment gateway. Steps:\n\n1. Visit fee.ishan.ac\n2. Select 'IIMT — Ishan Institute of Management & Technology'\n3. Enter your Roll Number or Application Number\n4. Verify your name and programme details\n5. Select the fee component (Tuition Fee, Exam Fee, Hostel Fee)\n6. Pay via Net Banking, UPI, Credit Card, or Debit Card\n7. Download your fee receipt immediately\n\nFor any payment issues, contact the accounts office at: +91-8448797700 or email accounts@ishan.ac",
      link: "https://fee.ishan.ac"
    }
  });
  console.log('✅ Seeded: Fee Payment');

  // ─── 10. STUDENT PORTAL ──────────────────────────────────────────────────────
  await IimtStudentPortal.deleteMany({});
  await IimtStudentPortal.create({
    content: {
      title: "Student Portal — Academic Dashboard",
      instructions: "The IIMT Student Portal gives you 24/7 access to your academic information. Access the following features:\n\n• View your attendance record and percentage\n• Download mark sheets and grade cards\n• Check examination schedule and hall tickets\n• Access course materials and lecture notes\n• View fee payment status and receipts\n• Submit assignments and view feedback\n• Connect with faculty through the messaging module\n\nLogin with your University Roll Number (CCS Number) and the password provided at admission. First-time users must change their password on first login.\n\nFor technical support: helpdesk@ishan.ac or call 8448797700 (Ext. 204)",
      link: "https://student.ishan.ac"
    }
  });
  console.log('✅ Seeded: Student Portal');

  // ─── 11. CONTACT US ──────────────────────────────────────────────────────────
  await IimtContactUs.deleteMany({});
  await IimtContactUs.create({
    mainContact: {
      address: "IIMT — Ishan Institute of Management & Technology, Knowledge Park-III, Greater Noida, Uttar Pradesh 201308",
      phone: "8448797700",
      email: "info@ishan.ac",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2!2d77.49!3d28.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIIMT+Greater+Noida!5e0!3m2!1sen!2sin!4v1"
    },
    collegeContacts: [
      { collegeName: "Admissions Office", phone: "8448797700", email: "admissions@ishan.ac", address: "Ground Floor, IIMT Main Building, Knowledge Park-III" },
      { collegeName: "BBA / B.Com Department", phone: "8448797701", email: "management@ishan.ac", address: "Block A, IIMT Campus" },
      { collegeName: "BCA / IT Department", phone: "8448797702", email: "bca@ishan.ac", address: "Block B, IIMT Campus" },
      { collegeName: "B.Ed / M.Ed Department", phone: "8448797703", email: "education@ishan.ac", address: "Block C, IIMT Campus" },
      { collegeName: "Accounts / Fee Office", phone: "8448797704", email: "accounts@ishan.ac", address: "Administrative Block, Ground Floor" },
      { collegeName: "Placement Cell", phone: "8448797705", email: "placements@ishan.ac", address: "Placement Office, Block A, First Floor" },
    ]
  });
  console.log('✅ Seeded: Contact Us');

  // ─── 12. ACADEMICS ───────────────────────────────────────────────────────────
  await IimtAcademics.deleteMany({});
  await IimtAcademics.create({
    educationOverview: {
      description: "The Education wing of IIMT offers NCTE-approved Bachelor of Education (B.Ed) and Master of Education (M.Ed) programs under CCS University affiliation. Recognized by SCERT, Uttar Pradesh, these programs prepare aspiring teachers with the pedagogical skills, classroom management techniques, and subject expertise required for a successful teaching career. With dedicated pedagogy labs, micro-teaching facilities, ICT-integrated instruction, and a strong network of partner schools for practice teaching, IIMT's education programs stand among the best in the Delhi NCR region.",
      highlights: [
        "NCTE approved institution", "SCERT recognized", "CCS University affiliated",
        "Dedicated pedagogy labs", "Practice teaching at partner schools", "ICT-integrated instruction",
        "Prepares for CTET, UPTET, TGT, PGT", "Micro-teaching lab with video recording"
      ]
    },
    pedagogyLabs: {
      introTitle: "Simulated Classrooms for Future Educators",
      introDesc: "IIMT provides dedicated labs with micro-teaching setups, video recording for self-evaluation, and simulated classroom environments for trainee teachers. These facilities allow students to practice their teaching methodology in a controlled, supportive environment before entering real schools for internships.",
      introPoints: [
        "Confidence building before school internships",
        "Systematic lesson plan development and testing",
        "Culture of peer feedback and reflective practice"
      ],
      facilities: [
        { title: "Micro-teaching Studio", description: "Equipped with recording and playback facilities for self-evaluation and peer feedback.", icon: "Video" },
        { title: "Language Lab", description: "Focuses on communication skills and linguistic proficiency for trainee teachers.", icon: "Monitor" },
        { title: "Science Teaching Lab", description: "Equipped with apparatus for demonstrating scientific concepts in school settings.", icon: "Beaker" },
        { title: "ICT Integration Lab", description: "Training in using digital tools, smart boards, and educational software.", icon: "Monitor" },
        { title: "Resource Material Library", description: "A collection of teaching aids, charts, and models developed by students.", icon: "BookOpen" }
      ],
      practiceTeachingDesc: "Our 20-week supervised placement at partner schools is a cornerstone of the B.Ed and M.Ed programmes. Students engage in lesson plan development, reflective journal maintenance, and receive regular faculty supervision to ensure high standards of pedagogical practice."
    },
    certificatePrograms: {
      introText: "IIMT offers structured certificate programs alongside regular degree courses. These industry-aligned short courses help students develop practical skills that employers actively seek — from accounting software to digital marketing and financial trading. All certificate programs include hands-on training, assessments, and a certificate of completion.",
      programs: [
        { name: "Tally ERP 9 / Prime", duration: "3 Months", fee: "₹5,000", eligibility: "Any student / graduate", desc: "Complete accounting software training covering voucher entries, GST reports, balance sheets, and payroll management." },
        { name: "GST Compliance", duration: "2 Months", fee: "₹3,500", eligibility: "B.Com / BBA students", desc: "Practical training in GST registration, return filing (GSTR-1, 3B, 9), invoice generation, and input tax credit." },
        { name: "Stock Market & Trading", duration: "3 Months", fee: "₹6,000", eligibility: "Any student", desc: "Learn fundamental and technical analysis, demat account operations, mutual funds, and investment strategies." },
        { name: "Digital Marketing", duration: "3 Months", fee: "₹6,000", eligibility: "Any student", desc: "Covers SEO, SEM, social media marketing, Google Ads, email marketing, and analytics using industry tools." },
        { name: "Advanced MS Excel", duration: "1 Month", fee: "₹2,000", eligibility: "Any student", desc: "Pivot tables, VLOOKUP, macros, data visualization, and dashboard creation for business analysis." },
        { name: "Entrepreneurship Development", duration: "2 Months", fee: "₹4,000", eligibility: "BBA / B.Com students", desc: "Business plan development, startup ecosystem, financial modeling, and pitch deck preparation." }
      ]
    }
  });
  console.log('✅ Seeded: Academics');

  // ─── 13. LEARNING & ACTIVITIES ────────────────────────────────────────────────
  await IimtLearning.deleteMany({});
  await IimtLearning.create({
    calendarEvents: [
      { name: "National Seminar on Digital Business", date: "May 15, 2024", venue: "Main Auditorium", category: "Academic", description: "A comprehensive seminar on how digital transformation is reshaping traditional business models." },
      { name: "Kshitiz 2024: Annual Cultural Fest", date: "June 05-07, 2024", venue: "Campus Grounds", category: "Cultural", description: "Our flagship cultural festival featuring music, dance, and arts from across the region." },
      { name: "Mega Placement Drive", date: "May 20, 2024", venue: "Placement Cell", category: "Placement", description: "Annual recruitment event with 30+ corporate partners participating." },
      { name: "Workshop on Python for Data Science", date: "May 10, 2024", venue: "IT Lab 1", category: "Workshop", description: "Hands-on skill development workshop for BCA and interested BBA students." }
    ],
    skillDevelopment: {
      description: "IIMT's Skill Development Cell organizes structured workshops and training sessions every semester, designed to bridge the gap between academic knowledge and professional competence. These programs are mandatory for all students and contribute to their overall personality development.",
      skills: ["Communication Skills & Public Speaking", "Resume Building & Interview Prep", "Leadership & Team Management", "Business Etiquette & Grooming", "Presentation Skills", "Time Management & Goal Setting", "Critical Thinking & Problem Solving", "Emotional Intelligence"]
    },
    debatesGD: {
      description: "At IIMT, we believe the ability to articulate and defend ideas is as important as academic excellence. Regular debates and GD sessions prepare students for corporate interviews, competitive exams, and future leadership roles. This culture of open dialogue helps build confidence, critical thinking, and respectful disagreement.",
      participationPoints: ["Inter-college competitions", "Campus debate society", "Faculty-led workshops", "Alumni mentoring sessions"],
      activities: [
        { title: "Topic-based Debates", description: "Regular sessions on current affairs, economic policies, and ethical dilemmas.", icon: "Mic2" },
        { title: "Management Case GDs", description: "Group discussions centered around real-world business cases and decision-making.", icon: "Briefcase" },
        { title: "Mock CAT GD-PI", description: "Specialized training for students aiming for premium management admissions.", icon: "Trophy" },
        { title: "Extempore Sessions", description: "Spontaneous speaking drills to improve quick thinking and articulation.", icon: "MessageSquare" }
      ],
      pastHighlights: "Our students have consistently won accolades at regional and national debate competitions. Notable wins include the Greater Noida Inter-College Management Debate and the CCS University Zonal Cultural Meet."
    },
    industrialVisits: {
      description: "Industrial visits are a core part of experiential learning at IIMT. Students visit manufacturing plants, financial institutions, tech companies, and government organisations to witness classroom theory in action. These visits are organised semester-wise for all programmes to ensure students stay updated with current industry practices.",
      whyVisitsMatter: [
        "Professional environment exposure helps students adapt to workplace culture early.",
        "Industry networking opportunities with professionals and HR managers during visits.",
        "Organisational culture insights provide clarity on career paths and industry expectations."
      ],
      visits: [
        { company: "Mother Dairy", sector: "FMCG / Manufacturing", program: "B.Com, BBA", year: "2023-24", outcome: "Understanding large-scale logistics, quality control, and supply chain management." },
        { company: "NSE (National Stock Exchange)", sector: "Finance / BFSI", program: "B.Com, M.Com", year: "2023-24", outcome: "Insights into stock market operations, trading mechanisms, and financial regulations." },
        { company: "Yamaha Motors", sector: "Automobile / Tech", program: "BCA, BBA", year: "2022-23", outcome: "Exposure to automated assembly lines and industrial management systems." },
        { company: "Parle-G", sector: "FMCG", program: "BBA", year: "2022-23", outcome: "Learning about mass production processes and brand management in real-time." }
      ]
    },
    guestLectures: {
      description: "IIMT hosts prominent professionals, academics, and industry leaders through guest lectures, national seminars, and conferences. Students gain insights beyond the classroom on topics ranging from finance and marketing to technology and entrepreneurship. These sessions bridge the gap between academic theory and the rapidly evolving industrial landscape.",
      nationalSeminars: "IIMT regularly organises national-level academic events that bring together researchers, practitioners, and students to discuss emerging trends in management, commerce, and education.",
      events: [
        { speaker: "Dr. Arvind Kumar", designation: "Senior Economist, RBI", topic: "Monetary Policy and its Impact on Emerging Markets", date: "Oct 15, 2023", takeaways: "Deep dive into inflation targeting, currency fluctuations, and macro-economic stability." },
        { speaker: "Ms. Neha Sharma", designation: "Marketing Head, Zomato", topic: "Digital First Branding in the Platform Economy", date: "Sep 22, 2023", takeaways: "Understanding consumer data, hyper-local marketing, and brand loyalty in the digital age." },
        { speaker: "Mr. Rajesh V.", designation: "VP HR, Tech Mahindra", topic: "Future of Work: Skills for the 2030 Workplace", date: "Aug 10, 2023", takeaways: "Emphasis on emotional intelligence, remote collaboration, and lifelong learning." }
      ]
    }
  });
  console.log('✅ Seeded: Learning & Activities');

  console.log('\n🎉 IIMT seed complete. All collections populated.');
  await mongoose.disconnect();
  process.exit(0);
}

seed().catch(err => {
  console.error('❌ Seed failed:', err);
  process.exit(1);
});

