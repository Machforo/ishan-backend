const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');
const authMiddleware = require('../middleware/auth');

// Public: Submit form
router.post('/', leadController.createLead);

// Protected: Admin viewing/managing leads
router.get('/all', authMiddleware, leadController.getAllLeads);
router.get('/', authMiddleware, leadController.getLeads);
router.put('/:id/status', authMiddleware, leadController.updateLeadStatus);

module.exports = router;
