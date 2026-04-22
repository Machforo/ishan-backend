const mongoose = require('mongoose');
require('dotenv').config();

// Models
const HomePage = require('../models/HomePage');
const AdmissionsPage = require('../models/AdmissionsPage');
const CampusLifePage = require('../models/CampusLifePage');
const PlacementsPage = require('../models/PlacementsPage');
const AboutUs = require('../models/AboutUs');
const NewsEventPage = require('../models/NewsEventPage');

async function sync() {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ishan-cms';
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    // 1. Fetch Source Data
    const admissions = await AdmissionsPage.findOne();
    const campusLife = await CampusLifePage.findOne();
    const placements = await PlacementsPage.findOne();
    const aboutUs = await AboutUs.findOne();
    const newsEvent = await NewsEventPage.findOne();

    // 2. Fetch/Create HomePage
    let home = await HomePage.findOne();
    if (!home) {
      home = new HomePage({
        hero: { banners: [] },
        stats: [],
        dignitaries: [],
        programs: { title: "Explore Our Programs", list: [] },
        whatsHappening: { title: "What's Happening", events: [] }
      });
    }

    // 3. Sync Data
    if (admissions) {
      console.log('Syncing Programs & Scholarships...');
      home.programs.list = admissions.programs.map(p => ({
        name: p.name,
        level: p.level,
        college: p.college,
        duration: p.duration,
        affiliation: p.affiliation,
        criteria: p.criteria || "As per norms",
        description: `This ${p.level} program at ${p.college} provides comprehensive knowledge and industry-relevant skills.`,
        link: "/enquire"
      }));
      
      home.scholarships.list = admissions.scholarships.map(s => ({
        category: s.category,
        concession: s.concession,
        description: s.description || "Merit-based financial aid for eligible students."
      }));
      home.scholarships.description = admissions.overview?.content?.substring(0, 200) || "The Institute ensures that students are not left behind due to financial constraints.";
    }

    if (campusLife) {
      console.log('Syncing Campus Life Gallery...');
      // Syncing to campusLife.images as per schema
      home.campusLife.images = campusLife.gallery.map(g => ({
        name: g.title,
        url: g.url
      }));
      // Also sync to gallery if used in some components
      home.campusLife.gallery = campusLife.gallery.map(g => ({
        title: g.title,
        url: g.url
      }));
    }

    if (placements) {
      console.log('Syncing Testimonials (Alumni)...');
      home.testimonials.list = placements.alumni.map(a => ({
        name: a.name,
        batch: a.batch,
        role: a.role,
        company: a.company,
        quote: a.quote,
        image: a.image,
        category: "Alumni Stories"
      }));
    }

    if (aboutUs) {
      console.log('Syncing Regulatory Bodies (Approvals)...');
      home.regulatoryBodies.list = aboutUs.approvals.map(a => ({
        name: a.name,
        fullTitle: a.fullTitle,
        description: a.description,
        image: a.image,
        link: a.link
      }));
    }

    if (newsEvent && newsEvent.news && newsEvent.news.length > 0) {
      console.log('Syncing News Events...');
      home.whatsHappening.events = newsEvent.news.map(n => ({
        title: n.title,
        date: n.date,
        image: n.image,
        link: n.link,
        category: "Updates",
        description: n.content || "Stay updated with the latest news and events from Ishan Group of Institutions. Explore our dynamic campus life and academic achievements."
      }));
    }

    await home.save();
    console.log('✅ Homepage data synchronized successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Sync failed:', err);
    process.exit(1);
  }
}

sync();
