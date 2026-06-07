const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const genericCtrl = require('../controllers/genericController');
const models = require('../models/pharmacyModels');

// --- Singleton Configuration Routes ---
const singletons = [
  { path: '/homepage', model: models.PharmacyHomePage },
  { path: '/research', model: models.PharmacyResearch },
  { path: '/contact', model: models.PharmacyContact },
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
