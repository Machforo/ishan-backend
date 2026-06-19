const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const genericCtrl = require('../controllers/genericController');
const models = require('../models/ayurvedaModels');

// --- Singleton Configuration Routes ---
const singletons = [
  { path: '/homepage', model: models.AyurvedaHomePage },
  { path: '/aboutus', model: models.AyurvedaAboutUs },
  { path: '/admissions', model: models.AyurvedaAdmissions },
  { path: '/academics', model: models.AyurvedaAcademics },
  { path: '/hospital', model: models.AyurvedaHospital },
  { path: '/students', model: models.AyurvedaStudentCorner },
  { path: '/research', model: models.AyurvedaResearch },
  { path: '/facilities', model: models.AyurvedaFacilities },
  { path: '/digital', model: models.AyurvedaDigitalServices },
  { path: '/contact', model: models.AyurvedaContact },
  { path: '/siteconfig', model: models.AyurvedaSiteConfig },
  { path: '/mandatorydisclosure', model: models.AyurvedaMandatoryDisclosure },
  { path: '/codeofconduct', model: models.AyurvedaCodeOfConduct },
];

singletons.forEach(({ path, model }) => {
  router.get(path, genericCtrl.getSection(model));
  router.put(path, authMiddleware, genericCtrl.updateSection(model));
});

// --- Collection Based Routes (CRUD) ---
const collections = [
  { path: '/courses', model: models.AyurvedaCourse },
  { path: '/departments', model: models.AyurvedaDepartment },
  { path: '/faculty', model: models.AyurvedaFaculty },
  { path: '/visiting-faculty', model: models.AyurvedaVisitingFaculty },
  { path: '/faqs', model: models.AyurvedaFAQ },
  { path: '/news', model: models.AyurvedaNews },
  { path: '/events', model: models.AyurvedaEvent },
  { path: '/photo-gallery', model: models.AyurvedaPhotoGallery },
  { path: '/video-gallery', model: models.AyurvedaVideoGallery },
  { path: '/press-coverage', model: models.AyurvedaPressCoverage },
  { path: '/blogs', model: models.AyurvedaBlog },
  { path: '/testimonials', model: models.AyurvedaTestimonial },
];

collections.forEach(({ path, model }) => {
  router.get(path, genericCtrl.getCollection(model));
  router.post(path, authMiddleware, genericCtrl.createItem(model));
  router.put(`${path}/:id`, authMiddleware, genericCtrl.updateItem(model));
  router.delete(`${path}/:id`, authMiddleware, genericCtrl.deleteItem(model));
});

// --- Leads ---
router.post('/leads', genericCtrl.createLead(models.AyurvedaLead, 'Ayurveda'));
router.get('/leads', authMiddleware, genericCtrl.getAllLeads(models.AyurvedaLead));
router.put('/leads/:id/status', authMiddleware, genericCtrl.updateLeadStatus(models.AyurvedaLead));

module.exports = router;
