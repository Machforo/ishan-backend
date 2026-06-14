const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const genericCtrl = require('../controllers/genericController');
const models = require('../models/hospitalModels');

// --- Singleton Configuration Routes ---
const singletons = [
  { path: '/homepage', model: models.HospitalHomePage },
  { path: '/services', model: models.HospitalServices },
  { path: '/aboutus', model: models.HospitalAboutUs },
];

singletons.forEach(({ path, model }) => {
  router.get(path, genericCtrl.getSection(model));
  router.put(path, authMiddleware, genericCtrl.updateSection(model));
});

// --- Collection Based Routes (CRUD) ---
const collections = [
  { path: '/doctors', model: models.HospitalDoctor },
  { path: '/departments', model: models.HospitalDepartment },
  { path: '/testimonials', model: models.HospitalTestimonial },
];

collections.forEach(({ path, model }) => {
  router.get(path, genericCtrl.getCollection(model));
  router.post(path, authMiddleware, genericCtrl.createItem(model));
  router.put(`${path}/:id`, authMiddleware, genericCtrl.updateItem(model));
  router.delete(`${path}/:id`, authMiddleware, genericCtrl.deleteItem(model));
});

// --- Leads ---
router.post('/leads', genericCtrl.createLead(models.HospitalLead, 'Hospital'));
router.get('/leads', authMiddleware, genericCtrl.getAllLeads(models.HospitalLead));
router.put('/leads/:id/status', authMiddleware, genericCtrl.updateLeadStatus(models.HospitalLead));

module.exports = router;
