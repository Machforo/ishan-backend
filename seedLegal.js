require('dotenv').config();
const mongoose = require('mongoose');
const { LegalHomePage, LegalProgram, LegalTestimonial, LegalNews, LegalFaculty, LegalFAQ, LegalInfrastructure, LegalFooter, LegalNavbar, LegalAboutUs, LegalMandatoryDisclosure, LegalProgramsOverview, LegalCertificateOverview, LegalCertificate, LegalInternshipExternship, LegalMootCourt, LegalAidCell, LegalSkillDevelopment, LegalDebatesGD, LegalCulturalActivities, LegalAdmission, LegalFeePayment } = require('./models/legalModels');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // 1. Seed LegalHomePage
    const homeData = {
      banners: [
        {
          heading: "Forge Your Legacy in",
          subheading: "India's Courtrooms",
          image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg",
          ctaText: "Our Law Programs",
          ctaLink: "/programs-overview"
        },
        {
          heading: "Learn Law by",
          subheading: "Practicing It",
          image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-5.jpg",
          ctaText: "Clinical Training",
          ctaLink: "/moot-court"
        }
      ],
      stats: [
        { label: "Successful Alumni", value: "3000+" },
        { label: "Expert Faculty", value: "50+" },
        { label: "Library Books", value: "20000+" },
        { label: "Moot Court Rooms", value: "3" }
      ],
      brands: [
        { name: "Bar Council of India", logo: "https://law.ishan.ac/all-law/home-page/Logo_of_Bar_Council_of_India.png" },
        { name: "CCS University", logo: "https://law.ishan.ac/images/home/regulatory-4.png" },
        { name: "NAAC", logo: "https://law.ishan.ac/all-law/home-page/naac-2.png" },
        { name: "UGC", logo: "https://law.ishan.ac/static/about/approvals/UGC_India_Logo.png" }
      ],
      aboutSnippet: {
        title: "Ishan Law Institute",
        content: "We are committed to providing top-tier legal education that prepares our students to excel in every sphere of the legal profession. Through our modern pedagogy, comprehensive moot court training, and focus on ethical law practice, our graduates are highly sought after by top firms and chambers.",
        image: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-11.jpg"
      },
      whyIshanObj: {
        title: "What Makes Ishan Law Stand Apart",
        description: "At Ishan Law Institute, we bridge the gap between classroom theory and courtroom reality. Our focus on clinical legal education ensures that every student graduates with the confidence of a seasoned professional."
      },
      whyIshan: [
        { title: "Clinical Legal Education", description: "Learn through hands-on practice via mandatory court visits and legal aid clinics.", icon: "" },
        { title: "Specialized Infrastructure", description: "State-of-the-art moot court halls and well-equipped digital research libraries.", icon: "" },
        { title: "Experienced Faculty", description: "Learn from academicians, seasoned advocates, and retired judges.", icon: "" }
      ],
      placements: {
        heading: "From Classrooms to Courtrooms",
        subheading: "Our placement cell provides end-to-end guidance for roles in Corporate Law, Judiciary, and Advocacy.",
        stats: [
          { label: "Placement Rate", value: "95%" },
          { label: "Top Recruiters", value: "40+" }
        ],
        recruitingPartners: [
          { name: "Khaitan & Co" },
          { name: "Amarchand Mangaldas" },
          { name: "Trilegal" },
          { name: "Luthra & Luthra" }
        ]
      },
      facultyConfig: {
        title: "Eminent Faculty & Mentors",
        subheading: "Academic Leaders",
        description: "Our faculty members are distinguished legal scholars and practicing advocates from the High Courts and Supreme Court, dedicated to nurturing the next generation of judicial leaders through practice-oriented mentorship."
      },
      newsConfig: {
        title: "News & Events",
        subheading: "Latest Updates"
      },
      contactUs: {
        title: "Begin Your Legal Career at Ishan Law Institute",
        content: "Admissions are open for the session 2025-26. Connect with our admission counselors to discuss your career in law and clarify your doubts about eligibility and the application process.",
        phone: "8448797700",
        address: "Knowledge Park III, Greater Noida — Delhi NCR",
        workingHours: "Mon – Sat: 9:00 AM – 5:00 PM"
      },
      gallery: [
        { image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg" },
        { image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-5.jpg" },
        { image: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-11.jpg" },
        { image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-8.jpg" }
      ]
    };

    await LegalHomePage.deleteMany({});
    await LegalHomePage.create(homeData);
    console.log('Seeded LegalHomePage');

    // 2. Seed Programs
    await LegalProgram.deleteMany({});
    await LegalProgram.insertMany([
      {
        name: "BA LLB (Hons)",
        slug: "ba-llb",
        duration: "5 Years (Integrated)",
        eligibility: "10+2 with 45% marks (General), 42% (OBC), 40% (SC/ST). CLAT/LSAT/Ishan Entrance.",
        annualIntake: "120 Seats",
        annualFee: "₹60,000",
        overview: "The integrated BA LLB (Hons) at Ishan Law Institute is a flagship 5-year professional program that seamlessly blends liberal arts with legal scholarship. It is meticulously designed for students who want to enter the legal profession immediately after school. The program combines subjects like Political Science, Sociology, and Economics with core Law subjects, providing a holistic understanding of the law within its social context.",
        curriculumStructure: "The program follows the CCS University and BCI curriculum. Initial years focus on pre-law subjects and foundational legal principles. Later years dive deep into specialized areas such as Constitutional Law, IPR, Criminal Law, and Corporate Jurisprudence, with mandatory Moot Court and Legal Aid training.",
        curriculum: "Comprehensive blend of Arts and Law.",
        careerScope: "Graduates can enroll as advocates, appear for Judicial Services (PCS-J), work in top-tier Law Firms, join corporate legal departments, or pursue careers in Civil Services and international organizations.",
        image: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-1.jpg"
      },
      {
        name: "LLB",
        slug: "llb",
        duration: "3 Years (Professional)",
        eligibility: "Graduation in any discipline with 45% marks (General), 42% (OBC), 40% (SC/ST).",
        annualIntake: "120 Seats",
        annualFee: "₹50,000",
        overview: "The 3-year LLB program is designed for graduates from any field (Arts, Science, Commerce, etc.) who wish to transition into the legal profession. This intensive course focuses strictly on legal scholarship and professional training. At Ishan Law, we emphasize procedural mastery, clinical education, and the development of advocacy skills required for successful litigation and corporate practice.",
        curriculumStructure: "The curriculum covers substantive and procedural laws including Civil Procedure, Criminal Procedure, Evidence, Property Law, and Professional Ethics. Specialized clinical modules on Drafting, Pleading, and Conveyance ensure that students are practice-ready upon graduation.",
        curriculum: "Core legal subjects and clinical training.",
        careerScope: "LLB graduates are eligible to practice in all Indian courts. They can pursue careers in Litigation, Corporate Law, Legal Process Outsourcing (LPOs), Legal Research, and as Law Officers in various government and private sectors.",
        image: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-11.jpg"
      },
      {
        name: "LLM",
        slug: "llm",
        duration: "2 Years",
        eligibility: "LLB or BA LLB degree from a recognized university with minimum 50% marks.",
        annualIntake: "30 Seats",
        annualFee: "₹80,000",
        overview: "The LLM program is a postgraduate degree designed for law graduates who seek advanced specialization in specific areas of legal research and scholarship. It fosters an environment of critical inquiry, jurisprudential analysis, and academic leadership, preparing students for careers in legal research, academia, and specialized legal consulting.",
        curriculumStructure: "The program offers specializations in fields like Constitutional Law, Criminal Law, and Corporate Law. It includes advanced research methodology, comparative law studies, and a mandatory dissertation project supervised by senior faculty members.",
        curriculum: "Specialized post-graduate legal studies.",
        careerScope: "LLM graduates are primarily suited for academic roles as Professors, legal researchers in think-tanks, specialized consultants in multinational corporations, and for competitive exams like the UGC NET/JRF.",
        image: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-1.jpg"
      }
    ]);
    console.log('Seeded LegalPrograms');

    if (LegalProgramsOverview) {
      await LegalProgramsOverview.deleteMany({});
      await LegalProgramsOverview.create({
        content: "The Ishan Law Institute offers Bar Council of India (BCI) approved Integrated BA LLB (5 Years) and LLB (3 Years) programs affiliated with CCS University, Meerut. Our pedagogical approach focuses on clinical legal education, ensuring students develop strong analytical, research, and advocacy skills. With a state-of-the-art Moot Court Hall, dedicated Legal Aid Cell, and mandatory court visits, Ishan Law provides a comprehensive platform for students to excel in litigation, corporate law, and judicial services.",
        image: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-1.jpg",
        keyPoints: [
          { point: "BCI approved institution" }, { point: "NAAC Accredited" }, { point: "CCS University affiliated" },
          { point: "Clinical Legal Education focus" }, { point: "Mandatory Court & Jail visits" }, { point: "Specialized Moot Court training" },
          { point: "Dedicated Judicial Services Cell" }, { point: "Access to SCC Online & Manupatra" }
        ]
      });
      console.log('Seeded LegalProgramsOverview');
    }

    if (LegalCertificateOverview) {
      await LegalCertificateOverview.deleteMany({});
      await LegalCertificateOverview.create({
        title: "Certificate Programs",
        subtitle: "Specialized legal add-on courses that complement your degree and boost professional readiness",
        content: "Ishan Law offers structured certificate programs alongside regular degree courses. These specialized short courses help students develop practical skills that legal employers actively seek — from cyber law expertise to mediation skills and advanced legal drafting. All certificate programs include hands-on sessions, assessments, and a certificate of completion.",
        image: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-11.jpg"
      });
      console.log('Seeded LegalCertificateOverview');
    }

    if (LegalCertificate) {
      await LegalCertificate.deleteMany({});
      await LegalCertificate.insertMany([
        {
          name: "Cyber Law & Forensics",
          duration: "6 Months",
          fee: "₹15,000",
          eligibility: "Open to law students and graduates",
          desc: "A specialized program covering IT Act, cybercrimes, digital evidence, and data privacy frameworks."
        },
        {
          name: "Intellectual Property Rights",
          duration: "3 Months",
          fee: "₹10,000",
          eligibility: "Undergraduates from any discipline",
          desc: "Focuses on patents, trademarks, copyrights, and their enforcement in the global market."
        }
      ]);
      console.log('Seeded LegalCertificate');
    }

    if (LegalInternshipExternship) {
      await LegalInternshipExternship.deleteMany({});
      await LegalInternshipExternship.create({
        title: "Internship & Externship",
        subtitle: "Bridging the gap between legal theory and practical courtroom application",
        overview: "At Ishan Law Institute, clinical legal education is central to our pedagogy. Our structured Internship & Externship programs connect students with reputed law firms, senior advocates, NGOs, and corporate legal departments. Starting from the second year, students are mandated to complete internships to gain hands-on experience in drafting, pleading, legal research, and courtroom procedures.",
        image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-4.jpg",
        opportunities: [
          { title: "Judicial Clerkships", desc: "Assist honorable judges with legal research and case analysis." },
          { title: "Law Firm Internships", desc: "Gain exposure to corporate law, mergers, and dispute resolution at top firms." },
          { title: "Litigation Externships", desc: "Shadow senior advocates in District Courts and High Courts." },
          { title: "NGO & Legal Aid", desc: "Work with our Legal Aid Cell and partnered NGOs for public interest matters." }
        ]
      });
      console.log('Seeded LegalInternshipExternship');
    }

    if (LegalMootCourt) {
      await LegalMootCourt.deleteMany({});
      await LegalMootCourt.create({
        title: "Moot Court Hall",
        subtitle: "Where legal theory meets the art of advocacy",
        content: "The Moot Court Hall at Ishan Law Institute is the heart of our clinical legal education program. It is designed to provide students with a realistic courtroom experience, bridging the gap between classroom lectures and professional practice. Participation in moot courts is mandatory for all students, ensuring they develop essential skills such as case analysis, legal research, memorial drafting, and oral presentation. Our students are trained to handle pressure, think on their feet, and respect the decorum of the judicial process.",
        image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg",
        items: [
          { icon: "Gavel", title: "Simulated Court Environment", desc: "A meticulously designed hall that replicates the atmosphere of a High Court, complete with judicial benches, witness boxes, and advocacy podia." },
          { icon: "Users", title: "Regular Practice Sessions", desc: "Weekly moot court sessions are integrated into the curriculum, allowing students to sharpen their oral advocacy and legal reasoning skills." },
          { icon: "Scale", title: "National Competitions", desc: "Ishan Law hosts and participates in prestigious National Moot Court Competitions, providing students with exposure to complex legal debates." },
          { icon: "GraduationCap", title: "Expert Mentorship", desc: "Sessions are presided over by practicing senior advocates and retired judges who provide invaluable feedback on courtroom etiquette and legal strategy." }
        ]
      });
      console.log('Seeded LegalMootCourt');
    }

    if (LegalAidCell) {
      await LegalAidCell.deleteMany({});
      await LegalAidCell.create({
        title: "Legal Aid & Advice Cell",
        subtitle: "Committed to access to justice for the marginalized and underprivileged",
        content: "The Legal Aid Cell at Ishan Law Institute embodies our commitment to social justice. Run by law students under the supervision of experienced faculty and practicing advocates, the cell provides free legal counseling to those who cannot afford representation. We believe that legal education is incomplete without an understanding of the socio-legal issues faced by the common man.",
        image: "https://law.ishan.ac/all-law/gallery-photos/outreach/outreach-12.jpeg",
        items: [
          { icon: "HandHeart", title: "Free Legal Counseling", desc: "Providing actionable legal advice and guidance to local communities in Greater Noida regarding property, family, and civil disputes." },
          { icon: "Users", title: "Legal Literacy Camps", desc: "Organizing awareness camps in rural areas to educate citizens about their fundamental rights, labor laws, and women's rights." },
          { icon: "Scale", title: "Lok Adalat Participation", desc: "Students assist in Lok Adalats, observing alternative dispute resolution methods and assisting in the amicable settlement of pending cases." },
          { icon: "Shield", title: "Women & Child Rights", desc: "Special focus on advocating for the protection of women and children, offering support in cases of domestic violence and child labor." }
        ]
      });
      console.log('Seeded LegalAidCell');
    }

    if (LegalSkillDevelopment) {
      await LegalSkillDevelopment.deleteMany({});
      await LegalSkillDevelopment.create({
        title: "Skill Development Programs",
        subtitle: "Beyond the syllabus: Equipping students with practical skills for the modern legal profession",
        content: "A successful legal career requires more than just academic knowledge. At Ishan Law Institute, our Skill Development Programs are curated to enhance the professional readiness of our students. We focus on communication, drafting, negotiation, and technological proficiency, ensuring our graduates are highly competitive in litigation, corporate law, and judicial services.",
        image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-4.jpg",
        items: [
          { icon: "FileText", title: "Advanced Legal Drafting", desc: "Intensive workshops on drafting plaints, written statements, writ petitions, and commercial contracts." },
          { icon: "MessageSquare", title: "Communication Skills", desc: "Training in professional English, public speaking, and argumentation to build confident courtroom advocates." },
          { icon: "Monitor", title: "Legal Tech & Research", desc: "Hands-on training with SCC Online, Manupatra, and AI-driven legal research tools essential for modern practice." },
          { icon: "Briefcase", title: "Alternative Dispute Resolution", desc: "Practical sessions on negotiation, mediation, and arbitration techniques led by certified mediators." }
        ]
      });
      console.log('Seeded LegalSkillDevelopment');
    }

    if (LegalDebatesGD) {
      await LegalDebatesGD.deleteMany({});
      await LegalDebatesGD.create({
        title: "Debates & Group Discussions",
        subtitle: "Fostering critical thinking, quick reasoning, and articulate expression.",
        content: "Debating is fundamental to the legal profession. Ishan Law Institute organizes regular intramural and national-level debates, parliamentary debates, and group discussions. These events are designed to help students articulate their thoughts clearly, structure logical arguments, and respectfully counter opposing viewpoints on complex socio-legal and constitutional issues.",
        image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-3.jpg",
        items: [
          { icon: "Mic", title: "Parliamentary Debates", desc: "Structured debates simulating legislative sessions, allowing students to debate proposed bills and national policies." },
          { icon: "Users", title: "Group Discussions", desc: "Moderated GDs on current legal affairs to improve collaborative problem-solving and communication skills." },
          { icon: "Trophy", title: "National Competitions", desc: "Ishan Law's debate society actively trains and sponsors students to represent the institute at national law university debate tournaments." },
          { icon: "Brain", title: "Extempore Speaking", desc: "On-the-spot speaking challenges to enhance quick thinking and the ability to formulate arguments under time pressure." }
        ]
      });
      console.log('Seeded LegalDebatesGD');
    }

    if (LegalCulturalActivities) {
      await LegalCulturalActivities.deleteMany({});
      await LegalCulturalActivities.create({
        title: "Cultural Activities",
        subtitle: "Celebrating diversity and nurturing holistic student development.",
        content: "At Ishan Law Institute, we believe that academic rigor must be balanced with creative expression. Our cultural calendar is packed with events that celebrate India's rich heritage while providing students a platform to showcase their talents in music, dance, theatre, and arts. These activities foster a sense of community, teamwork, and leadership among students.",
        image: "https://law.ishan.ac/all-law/gallery-photos/events/events-8.jpeg",
        items: [
          { icon: "Music", title: "Annual Fest (Ishan Utsav)", desc: "A multi-day extravaganza featuring inter-college competitions in dance, music, drama, and fine arts." },
          { icon: "Star", title: "Talent Hunts", desc: "Freshers' events designed to discover and nurture the creative talents of newly admitted batches." },
          { icon: "Heart", title: "Festival Celebrations", desc: "Campus-wide celebrations of Diwali, Holi, Eid, and Christmas, promoting cultural harmony and inclusion." },
          { icon: "Palette", title: "Arts & Theatre Society", desc: "Student-led clubs organizing Nukkad Nataks (street plays) and art exhibitions focused on legal awareness and social issues." }
        ]
      });
      console.log('Seeded LegalCulturalActivities');
    }

    if (LegalAdmission) {
      await LegalAdmission.deleteMany({});
      await LegalAdmission.create({
        howToApply: [
          { num: "01", title: "CCS University Registration", desc: "Begin by registering on the official CCS University web-portal. This is the mandatory first step for all students seeking admission to BA LLB and LLB programmes at Ishan Law." },
          { num: "02", title: "Entrance Exam & Registration", desc: "Submit your application form at Ishan Law Institute. Admissions are based on merit in CLAT, LSAT-India, or the Ishan Law Entrance Test (ILET) followed by a personal interview." },
          { num: "03", title: "Personal Interview (PI)", desc: "Shortlisted candidates are invited for a personal interview to assess their aptitude for legal studies, communication skills, and ethical reasoning." },
          { num: "04", title: "Document Verification", desc: "Upon selection, visit our campus in Knowledge Park-III with original documents including marksheets, migration certificates, and character certificates for physical verification." },
          { num: "05", title: "Admission Finalization", desc: "Confirm your seat by submitting the requisite admission fees. Our team will assist you with the final enrollment on the University and Bar Council of India portals." }
        ],
        documents: [
          { docName: "10th & 12th Marksheets (Original + 3 Copies)" },
          { docName: "Graduation Marksheets (for 3-Year LLB)" },
          { docName: "Transfer & Migration Certificates" },
          { docName: "Character Certificate from last institution" },
          { docName: "Aadhar Card (Original + Copy)" },
          { docName: "8 Passport-size Photographs" },
          { docName: "CLAT / LSAT-India / ILET Scorecard" },
          { docName: "Category Certificate (if applicable)" },
          { docName: "Income Certificate (for scholarship applicants)" },
          { docName: "Medical Fitness Certificate" }
        ],
        alertBanner: { title: "Admissions Open for 2025-26", content: "Applications are being accepted for all programs.", isActive: true },
        admissionContact: { phone: "8448797700", email: "admissions@ishan.ac" },
        scholarships: [
          { category: "ILET Merit Scholarship", concession: "Up to 50% Tuition Waiver", description: "Awarded based on the candidate's performance in the Ishan Law Entrance Test (ILET)." },
          { category: "CLAT / LSAT Achievers", concession: "25% to 50% Tuition Waiver", description: "For students with exceptional scores in national level law entrance examinations." },
          { category: "Female Legal Aspirants", concession: "10% Tuition Concession", description: "To promote women in the legal profession, all female candidates receive a direct concession." },
          { category: "Army/Defence Wards", concession: "15% Tuition Concession", description: "Special concession for wards of serving and retired defence personnel." },
          { category: "Alumni Sibling Scholarship", concession: "15% Tuition Concession", description: "For siblings of current or past students of Ishan Educational Institutions." }
        ]
      });
      console.log('Seeded LegalAdmission');
    }

    if (LegalFeePayment) {
      await LegalFeePayment.deleteMany({});
      await LegalFeePayment.create({
        title: "Fee Payment Portal",
        instructions: "Pay tuition fees, hostel charges, and examination fees online through the Ishan Fee Payment Portal. Select Ishan Law as your institution, choose your program (BA LLB / LLB), and complete payment via net banking, UPI, or card. Download your receipt immediately after payment.",
        link: "https://fee.ishan.ac",
        image: "https://law.ishan.ac/static/gallery/infra/infra-6.jpeg"
      });
      console.log('Seeded LegalFeePayment');
    }

    // 3. Seed Faculty
    await LegalFaculty.deleteMany({});
    await LegalFaculty.insertMany([
      { name: "Dr. A. Sharma", designation: "Dean & Professor", department: "Law", qualification: "LLM, PhD", experience: "20 Years", image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg" },
      { name: "Prof. R. Singh", designation: "Associate Professor", department: "Law", qualification: "LLM", experience: "12 Years", image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-5.jpg" }
    ]);
    console.log('Seeded LegalFaculty');

    // 4. Seed Testimonials
    await LegalTestimonial.deleteMany({});
    await LegalTestimonial.insertMany([
      { name: "Rahul Verma", image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg", designation: "Advocate, High Court", feedback: "The rigorous clinical training prepared me to handle real cases confidently.", type: "Alumni" },
      { name: "Priya Singh", image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-5.jpg", designation: "Legal Associate", feedback: "Top-notch faculty and comprehensive moot court sessions.", type: "Alumni" }
    ]);
    console.log('Seeded LegalTestimonial');

    // 5. Seed News
    await LegalNews.deleteMany({});
    await LegalNews.insertMany([
      { title: "National Moot Court Competition 2025", date: "MAR 22", description: "Ishan Law Institute hosts its annual National Moot Court Competition.", link: "/news/moot-court-2025", image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg" },
      { title: "Legal Aid Cell Camp at Greater Noida", date: "FEB 18", description: "Our students served over 50 community members in our latest free legal awareness camp.", link: "/news/legal-aid-camp", image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-7.jpg" }
    ]);
    console.log('Seeded LegalNews');

    // 6. Seed FAQs
    if (LegalFAQ) {
      await LegalFAQ.deleteMany({});
      await LegalFAQ.insertMany([
        { question: "Is Ishan Law Institute approved by BCI?", answer: "Yes, our programs are approved by the Bar Council of India and affiliated with CCS University." },
        { question: "Do you offer placement assistance?", answer: "Yes, we have a dedicated placement cell providing guidance and recruitment opportunities with top law firms." }
      ]);
      console.log('Seeded LegalFAQ');
    }

    // 7. Seed LegalFooter
    if (LegalFooter) {
      await LegalFooter.deleteMany({});
      await LegalFooter.create({
        aboutText: "BCI Approved | Affiliated to CCS University, Meerut | NAAC Accredited. Excellence in legal education and practice-oriented learning.",
        socialLinks: { facebook: "https://facebook.com/ishan.law", instagram: "https://instagram.com/ishan.law", youtube: "https://youtube.com/@ishanlaw", linkedin: "https://linkedin.com/company/ishan-law", twitter: "https://twitter.com/ishan_law" },
        contactInfo: { address: "Knowledge Park-III, Greater Noida, UP 201308", phone: "8448797700", email: "info@ishan.ac" },
        quickLinks: [
          { label: "About Ishan Law", href: "/about" },
          { label: "Law Programs", href: "/programs-overview" },
          { label: "Admissions", href: "/admissions" },
          { label: "Moot Court", href: "/moot-court" },
          { label: "Contact", href: "/contact" }
        ],
        programs: [
          { label: "BA LLB (Hons)", href: "/courses/ba-llb" },
          { label: "LLB (3 Years)", href: "/courses/llb" },
          { label: "LLM (2 Years)", href: "/courses/llm" },
          { label: "Certificate Courses", href: "/certificate-programs" }
        ]
      });
      console.log('Seeded LegalFooter');
    }

    // 8. Seed LegalNavbar
    if (LegalNavbar) {
      await LegalNavbar.deleteMany({});
      await LegalNavbar.create({
        navLinks: [
          {
            label: "About Us",
            featured: {
              img: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-2.jpg",
              title: "Excellence in Legal Education",
              desc: "BCI Approved & NAAC Accredited institution in Greater Noida, dedicated to producing ethical legal professionals.",
              href: "/about",
            },
            columns: [
              {
                heading: "Institution",
                icon: "Building2",
                links: [
                  { label: "About Ishan Law", href: "/about" },
                  { label: "Principal's Message", href: "/principal-message" },
                  { label: "Mission & Vision", href: "/mission-vision" },
                  { label: "Why Choose Us", href: "/why-choose-us" },
                  { label: "Best Practices", href: "/best-practices" },
                  { label: "Green Initiatives", href: "/green-initiatives" },
                  { label: "Approvals & Affiliations", href: "/approvals" },
                  { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
                ],
              },
              {
                heading: "Regulatory",
                icon: "Shield",
                links: [
                  { label: "BCI Compliance", href: "/mandatory-disclosure" },
                  { label: "Anti-Ragging", href: "/anti-ragging" },
                  { label: "Grievance Redressal", href: "/grievance-redressal" },
                  { label: "FAQs", href: "/faqs" },
                ],
              },
            ],
          },
          {
            label: "Our Courses",
            featured: {
              img: "https://law.ishan.ac/all-law/gallery-photos/academics/academics-1.jpg",
              title: "Professional Law Programs",
              desc: "Integrated BA LLB and Professional LLB programs designed for modern legal practice.",
              href: "/programs-overview",
            },
            columns: [
              {
                heading: "Law Programs",
                icon: "GraduationCap",
                links: [
                  { label: "Programs Overview", href: "/programs-overview" },
                  { label: "BA LLB (Hons) - 5 Years", href: "/courses/ba-llb" },
                  { label: "LLB - 3 Years", href: "/courses/llb" },
                  { label: "LLM - 2 Years", href: "/courses/llm" },
                  { label: "Certificate Programs", href: "/certificate-programs" },
                ],
              },
              {
                heading: "Admissions",
                icon: "ArrowRight",
                links: [
                  { label: "Admission Process", href: "/admissions" },
                  { label: "Scholarships", href: "/scholarships" },
                  { label: "Internship & Externship", href: "/internship-externship" },
                  { label: "Fee Structure", href: "/fee-payment" },
                ],
              },
            ],
          },
          {
            label: "Learning",
            featured: {
              img: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg",
              title: "Clinical Legal Education",
              desc: "Beyond textbooks: Moot courts, legal aid clinics, and direct court exposure.",
              href: "/moot-court",
            },
            columns: [
              {
                heading: "Clinical Training",
                icon: "Microscope",
                links: [
                  { label: "Moot Court Sessions", href: "/moot-court" },
                  { label: "Legal Aid Cell", href: "/legal-aid-cell" },
                  { label: "Court & Jail Visits", href: "/court-jail-visits" },
                  { label: "Skill Development", href: "/skill-development" },
                ],
              },
              {
                heading: "Faculty",
                icon: "Users",
                links: [
                  { label: "Faculty Directory", href: "/faculty" },
                  { label: "Visiting Faculty", href: "/visiting-faculty" },
                ],
              },
              {
                heading: "Events",
                icon: "Camera",
                links: [
                  { label: "News & Events", href: "/news-events" },
                  { label: "Debates & GD", href: "/debates-gd" },
                  { label: "Cultural Activities", href: "/cultural-activities" },
                  { label: "Guest Lectures", href: "/guest-lectures" },
                ],
              },
            ],
          },
          {
            label: "Campus",
            featured: {
              img: "https://law.ishan.ac/static/gallery/infra/infra-16.jpg",
              title: "World-Class Infrastructure",
              desc: "Purpose-designed campus with specialized legal library and IT facilities.",
              href: "/infrastructure",
            },
            columns: [
              {
                heading: "Facilities",
                icon: "Building2",
                links: [
                  { label: "Infrastructure", href: "/infrastructure" },
                  { label: "Legal Library", href: "/library" },
                  { label: "IT Lab", href: "/it-lab" },
                  { label: "Auditorium", href: "/auditorium" },
                  { label: "Hostel Facilities", href: "/hostel" },
                  { label: "Sports", href: "/sports" },
                ],
              },
              {
                heading: "Gallery",
                icon: "Camera",
                links: [
                  { label: "Photo Gallery", href: "/photo-gallery" },
                  { label: "Video Gallery", href: "/video-gallery" },
                  { label: "Press Coverage", href: "/press-coverage" },
                ],
              },
            ],
          },
          {
            label: "Student Zone",
            featured: {
              img: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-8.jpg",
              title: "Student Resources",
              desc: "One-stop access to academic materials, portals, and professional placements.",
              href: "/student-portal",
            },
            columns: [
              {
                heading: "Academic Hub",
                icon: "FileText",
                links: [
                  { label: "Downloads", href: "/downloads" },
                  { label: "Past Exam Papers", href: "/past-papers" },
                  { label: "Code of Conduct", href: "/code-of-conduct" },
                  { label: "Student Portal", href: "/student-portal" },
                ],
              },
              {
                heading: "Career & Research",
                icon: "Briefcase",
                links: [
                  { label: "Placements", href: "/placements" },
                  { label: "Research Journal", href: "/research-journal" },
                  { label: "Publications", href: "/publications" },
                  { label: "Alumni Network", href: "/alumni-network" },
                ],
              },
            ],
          },
          {
            label: "Contact Us",
            featured: {
              img: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-7.jpg",
              title: "Get in Touch",
              desc: "Reach out to Ishan Law for admissions, career opportunities, and feedback.",
              href: "/contact",
            },
            columns: [
              {
                heading: "Connect",
                icon: "Phone",
                links: [
                  { label: "Contact Us", href: "/contact" },
                  { label: "Careers", href: "/careers" },
                  { label: "Feedback", href: "/feedback" },
                ],
              },
            ],
          },
        ],
        searchableItems: [
          { name: "About Ishan Law", href: "/about" },
          { name: "BA LLB (Hons)", href: "/courses/ba-llb" },
          { name: "LLB (3 Years)", href: "/courses/llb" },
          { name: "LLM (2 Years)", href: "/courses/llm" },
          { name: "Moot Court", href: "/moot-court" },
          { name: "Legal Aid Cell", href: "/legal-aid-cell" },
          { name: "Admissions", href: "/admissions" },
          { name: "Fee Structure", href: "/fee-payment" },
          { name: "Placements", href: "/placements" },
          { name: "Faculty Directory", href: "/faculty" },
          { name: "Infrastructure", href: "/infrastructure" },
          { name: "Contact Us", href: "/contact" }
        ],
        popularSearches: [
          { text: "BA LLB (Hons)" },
          { text: "LLB (3 Years)" },
          { text: "LLM (2 Years)" },
          { text: "Moot Court" },
          { text: "Admissions" },
          { text: "Placements" },
          { text: "Contact" }
        ]
      });
      console.log('Seeded LegalNavbar');
    }

    if (LegalAboutUs) {
      await LegalAboutUs.deleteMany({});
      await LegalAboutUs.create({
        ourStory: {
          title: "Legacy of Shaping Professional Excellence",
          content: "Established with a vision to revolutionize legal education, Ishan Law Institute stands as a premier center for legal studies in Knowledge Park, Greater Noida. Affiliated with Chaudhary Charan Singh (CCS) University, Meerut, and recognized by the Bar Council of India (BCI), our institution is committed to producing advocates who are not only masters of legal theory but also skilled in the art of practice.\n\nOur curriculum is designed to bridge the gap between classroom learning and courtroom reality. From the very first semester, students are exposed to the living law through mandatory court visits, intensive moot court sessions, and participation in our Legal Aid Cell.",
          image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-2.jpg"
        },
        milestones: [
          { year: "2008", title: "Foundation", event: "Established as a premier center for legal studies.", desc: "Founded with a vision for excellence." },
          { year: "2012", title: "BCI Approval", event: "Received official recognition from the Bar Council of India.", desc: "Approved for professional programs." },
          { year: "2018", title: "Campus Expansion", event: "Inaugurated the state-of-the-art Moot Court Hall.", desc: "Added modern legal facilities." }
        ],
        keyDifferentiators: [
          { title: "BCI Approved Professional Programs" },
          { title: "NAAC Accredited Institution" },
          { title: "Mandatory Court & Jail Visits" },
          { title: "Integrated Legal Aid Clinic" },
          { title: "High-Tech Moot Court Hall" },
          { title: "Digital Legal Research Lab" }
        ],
        principalMessage: {
          name: "Dr. Arvind Singh",
          designation: "Principal, Ishan Law Institute",
          message: "Welcome to Ishan Law Institute. Legal education is not merely about learning the statutes, but about understanding the society and delivering justice. We shape our students to become officers of the court who uphold the highest ethical standards.",
          image: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg"
        },
        missionVision: {
          vision: "To be a globally recognized institution of legal excellence that nurtures ethical, competent, and socially responsible legal professionals.",
          mission: "To impart rigorous legal education integrating theory and practice, to promote legal research and community service, and to instill strong moral values in our students.",
          coreValues: "Excellence\nIntegrity\nJustice\nService\nInnovation",
          image1: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-5.jpg",
          image2: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-7.jpg"
        },
        approvals: [
          { title: "Bar Council of India (BCI)", description: "Approved for BA LLB and LLB programs.", logo: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg" },
          { title: "CCS University", description: "Affiliated for all academic degrees.", logo: "https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-2.jpg" }
        ],
        WhyIshanLaw: {
          content: "Ishan Law Institute is not just an educational centre; it's a launchpad for judicial leaders and advocates. Our commitment to clinical training, moral ethics, and professional excellence sets us apart in the field of legal education.",
          reasons: [
            { title: "Clinical Approach", description: "Learn by doing with our advanced Moot Court setups.", icon: "Gavel" },
            { title: "Expert Faculty", description: "Learn from top advocates and legal scholars.", icon: "Users" },
            { title: "BCI Approved", description: "All our programs are fully recognized by the Bar Council of India.", icon: "Shield" },
            { title: "Moot Court Hall", description: "High-tech courtroom simulations to prepare you for practice.", icon: "Building" },
            { title: "Legal Aid Clinic", description: "Hands-on experience helping the community.", icon: "Heart" },
            { title: "Judicial Services Cell", description: "Dedicated preparation for judicial exams.", icon: "BookOpen" }
          ]
        },
        bestPractices: [
          { title: "Integrated Clinical Legal Education", content: "Starting from the first year, students are exposed to real-world legal proceedings through structured court visits." },
          { title: "Moot Court as a Core Pedagogy", content: "Beyond theoretical lectures, we utilize our high-tech Moot Court Hall for mandatory simulation exercises." },
          { title: "Community Legal Aid & Social Advocacy", content: "Our Legal Aid Cell actively organizes awareness camps in neighboring villages." }
        ],
        greenInitiatives: {
          content: "We prioritize energy efficiency through LED lighting across campus, sensor-based systems in common areas, and a commitment to reducing overall carbon footprint.",
          initiatives: [
            { title: "Energy Conservation", desc: "Solar installations contribute significantly to our renewable energy goals.", stat: "20% Renewable energy", icon: "Sun" },
            { title: "Tree Plantation Drives", desc: "Annual plantation drives are a hallmark of Ishan Law.", stat: "1,500+ trees planted", icon: "TreePine" },
            { title: "Waste Segregation", desc: "Robust waste segregation system ensures proper disposal.", stat: "100% Plastic-free campus", icon: "Recycle" }
          ]
        }
      });
      console.log('Seeded LegalAboutUs All Sections');
    }

    if (LegalMandatoryDisclosure) {
      await LegalMandatoryDisclosure.deleteMany({});
      await LegalMandatoryDisclosure.create({
        statement: "Compliance is strictly adhered to as per BCI regulations.",
        disclosureItems: [
          { category: "Approval Status", items: "Approved by BCI\nAffiliated with CCS University" }
        ],
        antiRagging: {
          helpline: "1800-180-5522",
          content: "As per the directions of the Hon'ble Supreme Court of India and the Bar Council of India / UGC Regulations, Ishan Law Institute maintains an absolute zero-tolerance policy against ragging in any form.",
          committeeText: "Our committee comprises senior faculty advocates, administrative officers, and student representatives who maintain 24/7 vigil across the campus and hostels.",
          reportMethods: [{ method: "Call the National Anti-Ragging Helpline: 1800-180-5522" }, { method: "Email: registrar@ishan.ac" }, { method: "Submit a written complaint to the Anti-Ragging Committee" }]
        },
        grievanceRedressal: {
          content: "Ishan Law Institute is committed to providing a safe, fair, and harmonious environment for all students and staff. Our Grievance Redressal mechanism is designed to address complaints promptly and transparently.",
          portalLink: "https://forms.google.com/grievance-form",
          process: [
            { step: "Step 1: Submission", description: "Students or staff can submit their grievances through the online portal or submit a written application to the Grievance Cell." },
            { step: "Step 2: Preliminary Review", description: "The Grievance Redressal Committee acknowledges receipt within 48 hours and conducts a preliminary review." },
            { step: "Step 3: Hearing & Resolution", description: "A formal hearing is scheduled if necessary, and a resolution is provided within 7-14 working days." }
          ]
        }
      });
      console.log('Seeded LegalMandatoryDisclosure');
    }

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
