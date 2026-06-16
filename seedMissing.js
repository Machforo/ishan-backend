require('dotenv').config();
const mongoose = require('mongoose');
const models = require('./models/legalModels');

const seed = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  // ── Visiting Faculty ──────────────────────────────────────────
  const vfCount = await models.LegalVisitingFaculty.countDocuments();
  if (vfCount === 0) {
    await models.LegalVisitingFaculty.insertMany([
      {
        name: 'Adv. Rajeev Sharma',
        org: 'Senior Advocate, Allahabad High Court',
        specialisation: 'Constitutional Law & Civil Rights',
        impact: 'Adv. Sharma conducts bi-monthly workshops on PIL filing and constitutional remedies, giving students first-hand exposure to landmark advocacy.',
        bar: 'High Court Bar Association Member'
      },
      {
        name: 'Adv. Priya Malhotra',
        org: 'Partner, Malhotra & Associates, New Delhi',
        specialisation: 'Corporate Law & Mergers',
        impact: 'Ms. Malhotra runs intensive sessions on due diligence, corporate drafting, and SEBI compliance, preparing students for top-tier law firm careers.',
        bar: 'FICCI Legal Advisory Panel'
      },
      {
        name: 'Dr. Sanjay Gupta',
        org: 'Retd. District & Sessions Judge, UP',
        specialisation: 'Criminal Law & Judicial Services',
        impact: 'Dr. Gupta trains students specifically for PCS-J (Judicial Services) examinations, focusing on evidence, CrPC, and judgment writing.',
        bar: 'UP Judicial Training Institute'
      },
      {
        name: 'Adv. Kavita Singh',
        org: 'Legal Counsel, NASSCOM',
        specialisation: 'Cyber Law & IP Rights',
        impact: 'Ms. Singh delivers sessions on IT Act 2000, data protection, and cybercrime investigation procedures, essential for modern legal practice.',
        bar: 'Cyber Law Expert Panel, MeitY'
      },
      {
        name: 'Prof. Amarjeet Kaur',
        org: 'Faculty of Law, University of Delhi',
        specialisation: 'International Law & Human Rights',
        impact: 'Prof. Kaur introduces students to international humanitarian law, refugee rights, and India\'s treaty obligations through interactive seminars.',
        bar: 'UN Human Rights Commission Delegate'
      },
      {
        name: 'Adv. Mohit Agarwal',
        org: 'ADR Specialist & Mediator, DIAC',
        specialisation: 'Alternative Dispute Resolution',
        impact: 'Adv. Agarwal conducts practical mediation simulations and trains students as accredited mediators under the Mediation Act 2023.',
        bar: 'Delhi International Arbitration Centre'
      },
    ]);
    console.log('✅ Seeded Visiting Faculty (6 docs)');
  } else {
    console.log('⏭  Visiting Faculty already has data, skipping.');
  }

  // ── Calendar Events ───────────────────────────────────────────
  const ceCount = await models.LegalCalendarEvent.countDocuments();
  if (ceCount === 0) {
    await models.LegalCalendarEvent.insertMany([
      { name: 'National Moot Court Competition', date: '2024-03-15', venue: 'Moot Court Hall, Ishan Law', category: 'Academic', description: 'Annual inter-college National Moot Court Competition with participation from 20+ law colleges across Delhi NCR.' },
      { name: 'Legal Aid Awareness Camp', date: '2024-04-05', venue: 'Gejha Village, Noida', category: 'Outreach', description: 'Community outreach camp providing free legal advice and awareness on fundamental rights, consumer protection, and women\'s rights.' },
      { name: 'Guest Lecture: Corporate Law Trends', date: '2024-04-20', venue: 'Seminar Hall – Block A', category: 'Seminar', description: 'Invited talk by Adv. Priya Malhotra on emerging trends in corporate restructuring, ESG compliance, and cross-border M&A transactions.' },
      { name: 'Kshitiz Cultural Fest 2024', date: '2024-05-10', venue: 'Main Campus Grounds', category: 'Cultural', description: 'Three-day annual cultural extravaganza featuring music, dance, drama, and literary competitions with students from across the region.' },
      { name: 'BCI Compliance Workshop', date: '2024-05-25', venue: 'Conference Room, Admin Block', category: 'Workshop', description: 'Mandatory workshop for faculty and administration on BCI professional standards, course updates, and accreditation compliance.' },
      { name: 'Judicial Services Preparation Seminar', date: '2024-06-08', venue: 'Seminar Hall – Block B', category: 'Academic', description: 'Dedicated preparation session for PCS-J aspirants covering previous year papers, judgment writing, and interview tips by retd. District Judge.' },
      { name: 'Independence Day Celebrations', date: '2024-08-15', venue: 'Campus Auditorium', category: 'Cultural', description: 'Flag hoisting ceremony, patriotic performances, and prize distribution for student achievers of the academic year.' },
      { name: 'National Law Day Seminar', date: '2024-11-26', venue: 'Moot Court Hall, Ishan Law', category: 'Academic', description: 'Constitution Day commemorative seminar featuring debates, quiz competitions, and lectures on constitutional values by eminent speakers.' },
    ]);
    console.log('✅ Seeded Calendar Events (8 docs)');
  } else {
    console.log('⏭  Calendar Events already has data, skipping.');
  }

  // ── Press Coverage ────────────────────────────────────────────
  const pressCount = await models.LegalPress.countDocuments();
  if (pressCount === 0) {
    await models.LegalPress.insertMany([
      { title: 'Ishan Law Students Win National Moot Court Championship', publication: 'Dainik Jagran', date: '2024-03-20', link: 'https://www.jagran.com', image: 'https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg' },
      { title: 'Ishan Law Institute Partners with DLSA for Legal Aid Initiative', publication: 'Times of India', date: '2024-04-08', link: 'https://timesofindia.com', image: 'https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-3.jpg' },
      { title: 'BCI Inspection Team Commends Ishan Law Academic Infrastructure', publication: 'Amar Ujala', date: '2024-01-15', link: 'https://amarujala.com', image: 'https://law.ishan.ac/all-law/gallery-photos/academics/academics-1.jpg' },
      { title: 'Kshitiz 2024: A Grand Cultural Celebration at Ishan Law', publication: 'Hindustan', date: '2024-05-12', link: 'https://livehindustan.com', image: 'https://law.ishan.ac/all-law/gallery-photos/cultural-activities/cultural-11.jpg' },
      { title: 'Ishan Law Launches New Certificate Program in Cyber Law', publication: 'Education Times', date: '2024-02-28', link: 'https://educationtimes.com', image: 'https://law.ishan.ac/all-law/gallery-photos/academics/academics-11.jpg' },
      { title: '100% Placement Record: Ishan Law Sets New Benchmark', publication: 'Career360', date: '2024-06-15', link: 'https://career360.com', image: 'https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-5.jpg' },
    ]);
    console.log('✅ Seeded Press Coverage (6 docs)');
  } else {
    console.log('⏭  Press Coverage already has data, skipping.');
  }

  // ── Photos ────────────────────────────────────────────────────
  const photoCount = await models.LegalPhoto.countDocuments();
  if (photoCount === 0) {
    await models.LegalPhoto.insertMany([
      { title: 'Moot Court Session in Progress', category: 'Academic', url: 'https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-1.jpg' },
      { title: 'Legal Aid Camp at Village', category: 'Outreach', url: 'https://law.ishan.ac/all-law/gallery-photos/outreach/outreach-12.jpeg' },
      { title: 'Faculty in Seminar Hall', category: 'Academic', url: 'https://law.ishan.ac/all-law/gallery-photos/academics/academics-1.jpg' },
      { title: 'Kshitiz Cultural Fest', category: 'Cultural', url: 'https://law.ishan.ac/all-law/gallery-photos/cultural-activities/cultural-11.jpg' },
      { title: 'Inauguration Ceremony', category: 'Events', url: 'https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-5.jpg' },
      { title: 'Library Reading Room', category: 'Campus', url: 'https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-13.jpg' },
      { title: 'Guest Lecture Session', category: 'Academic', url: 'https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-3.jpg' },
      { title: 'Court Visit – Allahabad High Court', category: 'Outreach', url: 'https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-4.jpg' },
      { title: 'Sports Day Celebration', category: 'Cultural', url: 'https://law.ishan.ac/all-law/gallery-photos/events/events-8.jpeg' },
      { title: 'Classroom Discussion', category: 'Academic', url: 'https://law.ishan.ac/all-law/gallery-photos/academics/academics-11.jpg' },
    ]);
    console.log('✅ Seeded Photos (10 docs)');
  } else {
    console.log('⏭  Photos already has data, skipping.');
  }

  // ── Videos ────────────────────────────────────────────────────
  const videoCount = await models.LegalVideo.countDocuments();
  if (videoCount === 0) {
    await models.LegalVideo.insertMany([
      { title: 'Campus Tour – Ishan Law Institute', category: 'Campus', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { title: 'Moot Court Final – National Championship 2024', category: 'Academic', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { title: 'Kshitiz Cultural Fest Highlights', category: 'Cultural', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { title: 'Legal Aid Camp Documentary', category: 'Outreach', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { title: 'Student Testimonials – Placements 2024', category: 'Placements', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    ]);
    console.log('✅ Seeded Videos (5 docs)');
  } else {
    console.log('⏭  Videos already has data, skipping.');
  }

  // ── Guest Lectures (supplement if only 1 default) ─────────────
  const glCount = await models.LegalGuestLecture.countDocuments();
  if (glCount < 3) {
    // It's a singleton — update with richer data
    await models.LegalGuestLecture.deleteMany({});
    await models.LegalGuestLecture.create({
      title: 'Guest Lectures & Seminars',
      subtitle: 'Insights from Judges, Senior Advocates & Industry Leaders',
      overview: 'Ishan Law Institute regularly invites distinguished legal practitioners, retired judges, corporate counsel, and academic experts to share their insights. These sessions bridge the gap between legal theory and professional practice.',
      image: 'https://law.ishan.ac/all-law/gallery-photos/key-highlights/key-highlights-3.jpg',
      lectures: [
        { speaker: 'Justice (Retd.) V.K. Shukla', designation: 'Former Judge, Allahabad High Court', title: 'Judgment Writing & Judicial Reasoning', date: 'March 2024', description: 'An in-depth session on the craft of writing clear, reasoned, and legally sound judgments — essential for PCS-J aspirants.', topics: 'Judicial Reasoning, Evidence Appreciation, CPC' },
        { speaker: 'Adv. Deepika Nair', designation: 'Partner, Nair & Co., Supreme Court', title: 'Supreme Court Practice: Tips & Strategies', date: 'February 2024', description: 'Practical insights into filing SLPs, writ petitions, and preparing for Supreme Court hearings from a seasoned practitioner.', topics: 'SLP Filing, Constitutional Writs, Appellate Advocacy' },
        { speaker: 'Mr. Vikram Mehta', designation: 'Chief Legal Officer, Tata Consultancy Services', title: 'In-House Legal Career: From Law School to C-Suite', date: 'January 2024', description: 'An inspiring session on building a corporate legal career, covering contract negotiation, IP management, and compliance strategy.', topics: 'Corporate Law, IP, Compliance, Career Guidance' },
        { speaker: 'Dr. Meenakshi Arora', designation: 'Senior Advocate, Supreme Court of India', title: 'Human Rights and PIL: Tools for Social Change', date: 'December 2023', description: 'A thought-provoking lecture on using Public Interest Litigation as a constitutional tool for protecting fundamental rights.', topics: 'PIL, Fundamental Rights, Human Rights Law' },
      ]
    });
    console.log('✅ Updated Guest Lectures with rich data');
  } else {
    console.log('⏭  Guest Lectures already has sufficient data, skipping.');
  }

  console.log('\n🎉 All missing data seeded successfully!');
  process.exit(0);
};

seed().catch(err => {
  console.error('Seed error:', err);
  process.exit(1);
});
