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
  if (path === '/feedback') {
    router.post(path, genericCtrl.createItem(model));
  } else {
    router.post(path, authMiddleware, genericCtrl.createItem(model));
  }
  router.put(`${path}/:id`, authMiddleware, genericCtrl.updateItem(model));
  router.delete(`${path}/:id`, authMiddleware, genericCtrl.deleteItem(model));
});

// --- Leads ---
router.post('/leads', genericCtrl.createLead(models.PharmacyLead, 'Pharmacy'));
router.get('/leads', authMiddleware, genericCtrl.getAllLeads(models.PharmacyLead));
router.put('/leads/:id/status', authMiddleware, genericCtrl.updateLeadStatus(models.PharmacyLead));


// --- Global URL-Based Page Galleries ---
const GlobalGallery = require('../models/GlobalGallery');

router.get('/page-galleries/by-url', async (req, res) => {
    try {
        let url = req.query.url || '';
        if (!url.startsWith('/')) url = '/' + url;
        if (url.length > 1 && url.endsWith('/')) url = url.slice(0, -1);
        
        // Also check against the exact query just in case it was saved differently
        const item = await GlobalGallery.findOne({ 
            portal: 'pharmacy', 
            $or: [{ urlPath: url }, { urlPath: req.query.url }, { urlPath: url.substring(1) }] 
        });
        res.json(item || {});
    } catch(e) {
        res.status(500).json({error: e.message});
    }
});

router.get('/page-galleries', async (req, res) => {
    try {
        const items = await GlobalGallery.find({ portal: 'pharmacy' });
        res.json(items);
    } catch(e) { res.status(500).json({error: e.message}); }
});

router.post('/page-galleries', async (req, res) => {
    try {
        let urlPath = req.body.urlPath || '';
        if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
        if (urlPath.length > 1 && urlPath.endsWith('/')) urlPath = urlPath.slice(0, -1);
        req.body.urlPath = urlPath;
        const item = new GlobalGallery({ ...req.body, portal: 'pharmacy' });
        await item.save();
        res.status(201).json(item);
    } catch(e) { res.status(500).json({error: e.message}); }
});

router.put('/page-galleries/:id', async (req, res) => {
    try {
        if (req.body.urlPath) {
            let urlPath = req.body.urlPath;
            if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
            if (urlPath.length > 1 && urlPath.endsWith('/')) urlPath = urlPath.slice(0, -1);
            req.body.urlPath = urlPath;
        }
        const item = await GlobalGallery.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(item);
    } catch(e) { res.status(500).json({error: e.message}); }
});

router.delete('/page-galleries/:id', async (req, res) => {
    try {
        await GlobalGallery.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted' });
    } catch(e) { res.status(500).json({error: e.message}); }
});

module.exports = router;
