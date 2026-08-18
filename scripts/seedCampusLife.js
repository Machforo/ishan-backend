/**
 * Seeds the campus-life singleton for the Pharmacy and Ayurveda portals.
 *
 * These five pages (auditorium, sports, library, IT lab, cultural activities)
 * previously read from `/api/<site>/campuslife`, which did not exist — every
 * visitor saw the hardcoded fallbacks and no admin could change a word. This
 * moves that copy into the database so the admin panel owns it.
 *
 * Safe to re-run: existing documents are left alone unless --force is passed.
 *
 *   node scripts/seedCampusLife.js
 *   node scripts/seedCampusLife.js --force
 */
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');

const FORCE = process.argv.includes('--force');

// pharmacy.ishan.ac blocks these uploads with a 403, so no image URLs are seeded.
// Admins add photos through the admin panel (Campus Life > each section).

const pharmacy = {
  auditorium: {
    title: 'Auditorium',
    subtitle: 'A modern venue for convocations, seminars, and cultural events',
    heading: 'A Stage for Every Occasion',
    content:
      '<p>The Ishan Institute of Pharmacy auditorium is a 500+ seat multipurpose venue equipped with professional audio-visual systems, stage lighting, and climate control. It serves as the primary venue for convocation ceremonies, national seminars, guest lectures, cultural performances during Kshitiz fest, and institutional functions.</p>' +
      '<p>The facility includes a large stage, green rooms for performers, separate entry/exit points for crowd management, and modern projection equipment for presentations and film screenings.</p>',
    images: [],
    specs: [
      { label: 'Seating', value: '500+ seats' },
      { label: 'AV Equipment', value: 'Professional setup' },
      { label: 'Events Hosted', value: 'Convocations, Seminars, Kshitiz' },
    ],
  },
  sports: {
    title: 'Sports',
    subtitle: 'Inter-college competitions, annual sports meet, and campus recreational facilities',
    heading: 'Fitness & Sportsmanship',
    badge: 'ANNUAL SPORTS MEET',
    content:
      '<p>Ishan Pharmacy promotes physical fitness and sportsmanship through a comprehensive sports program. The campus features facilities for cricket, basketball, badminton, volleyball, table tennis, and athletics.</p>' +
      '<p>The annual sports meet is a highlight of the academic calendar, bringing together students from across the Ishan Group in a spirit of healthy competition.</p>',
    images: [],
    specs: [
      { label: 'Outdoor', value: 'Cricket Ground, Basketball Court' },
      { label: 'Indoor', value: 'Table Tennis, Badminton, Chess' },
      { label: 'Annual Event', value: 'Sports Meet' },
      { label: 'Teams', value: 'Inter-College Tournaments' },
    ],
  },
  itLab: {
    title: 'Digital Research Lab',
    subtitle: 'State-of-the-art computing facilities for comprehensive pharmaceutical research',
    heading: 'Technology for Modern Pharmacy Practice',
    content:
      '<p>The Digital Research Lab at Ishan Institute of Pharmacy provides students with the technological tools essential for modern pharmacy practice, from literature review and formulation modelling to academic writing.</p>' +
      '<p>The lab supports students in mastering scientific databases, document management, and academic writing tools.</p>',
    images: [],
    specs: [],
    notes: {
      title: 'Lab Rules',
      items: [
        'Students must carry their ID card to access the lab',
        'No food or beverages inside the lab area',
        'Personal USB drives require prior scanning approval',
        'Report any hardware/software issues to the lab attendant immediately',
        'Save work regularly — the institute is not responsible for data loss',
      ],
    },
  },
  library: {
    title: 'Library',
    subtitle: 'A specialised resource centre for pharmaceutical scholarship and research',
    heading: 'The Academic Cornerstone',
    content:
      '<p>The library at Ishan Institute of Pharmacy supports the research needs of pharmacy students and faculty, with an extensive collection of pharmaceutical texts, pharmacopoeias, reference works and journals.</p>',
    images: [],
    specs: [
      { label: 'Reading Room', value: '150+ seats' },
      { label: 'Timings', value: '8 AM – 8 PM' },
      { label: 'Journals', value: "National & Int'l" },
      { label: 'Borrowing', value: '4 books / 14 days' },
    ],
  },
  culturalActivities: {
    title: 'Cultural Activities',
    subtitle: 'Kshitiz fest, drama, music, dance, and creative expression at Ishan Institute of Pharmacy',
    heading: 'Celebrating Creative Excellence',
    badge: 'KSHITIZ FEST',
    content:
      '<p>Cultural activities at Ishan Institute of Pharmacy are anchored by Kshitiz — the annual inter-college cultural festival that draws participation from across the Delhi NCR region. Spanning three days of music, dance, drama, fashion, art, and literary competitions, Kshitiz is a platform for students to showcase their talents beyond the classroom.</p>' +
      '<p>Throughout the year, the institute organises Republic Day and Independence Day celebrations, talent shows, photography contests, rangoli competitions, and departmental cultural programmes.</p>',
    images: [],
    specs: [
      { label: 'Flagship Event', value: 'Kshitiz Fest' },
      { label: 'Activities', value: 'Music, Dance, Drama, Arts' },
      { label: 'Clubs', value: 'Literary, Cultural, Tech' },
    ],
  },
};

/**
 * The Ayurveda site inherited the Pharmacy/Law copy verbatim — its library page
 * described "advocates and legal scholars" and cited law reports. Seeded here
 * with neutral, subject-appropriate copy. Specific figures are deliberately left
 * out; the admin should fill them in from the admin panel.
 */
const ayurveda = {
  auditorium: {
    title: 'Auditorium',
    subtitle: 'A modern venue for convocations, seminars, and cultural events',
    heading: 'A Stage for Every Occasion',
    content:
      '<p>The IAMC auditorium is a multipurpose venue equipped with audio-visual systems, stage lighting, and climate control. It hosts convocation ceremonies, national seminars on Ayurveda, guest lectures by visiting Vaidyas, cultural performances, and institutional functions.</p>',
    images: [],
    specs: [
      { label: 'Events Hosted', value: 'Convocations, Seminars, Cultural Programmes' },
      { label: 'AV Equipment', value: 'Professional setup' },
    ],
  },
  sports: {
    title: 'Sports',
    subtitle: 'Inter-college competitions, annual sports meet, and campus recreational facilities',
    heading: 'Fitness & Sportsmanship',
    badge: 'ANNUAL SPORTS MEET',
    content:
      '<p>IAMC encourages physical wellbeing alongside academic rigour — a principle central to Ayurveda itself. The campus offers outdoor and indoor sports facilities, and the annual sports meet brings students together in healthy competition.</p>',
    images: [],
    specs: [
      { label: 'Outdoor', value: 'Cricket Ground, Basketball Court' },
      { label: 'Indoor', value: 'Table Tennis, Badminton, Chess' },
      { label: 'Annual Event', value: 'Sports Meet' },
    ],
  },
  itLab: {
    title: 'Digital Research Lab',
    subtitle: 'Computing facilities supporting Ayurvedic research and academic writing',
    heading: 'Technology for Classical Scholarship',
    content:
      '<p>The digital research lab gives students access to Ayurvedic e-libraries, AYUSH research repositories, and academic writing tools — supporting literature review of classical texts alongside contemporary evidence.</p>',
    images: [],
    specs: [],
    notes: {
      title: 'Lab Rules',
      items: [
        'Students must carry their ID card to access the lab',
        'No food or beverages inside the lab area',
        'Report any hardware/software issues to the lab attendant immediately',
        'Save work regularly — the institute is not responsible for data loss',
      ],
    },
  },
  library: {
    title: 'Library',
    subtitle: 'A specialised resource centre for Ayurvedic scholarship and research',
    heading: 'The Academic Cornerstone',
    content:
      '<p>The IAMC library holds the classical Ayurvedic corpus — Charaka Samhita, Sushruta Samhita, Ashtanga Hridayam and their principal commentaries — alongside modern texts in anatomy, physiology, pathology and pharmacology, and current AYUSH research journals.</p>' +
      '<p>A dedicated reading zone and digital wing support both textual study and contemporary research.</p>',
    images: [],
    specs: [
      { label: 'Classical Texts', value: 'Samhitas & commentaries' },
      { label: 'Reading Room', value: 'Dedicated reading zone' },
      { label: 'Digital Access', value: 'AYUSH research repositories' },
    ],
  },
  culturalActivities: {
    title: 'Cultural Activities',
    subtitle: 'Festivals, music, drama and creative expression at IAMC',
    heading: 'Celebrating Creative Excellence',
    content:
      '<p>IAMC organises cultural programmes through the year — including Republic Day and Independence Day celebrations, Dhanwantari Jayanti, talent shows and departmental cultural events — giving students a platform beyond the classroom.</p>',
    images: [],
    specs: [
      { label: 'Activities', value: 'Music, Dance, Drama, Arts' },
      { label: 'Clubs', value: 'Literary, Cultural' },
    ],
  },
};

(async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms';
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 20000 });
  console.log('Connected to', mongoose.connection.name);

  const { PharmacyCampusLife } = require('../models/pharmacyModels');
  const { AyurvedaCampusLife } = require('../models/ayurvedaModels');

  for (const [label, Model, data] of [
    ['pharmacy', PharmacyCampusLife, pharmacy],
    ['ayurveda', AyurvedaCampusLife, ayurveda],
  ]) {
    const existing = await Model.findOne();
    if (existing && !FORCE) {
      const filled = ['auditorium', 'sports', 'library', 'itLab', 'culturalActivities']
        .filter((k) => existing[k] && (existing[k].content || existing[k].title));
      console.log(`${label}: document already exists (${filled.length}/5 sections populated) — skipping. Re-run with --force to overwrite.`);
      continue;
    }
    if (existing) {
      await Model.findByIdAndUpdate(existing._id, { $set: data });
      console.log(`${label}: overwritten`);
    } else {
      await Model.create(data);
      console.log(`${label}: created`);
    }
  }

  await mongoose.disconnect();
  console.log('Done.');
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
