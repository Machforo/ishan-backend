const express = require('express');
const router = express.Router();
const jobAppController = require('../controllers/jobAppController');
const authMiddleware = require('../middleware/auth');

router.post('/', jobAppController.createApplication);
router.get('/', authMiddleware, jobAppController.getApplications);
router.put('/:id/status', authMiddleware, jobAppController.updateStatus);

module.exports = router;
