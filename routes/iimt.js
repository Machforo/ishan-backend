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


// --- Global URL-Based Page Galleries ---
const GlobalGallery = require('../models/GlobalGallery');

router.get('/page-galleries/by-url', async (req, res) => {
    try {
        let url = req.query.url || '';
        if (!url.startsWith('/')) url = '/' + url;
        if (url.length > 1 && url.endsWith('/')) url = url.slice(0, -1);
        
        // Also check against the exact query just in case it was saved differently
        const item = await GlobalGallery.findOne({ 
            portal: 'iimt', 
            $or: [{ urlPath: url }, { urlPath: req.query.url }, { urlPath: url.substring(1) }] 
        });
        res.json(item || {});
    } catch(e) {
        res.status(500).json({error: e.message});
    }
});

router.get('/page-galleries', async (req, res) => {
    try {
        const items = await GlobalGallery.find({ portal: 'iimt' });
        res.json(items);
    } catch(e) { res.status(500).json({error: e.message}); }
});

router.post('/page-galleries', async (req, res) => {
    try {
        let urlPath = req.body.urlPath || '';
        if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
        if (urlPath.length > 1 && urlPath.endsWith('/')) urlPath = urlPath.slice(0, -1);
        req.body.urlPath = urlPath;
        const item = new GlobalGallery({ ...req.body, portal: 'iimt' });
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


// --- Global URL-Based Page Sections ---
const GlobalSection = require('../models/GlobalSection');

router.get('/page-sections/by-url', async (req, res) => {
    try {
        const item = await GlobalSection.findOne({ portal: 'iimt', urlPath: req.query.url });
        res.json(item || {});
    } catch(e) {
        res.status(500).json({error: e.message});
    }
});

router.get('/page-sections', async (req, res) => {
    try {
        const items = await GlobalSection.find({ portal: 'iimt' });
        res.json(items);
    } catch(e) { res.status(500).json({error: e.message}); }
});

router.post('/page-sections', async (req, res) => {
    try {
        const item = new GlobalSection({ ...req.body, portal: 'iimt' });
        await item.save();
        res.status(201).json(item);
    } catch(e) { res.status(500).json({error: e.message}); }
});

router.put('/page-sections/:id', async (req, res) => {
    try {
        const item = await GlobalSection.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(item);
    } catch(e) { res.status(500).json({error: e.message}); }
});

router.delete('/page-sections/:id', async (req, res) => {
    try {
        await GlobalSection.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted' });
    } catch(e) { res.status(500).json({error: e.message}); }
});

module.exports = router;
