const mongoose = require('mongoose');
require('dotenv').config();
const { IimtStudentZone } = require('./models/iimtModels');

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");

    await IimtStudentZone.deleteMany({});

    await IimtStudentZone.create({
      downloads: {
        pageTitle: "Downloads",
        pageSubtitle: "Timetables, syllabi, forms, and notices for current students",
        files: [
          { name: "BBA Syllabus 2024-25", fileType: "PDF", category: "Syllabus", size: "2.4 MB" },
          { name: "B.Com Syllabus 2024-25", fileType: "PDF", category: "Syllabus", size: "1.8 MB" },
          { name: "BCA Syllabus 2024-25", fileType: "PDF", category: "Syllabus", size: "2.1 MB" },
          { name: "Academic Calendar 2024-25", fileType: "PDF", category: "Calendar", size: "850 KB" },
          { name: "Examination Form", fileType: "PDF", category: "Forms", size: "320 KB" },
          { name: "Hostel Application Form", fileType: "PDF", category: "Forms", size: "280 KB" },
          { name: "Scholarship Application Form", fileType: "PDF", category: "Forms", size: "350 KB" },
          { name: "Anti-Ragging Undertaking", fileType: "PDF", category: "Forms", size: "210 KB" }
        ]
      },
      pastPapers: {
        pageTitle: "Past Exam Papers",
        pageSubtitle: "Access previous years' question papers for comprehensive exam preparation.",
        subheading: "Exam Resources",
        heading: "Prepare with Confidence",
        description: "Access previous years' CCS University question papers for B.Com, BBA, BCA, M.Com, B.Ed, and M.Ed. These are invaluable resources for understanding exam patterns and frequently asked questions. Papers are organised by programme, semester, and year.",
        footerText: "New papers are added after each CCS University examination cycle.",
        papers: [
          { program: "B.Com", year: "2023", name: "Sem 1 - Financial Accounting", size: "1.2 MB" },
          { program: "BBA", year: "2023", name: "Sem 2 - Business Management", size: "1.5 MB" },
          { program: "BCA", year: "2023", name: "Sem 1 - Programming in C", size: "2.1 MB" },
          { program: "M.Com", year: "2022", name: "Sem 4 - Advanced Auditing", size: "1.8 MB" },
          { program: "B.Ed", year: "2023", name: "Sem 1 - Pedagogy of English", size: "1.4 MB" },
          { program: "M.Ed", year: "2022", name: "Sem 2 - Educational Research", size: "2.5 MB" }
        ]
      },
      codeOfConduct: {
        pageTitle: "Code of Conduct",
        pageSubtitle: "Discipline, ethics, and professional behavior expected from every student",
        content: `<p>The Code of Conduct at IIMT sets out the expectations for student behaviour, ensuring a safe, respectful, and academically rigorous environment. Students are expected to maintain professional decorum, respect faculty and peers, and uphold the academic integrity of the institution. Violations of the code may result in disciplinary action.</p>
<h2>1. General Conduct</h2>
<p>Students are expected to maintain decorum and dignity within the campus premises at all times. Respectful behaviour towards faculty, staff, and fellow students is mandatory. Any form of misconduct, including bullying, verbal abuse, or physical altercation, will result in disciplinary action as per the institution's disciplinary committee guidelines.</p>
<h2>2. Dress Code</h2>
<p>Students must adhere to the prescribed dress code during academic hours. Formal attire is required on presentation days and during campus recruitment drives. The institution may prescribe uniforms for specific departments or events. Students not complying with the dress code may be denied entry to classrooms.</p>
<h2>3. Attendance</h2>
<p>A minimum of 75% attendance is mandatory for each subject as per CCS University regulations. Students falling below the minimum threshold may not be permitted to appear for university examinations. Medical leave must be accompanied by a valid medical certificate submitted within 7 days.</p>
<h2>4. Academic Integrity</h2>
<p>Plagiarism, cheating, copying, or any form of academic dishonesty is strictly prohibited. Students found engaging in unfair means during examinations will face immediate disqualification from the examination and may be subject to further disciplinary proceedings including suspension.</p>
<h2>5. Use of Mobile Phones</h2>
<p>Mobile phones must be switched off or kept on silent mode during lectures and examinations. Use of mobile phones for recording lectures without permission is prohibited. The institution is not responsible for loss or theft of personal electronic devices.</p>
<h2>6. Anti-Ragging</h2>
<p>As per UGC regulations and Supreme Court directives, ragging in any form — physical, verbal, or psychological — is a criminal offence. IIMT maintains zero tolerance towards ragging. Offenders will face immediate expulsion, FIR registration, and criminal prosecution. Report ragging: Anti-Ragging Helpline 1800-180-5522.</p>`
      },
      antiRagging: {
        pageTitle: "Anti-Ragging Zone",
        pageSubtitle: "Zero tolerance policy — UGC mandate for student safety",
        helplinePhone: "1800-180-5522",
        content: `<p>As per the directions of the Hon'ble Supreme Court of India and UGC Regulations on Curbing the Menace of Ragging, IIMT maintains an absolute zero-tolerance policy against ragging in any form — physical, mental, verbal, or psychological. Ragging is a criminal offence under the Indian Penal Code and can lead to expulsion, criminal prosecution, imprisonment, and fine.</p>
<h2>Anti-Ragging Committee</h2>
<p>The committee comprises senior faculty members, administrative officers, and student representatives who monitor campus activities, conduct regular awareness programs, and handle complaints with strict confidentiality. The committee meets monthly and submits reports to the university and UGC.</p>
<h2>How to Report</h2>
<ol>
<li>Call the UGC Anti-Ragging Helpline: 1800-180-5522 (toll-free, 24x7)</li>
<li>Email: antiragging@ishan.ac</li>
<li>Submit a written complaint to the Anti-Ragging Committee (confidential)</li>
<li>Visit the Director's office during working hours</li>
<li>Report online at www.antiragging.in</li>
</ol>
<h2>Student Pledge</h2>
<p>Every student at IIMT is required to sign the anti-ragging undertaking at the time of admission. This pledge confirms that the student will not engage in any form of ragging and understands the consequences of violation including immediate expulsion and criminal proceedings.</p>`
      },
      grievanceRedressal: {
        pageTitle: "Grievance Redressal",
        pageSubtitle: "Structured process for addressing student and stakeholder concerns",
        content: `<p>As mandated by the University Grants Commission, IIMT has established a comprehensive Grievance Redressal Mechanism to address concerns related to academic matters, administrative processes, campus facilities, and interpersonal issues. Our goal is to resolve all grievances within 7 working days through a transparent and fair process.</p>
<h2>Grievance Process</h2>
<ol>
<li>Submit a written complaint to the Grievance Redressal Cell or email grievance@ishan.ac</li>
<li>Complaint acknowledged within 24 hours with a reference number</li>
<li>Investigation conducted by the committee with confidentiality maintained</li>
<li>Resolution communicated to the complainant within 7 working days</li>
<li>If unsatisfied, escalate to the Director with original reference number</li>
<li>Final appeal to the Vice Chancellor of CCS University if resolution is inadequate</li>
</ol>`
      },
      privacyPolicy: {
        pageTitle: "Privacy Policy",
        pageSubtitle: "",
        content: `<p>Ishan Educational Group ("we," "us," "our") is committed to protecting the privacy of visitors to our websites (ishan.ac and all sub-sites including iimt.ishan.ac). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit forms.</p>
<h2>Information We Collect</h2>
<p>We may collect personal information that you voluntarily provide when filling out enquiry forms, admission applications, feedback forms, or fee payment portals. This includes: name, email address, phone number, mailing address, date of birth, educational qualifications, and payment information.</p>
<h2>How We Use Your Information</h2>
<p>We use the information collected to: process admission applications, respond to enquiries, send academic communications, process fee payments, improve our website and services, comply with legal obligations, and maintain student records as required by UGC and university regulations.</p>
<h2>Cookies</h2>
<p>Our website may use cookies to enhance user experience. Cookies are small files stored on your device that help us understand website usage patterns. You may disable cookies through your browser settings, though this may affect certain website functionalities.</p>
<h2>Data Security</h2>
<p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is 100% secure.</p>
<h2>Contact Us</h2>
<p>For questions about this Privacy Policy, contact us at info@ishan.ac or write to: Ishan Educational Group, Knowledge Park-III, Greater Noida, UP 201308.</p>`
      }
    });

    console.log("✅ Seeded: Student Zone");
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
    mongoose.disconnect();
  }
}

seed();
