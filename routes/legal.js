const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const genericCtrl = require('../controllers/genericController');
const models = require('../models/legalModels');

// --- Singleton Configuration Routes ---
const singletons = [
  { path: '/homepage', model: models.LegalHomePage },
  { path: '/infrastructure', model: models.LegalInfrastructure },
  { path: '/contact', model: models.LegalContact },
];

singletons.forEach(({ path, model }) => {
  router.get(path, genericCtrl.getSection(model));
  router.put(path, authMiddleware, genericCtrl.updateSection(model));
});

// --- Collection Based Routes (CRUD) ---
const collections = [
  { path: '/faculty', model: models.LegalFaculty },
  { path: '/programs', model: models.LegalProgram },
  { path: '/testimonials', model: models.LegalTestimonial },
  { path: '/news', model: models.LegalNews },
];

collections.forEach(({ path, model }) => {
  router.get(path, genericCtrl.getCollection(model));
  router.post(path, authMiddleware, genericCtrl.createItem(model));
  router.put(`${path}/:id`, authMiddleware, genericCtrl.updateItem(model));
  router.delete(`${path}/:id`, authMiddleware, genericCtrl.deleteItem(model));
});

// --- Leads ---
router.post('/leads', genericCtrl.createLead(models.LegalLead, 'Legal'));
router.get('/leads', authMiddleware, genericCtrl.getAllLeads(models.LegalLead));
router.put('/leads/:id/status', authMiddleware, genericCtrl.updateLeadStatus(models.LegalLead));

module.exports = router;
