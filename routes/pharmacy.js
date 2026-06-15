const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const genericCtrl = require('../controllers/genericController');
const models = require('../models/pharmacyModels');

// --- Singleton Configuration Routes ---
const singletons = [
  { path: '/homepage', model: models.PharmacyHomePage },
  { path: '/aboutus', model: models.PharmacyAboutUs },
  { path: '/research', model: models.PharmacyResearch },
  { path: '/contact', model: models.PharmacyContact },
  { path: '/downloads', model: models.PharmacyDownload },
  { path: '/pastpapers', model: models.PharmacyPastPaper },
  { path: '/guestlectures', model: models.PharmacyGuestLecture },
  { path: '/industrialvisits', model: models.PharmacyIndustrialVisit },
  { path: '/studentportal', model: models.PharmacyStudentPortal },
  { path: '/feepayment', model: models.PharmacyFeePayment },
  { path: '/placements', model: models.PharmacyPlacement },
  { path: '/admissions', model: models.PharmacyAdmission },
  { path: '/navbar', model: models.PharmacyNavbar },
  { path: '/footer', model: models.PharmacyFooter },
  { path: '/mandatorydisclosure', model: models.PharmacyMandatoryDisclosure },
  { path: '/codeofconduct', model: models.PharmacyCodeOfConduct }
];

singletons.forEach(({ path, model }) => {
  router.get(path, genericCtrl.getSection(model));
  router.put(path, authMiddleware, genericCtrl.updateSection(model));
});

// --- Collection Based Routes (CRUD) ---
const collections = [
  { path: '/faculty', model: models.PharmacyFaculty },
  { path: '/programs', model: models.PharmacyProgram },
  { path: '/testimonials', model: models.PharmacyTestimonial },
  { path: '/news', model: models.PharmacyNews },
  { path: '/calendarevents', model: models.PharmacyCalendarEvent },
  { path: '/photos', model: models.PharmacyPhoto },
  { path: '/videos', model: models.PharmacyVideo },
  { path: '/press', model: models.PharmacyPress },
  { path: '/faqs', model: models.PharmacyFAQ },
  { path: '/pages', model: models.PharmacyPage },
  { path: '/facilities', model: models.PharmacyFacility },
  { path: '/researchprojects', model: models.PharmacyResearchProject },
  { path: '/publications', model: models.PharmacyPublication },
  { path: '/alumninetwork', model: models.PharmacyAlumni },
  { path: '/careers', model: models.PharmacyCareer },
  { path: '/feedback', model: models.PharmacyFeedback },
  { path: '/certificates', model: models.PharmacyCertificate },
  { path: '/courses', model: models.PharmacyCourse },
  { path: '/faculty', model: models.PharmacyFaculty },
  { path: '/visitingfaculty', model: models.PharmacyVisitingFaculty }
];

collections.forEach(({ path, model }) => {
  router.get(path, genericCtrl.getCollection(model));
  router.post(path, authMiddleware, genericCtrl.createItem(model));
  router.put(`${path}/:id`, authMiddleware, genericCtrl.updateItem(model));
  router.delete(`${path}/:id`, authMiddleware, genericCtrl.deleteItem(model));
});

// --- Leads ---
router.post('/leads', genericCtrl.createLead(models.PharmacyLead, 'Pharmacy'));
router.get('/leads', authMiddleware, genericCtrl.getAllLeads(models.PharmacyLead));
router.put('/leads/:id/status', authMiddleware, genericCtrl.updateLeadStatus(models.PharmacyLead));

module.exports = router;
