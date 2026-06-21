const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const iimtCtrl = require('../controllers/iimtController');
const models = require('../models/iimtModels');

// --- Singleton Configuration Routes ---
const singletons = [
  { path: '/homepage', model: models.IimtHomePage },
  { path: '/aboutus', model: models.IimtAboutUs },
  { path: '/campuslife', model: models.IimtCampusLife },
  { path: '/admissions', model: models.IimtAdmissions },
  { path: '/placements', model: models.IimtPlacements },
  { path: '/gallery', model: models.IimtGallery },
  { path: '/feepayment', model: models.IimtFeePayment },
  { path: '/studentportal', model: models.IimtStudentPortal },
  { path: '/contact', model: models.IimtContactUs },
  { path: '/academics', model: models.IimtAcademics },
  { path: '/learning', model: models.IimtLearning },
  { path: '/studentzone', model: models.IimtStudentZone },
];

singletons.forEach(({ path, model }) => {
  router.get(path, iimtCtrl.getSection(model));
  router.put(path, authMiddleware, iimtCtrl.updateSection(model));
});

// --- Collection Based Routes (CRUD) ---
const collections = [
  { path: '/courses', model: models.IimtCourse },
  { path: '/newsevents', model: models.IimtNewsEvent },
];

collections.forEach(({ path, model }) => {
  router.get(path, iimtCtrl.getCollection(model));
  router.post(path, authMiddleware, iimtCtrl.createItem(model));
  router.put(`${path}/:id`, authMiddleware, iimtCtrl.updateItem(model));
  router.delete(`${path}/:id`, authMiddleware, iimtCtrl.deleteItem(model));
});

// --- Leads ---
router.post('/leads', iimtCtrl.createLead);
router.get('/leads', authMiddleware, iimtCtrl.getLeads);
router.put('/leads/:id/status', authMiddleware, iimtCtrl.updateLeadStatus);

// --- Job Applications ---
router.post('/job-applications', iimtCtrl.createApplication);
router.get('/job-applications', authMiddleware, iimtCtrl.getApplications);
router.put('/job-applications/:id/status', authMiddleware, iimtCtrl.updateApplicationStatus);

module.exports = router;
