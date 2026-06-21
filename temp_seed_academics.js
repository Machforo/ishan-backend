require('dotenv').config();
const mongoose = require('mongoose');
const { IimtCourse, IimtAcademics, IimtAdmissions } = require('./models/iimtModels');

mongoose.connect(process.env.MONGODB_URI).then(async () => {
  console.log('Connected to MongoDB.');

  // 1. Seed Courses
  await IimtCourse.deleteMany({});
  const fallbackCourses = [
    {
      programName: "BBA (Bachelor of Business Administration)",
      duration: "3 Years (Full-time)",
      eligibility: "10+2 from any recognized board. CUET/Entrance based.",
      annualIntake: "60 Seats",
      annualFee: "₹60,000",
      overview: "The Bachelor of Business Administration (BBA) at IIMT is designed to nurture future business leaders and entrepreneurs. The programme provides a strong foundation in core business disciplines including Marketing, Finance, HR, and Operations. We emphasize practical learning through case studies, industrial visits, and regular interactions with industry veterans in Knowledge Park, Greater Noida.",
      curriculumStructure: "The 3-year programme follows the CCS University curriculum, integrated with IIMT's professional development modules. Key subjects include Management Principles, Business Communication, Financial Accounting, Marketing Management, and Organizational Behaviour. Students also undertake a mandatory industry internship in their final year.",
      careerScope: "BBA graduates can explore diverse roles in corporate sectors, including Management Trainee, Marketing Executive, Business Analyst, and HR Assistant. It also serves as a perfect stepping stone for pursuing an MBA or launching your own startup venture.",
      slug: "bba"
    },
    {
      programName: "BCA (Bachelor of Computer Applications)",
      duration: "3 Years (Full-time)",
      eligibility: "10+2 with Mathematics (preferred). CUET/Entrance based.",
      annualIntake: "60 Seats",
      annualFee: "₹65,000",
      overview: "Our BCA programme is a launchpad for a successful career in the rapidly evolving IT industry. We focus on providing deep technical knowledge alongside practical programming skills. With state-of-the-art computer labs and a curriculum aligned with modern tech trends, IIMT ensures that BCA students are ready for the digital-first economy.",
      curriculumStructure: "The curriculum covers core areas like Programming in C/C++, Java, Database Management Systems, Web Development, and Software Engineering. Students also gain exposure to emerging technologies like Python and Data Science through specialized workshops and live lab sessions.",
      careerScope: "Graduates can pursue careers as Software Developers, Web Developers, System Analysts, Database Administrators, and IT Consultants. Many of our students also progress to MCA or specialized masters in Data Science and AI.",
      slug: "bca"
    },
    {
      programName: "B.Com (Bachelor of Commerce)",
      duration: "3 Years (Full-time)",
      eligibility: "10+2 from any recognized board. Merit-based.",
      annualIntake: "120 Seats",
      annualFee: "₹45,000",
      overview: "The B.Com programme at IIMT offers a comprehensive understanding of accounting, finance, and business laws. It is designed for students aiming for careers in banking, financial services, and corporate accounting. Our faculty brings a blend of academic rigor and professional insights from the world of commerce and taxation.",
      curriculumStructure: "The programme follows the CCS University framework, covering subjects like Financial Accounting, Corporate Law, Auditing, Income Tax, and Macro-economics. We supplement this with workshops on Tally, GST, and advanced Excel to enhance employability.",
      careerScope: "B.Com graduates find opportunities in Banking, Insurance, Accounting firms, and Corporate Finance departments. It is an ideal foundation for professional certifications like CA, CS, and CMA, as well as for pursuing an M.Com or MBA.",
      slug: "bcom"
    },
    {
      programName: "M.Com (Master of Commerce)",
      duration: "2 Years (Full-time)",
      eligibility: "B.Com / BBA / Graduate with Commerce background. Merit-based.",
      annualIntake: "30 Seats",
      annualFee: "₹50,000",
      overview: "Our M.Com programme is designed for advanced learning in commerce and research methodologies. It caters to students aspiring for careers in higher education, specialized accounting, and research. IIMT provides an environment that encourages critical inquiry and academic excellence in the field of commerce.",
      curriculumStructure: "The 2-year programme covers advanced topics in Financial Management, Research Methodology, Marketing Research, and Strategic Management. Students are required to complete a research project/dissertation as part of their final assessment.",
      careerScope: "Graduates are well-prepared for roles in academic research, teaching (post-NET/JRF), senior accounting positions, and financial consultancy. It also provides a strong base for pursuing a Ph.D. in Commerce or Management.",
      slug: "mcom"
    },
    {
      programName: "B.Ed (Bachelor of Education)",
      duration: "2 Years (Full-time)",
      eligibility: "Graduate/Post-graduate with 50% marks. UP Joint B.Ed Entrance qualified.",
      annualIntake: "100 Seats",
      annualFee: "₹51,250",
      overview: "The B.Ed programme at IIMT is dedicated to nurturing highly skilled and compassionate educators. Approved by NCTE and affiliated with CCS University, we emphasize pedagogical innovation, psychological foundations of education, and reflective teaching practices. Our Pedagogy Labs and micro-teaching setups provide the perfect training ground for future teachers.",
      curriculumStructure: "The programme includes theory papers on Educational Psychology, Contemporary India and Education, and Pedagogy of School Subjects. A cornerstone of the course is the 20-week supervised practice teaching programme in partner schools, ensuring real classroom exposure.",
      careerScope: "Graduates are eligible for teaching positions in secondary and senior secondary schools across India (CTET/TET qualified). They can also work as educational consultants, curriculum designers, and academic coordinators.",
      slug: "bed"
    },
    {
      programName: "M.Ed (Master of Education)",
      duration: "2 Years (Full-time)",
      eligibility: "B.Ed / B.A. B.Ed / B.Sc. B.Ed with 50% marks. University Entrance based.",
      annualIntake: "50 Seats",
      annualFee: "₹60,000",
      overview: "Our M.Ed programme is an advanced professional degree for those seeking leadership roles in education and academic research. We focus on developing expertise in educational administration, curriculum development, and advanced research techniques. IIMT's M.Ed scholars are trained to lead and innovate in the educational ecosystem.",
      curriculumStructure: "The curriculum includes advanced study of Educational Philosophy, Sociology of Education, Information & Communication Technology in Education, and Teacher Education. A significant portion of the programme is dedicated to independent research through a Master's dissertation.",
      careerScope: "M.Ed graduates are prepared for careers as Teacher Educators in B.Ed/D.El.Ed colleges, Educational Administrators, Curriculum Specialists, and Researchers in government and private educational organizations.",
      slug: "med"
    },
  ];
  await IimtCourse.insertMany(fallbackCourses);
  console.log('✅ Seeded: Courses');

  // 2. Seed Academics (Education Overview, Pedagogy Labs, Certificates)
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

  // 3. Update Admissions (Enquiry Page)
  await IimtAdmissions.updateOne({}, {
    $set: {
      enquiryPage: {
        introText: "Choosing the right institution is a significant decision. At IIMT, we offer personal guidance to help you navigate your academic and career path. Whether you are curious about our programmes, eligibility, or campus life, our admissions team is here to provide all the information you need.",
        counsellingPoints: [
          "Eligibility Assessment",
          "Career Fit Analysis",
          "Detailed Fee Breakdown",
          "Scholarship Guidance"
        ],
        onlinePortalText: "For your convenience, our online admissions portal allows you to track your application, upload documents, and pay fees digitally, ensuring a low-friction admission experience from anywhere."
      }
    }
  }, { upsert: true });
  console.log('✅ Seeded: Admissions Enquiry');

  mongoose.disconnect();
}).catch(console.error);
