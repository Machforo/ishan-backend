const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const genericCtrl = require('../controllers/genericController');
const { LandingPage2 } = require('../models/LandingPageModels');

const Lead = require('../models/Lead');

router.get('/', genericCtrl.getSection(LandingPage2));
router.put('/', authMiddleware, genericCtrl.updateSection(LandingPage2));

// Leads
router.get('/leads', authMiddleware, genericCtrl.getCollection(Lead));
router.post('/leads', (req, res, next) => {
  req.body.source = "Landing Page 2";
  next();
}, genericCtrl.createItem(Lead));
router.put('/leads/:id', authMiddleware, genericCtrl.updateItem(Lead));
router.delete('/leads/:id', authMiddleware, genericCtrl.deleteItem(Lead));


// --- Global URL-Based Page Galleries ---
const GlobalGallery = require('../models/GlobalGallery');

router.get('/page-galleries/by-url', async (req, res) => {
    try {
        let rawUrl = req.query.url || '/';
        let cleanUrl = rawUrl.trim();
        if (!cleanUrl.startsWith('/')) cleanUrl = '/' + cleanUrl;
        if (cleanUrl.length > 1 && cleanUrl.endsWith('/')) cleanUrl = cleanUrl.slice(0, -1);
        const noSlash = cleanUrl.replace(/^\//, '');

        const item = await GlobalGallery.findOne({ 
            portal: { $in: ["landingPage2","landing2"] }, 
            $or: [
                { urlPath: cleanUrl },
                { urlPath: rawUrl },
                { urlPath: noSlash },
                { urlPath: '/' + noSlash }
            ] 
        });
        res.json(item || {});
    } catch(e) {
        res.status(500).json({error: e.message});
    }
});

router.get('/page-galleries', async (req, res) => {
    try {
        const items = await GlobalGallery.find({ portal: 'landingPage2' });
        res.json(items);
    } catch(e) { res.status(500).json({error: e.message}); }
});

router.post('/page-galleries', async (req, res) => {
    try {
        let urlPath = req.body.urlPath || '';
        if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
        if (urlPath.length > 1 && urlPath.endsWith('/')) urlPath = urlPath.slice(0, -1);
        req.body.urlPath = urlPath;
        const item = new GlobalGallery({ ...req.body, portal: 'landingPage2' });
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
        let rawUrl = req.query.url || '/';
        let cleanUrl = rawUrl.trim();
        if (!cleanUrl.startsWith('/')) cleanUrl = '/' + cleanUrl;
        if (cleanUrl.length > 1 && cleanUrl.endsWith('/')) cleanUrl = cleanUrl.slice(0, -1);
        const noSlash = cleanUrl.replace(/^\//, '');

        const item = await GlobalSection.findOne({ 
            portal: { $in: ["landingPage2","landing2"] }, 
            $or: [
                { urlPath: cleanUrl },
                { urlPath: rawUrl },
                { urlPath: noSlash },
                { urlPath: '/' + noSlash }
            ] 
        });
        res.json(item || {});
    } catch(e) {
        res.status(500).json({error: e.message});
    }
});

router.get('/page-sections', async (req, res) => {
    try {
        const items = await GlobalSection.find({ portal: 'landingPage2' });
        res.json(items);
    } catch(e) { res.status(500).json({error: e.message}); }
});

router.post('/page-sections', async (req, res) => {
    try {
        const item = new GlobalSection({ ...req.body, portal: 'landingPage2' });
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
