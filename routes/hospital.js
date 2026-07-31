const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const genericCtrl = require('../controllers/genericController');
const models = require('../models/hospitalModels');
const ayurvedaModels = require('../models/ayurvedaModels');

// --- Singleton Configuration Routes ---
const singletons = [
  { path: '/homepage', model: models.HospitalHomePage },
  { path: '/services', model: models.HospitalServices },
  { path: '/aboutus', model: models.HospitalAboutUs },
  { path: '/hospital', model: ayurvedaModels.AyurvedaHospital }
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
  { path: '/panchkarma', model: models.HospitalPanchkarma },
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


// --- Global URL-Based Page Galleries ---
const GlobalGallery = require('../models/GlobalGallery');

router.get('/page-galleries/by-url', async (req, res) => {
    try {
        let url = req.query.url || '';
        if (!url.startsWith('/')) url = '/' + url;
        if (url.length > 1 && url.endsWith('/')) url = url.slice(0, -1);
        
        // Also check against the exact query just in case it was saved differently
        const item = await GlobalGallery.findOne({ 
            portal: 'hospital', 
            $or: [{ urlPath: url }, { urlPath: req.query.url }, { urlPath: url.substring(1) }] 
        });
        res.json(item || {});
    } catch(e) {
        res.status(500).json({error: e.message});
    }
});

router.get('/page-galleries', async (req, res) => {
    try {
        const items = await GlobalGallery.find({ portal: 'hospital' });
        res.json(items);
    } catch(e) { res.status(500).json({error: e.message}); }
});

router.post('/page-galleries', async (req, res) => {
    try {
        let urlPath = req.body.urlPath || '';
        if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
        if (urlPath.length > 1 && urlPath.endsWith('/')) urlPath = urlPath.slice(0, -1);
        req.body.urlPath = urlPath;
        const item = new GlobalGallery({ ...req.body, portal: 'hospital' });
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
