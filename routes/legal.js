const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const genericCtrl = require('../controllers/genericController');
const models = require('../models/legalModels');

// --- Singleton Configuration Routes ---
const singletons = [
  { path: '/homepage', model: models.LegalHomePage },
  { path: '/aboutus', model: models.LegalAboutUs },
  { path: '/research', model: models.LegalResearch },
  { path: '/contact', model: models.LegalContact },
  { path: '/downloads', model: models.LegalDownload },
  { path: '/pastpapers', model: models.LegalPastPaper },
  { path: '/industrialvisits', model: models.LegalIndustrialVisit },
  { path: '/studentportal', model: models.LegalStudentPortal },
  { path: '/feepayment', model: models.LegalFeePayment },
  { path: '/placements', model: models.LegalPlacement },
  { path: '/admissions', model: models.LegalAdmission },
  { path: '/navbar', model: models.LegalNavbar },
  { path: '/footer', model: models.LegalFooter },
  { path: '/mandatorydisclosure', model: models.LegalMandatoryDisclosure },
  { path: '/codeofconduct', model: models.LegalCodeOfConduct },
  { path: '/programsoverview', model: models.LegalProgramsOverview },
  { path: '/certificateoverview', model: models.LegalCertificateOverview },
  { path: '/internshipexternship', model: models.LegalInternshipExternship },
  { path: '/mootcourt', model: models.LegalMootCourt },
  { path: '/legalaidcell', model: models.LegalAidCell },
  { path: '/skilldevelopment', model: models.LegalSkillDevelopment },
  { path: '/debatesgd', model: models.LegalDebatesGD },
  { path: '/culturalactivities', model: models.LegalCulturalActivities },
  { path: '/guestlecturespage', model: models.LegalGuestLecturesPage },
  { path: '/researchjournal', model: models.LegalResearchJournal }
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
  { path: '/calendarevents', model: models.LegalCalendarEvent },
  { path: '/photos', model: models.LegalPhoto },
  { path: '/videos', model: models.LegalVideo },
  { path: '/press', model: models.LegalPress },
  { path: '/faqs', model: models.LegalFAQ },
  { path: '/pages', model: models.LegalPage },
  { path: '/facilities', model: models.LegalFacility },
  { path: '/researchprojects', model: models.LegalResearchProject },
  { path: '/publications', model: models.LegalPublication },
  { path: '/alumninetwork', model: models.LegalAlumni },
  { path: '/careers', model: models.LegalCareer },
  { path: '/feedback', model: models.LegalFeedback },
  { path: '/guestlectures', model: models.LegalGuestLecture },
  { path: '/certificates', model: models.LegalCertificate },
  { path: '/courses', model: models.LegalCourse },
  { path: '/faculty', model: models.LegalFaculty },
  { path: '/visitingfaculty', model: models.LegalVisitingFaculty }
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
router.post('/leads', genericCtrl.createLead(models.LegalLead, 'Legal'));
router.get('/leads', authMiddleware, genericCtrl.getAllLeads(models.LegalLead));
router.put('/leads/:id/status', authMiddleware, genericCtrl.updateLeadStatus(models.LegalLead));


// --- Global URL-Based Page Galleries ---
const GlobalGallery = require('../models/GlobalGallery');

router.get('/page-galleries/by-url', async (req, res) => {
    try {
        let url = req.query.url || '';
        if (!url.startsWith('/')) url = '/' + url;
        if (url.length > 1 && url.endsWith('/')) url = url.slice(0, -1);
        
        // Also check against the exact query just in case it was saved differently
        const item = await GlobalGallery.findOne({ 
            portal: 'legal', 
            $or: [{ urlPath: url }, { urlPath: req.query.url }, { urlPath: url.substring(1) }] 
        });
        res.json(item || {});
    } catch(e) {
        res.status(500).json({error: e.message});
    }
});

router.get('/page-galleries', async (req, res) => {
    try {
        const items = await GlobalGallery.find({ portal: 'legal' });
        res.json(items);
    } catch(e) { res.status(500).json({error: e.message}); }
});

router.post('/page-galleries', async (req, res) => {
    try {
        let urlPath = req.body.urlPath || '';
        if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
        if (urlPath.length > 1 && urlPath.endsWith('/')) urlPath = urlPath.slice(0, -1);
        req.body.urlPath = urlPath;
        const item = new GlobalGallery({ ...req.body, portal: 'legal' });
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
